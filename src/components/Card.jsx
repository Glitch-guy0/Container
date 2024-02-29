export default function Card() {
  return (
    <>
      <div
        id="card"
        className="w-full h-32 rounded-lg overflow-hidden bg-cover text-center"
        style={{ backgroundImage: `url(https://picsum.photos/id/237/200/300)` }}
      >
        <button id="content" className="bg-black w-full h-full bg-opacity-50 p-3 active:bg-red-300 relative">
          <h2 className="primary text-3xl font-bold">Title</h2>
          <div
            className="absolute bottom-1 right-2 secondary p-1 px-3 rounded-full text-sm bg-opacity-80 bg-zinc-900"
          >32</div>
        </button>
      </div>
    </>
  );
}
