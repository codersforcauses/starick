import React from "react";
import ServicesSection from "../services-section";
import SubSection from "../subsection";
import Link from "next/link";

export default function CommunityPartnerships() {
  const subbody = (
    <>
      <p>
        Here is a list of organisations you can connect with to support your
        implementation.
      </p>
      <ul>
        <li className="list-inside list-disc">
          <Link href="https://cwsw.org.au/" className="my-link">
            Centre for Women’s Safety and Wellbeing
          </Link>
        </li>
        <li className="list-inside list-disc">
          The peak body for women’s specialist family and domestic violence,
          community-based women’s health and sexual assault services in Western
          Australia.Stopping Family Violence
        </li>
        <li className="list-inside list-disc">
          <Link href="https://sfv.org.au/" className="my-link">
            Stopping Family Violence
          </Link>
        </li>
        <li className="list-inside list-disc">
          The peak body, non-for-profit organisation in Western Australia
          developed in order to support all the sectors and services involved
          responding to perpetrators of Family and Domestic Violence (FDV).
        </li>
        <li className="list-inside list-disc">
          <Link href="https://laalangford.com.au/about/" className="my-link">
            Langford Aboriginal Association
          </Link>
        </li>
        <li className="list-inside list-disc">
          A not-for-profit community organisation which delivers programs to
          benefit the local Aboriginal and Non-Aboriginal community.
        </li>
        <li className="list-inside list-disc">
          <Link
            href="https://www.redcross.org.au/places/offices/perth/"
            className="my-link"
          >
            Australian Red Cross Perth
          </Link>
        </li>
        <li className="list-inside list-disc">
          Delivery Roads2Respect, a program providing family and domestic
          violence education to students in years 7 to 10. The program is
          specifically tailored to students from culturally and linguistically
          diverse (CaLD) backgrounds.
        </li>
      </ul>
    </>
  );
  const body = (
    <SubSection
      iconPath="/icons/care.svg"
      sectionBody={subbody}
      iconOnRight={false}
    />
  );
  return (
    <ServicesSection
      titleTextColour="[--starick-white]"
      titleBackgroundColour="[--starick-green]"
      sectionBody={body}
      title="Community Partnerships"
    />
  );
}
