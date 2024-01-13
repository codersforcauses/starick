import ServicesSection from "../Services/services-section";

export default function FacesOfStarick() {
    const body = <div className="bg-starick-olive pl-8 py-2 mt-5 mb-8">
        <a href="https://www.starick.org.au/wp-content/uploads/The-Faces-of-Starick-1985-2015.pdf">The Faces of Starick 1985-2015</a>
    </div>
    return (
        <ServicesSection
          titleTextColour="starick-white"
          titleBackgroundColour="starick-brown"
          sectionBody={body}
          title="The Faces of Starick 1985-2015"
          iconPath="icons/refugees.svg"
        />  );
}