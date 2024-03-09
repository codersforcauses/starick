import React from "react";

import { List } from "../Services/list";
import ServicesSection from "../Services/services-section";
import SubSection from "../Services/subsection";

export default function ReportingViolenceSection() {
  const InformationForPoliceExample = (
    <List
      items={[
        "The address where the incident is taking place",
        "Your name and telephone number",
        "The offender's name, age and date of birth",
        "If there any weapons involved.",
        "A description of the abuser.",
        "The victim's name"
      ]}
      style="list-disc"
    />
  );

  const subBody = (
    <>
      <div className="pl-3">
        <p>
          Phone the police on 131 444. People with hearing impairments can call
          TTY 106.
        </p>
        <br />
        {InformationForPoliceExample}
        <br />
        <p>
          If the incident is occurring while you are talking to the operator,
          stay on the telephone. Your safety is paramount to the police.
        </p>
      </div>
    </>
  );
  const body = (
    <>
      <SubSection
        sectionBody={subBody}
        iconPath="icons/online-help.svg"
        iconOnRight={false}
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="How do I report an incident of domestic or family violence?"
      textOnLeft={true}
      circlesPlacement="bl"
    />
  );
}
