import ServicesSection from "../services-section";
import SubSection from "../subsection";

export default function ResourceForSchools() {
  const subbody = (
    <>
      <p className="my-4 text-lg">Teaching and learning:</p>
      <ol className="ml-4 list-outside list-decimal">
        <li>Growing and Developing Healthy Relationships (GDHR)</li>
        <li>
          <a
            href="https://gdhr.wa.gov.au/-/respectful-relationshi-2"
            className="my-link"
          >
            Background teacher notes
          </a>{" "}
          – respectful relationships
        </li>
        <li>
          <a
            href="https://gdhr.wa.gov.au/learning/learning-activities"
            className="my-link"
          >
            Learning activities
          </a>
          : Kindergarten – Year 10
        </li>
        <li>
          <a
            href="https://gdhr.wa.gov.au/-/relate-respectful-relationships-education-program?inheritRedirect=true&redirect=%2Fsearch%3FinheritRedirect%3Dtrue%26redirect%3D%252Fsearch%253Fq%253Drespectful%252Brelationships%26q%3Drelate"
            className="my-link"
          >
            RELATE: Respectful relationships education program
          </a>{" "}
          Years 7 – 10
        </li>
        <li>
          Victoria State Government{" "}
          <a
            href="https://www.education.vic.gov.au/school/teachers/teachingresources/discipline/capabilities/personal/Pages/respectfulrel.aspx"
            className="my-link"
          >
            Teach respectful relationships
          </a>
        </li>
        <li>
          Tasmania State Government{" "}
          <a
            href="https://respectfulrelationships.education.tas.gov.au/about/"
            className="my-link"
          >
            Respectful Relationships
          </a>
        </li>
      </ol>
      <p className="my-4 text-lg">Policy and practice:</p>
      <ol className="ml-4 list-outside list-decimal">
        <li>Our Watch</li>
        <li>
          School respectful relationships education{" "}
          <a
            href="https://education.ourwatch.org.au/resource/school-respectful-relationships-education-commitment-statement/"
            className="my-link"
          >
            commitment statement
          </a>
        </li>
        <li>
          Respectful relationships education{" "}
          <a
            href="https://education.ourwatch.org.au/tools-and-resources"
            className="my-link"
          >
            gender equality policy template
          </a>
        </li>
      </ol>
      <p className="my-4 text-lg">School culture and environment:</p>
      <ol className="ml-4 list-outside list-decimal">
        <li>Our Watch</li>
        <li>
          <a
            href="https://education.ourwatch.org.au/resource/school-baseline-assessment-tool-staff/"
            className="my-link"
          >
            School baseline assessment tool: Staff
          </a>
        </li>
        <li>
          School baseline assessment tool: Student (
          <a
            href="https://education.ourwatch.org.au/resource/school-baseline-assessment-tool-student-versions/"
            className="my-link"
          >
            primary school
          </a>
          )
        </li>
        <li>
          Student baseline assessment template (
          <a
            href="https://education.ourwatch.org.au/resource/school-baseline-assessment-tool-student-versions/"
            className="my-link"
          >
            secondary school
          </a>
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
