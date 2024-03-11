import Link from "next/link";
import Image from "next/image";

import InPageNav from "@/components/InPageNav";
import PageHeader from "@/components/page-header";

import Donate from "./donation/donate";
import FinancialDonations from "./donation/financial-donations";
import PageSummary from "@/components/page-summary";
import BottomRightDecoratedContent from "@/components/page-bottom-right-circle";

import { ReactNode } from "react";


export default function Donation() {

    const containerBody = (
        <>
        <div>
            <div className = "mb-10">
                <p>You can donate your refund to Starick using the Starick SCHEME ID : C10289306</p>
            </div>
            <div className = "flex justify-center" >
            <div className = "w-3/4">
                <p  className = "mb-3">To Support Starick and recycle at the same time</p>
                <ol className = "ml-6 list-decimal text-start">
                    <li className = "mb-3">Find your closest point at the containers for change website</li>
                    <li className = "mb-3">Collect eligible drink containers (check the label to see if it carries 10c return information)</li>
                    <li className = "mb-3">Take your containers to the refund point</li>
                    <li className = "mb-3">Use the Starick Scheme ID C10289306. You can also download our barcode for scanning by clicking below</li>
                    <li className = "mb-3">The donation is sent directly to Starick from the refund point</li>
                </ol>
            </div>
            <div>
                <img />
                <img />
                <p></p>
            </div>
            <div>
                <img />
                <img />
            </div>
            </div>
            
        </div>
        </>
    )

    const donateServices = (
        <div>
            Hello World
        </div>
    )

    const Ideasbody =(
        <div className = "flex justify-center mb-10">
        <div style = {{maxWidth : "70%"}}>
            <div>
                <p className = "text-2xl font-bold my-10">More Ideas and Ways You can Help</p>
            </div>
            <div className="grid grid-cols-3">
                    <p className = "col-span-1 text-xl font-bold">Fund a Family Camp</p>
                    <div className = "col-span-2 text-start mb-8">
                        <p className="mb-5">
                        Like Vivienne Stewart and Mandy Loton, you could fund a family camp or
                        other activity for women and their children.
                        </p>
                        <p className="mb-5">
                        Vivienne and Mandy fund a good, old-fashioned family camp in country WA.
                        Their donation provides women and their children with some time out and a
                        range of activities to build self-confidence and strengthen relationships
                        between mothers and their children. For many families, the camp is their
                        first holiday away together.
                        </p>
                    </div>
                    <p className="col-span-1 text-xl font-bold">Sponsor a Starick Family</p>
                    <div className="col-span-2 text-start mb-8">
                        <p className="mb-5">
                        You could follow the lead of the New Apostolic Church in Rivervale WA, and provide goods to a family for a year to help them get back on their feet.
                        </p>
                        <p className="mb-5">
                        This local church group sponsors a family with a fortnightly food hamper and gifts for birthdays and other special occasions.
                        </p>
                    </div>
                    <p className="col-span-1 text-xl font-bold">Run a Fundraiser on our Behalf</p>
                    <div className="col-span-2 text-start mb-8">
                        <p className="mb-5">You could run a fundraising campaign amongst your friends or colleagues and donate the funds to Starick - it's easy to do via our charity page on Gofundraise.</p>
                        <p className="mb-5">We receive donations from organisations, individuals and community groups who support our services throughout the year, and who also schedule fundraising events on our behalf.</p>
                        <p className="mb-5">Need some ideas? Here are some examples of individuals and groups who donated the proceeds of their event to us:</p>
                </div>
            </div>
            <div className = "text-start">
                <p className="mb-8 text-xl font-bold">Take inspiration from some previously run fundraisers</p>
            </div>
            <div className = "text-start mb-10">
                <p>Soroptimists of South Perth ran an annual fundraising breakfast - Maddie Mulholland and her friends organised a Clothes Swap - Southern River College held a sausage sizzle fundraiser - Sundowners Ladies Golf Club hosted a fundraising lunch - Gelo, a local promotions organisation, organised a Craptastic fundraising quiz night - WA Poets ran a performance poetry event and donated the door takings</p>
            </div>
        </div>
        </div>
        
    )

  return (
    <>
      <PageHeader titleText="Donations" />
      <Donate />
      <FinancialDonations />
      <img
        src="/images/home/_MG_9216.jpg"
        alt="Section breaker"
      />
      <div>
        <p>

        </p>
        <p>

        </p>
      </div>
        <div className={`flex h-36 w-full flex-col items-center justify-center bg-starick-orange`}>
            <p className="text-xl font-bold text-starick-white">All donations over $2 are tax deductible.</p>
            <p className="text-base text-starick-white mt-5">Starick is registered as a charity with the Australian Charities and Not-for-profits Commission, ABN 56 721 993 085.</p>
        </div>
        <PageSummary
              content={
                <Summary
                  title="Donate your containers for change refunds to Starick"
                  text={containerBody}
                  textColour="starick-white"
                />
              }
              backgroundColour="starick-green"
              contentOnLeft={false}
              imageAlt="Donate"
              imagePath="/placeholder_starick_logo.png"
        />
        <PageSummary
              content={
                <Summary
                  title="Donate your Services"
                  text={donateServices}
                  textColour="starick-black"
                />
              }
              backgroundColour="starick-olive"
              contentOnLeft={true}
              imageAlt="Donate"
              imagePath="/placeholder_starick_logo.png"
        />
        <BottomRightDecoratedContent 
        children={Ideasbody}
        bottomRightCircle="/images/circles/crop-2.png"
        />


    </>
  );
}

interface SummaryProps {
    title: string;
    text: string | ReactNode;
    textColour: string;
  }


function Summary({
    title,
    text,
    textColour,
  }: SummaryProps) {
    return (
      <div className="flex flex-col items-center">
        <p className={`text-center text-xl font-semibold text-${textColour}`}>
          {title}
        </p>
        <br />
        <p className={`text-center text-${textColour}`}>{text}</p>
        <br />
      </div>
    );
  }
  