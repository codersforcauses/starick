/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SubSection from "../Services/subsection";
import ServicesSection from "../Services/services-section";
import { List } from "../Services/list";
import Link from "next/link";

export default function WhatIsOutreachSection() {
  const WhereStarickHelpsExample = (
    <List
      items={[
        "when they are living in the community, are experiencing family and domestic violence and are unable or unwilling to access refuge accommodation;",
        "when they leave our refuges;",
        "when they move into a Starick transitional home."
      ]}
      style="list-disc"
    />
  );

  const OutreachWorkerSupportExample = (
    <List
      items={[
        "Assisting with safety planning",
        "Liaison with services such as income support, health and education services",
        "Help with accessing support groups and other community services",
        "Support if you need to attend court or access other legal services"
      ]}
      style="list-disc"
    />
  );
  const subBody = (
    <>
      <div className="pl-3">
        <p className="text-xl font-bold">What is outreach?</p>
        <br />
        <p>
          Outreach is the name we give to any service we provide to women and
          children living in the community and not in a Starick refuge.
        </p>
        <br />
        <p>
          In addition to providing support to women while they are living in a
          Starick refuges, Starick also supports women and children:
        </p>
        <br />
        {WhereStarickHelpsExample}
        <br />
        <p>
          Information about these services can be found on the {""}
          <Link className="underline" href="pages/core-services">
            core services
          </Link>{" "}
          page.
        </p>
        <br />
        <p className="text-xl font-bold">Outreach worker support</p>
        <br />
        <p>
          Starick's outreach worker supports women and children in the community
          who have escaped family and domestic violence in the following ways:
        </p>
        <br />
        {OutreachWorkerSupportExample}
        <br />
        <p>
          Read how our outreach workers have helped two women,{" "}
          <Link
            className="underline"
            href="https://www.starick.org.au/about/stories/barbara/"
          >
            Barbara
          </Link>{" "}
          and {""}{" "}
          <Link
            className="underline"
            href="https://www.starick.org.au/about/stories/helena/"
          >
            Helena
          </Link>{" "}
          .
        </p>
        <br />
        <p>Starick's outreach worker can be contacted on (08) 9398 5039.</p>
      </div>
    </>
  );
  const body = (
    <>
      <SubSection
        sectionBody={subBody}
        iconPath="icons/did-you-know.svg"
        iconOnRight={false}
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="What is outreach?"
      textOnLeft={true}
      circlesPlacement="r"
    />
  );
}
