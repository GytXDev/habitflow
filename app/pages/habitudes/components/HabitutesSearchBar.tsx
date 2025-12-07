import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HabitutesSearchBar() {
  return (
    <div className="w-[75%]">
      <div className="flex gap-3 items-center p-3 rounded-3xl bg-slate-50">
        <FontAwesomeIcon
          height={20}
          width={20}
          icon={faSearch}
          className="text-gray-300"
        />
        <input
          type="text"
          placeholder="Rechercher..."
          className={`outline-none text-[14px] font-light bg-slate-50 w-full`}
        />
      </div>
    </div>
  );
}

export default HabitutesSearchBar;
