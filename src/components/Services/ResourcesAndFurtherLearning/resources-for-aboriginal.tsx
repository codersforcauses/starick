import React from "react";
import ServicesSection from "../services-section";
import SubSection from "../subsection";
import Link from "next/link";

export default function ResourcesForAboriginal() {
  const subbody = (
    <>
      <ol className="list-outside list-decimal ml-4">
        <li>
          <Link
            href="https://www.respect.gov.au/wp-content/uploads/2021/03/aboriginal-and-torres-strait-islander-speak-booklet_0.pdf"
            className="my-link"
          >
            Speak up booklet
          </Link>{" "}
          – a resource to help encourage and support people to speak up about
          disrespectful attitudes by having conversations about respectful
          relationships with the young people in their community.
        </li>

        <li>
          <Link
            href="https://www.respect.gov.au/wp-content/uploads/2016/11/atsi_storybook.pdf"
            className="my-link"
          >
            Respect starts with us
          </Link>{" "}
          – a storybook to help model how to address disrespectful behaviour and
          start the conversation about showing respect to women and girls.{" "}
        </li>

        <li>
          <Link
            href="https://www.respect.gov.au/wp-content/uploads/2016/06/atsi_conversation_guide.pdf"
            className="my-link"
          >
            Respecting women and girls:
          </Link>{" "}
          Talking with our young people – a conversation guide to talk with
          young people about respect. Short guides include:{" "}
          <Link
            href="https://www.respect.gov.au/wp-content/uploads/2018/09/indigenous-short-guide-one-be-ready-talk.pdf"
            className="my-link"
          >
            Be ready to talk
          </Link>
          ,{" "}
          <Link
            href="https://www.respect.gov.au/wp-content/uploads/2018/10/starting-talk.pdf"
            className="my-link"
          >
            Starting the talk
          </Link>
          , and{" "}
          <Link
            href="https://www.respect.gov.au/wp-content/uploads/2018/10/keep-yarning.pdf"
            className="my-link"
          >
            Keep yarning
          </Link>
          .
        </li>

        <li>
          <Link
            href="https://www.respect.gov.au/wp-content/uploads/2018/07/atsi_excuse_interpreter.pdf"
            className="my-link"
          >
            Understanding our excuses
          </Link>{" "}
          – a guide to learn about ways we overlook disrespectful behaviour
          towards women and girls without knowing it.
        </li>

        <li>
          <Link
            href="https://www.respect.gov.au/wp-content/uploads/2016/06/atsi_the_respect_checklist.pdf"
            className="my-link"
          >
            The respect checklist
          </Link>{" "}
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
      titleTextColour="[--starick-white]"
      titleBackgroundColour="[--starick-green]"
      sectionBody={body}
      title="Resources for Aboriginal 
      and Torres Strait Islander People"
    />
  );
}

/* 
 
 Speak up booklet – a resource to help encourage and support people to speak up about disrespectful attitudes by having conversations about respectful relationships with the young people in their community.
Respect starts with us – a storybook to help model how to address disrespectful behaviour and start the conversation about showing respect to women and girls.
Respecting women and girls: 

 

*/
