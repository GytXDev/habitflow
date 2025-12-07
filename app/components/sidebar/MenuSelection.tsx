import React from "react";
import { useGlobalContext } from "@/app/ContextApi";
import { menuItemsType } from "@/app/types/menu_items_type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SingleMenuItem({
  menuItem,
  index,
}: {
  menuItem: menuItemsType;
  index: number;
}) {
  const { menuItemsObject } = useGlobalContext();
  const { menuItems, setMenuItems } = menuItemsObject;

  const handleClick = () => {
    setMenuItems((prevItems) =>
      prevItems.map((item, idx) => ({
        ...item,
        isSelected: idx === index,
      }))
    );
  };

  return (
    <div
      onClick={handleClick}
      className={`group flex gap-3 items-center p-2 mb-3 ml-8 cursor-pointer rounded-md w-44 transition-all duration-300 ease-in-out ${
        menuItem.isSelected ? "bg-default text-white" : "text-gray-600"
      }`}
    >
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-md transition-all duration-300 ease-in-out ${
          menuItem.isSelected ? "icon-recessed-selected" : "border-transparent"
        }`}
      >
        <FontAwesomeIcon
          className={`text-sm transition-colors duration-300 ${
            menuItem.isSelected
              ? "text-white"
              : "text-gray-600 group-hover:text-[#4a90e2]"
          }`}
          icon={menuItem.icon}
        />
      </div>
      <span
        className={`transition-colors duration-300 ${
          menuItem.isSelected
            ? "text-white"
            : "text-gray-600 group-hover:text-[#4a90e2]"
        }`}
      >
        {menuItem.name}
      </span>
    </div>
  );
}

function MenuSelection() {
  const { menuItemsObject } = useGlobalContext();
  const { menuItems } = menuItemsObject;
  return (
    <div>
      {menuItems.map((menuItem: menuItemsType, menuItemIndex: number) => (
        <SingleMenuItem
          key={menuItemIndex}
          menuItem={menuItem}
          index={menuItemIndex}
        />
      ))}
    </div>
  );
}

export default MenuSelection;
