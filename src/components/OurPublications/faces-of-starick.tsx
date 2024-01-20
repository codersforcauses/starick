import ServicesSection from "../Services/services-section";
import PublicationList from "./publications-list";

export default function FacesOfStarick() {
  const body = (
    <>
      <br />
      <PublicationList
        items={[
          {
            text: "The Faces of Starick 1985-2015",
            link: "https://www.starick.org.au/wp-content/uploads/The-Faces-of-Starick-1985-2015.pdf"
          }
        ]}
      />
      <br />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-brown"
      sectionBody={body}
      title="The Faces of Starick 1985-2015"
      iconPath="icons/refugees.svg"
    />
  );
}
