import ServicesSection from "../Services/services-section";
import PublicationList from "./pulications-list";

export default function FriendsOfStarick() {
    const itemList = [{text: "2021 Christmas Message", link: ""},{text: "2021 Winter Newsletter", link: ""}]
    const body = <PublicationList items={itemList}/>
    return (
        <ServicesSection
          titleTextColour="starick-white"
          titleBackgroundColour="starick-green"
          sectionBody={body}
          title="Friends of Starick Newsletters"
          iconPath="icons/refugees.svg"
        />  );
}