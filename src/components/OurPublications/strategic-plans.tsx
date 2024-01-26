import PublicationList from "./publications-list";
import ServicesSection from "../Services/services-section";

export default function StrategicPlans() {
  const itemList = [
    {
      text: "Starick Strategic Plan 2021-2025",
      link: "https://www.starick.org.au/wp-content/uploads/2020-2025-Starick-Strategic-Plan.pdf"
    }
  ];
  const body = (
    <>
      <br />
      <PublicationList items={itemList} />
      <br />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="Strategic Plans"
      iconPath="icons/refugees.svg"
    />
  );
}
