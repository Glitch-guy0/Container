export default function ContainerCard() {
  return (
    <>
      <div className="w-full h-40 bg-blue-400 rounded-xl relative overflow-hidden">
        {/* preview section */}
        {/* monitor screen section */}
        <iframe
          src="https://www.youtube.com/embed/9bZkp7qJ"
          frameborder="0"
          className="w-full h-full"
        ></iframe>
        <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-70 flex flex-col justify-center align-middle">
          {/* interaction section */}
          <div className="h-full w-full p-3">
            {/* title */}
            <h2 className="text-3xl primary font-semibold">Title</h2>
            <i className="ri-fullscreen-line ri-2x move-center"></i>
            {/* tag */}
              <div
              className="absolute bottom-1 right-2 secondary p-1 px-3 rounded-full text-sm bg-opacity-30 bg-zinc-900">
{/* display port number */}
:6901
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
