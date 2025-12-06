"use client";

import React from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";

function Dashboard() {
  const { user } = useUser();
  return (
    <div>
      <h1>
        Bonjour {user?.lastName} <SignOutButton>SignOut</SignOutButton>
      </h1>
    </div>
  );
}

export default Dashboard;
