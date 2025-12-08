import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { defaultColor } from "@/app/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function HabitudesCompleted() {
  return (
    <div className="bg-white mt-7 p-8 rounded-md">
      <span className="font-bold text-lg mb-2">Habitudes terminées</span>
      <div className="mt-4 opacity-50">
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
}

export default HabitudesCompleted;

function HabitCard() {
  return (
    <div className="flex p-3 items-center justify-between">
      <Checkbox
        checked={true}
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
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: defaultColor.default,
                  color: defaultColor.white,
                  width: "40px",
                  height: "40px",
                }}
              >
                <FontAwesomeIcon icon={faCode} />
              </div>
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
