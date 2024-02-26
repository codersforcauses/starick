/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SubSection from "../Services/subsection";
import ServicesSection from "../Services/services-section";

export default function EntryToStarickSection() {
  const subBody = (
    <>
      <div className="pl-3">
        <p className="text-xl font-bold">How do I get into a Starick refuge?</p>
        <br />
        <p>
          Starick's crisis accommodation can be accessed by phoning the 24-hour
          phone number – 08 9458 1107. Women can phone our refuge direct or go
          through Crisis Care on 08 9223 1111 or 1800 199 008 (country free
          call).{" "}
        </p>
      </div>
    </>
  );
  const body = (
    <>
      <SubSection
        sectionBody={subBody}
        iconPath="icons/aid.svg"
        iconOnRight={false}
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="How do I get into a Starick refuge?"
      textOnLeft={false}
    />
  );
}
