import SubSection from "../Services/subsection";
import ServicesSection from "../Services/services-section";
import { List } from "../Services/list";
import Button from "../button";

export default function RecognisingTheSignsSection() {
  const domesticViolenceSignsExample = (
    <List
      items={[
        "Do you have to be careful around this person because of their anger, violence or emotional abuse?",
        "Are you pressured by this person into sexual activities you are not comfortable with?",
        "Are you are too scared to disagree with this person?",
        "Is this person always checking up on what you are doing?",
        "Does this person say you are stupid or useless?",
        "Does this person threaten you, your family or your pets?",
        "Does this person stop you going out or doing what you want to do?",
        "Are you unable to spend time with family or friends because this person won’t let you?",
        "Do you make excuses for this person’s violent behaviour?"
      ]}
      style="list-disc"
    />
  );
  const subBody = (
    <div className="pl-3">
      <p className="text-xl font-semibold">
        Is there someone in your life who is behaving in some or all of the
        following ways?
      </p>
      <br />
      {domesticViolenceSignsExample}
      <br />
      <p>
        If so, you may want to seek assistance or contact a Starick worker to
        discuss your situation
      </p>
      <br />
    </div>
  );

  const body = (
    <>
      <SubSection
        sectionBody={subBody}
        iconPath="icons/exclamation.svg"
        iconOnRight={false}
      />
      <br />
      <div className="flex justify-center">
        <Button
          text={"Frequently Asked Questions"}
          link={"/frequently-asked-questions"}
          textColour="starick-black"
          arrowColour="starick-white"
          arrowBackgroundColor="starick-green"
        />
      </div>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="Recognising the signs"
      textOnLeft={true}
      circlesPlacement="bl"
    />
  );
}
