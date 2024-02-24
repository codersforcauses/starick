import ServicesSection from "../services-section";
import SubSection from "../subsection";

export default function ResourceForParents() {
  const subbody = (
    <>
      <ol className="ml-4 list-outside list-decimal">
        <li>
          <a href="https://www.respect.gov.au/" className="my-link">
            Respect.gov.au
          </a>
        </li>
        <li>
          <a
            href="https://www.respect.gov.au/resources/recognising-disrespect/"
            className="my-link"
          >
            The Excuse Interpreter
          </a>{" "}
          – a resource to help us discover the hidden meanings of common
          expressions that can excuse disrespectful behaviour towards girls{" "}
        </li>
        <li>
          <a
            href="https://www.respect.gov.au/resources/the-respect-checklist/"
            className="my-link"
          >
            The Respect Checklist
          </a>{" "}
          – shows a range of views from girls and boys about respect to provide
          a picture of what young people might believe and how they could react
          to disrespectful behaviour.
        </li>
        <li>
          <a
            href="https://www.respect.gov.au/resources/talking-about-respect/"
            className="my-link"
          >
            The Conversation Guide
          </a>{" "}
          – a practical guide for parents to have conversations with young
          people about respect.
        </li>
        <li>
          <a
            href="https://www.respect.gov.au/resources/generation-respect/"
            className="my-link"
          >
            Generation Respect
          </a>{" "}
          – a practical guide for talking to other adults about raising
          respectful young people.
        </li>
      </ol>
    </>
  );
  const body = (
    <SubSection
      iconPath="/icons/resources.svg"
      sectionBody={subbody}
      iconOnRight={false}
    />
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="Resources for Parents"
      textOnLeft={true}
      circlesPlacement="r"
    />
  );
}
