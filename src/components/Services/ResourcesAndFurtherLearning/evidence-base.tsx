import React from "react";
import ServicesSection from "../services-section";
import SubSection from "../subsection";
import Link from "next/link";

export default function EvidenceBase() {
  const subbody = (
    <>
      <ol>
        <li className="list-inside list-decimal">
          <Link
            href="https://education.ourwatch.org.au/resource/evidence-paper-respectful-relationships-education-in-schools/"
            className="my-link"
          >
            Evidence paper:
          </Link>{" "}
          Respectful relationships education in schools,{" "}
          <Link
            href="https://education.ourwatch.org.au/resource/school-respectful-relationships-education-commitment-statement/"
            className="my-link"
          >
            Our Watch
          </Link>
        </li>
        <li className="list-inside list-decimal">
          Respectful Relationships Education in School: The Beginnings of Change
          -{" "}
          <Link
            href="https://www.education.vic.gov.au/Documents/about/programs/health/ourwatchrespectfulrelationships.pdf"
            className="my-link"
          >
            Final Evaluation Report
          </Link>
          ,{" "}
          <Link
            href="https://education.ourwatch.org.au/resource/school-respectful-relationships-education-commitment-statement/"
            className="my-link"
          >
            Our Watch
          </Link>
        </li>
        <li className="list-inside list-decimal">
          <Link
            href="https://www.starick.org.au/wp-content/uploads/FINAL_RRTSP-Overall-Evaluation-Report.2.pdf"
            className="my-link"
          >
            FINAL_RRTSP Overall Evaluation Report.2
          </Link>
        </li>
        <li className="list-inside list-decimal">
          <Link
            href="https://www.starick.org.au/wp-content/uploads/RRTSP-Embedded-Case-Study-Evaluation.pdf"
            className="my-link"
          >
            RRTSP Embedded Case Study Evaluation
          </Link>
        </li>
        <li className="list-inside list-decimal">
          <Link
            href="https://www.starick.org.au/wp-content/uploads/RRE-Stocktake-Gap-Analysis-Report.pdf"
            className="my-link"
          >
            RRE Stocktake & Gap Analysis Report
          </Link>
        </li>
      </ol>
    </>
  );
  const body = (
    <SubSection
      iconPath="/icons/reports.svg"
      sectionBody={subbody}
      iconOnRight={false}
    />
  );
  return (
    <ServicesSection
      titleTextColour="[--starick-white]"
      titleBackgroundColour="[--starick-green]"
      sectionBody={body}
      title="Evidence Base"
    />
  );
}
