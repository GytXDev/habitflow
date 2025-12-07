import { Dispatch, SetStateAction } from "react";
import { menuItemsType } from "./menu_items_type";

export interface GlobalContextType {
  menuItemsObject: {
    menuItems: menuItemsType[];
    setMenuItems: Dispatch<SetStateAction<menuItemsType[]>>;
  };
}
