/* eslint-disable react/no-unescaped-entities */
import React from "react";

import ServicesSection from "../Services/services-section";
import SubSection from "../Services/subsection";

export default function RefugeStayDurationSection() {
  const subBody = (
    <>
      <div className="pl-3">
        <p>
          Women and children are able to stay up to three months. This gives
          them time to sort out income and legal issues and to find alternative
          accommodation.
        </p>
      </div>
    </>
  );
  const body = (
    <>
      <SubSection
        sectionBody={subBody}
        iconPath="icons/resources.svg"
        iconOnRight={false}
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="How long can I stay at the refuge?"
      textOnLeft={true}
    />
  );
}
