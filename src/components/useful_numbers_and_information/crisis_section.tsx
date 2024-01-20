import ServicesSection from "../Services/services-section";

export default function Crisis() {
  const body = (
    <>
      <p>
        If you need urgent help, call CRISIS CARE* (08) 9223 1111 or Country
        Freecall 1800 199 008*
      </p>
      <p>If you are in immediate physical danger, call POLICE 000</p>
      <p>
        *
        <a
          href="https://www.wa.gov.au/service/community-services/community-support/crisis-care"
          className="my-link"
        >
          Crisis Care
        </a>{" "}
        is the Department for Communities, Child Protection and Family Support’s
        telephone information service for anyone who needs urgent help,
        including crisis accommodation.
      </p>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="Crisis"
      iconPath="icons/speech.svg"
    />
  );
}
