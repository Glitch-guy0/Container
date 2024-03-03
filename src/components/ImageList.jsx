import Card from "./Card";

export default function ImageList(){
  return(
    <>
      <h2
            className="p-2 font-bold text-xl text-center secondary"
          >OS Images</h2>
          <div
            id="alignCards"
            className="grid grid-cols-1 gap-2 md:grid-cols-2"
          >
            <Card />
            <Card />
            <Card />
          </div>
          <h2
            className="p-2 font-bold text-xl text-center mt-9 mb-4 secondary"
          >Application Images</h2>
          <div
            id="alignCards"
            className="grid grid-cols-1 gap-2 md:grid-cols-2"
          >
            <Card />
            <Card />
            <Card />
          </div>
    </>
  )
}