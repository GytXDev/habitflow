"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import SideBar from "@/app/components/sidebar/SideBar";
import { useGlobalContext } from "@/app/ContextApi";
import Habitudes from "@/app/pages/habitudes/Habitudes";
import Statistiques from "@/app/pages/statistiques/Statistiques";
import Domaines from "@/app/pages/domaines/Domaines";

function Dashboard() {
  const { user } = useUser();
  const { menuItemsObject } = useGlobalContext();
  const { menuItems } = menuItemsObject;

  const selectedMenuItem = menuItems.find((item) => item.isSelected);

  const renderContent = () => {
    if (!selectedMenuItem) return <Habitudes />;

    switch (selectedMenuItem.name) {
      case "Habitudes":
        return <Habitudes />;
      case "Statistiques":
        return <Statistiques />;
      case "Domaines":
        return <Domaines />;
      default:
        return <Habitudes />;
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
