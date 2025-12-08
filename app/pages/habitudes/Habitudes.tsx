"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HabitudeRightSideBar from "./components/HabitudesRightSideBar";
import HabitudesTopBar from "./components/HabitudesTopBar";
import HabitudesContainer from "./components/HabitudesContainer";
import HabitudesCompleted from "./components/HabitudesCompleted";

function Habitudes() {
  return (
    <div className="w-full flex bg-gray-100 h-full">
      <div className="w-[80%] m-5">
        <HabitudesTopBar />
        <HabitudesContainer />
        <HabitudesCompleted/>
      </div>
          <HabitudeRightSideBar />
    </div>
  );
}



export default Habitudes;
