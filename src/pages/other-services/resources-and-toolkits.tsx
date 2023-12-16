// all are page links except for covid kit for children

export default function ResourcesAndToolkits() {
  return (
    <>
      <div>
        <img src="/images/starick-image1.jpg" className="w-full" alt=""></img>
        <div className="relative -mt-36 mb-6 w-fit rounded-r-full bg-white px-10">
          <p className="p-2 text-4xl font-bold text-[--starick-brown]">
            Work with Children and Young People
          </p>
          <p className="p-2 text-center text-3xl font-bold text-[--starick-brown]">
            Resources and Toolkits
          </p>
        </div>
      </div>
      {/* Child Safe Organisation Resources */}
      <div className="-mx-2 flex flex-wrap justify-center bg-[--starick-white]">
        <div className="w-1/2 px-8 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource11.7.22.pdf">
            <img
              className="block h-auto w-full"
              src="/images/covid-19-pdf-English.png"
              alt=""
            ></img>
          </a>
        </div>
        {/* Children's Participation and Engagement */}
        <div className="w-1/2 px-8 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/COVID-womens-resource-Chinese-Simplified.pdf">
            <img
              className="block h-auto w-full"
              src="/images/covid-19-pdf-Chinese.png"
              alt=""
            ></img>
          </a>
        </div>
        {/* Covid-19 Kit for Children & Young People        - pdf*/}
        <div className="w-1/2 px-8 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource-ARABIC.pdf">
            <img
              className="block h-auto w-full"
              src="/images/covid-19-pdf-Arabic.png"
              alt=""
            ></img>
          </a>
        </div>
        {/* Covid-19 Kit for Parents */}
        <div className="w-1/2 px-8 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-booklet-FARSI.pdf">
            <img
              className="block h-auto w-full"
              src="/images/covid-19-pdf-Farsi.png"
              alt=""
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}
