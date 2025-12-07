import React from "react";
import AppLogo from "./AppLogo";
import MenuSelection from "./MenuSelection";
import LogoutSection from "./LogoutSection";

function SideBar() {
  return (
    <div className="border-r border-gray-200 h-screen p-10 flex flex-col gap-20">
      <AppLogo href="/dashboard" />
      <MenuSelection />
      <LogoutSection />
    </div>
  );
}

export default SideBar;
