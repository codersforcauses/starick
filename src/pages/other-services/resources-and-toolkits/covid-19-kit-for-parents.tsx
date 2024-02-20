import Image from "next/image";

import { List } from "@/components/Services/list";
import PageHeader from "@/components/page-header";

export default function ResourcesAndToolkits() {
  const body = (
    <>
      <div className="flex justify-center bg-starick-white px-6 py-2 md:px-32">
        <div className="w-fit">
          <br />
          <p>
            Starick’s COVID-19 resource booklets were developed in consultation
            with children, young people and families living in refuges or
            receiving support from FDV services.{" "}
          </p>
          <br />
          <p>The booklet provides</p>
          <List
            items={[
              "families and organisations with practical tips, activities and links to resources that are focused on women and children and young people’s health and wellbeing.",
              "offers guidance, support and information for women whose families are in isolation."
            ]}
            style="list-disc"
          />
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

  const pdfs: { linkhref: string; imgsrc: string }[] = [
    {
      linkhref:
        "https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource11.7.22.pdf",
      imgsrc: "/images/covid-19-pdf-English.png"
    },
    {
      linkhref:
        "https://www.starick.org.au/wp-content/uploads/COVID-womens-resource-Chinese-Simplified.pdf",
      imgsrc: "/images/covid-19-pdf-Chinese.png"
    },
    {
      linkhref:
        "https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource-ARABIC.pdf",
      imgsrc: "/images/covid-19-pdf-Arabic.png"
    },
    {
      linkhref:
        "https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-booklet-FARSI.pdf",
      imgsrc: "/images/covid-19-pdf-Farsi.png"
    }
  ];

  return (
    <>
      <PageHeader titleText="COVID-19 Kit for Parents" />
      {body}

      <div className="-mx-2 flex flex-wrap justify-center bg-starick-white">
        {pdfs.map((pdf) => {
          return (
            <div className="w-1/2 px-8 md:w-1/3 lg:w-1/6" key={pdf.linkhref}>
              <a href={pdf.linkhref}>
                <Image
                  className="block h-auto w-full"
                  src={pdf.imgsrc}
                  alt=""
                  height="300"
                  width="300"
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
