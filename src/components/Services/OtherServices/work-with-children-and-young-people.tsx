import React from "react";
import Link from "next/link";

import ServicesSection from "../services-section";
import Button from "../../button";

export default function WorkWithChildrenAndYoungPeopleSection() {
  const body = (
    <>
      <p>
        Starick is committed to the safety and wellbeing of children and young
        people and to creating and maintaining a child safe organisation that
        creates a culture, strategies and actions to promote children and young
        people&apos;s wellbeing and protect them from harm.
      </p>
      <br></br>
      <p>
        We believe that supporting children and young people to grow, learn and
        flourish is integral to their ongoing safety and development.
      </p>
      <br></br>
      <p>
        We are committed to creating environments where children and young
        people feel safe and heard.
      </p>
      <br></br>
      <p>
        Starick has zero tolerance of child abuse, and all allegations and
        safety concerns will be treated very seriously and consistently with our
        robust policies and procedures.
      </p>
      <br></br>
      <p>
        Every person working at Starick understands the important role they play
        individually and collectively in children and young people&apos;s lives
        and demonstrates this by putting children and young people and their
        mothers/carers at the centre of decision making and actions.
      </p>
      <br></br>
      <p>
        Our Child Safety Code of Conduct outlines how staff, students and
        volunteers will behave when working with and around children.
      </p>
      <br></br>
      <p>
        We are committed to upholding children and young people&apos;s rights
        and needs in relation to equity and cultural diversity, with particular
        attention to the needs of Aboriginal and Torres Strait Islander
        children, children with disability, children from culturally and
        linguistically diverse backgrounds and lesbian, gay, bisexual,
        transgender and intersex children and young people.
      </p>
      <br />
      <br />
      <div className="flex justify-center">
        <Button
          text={"Resources, toolkits, and further reading"}
          link={"other-services/resources-and-toolkits"}
          textColour="starick-black"
          arrowColour="starick-white"
          arrowBackgroundColor="starick-green"
        />
      </div>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="Our Work with Children and Young People"
      textOnLeft={true}
    />
  );
}
