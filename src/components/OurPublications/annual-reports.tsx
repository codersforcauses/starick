import ServicesSection from "../Services/services-section";
import PublicationList from "./publications-list";
import annualReportsItems from "./annual-reports-items.json"

export default function AnnualReports() {
    const body = <><br /><PublicationList items={annualReportsItems}/><br /></>
    return (
        <ServicesSection
          titleTextColour="starick-black"
          titleBackgroundColour="starick-olive"
          sectionBody={body}
          title="Annual Reports"
          iconPath="icons/refugees.svg"
        />  );
}