import React from "react";
import Link from "next/link";

interface AppLogoProps {
  href?: string;
  logoSize?: string;
  textSize?: string;
}

function AppLogo({
  href = "/dashboard",
  logoSize = "w-10 h-10 sm:w-12 sm:h-12",
  textSize = "text-lg sm:text-xl md:text-2xl",
}: AppLogoProps) {
  return (
    <Link href={href} className="flex items-center gap-2 sm:gap-3">
      {/* logo de l'application */}
      <div className="p-1 sm:p-2 rounded-md"> </div>
      <div className={textSize}>
        <span className="font-bold text-default-color">Habit</span>
        <span className="font-light">Flow</span>
      </div>
    </Link>
  );
}

export default AppLogo;
