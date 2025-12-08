import React from "react";
import HabitudesContainerTop from "./HabitudesContainer/HabitudesContainerTop";
import HabitudesContainerMiddle from "./HabitudesContainer/HabitudesContainerMiddle";
import HabitudesCompleted from "./HabitudesCompleted";

function HabitudesContainer() {
  return (
    <div className="mt-5 bg-white rounded-md p-5 flex flex-col gap-3">
      <HabitudesContainerTop />
      <HabitudesContainerMiddle />
    </div>
  );
}

export default HabitudesContainer;
