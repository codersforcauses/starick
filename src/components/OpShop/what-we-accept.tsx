import Section from "../Services/services-section";
import { List } from "../Services/list";

export default function WhatWeAccept() {
    const acceptedItems = ["Babies/Children’s clothing", "Girls/Women’s clothing", "Boy’s/Men’s clothing", "Sleepwear", "Vintage Clothing", "Shoes", "Manchester", "Kitchenware", "Curtaining", "Towelling", "Handbags", "Hats", "Accessories", "Toys and board games", "CD's/DVD's", "Digital device games", "Books for adults and children", "Collectables"];
    const halfIndex = Math.floor(acceptedItems.length/2)
    const body = <>
        <p>We accept a full range of new and used clothing and small homewares. These goods are sold in the op shop to raise funds for our work with women and children escaping family and domestic violence.</p>
        <br />
        <p>Please note we will accept only items that are clean and in good condition</p>
        <p className="font-bold">We accept:</p>
        <br />
        <div className="grid md:grid-cols-2 grid-cols-1">
            {[0,1].map(num => <List items={acceptedItems.slice(num*halfIndex, (num+1)*halfIndex+num)} style="list-disc"/>) }
        </div>
        <br />
        <p>Please clean and fold all clothing, and ensure household and other goods are clean and in good working order.</p>
        <p>Please note that we do not allow direct delivery of donations to the refuges. We ask you to respect this policy, which is for security reasons and because we wish to assess and sort all donations through our Cloverdale op shop before making goods available to our clients.</p>
        <p>Once your donation is sorted by our volunteers, we will check in with the refuges and then deliver any suitable items.</p>
        <p>On an as-needs basis, our refuge and outreach clients receive vouchers from us and can select their own items from the op shop.</p>
        <p className="font-bold">If you have any questions in relation to donations, please call our op shop direct on (08) 6271 0299 during shop opening hours - Mon-Fri 10am-3pm Sat 10am-2pm.</p>
    </>
    return <Section sectionBody={body} title="What We Accept" titleBackgroundColour="starick-green" titleTextColour="starick-white" iconPath="/icons/refugees.svg"/>;
}