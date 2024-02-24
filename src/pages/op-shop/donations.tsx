import PageHeader from "@/components/page-header";
import WhatWeAccept from "@/components/OpShop/what-we-accept";
import SpecialDonations from "@/components/OpShop/special-donations";
import PageSummary from "@/components/page-summary";
import { ReactNode } from "react";
import { List } from "@/components/Services/list";

export default function OpShopDonations() {
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
  const content1 = (
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
  const content2 = (
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
  const content3 = (
    <p className="font-bold">
      If you have any questions in relation to donations, please call our op
      shop direct on (08) 6271 0299 during shop opening hours - Mon-Fri 10am-3pm
      Sat 10am-2pm.
    </p>
  );
  const summaries: { title?: string; content: ReactNode }[] = [
    { title: "If you have new, unused items", content: content1 },
    { title: "If you have larger used tems", content: content2 },
    { content: content3 }
  ];
  return (
    <>
      <PageHeader titleText="Op Shop Donations" />
      <WhatWeAccept />
      {summaries.map(({ title, content }, index) => {
        return (
          <PageSummary
            key={index}
            content={
              <Summary
                title={title}
                textColour={index % 2 ? "starick-white" : "starick-black"}
                content={content}
              />
            }
            backgroundColour={index % 2 ? "starick-green" : "starick-olive"}
            contentOnLeft={index % 2 === 0}
            imageAlt="Refugees"
            imagePath="/images/starick-image1.jpg"
          />
        );
      })}
    </>
  );
}

interface SummaryProps {
  title?: string;
  content: ReactNode;
  textColour: string;
}

function Summary({ title, content, textColour }: SummaryProps) {
  return (
    <div className="flex flex-col items-center">
      {title ? (
        <>
          <p
            className={`text-center text-2xl font-semibold text-${textColour}`}
          >
            {title}
          </p>
          <br />
        </>
      ) : null}
      <div className={`text-${textColour} text-md`}>{content}</div>
    </div>
  );
}
