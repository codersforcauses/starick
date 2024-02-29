/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SubSection from "../Services/subsection";
import ServicesSection from "../Services/services-section";

export default function StarickAdvocatesExample() {
  const subBody = (
    <>
      <div className="pl-3">
        <p className="text-xl font-bold">Child advocate</p>
        <br />
        <p>
          Starick's child advocates are trained professionals who assist and
          support the children using our service. Starick recognises that
          children need their own advocate to ensure they receive the best
          possible outcome.
        </p>
        <br />
        <p className="text-xl font-bold">Women's advocate</p>
        <br />
        <p>
          Starick's women's advocates are trained professionals who assist and
          support the women using our service.
        </p>
        <br />
        <p className="text-xl font-bold">Domestic violence advocate</p>
        <p>
          Starick's domestic violence advocates work in police stations,
          providing assistance and support to women who have come into contact
          with the police or court system because of a family and domestic
          violence incident.
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
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="What are our different advocates?"
      textOnLeft={false}
    />
  );
}
