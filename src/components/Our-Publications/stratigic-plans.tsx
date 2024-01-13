import ServicesSection from "../Services/services-section";

export default function StratigicPlans(){
    const body = (
        <>
        <p>
        Our domestic violence advocates are based at local police stations and
        offer an advocacy service, safety planning and case management with
        court support. They can also refer you to legal and other services:
      </p>
        </>
    );
    return (
        <ServicesSection
          titleTextColour="starick-white"
          titleBackgroundColour="starick-green"
          sectionBody={body}
          title="stratigic Plans"
          iconPath="icons/refugees.svg"
        />  );
}