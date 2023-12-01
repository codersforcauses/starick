import DropDown from '../components/dropdown'

function List({ items }: {items: String[]}) {
    return (<ul>
        {items.map((text, index) => <li className="list-disc list-inside" key={index}>{text}</li>)}
        </ul>
    );
}

export default function CoreServices() {
    const refugeSupportExamples = <List items={["Emotional support", 
    "Information and referral to relevant services", 
    "Counselling",
    "Case management",
    "Conducting risk assessments",
    "Safety plans"]}/>
    const childrenServicesExamples = <List items={["Emotional support", 
    "Referral to relevant services", 
    "Counselling",
    "Out-of-school activities and school holiday programs",
    "Homework support",
    "Art-related activities"]}/>

    return (
        <>
            <div className="h-10 text-center bg-[--starick-green]">Navbar - replace with component later</div>
            <div className="bg-neutral-200 flex flex-col justify-center items-center px-40">
                <p className="text-center text-2xl mt-1 font-semibold">Core Services</p>
                <DropDown />
            </div>
            <img src={"images/starick-image1.jpg"}></img>
            <div className="bg-neutral-200 flex flex-col justify-center items-center px-40">
                <p className="text-center text-2xl pt-1 font-semibold">Refuges</p>
                <br></br>
                <div className="flex flex-row items-center mb-4 w-full">
                    <img src={"images/Icon-CRISIS-150x150.png"} className="w-24 h-24"></img>
                    <div className="pl-3">
                        <p>If you are in immediate physical danger, call the police now on 000. If you are not in immediate danger and would prefer to speak to a support worker at one of our refuges:</p>
                        <br></br>
                        <ul><li className="list-disc list-inside">Phone (08) 9458 1107</li></ul>
                    </div>
                </div>
                <div>
                    <p>Starick's two refuges, Mary Smith Refuge and Starick House, offer short term crisis accommodation for women and children who need a safe place to stay where they are supported and offered access to free professional services to help them escape the violence and make plans for their future.</p>
                    <br></br>
                    <p>Child advocates and women's advocates are employed at both refuges, and counselling is available to women and their children.</p>
                    <br></br>
                    <p className="text-xl font-semibold">How we support the women in our refuges</p>
                    <br></br>
                    <p>Our refuge teams work hard to provide an integrated service, with the aim of increasing a client's sense of safety and wellbeing. The support provided at our refuges includes:</p>
                    {refugeSupportExamples}
                    <br></br>
                    <p>We also offer our clients a range of other services and programs, to support their wellbeing.</p>
                    <br></br>
                    <p className="text-xl font-semibold">How we support the children in our refuges</p>
                    <br></br>
                    <p>Starick also provides support and programs specifically aimed at the children living in our refuges.</p>
                    <br></br>
                    <p>Starick has been at the forefront of recognising the impact of family and domestic violence on children and developing our services for children. Our focus on children continues through the work of our child advocates, who ensure that the supports and programs offered are effectively meeting the diverse needs of the children living at both refuges.</p>
                    <br></br>
                    <p>Our services for children currently include:</p>
                    {childrenServicesExamples}
                    <br></br>
                    <p>Support from Starick continues after women and children leave our refuges through our outreach services.</p>
                    <br></br>
                    <p>For answers to some of the most frequently asked questions about domestic violence and our refuges click here.</p>
                    <br></br>
                    <p>You can also read the stories of women who have stayed in a Starick refuge here.</p>
                    <br></br>
                    <p>For crisis accommodation contact information, go to our useful numbers page.</p>
                </div>
            </div>
        </>
    );
}