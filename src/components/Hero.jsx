import Card from "./Card";

export default function Hero() {
  return (
    <>
      <div
        id="drawer"
        className="h-full w-80 sm:w-1/3 dark:bg-zinc-900 bg-gray-400"
      >
        {/* Drawer side */}
        <div id="dynamic_gap" className=" p-4">
          <h2
            className="p-2 font-bold text-xl text-center"
          >OS Images</h2>
          <div
            id="alignCards"
            className="grid grid-cols-1 gap-2 md:grid-cols-2
              
          
              // remove this
             bg-green-300"
          >
            <Card />
            <Card />
            <Card />
          </div>
          <h2
            className="p-2 font-bold text-xl text-center mt-9"
          >Application Images</h2>
          <div
            id="alignCards"
            className="grid grid-cols-1 gap-2 md:grid-cols-2
              
          
              // remove this
             bg-green-300"
          >
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
