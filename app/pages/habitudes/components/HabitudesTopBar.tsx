import HabitutesSearchBar from "./HabitutesSearchBar";

function HabitudesTopBar() {
  return (
    <div className="bg-white p-5 rounded-md flex justify-between">
      <div className="flex flex-col">
        <span className="text-xl">
          <span className="font-bold">Hi There</span>
          <span className="font-light"> GytX</span>
        </span>
        <span className="font-light text-[12px] text-gray-400">
          Welcome back!
        </span>
      </div>
      <div className="w-[60%] flex justify-end">
        <HabitutesSearchBar />
      </div>
    </div>
  );
}

export default HabitudesTopBar;
