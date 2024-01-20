import ServicesSection from "../Services/services-section";
import PublicationList from "./pulications-list";

export default function StrategicPlans() {
    const itemList = [{text: "Starick Strategic Plan 2021-2025", link: "https://www.starick.org.au/wp-content/uploads/2020-2025-Starick-Strategic-Plan.pdf"}]
    const body = <PublicationList items={itemList}/>
    return (
        <ServicesSection
          titleTextColour="starick-white"
          titleBackgroundColour="starick-green"
          sectionBody={body}
          title="Strategic Plans"
          iconPath="icons/refugees.svg"
        />  );
}