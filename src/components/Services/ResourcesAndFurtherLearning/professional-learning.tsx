import ServicesSection from "../services-section";
import SubSection from "../subsection";

export default function ProfessionalLearning() {
  const subbody = (
    <>
      <ul className="ml-4 list-outside list-disc">
        <li>Curtin University</li>
        <li>
          <a
            href="https://rseproject.org.au/training-events/"
            className="my-link"
          >
            Relationships and Sexuality Education
          </a>{" "}
          (RSE) training{" "}
        </li>
        <li>Student Wellbeing Hub:</li>
        <li>
          <a
            href="https://studentwellbeinghub.edu.au/educators/professional-learning-courses/respectful-relationships-education/"
            className="my-link"
          >
            Respect matters for teachers
          </a>
        </li>
        <li>
          <a
            href="https://studentwellbeinghub.edu.au/educators/professional-learning-courses/principal-and-teacher-wellbeing/"
            className="my-link"
          >
            Principal and teacher wellbeing
          </a>
        </li>
        <li>
          <a
            href="https://studentwellbeinghub.edu.au/educators/professional-learning-courses/australian-student-wellbeing-framework/"
            className="my-link"
          >
            Australian student wellbeing framework
          </a>
        </li>
        <li>
          <a href="https://guidetothrive.lifeed.org.au/" className="my-link">
            Guide to Thrive{" "}
          </a>
          (awaiting approval)
        </li>
        <li>DV-alert</li>
        <li>
          <a href="https://www.dvalert.org.au/" className="my-link">
            Recognise, respond, refer{" "}
          </a>
          FDV awareness workshop{" "}
        </li>
        <li>
          <a
            href="https://www.dvalert.org.au/workshops-courses/for-frontline-workers/2-day-workshops/indigenous-workshops"
            className="my-link"
          >
            Indigenous workshops{" "}
          </a>
          to recognise signs of family violence, respond appropriately and refer
          support services relevant to Aboriginal and Torres Strait Islander
          communities.{" "}
        </li>
        <li>
          <a
            href="https://www.dvalert.org.au/workshops-courses/for-frontline-workers/2-day-workshops/multicultural-workshops"
            className="my-link"
          >
            Multicultural workshops{" "}
          </a>
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
      iconOnRight={false}
    />
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="Professional Learning"
    />
  );
}
