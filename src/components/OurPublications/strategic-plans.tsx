import ServicesSection from "../Services/services-section";

export default function StrategicPlans () {
    const body = <div className="bg-starick-olive pl-8 py-2 mt-5 mb-8">
        <a href="https://www.starick.org.au/wp-content/uploads/2020-2025-Starick-Strategic-Plan.pdf">Starick Strategic Plan 2021-2025</a>
    </div>
    return (
        <ServicesSection
          titleTextColour="starick-white"
          titleBackgroundColour="starick-green"
          sectionBody={body}
          title="Strategic Plans"
          iconPath="icons/refugees.svg"
        />  );
}