import { faCode, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

function HabitudesContainerTop() {
  return (
    <div className="p-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-lg font-bold">Samedi</h2>
          <span className="font-light text-[12px]">17 Décembre 2025</span>
        </div>
        {/*  */}
        <div className="flex gap-1 ml-4">
          <div className="text-default-color cursor-pointer transition-colors duration-300 hover:text-[var(--hover-color)]">
            <ArrowCircleLeftOutlinedIcon />
          </div>
          <div className="text-default-color cursor-pointer transition-colors duration-300 hover:text-[var(--hover-color)]">
            <ArrowCircleRightOutlinedIcon />
          </div>
        </div>
        {/*  */}
        <button className="flex gap-2 bg-default-color text-white p-3 items-center rounded-md text-sm">
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter une habitude</span>
        </button>
      </div>
    </div>
  );
}

export default HabitudesContainerTop;