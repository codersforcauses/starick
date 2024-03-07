import { List } from "../Services/list";

import ServicesSection from "../Services/services-section";
import SubSection from "../Services/subsection";

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
        <button
          onClick={() => (window.location.href = "/frequently-asked-questions")}
          style={{
            color: "black",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer"
          }}
        >
          Frequently Asked Questions
          <span
            style={{
              display: "inline-block",
              marginLeft: "5px",
              width: "10px",
              height: "10px",
              backgroundColor: "green",
              borderRadius: "50%"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              fill="white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M18 16.08V5.92L10.94 12 18 16.08zM6 6l6 4.5L6 15V6z" />
            </svg>
          </span>
        </button>
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
