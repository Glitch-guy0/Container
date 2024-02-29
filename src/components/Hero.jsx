import Card from "./Card";

export default function Hero() {
  return (
    <>
      <div
        id="drawer"
        className="h-full w-80 sm:w-1/3 dark:bg-zinc-900 bg-gray-400"
      >
        {/* Drawer side */}
        <div id="dynamic_gap" className=" p-2 sm:p-[1vw]">
          <div id="alignCards" className="flex flex-wrap justify-center sm:justify-evenly gap-3">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div
        id="content"
        className=" h-full w-dvw sm:w-2/3 dark:bg-zinc-800 bg-gray-200"
      >
        {/* Content section */}
        <div id="dynamic_gap" className=" p-2 sm:p-[1.5vw]"></div>
      </div>
    </>
  );
}
