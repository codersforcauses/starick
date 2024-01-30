import ServicesSection from "../Services/services-section";

export default function Legal() {
  const body = (
    <>
      <p>
        *
        <a
          href="https://www.legalaid.wa.gov.au/find-legal-answers/family/family-violence-and-your-safety/get-help-family-violence-and-your-safety"
          className="my-link"
        >
          The Legal Aid WA{" "}
        </a>{" "}
        website also has a wealth of information on domestic and family
        violence.
      </p>
      <br />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="Legal"
      iconPath="icons/police-justice.svg"
    />
  );
}
