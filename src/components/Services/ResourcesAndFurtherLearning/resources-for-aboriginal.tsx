import ServicesSection from "../services-section";
import SubSection from "../subsection";

export default function ResourcesForAboriginal() {
  const subbody = (
    <>
      <ol className="ml-4 list-outside list-decimal">
        <li>
          <a
            href="https://www.respect.gov.au/wp-content/uploads/2021/03/aboriginal-and-torres-strait-islander-speak-booklet_0.pdf"
            className="my-link"
          >
            Speak up booklet
          </a>{" "}
          – a resource to help encourage and support people to speak up about
          disrespectful attitudes by having conversations about respectful
          relationships with the young people in their community.
        </li>

        <li>
          <a
            href="https://www.respect.gov.au/wp-content/uploads/2016/11/atsi_storybook.pdf"
            className="my-link"
          >
            Respect starts with us
          </a>{" "}
          – a storybook to help model how to address disrespectful behaviour and
          start the conversation about showing respect to women and girls.{" "}
        </li>

        <li>
          <a
            href="https://www.respect.gov.au/wp-content/uploads/2016/06/atsi_conversation_guide.pdf"
            className="my-link"
          >
            Respecting women and girls:
          </a>{" "}
          Talking with our young people – a conversation guide to talk with
          young people about respect. Short guides include:{" "}
          <a
            href="https://www.respect.gov.au/wp-content/uploads/2018/09/indigenous-short-guide-one-be-ready-talk.pdf"
            className="my-link"
          >
            Be ready to talk
          </a>
          ,{" "}
          <a
            href="https://www.respect.gov.au/wp-content/uploads/2018/10/starting-talk.pdf"
            className="my-link"
          >
            Starting the talk
          </a>
          , and{" "}
          <a
            href="https://www.respect.gov.au/wp-content/uploads/2018/10/keep-yarning.pdf"
            className="my-link"
          >
            Keep yarning
          </a>
          .
        </li>

        <li>
          <a
            href="https://www.respect.gov.au/wp-content/uploads/2018/07/atsi_excuse_interpreter.pdf"
            className="my-link"
          >
            Understanding our excuses
          </a>{" "}
          – a guide to learn about ways we overlook disrespectful behaviour
          towards women and girls without knowing it.
        </li>

        <li>
          <a
            href="https://www.respect.gov.au/wp-content/uploads/2016/06/atsi_the_respect_checklist.pdf"
            className="my-link"
          >
            The respect checklist
          </a>{" "}
          – a practical checklist to help parents and family members identify
          some aspects of respect to talk about with children.
        </li>
      </ol>
    </>
  );
  const body = (
    <SubSection
      iconPath="/icons/health.svg"
      sectionBody={subbody}
      iconOnRight={false}
    />
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="Resources for Aboriginal 
      and Torres Strait Islander People"
      textOnLeft={false}
    />
  );
}

/* 
 
 Speak up booklet – a resource to help encourage and support people to speak up about disrespectful attitudes by having conversations about respectful relationships with the young people in their community.
Respect starts with us – a storybook to help model how to address disrespectful behaviour and start the conversation about showing respect to women and girls.
Respecting women and girls: 

 

*/
