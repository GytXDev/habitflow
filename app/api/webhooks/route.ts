import { Webhook } from "svix";
import { headers } from "next/headers";
import connectToDb from "@/app/lib/connect_to_db";
import User from "@/app/models/user_schema";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env");
  }

  // Récupérer les headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Récupérer le body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Créer une nouvelle instance Svix avec le secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: any;

  // Vérifier le payload avec les headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as any;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Se connecter à la base de données
  await connectToDb();

  // Gérer l'événement
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses } = evt.data;

    try {
      // Créer l'utilisateur dans la base de données
      await User.create({
        clerkUserId: id,
        emailAddress: email_addresses[0].email_address,
      });

      console.log(`User created: ${id}`);
      return new Response("User created successfully", { status: 200 });
    } catch (error) {
      console.error("Error creating user:", error);
      return new Response("Error creating user", { status: 500 });
    }
  }

  return new Response("", { status: 200 });
}
