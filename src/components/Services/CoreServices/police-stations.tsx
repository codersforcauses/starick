import { List } from "../list";
import ServicesSection from "../services-section";

export default function PoliceSection() {
  const services = (
    <List
      items={[
        "Safety planning",
        "Case management",
        "Information on police and legal processes",
        "Emotional support",
        "Support to those applying for a Family Violence Restraining Order or attending court",
        "Assistance with income support",
        "Referral to other services and agencies as appropriate"
      ]}
      style="list-disc"
    />
  );

  const body = (
    <>
      <p>
        Our domestic violence advocates are based at local police stations and
        offer an advocacy service, safety planning and case management with
        court support. They can also refer you to legal and other services:
      </p>
      <br />
      <ul className="ml-10 list-disc">
        <li>
          <b>Armadale</b>: Walk into Armadale Police Station at 23 Prospect Rd,
          Armadale
        </li>
        <li>
          <b>Cannington</b>: Walk into Cannington Police Station at 1325 Albany
          Hwy, Cannington.
        </li>
      </ul>
      <br />
      <p>
        Our domestic violence advocates provide a range of services including:
      </p>
      <br />
      {services}
      <br />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="Support in Police Stations"
      iconPath="icons/police-justice.svg"
    />
  );
}
