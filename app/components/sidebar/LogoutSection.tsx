import React from "react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SignOutButton } from "@clerk/nextjs";

function LogoutSection() {
  const logOutObject = {
    name: "Déconnexion",
    icon: faRightFromBracket,
  };
  return (
    <SignOutButton>
      <div className="group flex items-center gap-2 ml-8 pt-2 mt-28 rounded-md p-2 cursor-pointer">
        <FontAwesomeIcon
          className="text-gray-600 group-hover:text-red-500 transition-colors duration-300"
          width={20}
          height={20}
          icon={logOutObject.icon}
        />
        <span className="text-gray-600 group-hover:text-red-500 transition-colors duration-300 font-medium">
          Déconnexion
        </span>
      </div>
    </SignOutButton>
  );
}

export default LogoutSection;
