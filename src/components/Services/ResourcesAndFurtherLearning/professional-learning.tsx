import React from "react";
import ServicesSection from "../services-section";
import SubSection from "../subsection";
import Link from "next/link";

export default function ProfessionalLearning() {
  const subbody = (
    <>
      <ul>
        <li className="list-inside list-disc">Curtin University</li>
        <li className="list-inside list-disc">
          <Link
            href="https://rseproject.org.au/training-events/"
            className="my-link"
          >
            Relationships and Sexuality Education
          </Link>{" "}
          (RSE) training{" "}
        </li>
        <li className="list-inside list-disc">Student Wellbeing Hub:</li>
        <li className="list-inside list-disc">
          <Link
            href="https://studentwellbeinghub.edu.au/educators/professional-learning-courses/respectful-relationships-education/"
            className="my-link"
          >
            Respect matters for teachers
          </Link>
        </li>
        <li className="list-inside list-disc">
          <Link
            href="https://studentwellbeinghub.edu.au/educators/professional-learning-courses/principal-and-teacher-wellbeing/"
            className="my-link"
          >
            Principal and teacher wellbeing
          </Link>
        </li>
        <li className="list-inside list-disc">
          <Link
            href="https://studentwellbeinghub.edu.au/educators/professional-learning-courses/australian-student-wellbeing-framework/"
            className="my-link"
          >
            Australian student wellbeing framework
          </Link>
        </li>
        <li className="list-inside list-disc">
          <Link href="https://guidetothrive.lifeed.org.au/" className="my-link">
            Guide to Thrive{" "}
          </Link>
          (awaiting approval)
        </li>
        <li className="list-inside list-disc">DV-alert</li>
        <li className="list-inside list-disc">
          <Link href="https://www.dvalert.org.au/" className="my-link">
            Recognise, respond, refer{" "}
          </Link>
          FDV awareness workshop{" "}
        </li>
        <li className="list-inside list-disc">
          <Link
            href="https://www.dvalert.org.au/workshops-courses/for-frontline-workers/2-day-workshops/indigenous-workshops"
            className="my-link"
          >
            Indigenous workshops{" "}
          </Link>
          to recognise signs of family violence, respond appropriately and refer
          support services relevant to Aboriginal and Torres Strait Islander
          communities.{" "}
        </li>
        <li className="list-inside list-disc">
          <Link
            href="https://www.dvalert.org.au/workshops-courses/for-frontline-workers/2-day-workshops/multicultural-workshops"
            className="my-link"
          >
            Multicultural workshops{" "}
          </Link>
          to recognise the signs of FDV, respond appropriately and refer to
          support services relevant to culturally and linguistically diverse
          communities.
        </li>
      </ul>
    </>
  );
  const body = (
    <SubSection
      iconPath="/icons/professional-learning.svg"
      sectionBody={subbody}
      iconOnRight={true}
    />
  );
  return (
    <ServicesSection
      titleTextColour="[--starick-black]"
      titleBackgroundColour="[--starick-olive]"
      sectionBody={body}
      title="Professional Learning"
    />
  );
}
