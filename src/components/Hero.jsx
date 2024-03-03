
import ContainerList from "./ContainerList";
import ImageList from "./ImageList";
import Overlay from "./Overlay";

export default function Hero() {
  return (
    <>
    <Overlay />
      <div
        id="drawer"
        className="h-full w-80 sm:w-1/3 overflow-y-auto no-scrollbar hover:scrollbar dark:bg-zinc-900 scroll-smooth bg-gray-300"
      >
        {/* Drawer side */}
        <div id="dynamic_gap" className=" p-4">
          <ImageList />
        </div>
      </div>
      <div
        id="content"
        className=" h-full w-dvw sm:w-2/3 dark:bg-zinc-800 
        overflow-y-auto scrollbar scroll-smooth
        bg-gray-200"
      >
        {/* Content section */}
        <div id="dynamic_gap" className=" p-2 sm:p-[1.5vw]">
          <ContainerList />
        </div>
      </div>
    </>
  );
}
