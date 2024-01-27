import Section from "../Services/services-section";
import SubSection from "../Services/subsection";
import { List } from "../Services/list";

export default function SpecialDonations() {
  const acceptedItems = [
    "Art and craft materials",
    "Toiletry packs",
    "Gifts for Christmas and Mother's Day",
    "Linen",
    "Towels",
    "Bedding",
    "Curtaining",
    "New sleepwear and gowns for mothers",
    "New underwear",
    "Tinned food",
    "Frozen meals"
  ];
  const subbody1 = (
    <>
      <p className="text-lg font-bold">If you have new, unused items:</p>
      <br />
      <p>We accept new, unused items for our refuges, including:</p>
      <br />
      <List items={acceptedItems} style="list-disc" />
      <br />
      <p>
        If you have new, unused items and would like to donate them, please
        contact the Starick Head Office on 9478 5300.
      </p>
    </>
  );
  const subbody2 = (
    <>
      <p className="text-lg font-bold">If you have larger used items:</p>
      <br />
      <p>
        Starick cannot accept larger household items and furniture because of
        storage space. If you have furniture and other large items, contact{" "}
        <a
          className="my-link"
          href="http://www.peoplewhocare.org.au/donate/donate-goods"
        >
          Starting Over Support (SOS)
        </a>
        , a charity dedicated to supporting families and individuals escaping
        crisis with furniture and household items.
      </p>
    </>
  );
  const body = (
    <>
      <SubSection
        iconPath="/icons/books.svg"
        sectionBody={subbody1}
        iconOnRight={false}
      />
      <br />
      <SubSection
        iconPath="/icons/resources.svg"
        sectionBody={subbody2}
        iconOnRight={false}
      />
    </>
  );
  return (
    <Section
      sectionBody={body}
      title="Special Donations"
      titleBackgroundColour="starick-green"
      titleTextColour="starick-white"
      iconPath="/icons/refugees.svg"
    />
  );
}
