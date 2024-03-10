import { List } from "../Services/list";
import ServicesSection from "../Services/services-section";
import SubSection from "../Services/subsection";

export default function YourRightsAsAHumanBeingSection() {
  const humanBeingRightsExample = (
    <List
      items={[
        "Being safe all the time",
        "Being treated with respect",
        "Being safe from abuse",
        "Being able to receive support and friendship",
        "Being treated as an equal",
        "Having control of your own finances",
        "Being free to leave a place if you are feeling unsafe",
        "Being able to say what you think and feel",
        "Being able to protect yourself and your children",
        "Being able to seek legal assistance",
        "Being able to contact community groups",
        "Being able to choose your own religion"
      ]}
      style="list-disc"
    />
  );
  const subBody = (
    <div className="pl-3">
      <p className="text-xl font-semibold">
        Every human being has the right to their own life. This includes:
      </p>
      <br />
      {humanBeingRightsExample}

      <br />
    </div>
  );

  const body = (
    <>
      <SubSection
        sectionBody={subBody}
        iconPath="icons/health.svg"
        iconOnRight={false}
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="Your rights as a human being"
      textOnLeft={false}
      circlesPlacement="br"
    />
  );
}
