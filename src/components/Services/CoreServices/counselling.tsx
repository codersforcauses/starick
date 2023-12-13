import React from "react";
import ServicesSection from "../services-section";

export default function CounsellingSection() {
  const body = (
    <>
      <p>
        Starick recognises that counselling is an important part of the recovery
        process both during and after experiencing family and domestic violence.
        We also recognise that counselling for children affected by family and
        domestic violence is equally important, and helps break the cycle of
        violence.
      </p>
      <br></br>
      <p>
        Our counselling service is available to women and children staying in a
        Starick refuge, although funding limits how much counselling we can
        offer children and is an ongoing area of need we are trying to address
        through grants and fundraising. We also offer counselling to women in
        the community who have experienced family and domestic violence.
      </p>
      <br></br>
      <p>Contact our counselling service:</p>
      <ul>
        <li className="list-inside list-disc" key="1">
          Phone 9398 5039 or walk into Starick&apos;s outreach services office
          at Community Lotteries House, 2232 Albany Highway, Gosnells.
        </li>
      </ul>
      <br></br>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="[--starick-white]"
      titleBackgroundColour="[--starick-green]"
      sectionBody={body}
      title="Counselling Services"
      iconPath="icons/speech.svg"
    />
  );
}
