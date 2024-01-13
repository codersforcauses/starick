import InPageNav from "@/components/InPageNav";

import Banner from "@/components/Services/banner";

import AnnesStory from "@/components/Stories/annes-story";
import CarolsStory from "@/components/Stories/carols-story";
import HelenasStory from "@/components/Stories/helenas-story";

export default function Stories() {
    const navLinkDetails = [
        {
            href: "#Anne's Story",
            name: 'Anne\'s Story: "It\'ll never happen to me"'
        },
    ];
    return <>
        <Banner titleText="Our Stories"/>
        <div className="flex justify-center mx-4 mt-12">
            <p className="text-2xl">Moving and courageous stories from the women who have used our service</p>
        </div>
        <InPageNav list={navLinkDetails}/>
        <AnnesStory />
        <CarolsStory />
        <HelenasStory />
    </>
}