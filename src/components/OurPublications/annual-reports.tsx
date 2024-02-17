import annualReportsItems from "./annual-reports-items.json";
import PublicationList from "./publications-list";
import ServicesSection from "../Services/services-section";

export default function AnnualReports() {
  const body = (
    <>
      <br />
      <PublicationList items={annualReportsItems} />
      <br />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="Annual Reports"
      textOnLeft={false}
    />
  );
}
