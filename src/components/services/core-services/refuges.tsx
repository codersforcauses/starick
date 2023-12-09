import React from "react"
import ServicesSection from "../services-section"
import SubSection from "../subsection"
import { List } from "../list"
import Link from "next/link"

export default function RefugesSection() {
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

    const subBody = <div className="pl-3">
        <p>If you are in immediate physical danger, call the police now on 000. If you are not in immediate danger and would prefer to speak to a support worker at one of our refuges:</p>
        <br></br>
        <ul><li className="list-disc list-inside">Phone (08) 9458 1107</li></ul>
    </div>;

    const body = (<><SubSection sectionBody={subBody} iconPath="images/Icon-CRISIS-150x150.png"/>
                <div>
                    <p>Starick&apos;s two refuges, Mary Smith Refuge and Starick House, offer short term crisis accommodation for women and children who need a safe place to stay where they are supported and offered access to free professional services to help them escape the violence and make plans for their future.</p>
                    <br></br>
                    <p>Child advocates and women&apos;s advocates are employed at both refuges, and counselling is available to women and their children.</p>
                    <br></br>
                    <p className="text-xl font-semibold">How we support the women in our refuges</p>
                    <br></br>
                    <p>Our refuge teams work hard to provide an integrated service, with the aim of increasing a client&apos;s sense of safety and wellbeing. The support provided at our refuges includes:</p>
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
                    <p>Support from Starick continues after women and children leave our refuges through our <Link href="/services/outreach/" className='my-link'>outreach services</Link>.</p> 
                    <br></br>
                    <p>For answers to some of the most frequently asked questions about domestic violence and our refuges click <Link href="/faq/" className='my-link'>here</Link>.</p>
                    <br></br>
                    <p>You can also read the stories of women who have stayed in a Starick refuge <Link href="/about/stories/" className='my-link'>here</Link>.</p>
                    <br></br>
                    <p>For crisis accommodation contact information, go to our <Link href="/contact/useful-numbers/" className='my-link'>useful numbers</Link> page.</p>
                    <br></br>
                </div></>)
    return <ServicesSection titleTextColour="[--starick-black]" titleBackgroundColour="[--starick-olive]" sectionBody={body} title="Refuges" iconPath="images/Icon-CRISIS-150x150.png"/>
}