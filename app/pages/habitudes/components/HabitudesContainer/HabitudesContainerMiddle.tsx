import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { defaultColor } from "@/app/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function HabitudesContainerMiddle() {
  return (
    <div className="p-3">
      <HabitCard />
    </div>
  );
}

function HabitCard() {
  return (
    // Element pour afficher une habitude
    <div className="flex p-3 items-center justify-between">
      {/* 1. checkbox */}
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        sx={{
          color: defaultColor.default,
          "&.Mui-checked": {
            color: defaultColor.default,
          },
        }}
      />
      <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50">
        <div className="w-full">
          {/* Div pour  afficher l'icon et le titre de la habitude */}
          <div className="flex gap-2 justify-between w-full">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className="p-3 rounded-full w-4 h-4"
                style={{
                  backgroundColor: defaultColor.default,
                  color: defaultColor.white,
                }}
                height={20}
                width={20}
                icon={faCode}
              />
              <span className="">Coder une application</span>
            </div>
          </div>
          {/* Div pour afficher le domaine */}
          <div className="flex gap-2 mt-2">
            <div
              style={{ backgroundColor: defaultColor[100] }}
              className="p-1 text-[12px] rounded-md px-2"
            >
              <span style={{ color: defaultColor.text }}>Domaine1</span>
            </div>
            <div
              style={{ backgroundColor: defaultColor[100] }}
              className="p-1 text-[12px] rounded-md px-2"
            >
              <span style={{ color: defaultColor.text }}>Domaine2</span>
            </div>
          </div>
        </div>
        {/* Div pour les trois points */}
        <div className="w-10 flex items-center justify-center">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
