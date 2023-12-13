import React from "react";
import ServicesSection from "../services-section";
import SubSection from "../subsection";
import Link from "next/link";

export default function ResourceForParents() {
  const subbody = (
    <>
      <ol className="ml-4 list-outside list-decimal">
        <li>
          <Link href="https://www.respect.gov.au/" className="my-link">
            Respect.gov.au
          </Link>
        </li>
        <li>
          <Link
            href="https://www.respect.gov.au/resources/recognising-disrespect/"
            className="my-link"
          >
            The Excuse Interpreter
          </Link>{" "}
          – a resource to help us discover the hidden meanings of common
          expressions that can excuse disrespectful behaviour towards girls{" "}
        </li>
        <li>
          <Link
            href="https://www.respect.gov.au/resources/the-respect-checklist/"
            className="my-link"
          >
            The Respect Checklist
          </Link>{" "}
          – shows a range of views from girls and boys about respect to provide
          a picture of what young people might believe and how they could react
          to disrespectful behaviour.
        </li>
        <li>
          <Link
            href="https://www.respect.gov.au/resources/talking-about-respect/"
            className="my-link"
          >
            The Conversation Guide
          </Link>{" "}
          – a practical guide for parents to have conversations with young
          people about respect.
        </li>
        <li>
          <Link
            href="https://www.respect.gov.au/resources/generation-respect/"
            className="my-link"
          >
            Generation Respect
          </Link>{" "}
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
      iconOnRight={true}
    />
  );
  return (
    <ServicesSection
      titleTextColour="[--starick-black]"
      titleBackgroundColour="[--starick-olive]"
      sectionBody={body}
      title="Resources for Parents"
    />
  );
}
