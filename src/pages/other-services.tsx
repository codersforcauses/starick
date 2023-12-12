import Link from "next/link";

import InPageNav from "@/components/InPageNav";


export default function OtherServices() {
    const navLinkDetails = [
        {
          href: "#WA Respectful Relationships Teaching Support Program",
          name: "WA Respectful Relationships Teaching Support Program"
        },
        {
          href: "#Our Work with Children and Young People",
          name: "Our Work with Children and Young People"
        },
        {
          href: "#Workplace Awareness",
          name: "Workplace Awareness"
        },
        {
          href: "#Health and Wellbeing",
          name: "Health and Wellbeing"
        },
        {
          href: "#Thriving Through Connection",
          name: "Thriving Through Connection"
        }
      ];
    return (
        <>
            <div>
                <img src="images/starick-image1.jpg" className="w-full" alt=""></img>
                <div className="relative -mt-20 mb-6 w-fit rounded-r-full bg-white px-14">
                    <p className="p-2 text-4xl font-bold text-[--starick-brown]">
                    Other Services
                    </p>
                </div>
            </div>
            <InPageNav list={navLinkDetails}></InPageNav>
        </>
    );
}