/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { List } from "../Services/list";
import ServicesSection from "../Services/services-section";
import SubSection from "../Services/subsection";

export default function ItemsToBringToRefugeSection() {
  const ItemsToBringExample = (
    <List
      items={[
        "Essential clothing and personal items for yourself and your children.",
        "Any medications you or your children are taking.",
        "Identification, such as birth certificates, children's immunisation records, any Department of Housing documentation, legal documents, passports and visa information you may have."
      ]}
      style="list-disc"
    />
  );

  const subBody = (
    <>
      <div className="pl-3">
        <p className="text-xl font-bold">
          What can I take with me to the refuge?
        </p>
        <br />
        <p>If you have the time, you should take:</p>
        {ItemsToBringExample}
        <br />
        <p>
          Sometimes when women are not able to bring the above items with them,
          our workers can assist them to retrieve important items from their
          property with police assistance.
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
      title="What can I take with me to the refuge?"
      textOnLeft={true}
      circlesPlacement="r"
    />
  );
}
