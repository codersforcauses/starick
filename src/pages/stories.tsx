import InPageNav from "@/components/InPageNav";

import Banner from "@/components/Services/banner";

import AnnesStory from "@/components/Stories/annes-story";
import CarolsStory from "@/components/Stories/carols-story";
import HelenasStory from "@/components/Stories/helenas-story";
import BarbarasStory from "@/components/Stories/barbaras-story";
import TaranehsStory from "@/components/Stories/taranehs-story";

export default function Stories() {
    const navLinkDetails = [
        {
            href: "#Anne's Story",
            name: 'Anne\'s Story: "It\'ll never happen to me"'
        },
        {
            href: "#Taraneh's Story",
            name: "Taraneh's Story: Mary Smith Refuge"
        },
        {
            href: "#Carol's Story",
            name: "Carol's Story: Starick House Refuge"
        },
        {
            href: "#Helena's Story",
            name: "Helena's Story: Outreach Services"
        },
        {
            href: "#Barbara's Story",
            name: "Barbara's Story: Transitional Housing"
        }
    ];
    return <>
        <Banner titleText="Our Stories"/>
        <div className="flex justify-center mx-4 mt-12">
            <p className="text-2xl">Moving and courageous stories from the women who have used our service</p>
        </div>
        <InPageNav list={navLinkDetails}/>
        <AnnesStory />
        <TaranehsStory/>
        <CarolsStory />
        <HelenasStory />
        <BarbarasStory />
    </>
}