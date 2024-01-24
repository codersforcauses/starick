export default function Timeline() {
  return (
    <div className="container bg-starick-white">
      <div className="flex grid-cols-9 flex-col p-2 text-starick-black md:grid md:px-32">
        {/* left */}
        <div className="flex flex-row-reverse md:contents">
          {/* text */}
          <div className="col-start-2 col-end-5 my-4 ml-auto text-right">
            <h3 className="mb-2 inline-block rounded-lg bg-starick-orange px-2 py-1 text-lg font-semibold text-starick-white">
              1985
            </h3>
            <p className="leading-tight">Official opening of Starick House</p>
          </div>
          {/* line */}
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-24 items-center justify-center">
              <div className="h-full w-1 bg-starick-olive"></div>
              <div className="absolute top-6 h-4 w-4 rounded-full bg-starick-orange"></div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex md:contents">
          {/* line */}
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-24 items-center justify-center">
              <div className="h-full w-1 bg-starick-olive"></div>
              <div className="absolute top-6 h-4 w-4 rounded-full bg-starick-orange"></div>
            </div>
          </div>
          {/* text */}
          <div className="col-start-6 col-end-9 my-4 mr-auto text-left">
            <h3 className="mb-2 inline-block rounded-lg bg-starick-orange px-2 py-1 text-lg font-semibold text-starick-white">
              1987
            </h3>
            <p className="leading-tight">
              Joint production with Curtin University of 30 minutes video to
              increase awareness of domestic violence (DV) in the community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
