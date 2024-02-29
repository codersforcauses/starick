import PageHeader from "@/components/page-header";
import PageSummary from "@/components/page-summary";
import Button from "@/components/button";
import { ReactNode } from "react";

export default function StarickOpShop() {
  const content1 = (
    <>
      <p>
        The Starick Op Shop provides a valuable service to the local community
        and to the women and children who use our services.
      </p>
      <br />
      <p>
        The op shop is operated and run by hard-working, dedicated volunteers,
        and proceeds from sales of discounted clothing, toys, bedding, household
        goods and more support Starick&apos;s services.
      </p>
      <br />
      <p>
        <span className="font-bold">
          Every dollar of profit from the op shop
        </span>{" "}
        is used to fund non-core services which address some of the impacts of
        domestic and family violence on women’s and children’s lives - services
        such as art therapy, baby massage, self defence training, yoga for
        trauma and our Lived Experience therapeutic writing program.
      </p>
    </>
  );
  const content2 = (
    <>
      <p>110 Kooyong Road, Rivervale Mon-Fri 10am-3pm Sat 10am-2pm</p>
      <br />
      <p>Direct line for donation enquiries: (08) 6271 0299</p>
    </>
  );
  const content3 = (
    <>
      <p>
        Staric&apos;s <span className="font-bold">Pay it Forward</span> op shop
        gift vouchers are a simple way for you to help us help women and
        children escaping domestic and family violence.
      </p>
      <br />
      <p>
        You simply buy a gift voucher to a set value, and we ensure it goes to
        someone in our service who needs it. Women and children escaping
        domestic and family violence often arrive at our refuges with just the
        clothes they stand up in. Through our outreach support programs, we also
        meet women out in the community who are escaping family and domestic
        violence and have very little for themselves and their children.
      </p>
      <br />
      <p>
        Starick&apos;s <span className="font-bold">Pay it Forward</span> op shop
        gift vouchers can be used by our clients to purchase anything from our
        op shop in Cloverdale - items like clothing for women and children,
        shoes, bedding, toys, books, crockery and other useful household items.
      </p>
      <br />
      <div className="flex justify-center">
        <Button
          text="Purchase"
          link="https://www.starick.org.au/get-involved/op-shop/op-shop-gift-sets/"
          textColour="starick-white"
          arrowBackgroundColor="starick-white"
          arrowColour="starick-black"
        />
      </div>
    </>
  );
  const content4 = (
    <>
      <p>
        Your unwanted clothing and other day-to-day items are sold in the op
        shop to raise funds or supplied to the families we support, some of whom
        arrive at our refuges with just the clothes they stand up in.
      </p>
      <br />
      <p>
        Please ensure all clothing is clean and folded and that household and
        other goods are clean and in good working order.
      </p>
      <br />
      <div className="flex justify-center">
        <Button
          text="Donate Stock"
          link="/op-shop/donations"
          textColour="starick-black"
          arrowBackgroundColor="starick-green"
          arrowColour="starick-white"
        />
      </div>
    </>
  );
  const content5 = (
    <>
      <p>
        Volunteers are the lifeblood of the Starick Op Shop, which is run
        entirely by our team of dedicated volunteers.
      </p>
      <br />
      <p>
        You can choose to work one day or more, and rest assured that op shop
        manager Sandy Hunt will make you feel welcome.{" "}
      </p>
      <br />
      <p>
        If you’d like to join the team, we’d love to hear from you! Please call
        our head office on (08) 9478 5300.
      </p>
    </>
  );
  const content6 = (
    <>
      <p>
        We offer a full range of used clothing and small homewares, including
        clothing for babies, children, men and women; sleepwear; shoes;
        manchester; kitchenware; handbags; hats; accessories; toys and board
        games; books for adults and children.
      </p>
    </>
  );
  const summaries: { title: string; content: ReactNode }[] = [
    { title: "Welcome to the Starick Op Shop", content: content1 },
    { title: "Come and visit us soon", content: content2 },
    { title: "Pay It Forward op shop gift vouchers", content: content3 },
    { title: "Op Shop Donations", content: content4 },
    { title: "Volunteering at the Starick Op Shop", content: content5 },
    { title: "What we Sell", content: content6 }
  ];
  return (
    <>
      <PageHeader titleText="Starick Op Shop" />
      {summaries.map(({ title, content }, index) => {
        return (
          <PageSummary
            key={index}
            content={
              <Summary
                title={title}
                textColour={index % 2 ? "starick-black" : "starick-white"}
                content={content}
              />
            }
            backgroundColour={index % 2 ? "starick-olive" : "starick-green"}
            contentOnLeft={index % 2 === 1}
            imageAlt="Refugees"
            imagePath="/images/starick-image1.jpg"
          />
        );
      })}
    </>
  );
}

interface SummaryProps {
  title: string;
  content: ReactNode;
  textColour: string;
}

function Summary({ title, content, textColour }: SummaryProps) {
  return (
    <div className="flex flex-col items-center">
      <p className={`text-center text-2xl font-semibold text-${textColour}`}>
        {title}
      </p>
      <br />
      <div className={`text-${textColour} text-md`}>{content}</div>
    </div>
  );
}
