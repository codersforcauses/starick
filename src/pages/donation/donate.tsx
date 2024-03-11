import PageHeader from "@/components/page-header";
import PageSummary from "@/components/page-summary";
import Button from "@/components/button";
import DonationStripe from "./donation-stripe";

export default function OurServices() {
  const donateSummaries = [
    {
      title: "Help Us Make a Change Today",
      text: "Donating goods to Starick helps support women and children escaping domestic violence",
      imagePath: "/images/home/_MG_9460.jpg",
      imageAlt: "Starick"
    },
  ];

  return (
    <>
      {donateSummaries.map(({ title, text, imageAlt, imagePath }, index) => {
        return (
          <>
            <PageSummary
              key={index}
              content={
                <Summary
                  title={title}
                  text={text}
                  link="/paypal"
                  textColour="starick-black"
                  arrowBackgroundColor="starick-green"
                  arrowColour={index % 2 ? "starick-white" : "starick-black"}
                />
              }
              backgroundColour="starick-olive"
              contentOnLeft={true}
              imageAlt={imageAlt}
              imagePath={imagePath}
            />
          </>
        );
      })}
    </>
  );
}

interface SummaryProps {
  title: string;
  text: string;
  link: string;
  textColour: string;
  arrowBackgroundColor: string;
  arrowColour: string;
}

function SummaryHeader({ text }: { text: string }) {
  return (
    <div className="flex h-24 w-full flex-row items-center justify-center bg-starick-brown">
      <p className="text-xl font-bold text-starick-white">{text}</p>
    </div>
  );
}

function Summary({
  title,
  text,
  link,
  textColour,
  arrowBackgroundColor,
  arrowColour
}: SummaryProps) {
  return (
    <div className="flex flex-col items-center">
      <p className={`w-5/6 text-center text-xl font-semibold text-${textColour}`}>
        {title}
      </p>
      <br />
      <p className={`w-5/6 text-center text-${textColour}`}>{text}</p>
      <p className="w-5/6 p-5 text-center text-xl font-bold">Donate Now!</p>
      <br />
      <DonationStripe />
    </div>
  );
}
