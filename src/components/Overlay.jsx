import { overlay } from "../Store";
export default function Overlay() {

  function getPositon(){
    
  }
  var out = overlay ? (
    <>
      <div
        id="overlay"
        className="absolute h-full w-full bg-black bg-opacity-30 z-10"
      ></div>
    </>
  ) : (
    <></>
  );
  return out;
}
