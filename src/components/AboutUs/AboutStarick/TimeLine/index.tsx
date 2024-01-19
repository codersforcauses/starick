// alt: could do the line as like a border on one side, but then don't know how to do the circle

export default function Timeline() {
  return (
    <div className="container bg-starick-white">
      <div className="mx-auto flex grid-cols-9 flex-col p-2 text-starick-black md:grid md:px-32">
        {/* left */}
        <div className="flex flex-row-reverse md:contents">
          {/* text */}
          <div className="col-start-1 col-end-5 my-4 ml-auto">
            <h3 className="mb-1 text-lg font-semibold">Lorem ipsum</h3>
            <p className="text-justify leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          {/* line */}
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-5 items-center justify-center">
              <div className="h-full w-1 bg-starick-green"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-5 w-5 rounded-full bg-starick-orange"></div>
          </div>
        </div>

        {/* right */}
        <div className="flex md:contents">
          {/* line */}
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-5 items-center justify-center">
              <div className="h-full w-1 bg-starick-green"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-5 w-5 rounded-full bg-starick-orange"></div>
          </div>
          {/* text */}
          <div className="col-start-6 col-end-10 my-4 mr-auto">
            <h3 className="mb-1 text-lg font-semibold">Lorem ipsum</h3>
            <p className="text-justify leading-tight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              facilis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
