import ServicesSection from "../Services/services-section";
import PublicationList from "./publications-list";
import friendsOfStarickItems from "./friends-of-starick-items.json"

export default function FriendsOfStarick() {
    const body = friendsOfStarickItems.map(({ year, publications}, _) => {
        return (
            <>
                <p className="text-2xl font-bold my-5">{year}</p>
                <PublicationList items={publications}/>
            </>
        )
    })
    return (
        <ServicesSection
          titleTextColour="starick-white"
          titleBackgroundColour="starick-green"
          sectionBody={body}
          title="Friends of Starick Newsletters"
          iconPath="icons/refugees.svg"
        />  );
}