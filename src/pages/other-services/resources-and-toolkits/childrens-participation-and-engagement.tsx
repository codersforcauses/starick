import Image from "next/image";

import SectionTitle from "@/components/section-title";
import consultingResources from "@/components/Services/ResourceAndToolkits/child-part-items/consulting-resources.json";
import powerpointPresentation from "@/components/Services/ResourceAndToolkits/child-part-items/powerpoint-presentation.json";
import resourceToolkitItems from "@/components/Services/ResourceAndToolkits/child-part-items/resource-toolkit.json";
import ChildSafeList from "@/components/Services/ResourceAndToolkits/child-safe-list";
import Disclaimer from "@/components/Services/ResourceAndToolkits/disclaimer";
import ResourceToolkitItem from "@/components/Services/ResourceAndToolkits/resource-toolkit-item";
import Section from "@/components/Services/services-section";

import ChildParticipationResources from "~/images/ResourcesToolkits/page-headers/child-participation-resources.png";

export default function ChildrensParticipationAndEngagement() {
  const resourceToolkitBody = (
    <>
      <br />
      <br />
      {resourceToolkitItems.map((item, index) => (
        <ResourceToolkitItem
          key={index}
          backgroundColor={index % 2 == 0 ? "starick-olive" : "white"}
          text={item.text}
          imageUrl={item.img}
          linkUrl={item.url}
        />
      ))}
      <br />
      <br />
    </>
  );
  return (
    <>
      <Image
        src={ChildParticipationResources}
        alt="description"
        width="0"
        height="0"
        className="h-auto w-full"
      />

      <div className="font-regular px-20 py-10 md:px-40 md:py-20 lg:px-60">
        <p>
          Supporting empowerment and participation is critical in creating an
          organisation that is safe for children and young people. It is
          particularly important for children and young people are victim
          survivors of family and domestic violence as they can be at greater
          risk of further abuse. They may also find it more challenging to speak
          up and to believe that adults will take them seriously.
        </p>
        <br />
        <p>
          Building the capacity of staff in family and domestic violence
          services across the state to encourage consultation with children and
          young people in decision making, was a core component of the
          Consultation with Children and Young People’s Engagement Project. This
          included professional development workshops delivered by the Youth
          Affairs Council of Western Australia to enhance staff understanding
          and knowledge of Child Safe Organisation National Child Safe Principle
          2: Children and young people are informed about their rights,
          participate in decisions affecting them and are taken seriously.
        </p>
        <br />

        <p>
          In addition a consultation resource toolkit was developed to support
          services ongoing engagement with children and young people. This tool
          kit is provided below.
        </p>
        <br />

        <p>
          Our commitment is to support children and young people to have a voice
          in decisions that affect them, as well as education about their right
          to be listened to and heard.
        </p>
        <br />

        <p>
          We believe that including the voices of children and young people in
          all aspects of service delivery gives them greater control over their
          lives, enhances their safety and leads to the development of services
          that better reflect their interests and needs.
        </p>
        <br />

        <p>
          This toolkit includes evidence-based and evidence informed resources
          and information for staff to engage children and young people in
          planning, decision making and seeking feedback into their daily
          practice.
        </p>
      </div>
      <Section
        title="The Resource Toolkit"
        titleBackgroundColour="starick-green"
        titleTextColour="starick-white"
        sectionBody={resourceToolkitBody}
        iconPath="/icons/refugees.svg"
      />

      <div className="px-10 md:px-20 lg:px-32">
        <SectionTitle
          text="Powerpoint Presentation"
          backgroundColour="starick-brown"
          textColour="starick-white"
          iconPath="/icons/refugees.svg"
        />
      </div>

      <div className="px-20 py-10 md:px-40 md:py-20 lg:px-60">
        <ChildSafeList itemList={powerpointPresentation} />
      </div>

      <div className="px-10 md:px-20 lg:px-32">
        <SectionTitle
          text="Consulting Resources"
          backgroundColour="starick-olive"
          textColour="starick-black"
          iconPath="/icons/refugees.svg"
        />
      </div>
      <div className="px-20 py-10 md:px-40 md:py-20 lg:px-60">
        <ChildSafeList itemList={consultingResources} />
      </div>

      <Disclaimer />
    </>
  );
}
