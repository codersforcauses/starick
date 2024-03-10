import React from "react";
import Link from "next/link";

import ServicesSection from "../services-section";
import Button from "../../button";

export default function RespectfulRelationshipsSection() {
  const body = (
    <>
      <p>
        As part of our commitment to preventing violence and building safer
        communities, Starick is delivering the Western Australian Respectful
        Relationships Teaching Support Program (WARRTSP) to primary and
        secondary public schools across Western Australia.
      </p>
      <br />
      <p>
        WARRSTP uses a whole-of-school approach to support staff in delivering
        appropriate respectful relationships material in the school curriculum
        and the broader school environment.
      </p>

      <ul className="ml-8 list-outside list-disc">
        <li>
          The programs aim is to give school staff the skills they need to
          support students to build relationships that are non-violent, equal,
          mutually respectful and trusting.
        </li>
        <li>The program includes: </li>

        <ul className="ml-8 list-outside list-disc">
          <li>Professional learning for teachers and school staff.</li>
          <li>
            Information, tools and strategies to teach students about respectful
            relationships and gender equality, and
          </li>
          <li>
            Supporting schools to implement a whole-of-school approach to
            violence prevention.
          </li>
        </ul>
      </ul>

      <p>
        WARRSTP is funded by the Department of Communities, and supported by the
        Department of Education.
      </p>
      <br />
      <p>
        The WARRSTP is part of WA Labor&apos;s election commitment to stopping
        family and domestic violence.
      </p>
      <br />
      <p>
        It is also a key initiative of Path to Safety:{" "}
        <Link
          className="underline"
          href="https://www.wa.gov.au/government/publications/western-australias-strategy-reduce-family-and-domestic-violence"
        >
          Western Australia&apos;s Strategy to Reduce Family and Domestic
          Violence 2020-2030.
        </Link>
      </p>
      <br />
      <br />
      <p className="mb-8 flex items-center justify-center text-xl font-semibold">
        About Respectful Relationships Education
      </p>
      <br />
      <p>
        Respectful Relationships Education (RRE) is a whole-of-school approach
        to creating and maintaining a culture of respect within school
        communities.{" "}
      </p>
      <br />
      <p>
        RRE supports students, staff and the wider community to build healthy
        and safe relationships based on mutual respect, non-violence and gender
        equality.{" "}
      </p>
      <br />
      <p>
        RRE is an evidence based, primary prevention approach delivered through
        schools to create generational and cultural change. It engages schools
        as places of learning and as workplaces to address the drivers of
        gender-based violence and create a future free from violence.{" "}
      </p>
      <br />
      <br />
      <p className="mb-8 flex items-center justify-center text-xl font-semibold">
        What is a whole-of-school approach?
      </p>
      <br />
      <p>Effective RRE recognises that schools are: </p>
      <ul className="ml-8 list-outside list-disc">
        <li>Places of learning</li>
        <li>Community hubs, and </li>
        <li>Workplaces. </li>
      </ul>
      <br />
      <p>
        A whole-of-school approach engages with all aspects of a school
        including:
      </p>
      <ul className="ml-8 list-outside list-disc">
        <li>in-class education, </li>
        <li>school culture and environment, </li>
        <li>policies and procedures, while </li>
        <li>promoting gender equality among staff and students, and </li>
        <li>fostering partnerships with the wider community. </li>
      </ul>
      <br />
      <p>
        Evidence based, age-appropriate delivery is a key part of the
        whole-of-school approach to embed RRE.{" "}
      </p>
      <br />
      <p>
        resources-toolkits-reading Evidence shows that when students have
        authentic opportunities to actively participate in their learning, they
        feel connected and can use the skills learnt to promote respectful
        relationships. It is therefore important to include student voices in
        implementing RRE in schools.{" "}
      </p>
      <br />
      <br />
      <div className="flex justify-center">
        <Button
          text="Info for schools"
          link="/other-services/info-for-schools"
          textColour="starick-black"
          arrowColour="starick-white"
          arrowBackgroundColor="starick-green"
        />
        <div className="w-32"></div>
        <Button
          text="Further reading"
          link="/other-services/further-reading"
          textColour="starick-black"
          arrowColour="starick-white"
          arrowBackgroundColor="starick-green"
        />
      </div>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="WA Respectful Relationships Teaching Support Program"
      textOnLeft={false}
      circlesPlacement="bl"
      stories={true}
    />
  );
}
