import React from "react";
import Link from "next/link";

import ServicesSection from "../services-section";

export default function ThrivingThroughConnectionSection() {
  const body = (
    <>
      <p>
        Thriving Through Connection (TTC) supports young people aged 11 to 17
        years who are impacted by family and domestic violence.
      </p>
      <br></br>
      <p>
        A Youth Worker is available to meet with young people and develop a
        support program suited to their needs. Individual and group activities
        are available which are focused on building capacity, resilience,
        wellbeing and supporting social connection.
      </p>
      <br></br>
      <p>
        TTC is FDV and trauma informed, culturally safe and strengths-based in
        line with current best practice.
      </p>
      <br></br>
      <p>
        To find out more please email:{" "}
        <Link className="underline" href="mailto:youth@starick.org.au">
          youth@starick.org.au
        </Link>
      </p>
      <br></br>
      <br></br>
      <p className="text-center">
        TTC is made possible by generous support from Telethon.
      </p>
      <img
        className="mx-auto w-96"
        alt="Telethon Logo"
        src="/images/telethon-logo.png"
      ></img>
      <p>CORE SERVICES - PUT IN LINK</p>
    </>
  );

  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title={
        "Thriving Through Connection \nSupporting Young People Aged 11 - 17 years"
      }
      textOnLeft={false}
      circlesPlacement="bl"
    />
  );
}
