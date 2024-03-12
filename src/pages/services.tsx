import PageHeader from "@/components/page-header";
import PageSummary from "@/components/page-summary";
import Button from "@/components/button";

export default function OurServices() {
  const servicesSummaries = [
    {
      title: "Refuges",
      text: "Starick's two refuges, Mary Smith Refuge and Starick House, offer short term crisis accommodation for women and children who need a safe place to stay where they are supported and offered access to free professional services to help them escape the violence and make plans for their future.",
      imagePath: "/stories/refuges.png",
      imageAlt: "Refuges"
    },
    {
      title: "Counselling Services",
      text: "Starick recognises that counselling is an important part of the recovery process both during and after experiencing family and domestic violence. We also recognise that counselling for children affected by family and domestic violence is equally important, and helps break the cycle of violence.",
      imagePath: "/stories/counselling.png",
      imageAlt: "Refuges"
    },
    {
      title: "Transitional Housing",
      text: "Starick’s Housing of Women in the Community (HOWIC) program provides transitional medium to long term housing in the south-east metropolitan area for women and children who are escaping family and domestic violence and who would otherwise have difficulty securing safe, affordable housing.",
      imagePath: "/stories/traditional.png",
      imageAlt: "Traditional"
    },
    {
      title: "Support in Police Stations",
      text: "Our domestic violence advocates are based at local police stations and offer an advocacy service, safety planning and case management with court support.",
      imagePath: "/stories/police.png",
      imageAlt: "Police"
    },
    {
      title: "Safe at Home Program",
      text: "Starick’s Safe at Home program is designed to help women and children experiencing domestic or family violence to stay safely in their homes after separation from their abuser.",
      imagePath: "/stories/home.png",
      imageAlt: "Safe at home"
    },
    {
      title: "WA Respectful Relationships Teaching Support Program",
      text: "As part of our commitment to preventing violence and building safer communities, Starick is delivering the Western Australian Respectful Relationships Teaching Support Program (WARRTSP) to primary and secondary public schools across Western Australia.",
      imagePath: "/stories/respectful.png",
      imageAlt: "respectful relationships"
    },
    {
      title: "Our Work with Children and Young People",
      text: "Starick is committed to the safety and wellbeing of children and young people and to creating and maintaining a child safe organisation that creates a culture, strategies and actions to promote children and young people's wellbeing and protect them from harm.",
      imagePath: "/stories/children.png",
      imageAlt: "Work with children"
    },
    {
      title: "Workplace Awareness",
      text: "Starick encourages all employers to be aware of their obligations due to the impact of family and domestic violence (FDV) on the workplace. Starick provides guidance for HR managers, team leads and employees about FDV, as well as resources for leaning and references to low cost workplace education and training.",
      imagePath: "/stories/workplace.png",
      imageAlt: "Workplace awareness"
    },
    {
      title: "Health and Wellbeing",
      text: "Funded by donations, fundraising events and grants, Starick offers a range of services and programs that improve the lives of the women and children using our service. These non-core services often relate to the emotional wellness of the families we support.",
      imagePath: "/stories/health.png",
      imageAlt: "Health and wellbeing"
    },
    {
      title:
        "Thriving Through Connection. Supporting Young People Aged 11 - 17 years",
      text: "Thriving Through Connection (TTC) supports young people aged 11 to 17 years who are impacted by family and domestic violence.",
      imagePath: "/stories/11.png",
      imageAlt: "Supporting young people aged 11-17"
    }
  ];

  const subtitleElement = (
    <>
      <div>
        <p>
          Starick is a charity supporting women and children escaping domestic
          and family violence, predominantly in Perth&apos;s south-eastern
          metropolitan region.
        </p>
        <br />
        <p>
          Our core services are funded by the Department of Communities and
          Lotterywest:
        </p>
      </div>
    </>
  );
  return (
    <>
      <PageHeader titleText="Our Services" subtitleElement={subtitleElement} />
      {servicesSummaries.map(({ title, text, imageAlt, imagePath }, index) => {
        return (
          <>
            {index % 5 == 0 ? (
              <SummaryHeader
                text={index === 0 ? "Core Services" : "Other Services"}
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
