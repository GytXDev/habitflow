"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import {
  faList,
  faChartBar,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

import { GlobalContextType } from "@/app/types/global_context_type";
import { menuItemsType } from "@/app/types/menu_items_type";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [menuItems, setMenuItems] = useState<menuItemsType[]>([
    { name: "Habitudes", isSelected: true, icon: faList },
    { name: "Statistiques", isSelected: false, icon: faChartBar },
    { name: "Domaines", isSelected: false, icon: faFolder },
  ]);

  return (
    <GlobalContext.Provider
      value={{ menuItemsObject: { menuItems, setMenuItems } }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
