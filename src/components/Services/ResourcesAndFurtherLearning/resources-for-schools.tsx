import React from "react";
import ServicesSection from "../services-section";
import SubSection from "../subsection";
import Link from "next/link";

export default function ResourceForSchools() {
  const subbody = (
    <>
      <p className="my-4 text-lg">Teaching and learning:</p>
      <ol className="list-inside list-decimal">
        <li>Growing and Developing Healthy Relationships (GDHR)</li>
        <li>
          <Link
            href="https://gdhr.wa.gov.au/-/respectful-relationshi-2"
            className="my-link"
          >
            Background teacher notes
          </Link>{" "}
          – respectful relationships
        </li>
        <li>
          <Link
            href="https://gdhr.wa.gov.au/learning/learning-activities"
            className="my-link"
          >
            Learning activities
          </Link>
          : Kindergarten – Year 10
        </li>
        <li>
          <Link
            href="https://gdhr.wa.gov.au/-/relate-respectful-relationships-education-program?inheritRedirect=true&redirect=%2Fsearch%3FinheritRedirect%3Dtrue%26redirect%3D%252Fsearch%253Fq%253Drespectful%252Brelationships%26q%3Drelate"
            className="my-link"
          >
            RELATE: Respectful relationships education program
          </Link>{" "}
          Years 7 – 10
        </li>
        <li>
          Victoria State Government{" "}
          <Link
            href="https://www.education.vic.gov.au/school/teachers/teachingresources/discipline/capabilities/personal/Pages/respectfulrel.aspx"
            className="my-link"
          >
            Teach respectful relationships
          </Link>
        </li>
        <li>
          Tasmania State Government{" "}
          <Link
            href="https://respectfulrelationships.education.tas.gov.au/about/"
            className="my-link"
          >
            Respectful Relationships
          </Link>
        </li>
      </ol>
      <p className="my-4 text-lg">Policy and practice:</p>
      <ol className="list-inside list-decimal">
        <li>Our Watch</li>
        <li>
          School respectful relationships education{" "}
          <Link
            href="https://education.ourwatch.org.au/resource/school-respectful-relationships-education-commitment-statement/"
            className="my-link"
          >
            commitment statement
          </Link>
        </li>
        <li>
          Respectful relationships education{" "}
          <Link
            href="https://education.ourwatch.org.au/tools-and-resources"
            className="my-link"
          >
            gender equality policy template
          </Link>
        </li>
      </ol>
      <p className="my-4 text-lg">School culture and environment:</p>
      <ol className="list-inside list-decimal">
        <li>Our Watch</li>
        <li>
          <Link
            href="https://education.ourwatch.org.au/resource/school-baseline-assessment-tool-staff/"
            className="my-link"
          >
            School baseline assessment tool: Staff
          </Link>
        </li>
        <li>
          School baseline assessment tool: Student (
          <Link
            href="https://education.ourwatch.org.au/resource/school-baseline-assessment-tool-student-versions/"
            className="my-link"
          >
            primary school
          </Link>
          )
        </li>
        <li>
          Student baseline assessment template (
          <Link
            href="https://education.ourwatch.org.au/resource/school-baseline-assessment-tool-student-versions/"
            className="my-link"
          >
            secondary school
          </Link>
          )
        </li>
      </ol>
    </>
  );
  const body = (
    <SubSection
      iconPath="/icons/school.svg"
      sectionBody={subbody}
      iconOnRight={true}
    />
  );
  return (
    <ServicesSection
      titleTextColour="[--starick-black]"
      titleBackgroundColour="[--starick-olive]"
      sectionBody={body}
      title="Resources for Schools"
    />
  );
}
