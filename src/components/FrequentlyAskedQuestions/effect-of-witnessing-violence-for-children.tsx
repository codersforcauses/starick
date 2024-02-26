/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SubSection from "../Services/subsection";
import ServicesSection from "../Services/services-section";

export default function EffectOfWitnessingViolenceForChildrenSection() {
  const subBody = (
    <>
      <div className="pl-3">
        <p>
          Domestic and family violence can affect children in many ways. It can
          affect their behaviour, development, physical health, relationships,
          emotions, learning and thinking abilities. How quickly and completely
          children recover depends on many things, including their individual
          personalities and strengths. If you'd like to discuss this with our
          outreach worker, call (08) 9398 5039.
        </p>
      </div>
    </>
  );
  const body = (
    <>
      <SubSection
        sectionBody={subBody}
        iconPath="icons/domestic violence.svg"
        iconOnRight={false}
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="How does witnessing domestic violence affect children?"
      textOnLeft={false}
    />
  );
}
