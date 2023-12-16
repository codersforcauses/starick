import Image from "next/image";

import { List } from "@/components/Services/list";

export default function ResourcesAndToolkits() {
  const covidBookletList = (
    <List
      items={[
        "families and organisations with practical tips, activities and links to resources that are focused on women and children and young people’s health and wellbeing.",
        "offers guidance, support and information for women whose families are in isolation."
      ]}
    />
  );

  const body = (
    <>
      <div className="flex justify-center bg-[--starick-white] px-6 py-2 md:px-32">
        <div className="w-fit">
          <br />
          <p>
            Starick’s COVID-19 resource booklets were developed in consultation
            with children, young people and families living in refuges or
            receiving support from FDV services.{" "}
          </p>
          <br />
          <p>The booklet provides</p>
          {covidBookletList}
          <br />
          <p>
            As we move into living with COVID-19, this booklet can be used more
            broadly to support families and children living in refuges and
            outreach services
          </p>
          <br />
          <p>
            The booklets provide direct links to online resources. Please make
            sure that supervision of children and young people online is age
            appropriate.
          </p>
          <br />
          <br />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div>
        <Image
          src="/images/Parents-with-kids-graphic.png"
          className="h-[500px] w-full object-cover"
          alt=""
        ></Image>
        <div className="relative -mt-20 mb-6 w-fit rounded-r-full bg-white px-10">
          <p className="p-2 text-4xl font-bold text-[--starick-brown]">
            COVID-19 Kit for Parents
          </p>
        </div>
      </div>
      {body}

      <div className="-mx-2 flex flex-wrap justify-center bg-[--starick-white]">
        <div className="w-1/2 px-8 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource11.7.22.pdf">
            <Image
              className="block h-auto w-full"
              src="/images/covid-19-pdf-English.png"
              alt=""
            ></Image>
          </a>
        </div>
        <div className="w-1/2 px-8 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/COVID-womens-resource-Chinese-Simplified.pdf">
            <Image
              className="block h-auto w-full"
              src="/images/covid-19-pdf-Chinese.png"
              alt=""
            ></Image>
          </a>
        </div>
        <div className="w-1/2 px-8 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource-ARABIC.pdf">
            <Image
              className="block h-auto w-full"
              src="/images/covid-19-pdf-Arabic.png"
              alt=""
            ></Image>
          </a>
        </div>
        <div className="w-1/2 px-8 md:w-1/3 lg:w-1/6">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-booklet-FARSI.pdf">
            <Image
              className="block h-auto w-full"
              src="/images/covid-19-pdf-Farsi.png"
              alt=""
            ></Image>
          </a>
        </div>
      </div>
    </>
  );
}
