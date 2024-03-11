import PageHeader from "@/components/page-header";
import PageSummary from "@/components/page-summary";
import Button from "@/components/button";


interface PageLayoutProps {
  summary: {
    title: string;
    text: string;
    imagePath: string;
    imageAlt: string;
    titleBackground : string;
  }[];
}

export default function PageLayout({summary} : PageLayoutProps) {

  return (
    <>
      {summary.map(({ title, text, imageAlt, imagePath, titleBackground }, index) => {
        return (
          <>
            {index % 5 == 0 ? (
              <SummaryHeader
                title="All donations over $2 are tax deductible."
                text="Starick is registered as a charity with the Australian Charities and Not-for-profits Commission, ABN 56 721 993 085. "
                titleBackgroundColor={titleBackground}
              />
            ) : null}
            <PageSummary
              key={index}
              content={
                <Summary
                  title={title}
                  text={text}
                  link={`/${index < 5 ? "core" : "other"}-services#${title}`}
                  textColour={index % 2 ? "starick-black" : "starick-white"}
                  arrowBackgroundColor={
                    index % 2 ? "starick-green" : "starick-white"
                  }
                  arrowColour={index % 2 ? "starick-white" : "starick-black"}
                />
              }
              backgroundColour={index % 2 ? "starick-olive" : "starick-green"}
              contentOnLeft={index % 2 === 1}
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
  titlebackgroundColor : string;
  arrowBackgroundColor: string;
  arrowColour: string;
}

function SummaryHeader({ title, text, titleBackgroundColor}: { title:string, text: string, titleBackgroundColor :string}) {
  return (
    <div className={`flex h-36 w-full flex-col items-center justify-center bg-${titleBackgroundColor}`}>
      <p className="text-xl font-bold text-starick-white">{title}</p>
      <p className="text-base text-starick-white mt-5">{text}</p>
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
      <p className={`text-center text-xl font-semibold text-${textColour}`}>
        {title}
      </p>
      <br />
      <p className={`text-center text-${textColour}`}>{text}</p>
      <br />
      <Button
        text="More Info"
        link={link}
        arrowColour={arrowColour}
        textColour={textColour}
        arrowBackgroundColor={arrowBackgroundColor}
        fontsmall={true}
      />
    </div>
  );
}
