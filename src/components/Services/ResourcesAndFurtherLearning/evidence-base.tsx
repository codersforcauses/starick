import ServicesSection from "../services-section";
import SubSection from "../subsection";

export default function EvidenceBase() {
  const subbody = (
    <>
      <ol className="ml-4 list-outside list-decimal">
        <li>
          <a
            href="https://education.ourwatch.org.au/resource/evidence-paper-respectful-relationships-education-in-schools/"
            className="my-link"
          >
            Evidence paper:
          </a>{" "}
          Respectful relationships education in schools,{" "}
          <a
            href="https://education.ourwatch.org.au/resource/school-respectful-relationships-education-commitment-statement/"
            className="my-link"
          >
            Our Watch
          </a>
        </li>
        <li>
          Respectful Relationships Education in School: The Beginnings of Change
          -{" "}
          <a
            href="https://www.education.vic.gov.au/Documents/about/programs/health/ourwatchrespectfulrelationships.pdf"
            className="my-link"
          >
            Final Evaluation Report
          </a>
          ,{" "}
          <a
            href="https://education.ourwatch.org.au/resource/school-respectful-relationships-education-commitment-statement/"
            className="my-link"
          >
            Our Watch
          </a>
        </li>
        <li>
          <a
            href="https://www.starick.org.au/wp-content/uploads/FINAL_RRTSP-Overall-Evaluation-Report.2.pdf"
            className="my-link"
          >
            FINAL_RRTSP Overall Evaluation Report.2
          </a>
        </li>
        <li>
          <a
            href="https://www.starick.org.au/wp-content/uploads/RRTSP-Embedded-Case-Study-Evaluation.pdf"
            className="my-link"
          >
            RRTSP Embedded Case Study Evaluation
          </a>
        </li>
        <li>
          <a
            href="https://www.starick.org.au/wp-content/uploads/RRE-Stocktake-Gap-Analysis-Report.pdf"
            className="my-link"
          >
            RRE Stocktake & Gap Analysis Report
          </a>
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
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="Evidence Base"
      textOnLeft={false}
    />
  );
}
