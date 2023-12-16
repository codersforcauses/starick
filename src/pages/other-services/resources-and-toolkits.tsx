// all are page links except for covid kit for children

export default function ResourcesAndToolkits() {
  return (
    <>
      <div>
          {/* Header */}
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

      {/* Images */}
      {/* Child Safe Organisation Resources */}
      <br></br>
      <br></br>
      <div className="-mx-2 flex flex-wrap justify-center bg-[--starick-white]">
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource11.7.22.pdf">
            <img
              className="block h-auto w-full"
              src="/images/child-safe-organisation-resources.png"
              alt=""
            ></img>
          </a>
        </div>
        {/* Children's Participation and Engagement */}
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/COVID-womens-resource-Chinese-Simplified.pdf">
            <img
              className="block h-auto w-full"
              src="/images/children's-participation-and-engagement.png"
              alt=""
            ></img>
          </a>
        </div>
      </div>

      <br></br>
      <div className="-mx-2 flex flex-wrap justify-center bg-[--starick-white]">
        {/* Covid-19 Kit for Children & Young People        - pdf*/}
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource-ARABIC.pdf">
            <img
              className="block h-auto w-full"
              src="/images/covid-19-kit-for-children-&-young-people.png"
              alt=""
            ></img>
          </a>
        </div>
        {/* Covid-19 Kit for Parents */}
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-booklet-FARSI.pdf">
            <img
              className="block h-auto w-full"
              src="/images/covid-19-kit-for-parents.png"
              alt=""
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}
