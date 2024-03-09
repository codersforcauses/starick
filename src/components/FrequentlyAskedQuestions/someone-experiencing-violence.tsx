/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { List } from "../Services/list";
import ServicesSection from "../Services/services-section";
import SubSection from "../Services/subsection";

export default function RespectfulRelationshipsSection() {
  const thingsToSayToVictimExample = (
    <List
      items={[
        "'I believe you'",
        "'You do not deserve to be abused.'",
        "'I am afraid for your safety and the safety of your children.'",
        "'Do you need help to find out what services are available?'"
      ]}
      style="list-disc"
    />
  );

  const subBody = (
    <>
      <div className="pl-3">
        <p className="text-xl font-bold">
          If someone you know is in immediate danger, call the police now on
          000.
        </p>
        <br />
        <p>
          If the situation is not urgent, the most important thing you can do is
          to listen without judging, respect the person's decisions and help
          them find ways to become stronger and safer.
        </p>
        <br />
        <p className="text-xl font-semibold">
          Things you can say to the victim:
        </p>
        <br />
        {thingsToSayToVictimExample}
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
      title="What should I do if someone I know is experiencing domestic or family violence?"
      textOnLeft={false}
    />
  );
}
