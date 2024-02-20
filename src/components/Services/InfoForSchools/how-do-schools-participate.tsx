import ServicesSection from "../services-section";
import SubSection from "../subsection";

export default function HowDoSchoolsParticipate() {
  const subbody = (
    <>
      <p>
        Starick works with the Department of Education to identify schools that
        want to participate in the program. Participation in the program is
        voluntary and each school provides an Expression of Interest to show
        their interest. Schools that participate in the program are supported by
        Starick to develop an approach to Respectful Relationships Education
        (RRE) that suits their school&apos;s needs and environment. This
        includes support to develop plans to embed a whole-of-school approach
        that is relevant and sustainable.
      </p>
      <br />
      <p>
        Since 2019, Starick has worked with 47 public schools grouped into five
        cohorts.
      </p>
    </>
  );
  const body = (
    <SubSection
      iconPath="/icons/did-you-know.svg"
      sectionBody={subbody}
      iconOnRight={false}
    />
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="How do schools participate in the program?"
      textOnLeft={false}
    />
  );
}
