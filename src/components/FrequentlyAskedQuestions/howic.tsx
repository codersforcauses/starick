/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SubSection from "../Services/subsection";
import ServicesSection from "../Services/services-section";

export default function HOWICSection() {
  const subBody = (
    <>
      <div className="pl-3">
        <p>
          HOWIC stands for Housing of Women in the Community. This Starick
          program provides transitional medium to long term housing in the
          south-east metropolitan area for women and children who are escaping
          domestic and family violence and who would otherwise have difficulty
          securing safe, affordable housing.
        </p>
        <p className="text=xl font-bold"> Housing cluster</p>
        <p>
          Some of our transitional housing is located within a small complex, or
          cluster.
        </p>
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
      title="What is HOWIC?"
      textOnLeft={true}
      circlesPlacement="l"
    />
  );
}
