/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

import ServicesSection from "../Services/services-section";
import SubSection from "../Services/subsection";

export default function PetsToRefugeSection() {
  const subBody = (
    <>
      <div className="pl-3">
        <p>Unfortunately pets cannot be brought to the refuges.</p>
        <br />
        <p>
          Cats: The Cat Haven may be able to offer temporary accommodation for
          cats. This is decided case-by-case and depends on space. For more
          information, visit{" "}
          <Link className="underline" href="https://www.cathaven.com.au/">
            The Cat Haven website
          </Link>{" "}
          or phone (08) 9442 3600.
        </p>
        <br />
        <p>
          Dogs: Temporary care of dogs may be available through Pat Giles
          Centre's Safe Families Safe Pets (SFSP) Program. For more information,
          visit the{" "}
          <Link className="underline" href="https://www.patgilescentre.org.au/">
            SFSP website
          </Link>{" "}
          or phone (08) 9300 0340.
        </p>
      </div>
    </>
  );
  const body = (
    <>
      <SubSection
        sectionBody={subBody}
        iconPath="icons/care.svg"
        iconOnRight={false}
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="Can I bring my pet to the refuge?"
      textOnLeft={false}
    />
  );
}
