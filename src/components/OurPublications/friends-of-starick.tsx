import friendsOfStarickItems from "./friends-of-starick-items.json";
import PublicationList from "./publications-list";
import ServicesSection from "../Services/services-section";

export default function FriendsOfStarick() {
  const body = friendsOfStarickItems.map(({ year, publications }, _) => {
    return (
      <>
        <p className="my-5 text-2xl font-bold">{year}</p>
        <PublicationList items={publications} />
      </>
    );
  });
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="Friends of Starick Newsletters"
      textOnLeft={false}
    />
  );
}
