import Image from "next/image";

import { List } from "@/components/Services/list";

export default function ResourcesAndToolkits({data}) {
  const title = data[0].acf.title;
  const paragraph = data[0].acf.paragraph;
  const bulletpoint1 = data[0].acf.bulletpoint1;
  const bulletpoint2 = data[0].acf.bulletpoint2;
  const paragraph1 = data[0].acf.paragraph1;
  const paragraph2 = data[0].acf.paragraph2;

  const engimage = data[0].acf.covidenglish;
  const chineseimage = data[0].acf.covidchinese;
  const arabicimage = data[0].acf.covidarabic;
  const farsiimage = data[0].acf.covidfarsi;
  console.log(engimage);

  const body = (
    <>
      <div className="flex justify-center bg-starick-white px-6 py-2 md:px-32">
        <div className="w-fit">
          <br />
          <p>
          {paragraph}
          </p> 
          <br />
          <p>{paragraph1}</p>
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
      imgsrc: engimage
    },
    {
      linkhref:
        "https://www.starick.org.au/wp-content/uploads/COVID-womens-resource-Chinese-Simplified.pdf",
      imgsrc: chineseimage
    },
    {
      linkhref:
        "https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource-ARABIC.pdf",
      imgsrc: arabicimage
    },
    {
      linkhref:
        "https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-booklet-FARSI.pdf",
      imgsrc: farsiimage
    }
  ];

  return (
    <>
      <div>
        <Image
          className="h-[500px] w-full object-cover"
          src="/images/Parents-with-kids-graphic.png"
          alt=""
          height="500"
          width="1000"
        />
        <div className="relative -mt-20 mb-6 w-fit rounded-r-full bg-white px-10">
          <p className="p-2 text-4xl font-bold text-starick-brown">
            {title}
          </p>
        </div>
      </div>
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

export async function getServerSideProps(context){
  const res = await fetch('http://localhost/wp-json/wp/v2/covid19kit?&acf_format=standard&fields=id,title,acf')
  const data = await res.json()
  // console.log(data[0].title)
  if(!data){
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data,
    },
  }
}