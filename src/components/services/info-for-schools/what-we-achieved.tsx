import React from "react"
import { List } from "../list"
import ServicesSection from "../services-section"
import Link from "next/link"
import SubSection from "../subsection"

export default function AchievedSection() {
    const list1 = ["Developing a respectful relationships education policy and a respectful relationships statement.",
    "Updating the school's Care and Support Policy, which includes a Respectful Relationships and Sexual Education Policy."]
    const list2 = ["Instituting school-wide behaviour expectations and agreements that were upheld by the school’s PBS incentive scheme.", 
    "Designing a respect mural with students.", 
    "Building a \"Respect Wall\", highlighting what respect looks like. This was a student engaging activity.", 
    "Introducing LGBTQI+ accommodations, including gender neutral uniform and toilets."]
    const list3 = ["Engaging parents and caregivers early by sending an introduction letter informing them of their involvement in the program with an invitation for comments.", 
    "Ensuring that all teaching and learning around respectful relationships was communicated via the school’s fortnightly chronicle.  School partners included SDERA, the community health nurse, community police, Holyoake, Narrogin Rainbow Women’s Centre.", 
    "Engaging in NAIDOC Week planning with Aboriginal Elders and organisations."]
    const list4 = ["Ensuring that students affected by FDV receive individualised case management.  This everyday assistance was framed through Culture & Environment and Teaching & Learning Domains."]
    const list5 = ["One school's teaching staff completed Domestic Violence and Complex Trauma training."]
    const subbody = (<>
        <p>The following real examples show what some schools have achieved as a result of engaging with the Starick RRE program.</p>
        <br></br>
        <p className="text-xl font-semibold">Teaching and Learning:</p>
        <br></br>
        <ul>
            <li className = "list-disc list-inside">Creating Coded Zones of Regulation, Respectful Relationships, and PBS to the Curriculum Guidelines.</li>
            <li className = "list-disc list-inside">Producing positive behaviour videos with concrete examples of how to model respect in the school context.</li>
            <li className = "list-disc list-inside">Hosting a <Link href="https://rseproject.org.au/" className='my-link'>Relationships and Sexuality Education (RSE)</Link> Project Sessions with Year 7 – 12 students using teaching resources from the Growing and Developing Healthy Relationships (GDHR) website.</li>
            <li className = "list-disc list-inside">Hosting RSE Project Sessions with Year 6 students to empower students transitioning to high school.</li>
            <li className = "list-disc list-inside">Engaging in the <Link href="https://tomorrowman.com.au/" className='my-link'>Tomorrow Man</Link>/<Link href="https://tomorrowwoman.com.au/" className='my-link'>Tomorrow Woman</Link> Program once a term every term for three years.</li>
        </ul>
        <br></br>
        <br></br>
        <p className="text-xl font-semibold">Policy and Practice:</p>
        <br></br>
        <List items={list1} style="list-disc"/>
        <br></br>
        <p className="text-xl font-semibold">School Culture and Environment:</p>
        <br></br>
        <List items={list2} style="list-disc"/>
        <br></br>
        <p className="text-xl font-semibold">Community Partnerships:</p>
        <br></br>
        <List items={list3} style="list-disc"/>
        <br></br>
        <p className="text-xl font-semibold">Support for staff and students:</p>
        <br></br>
        <List items={list4} style="list-disc"/>
        <br></br>
        <p className="text-xl font-semibold">Professional Learning:</p>
        <br></br>
        <List items={list5} style="list-disc"/>
        <br></br>
    </>)
    const body = (<>
            <SubSection sectionBody={subbody} iconPath="/icons/reports.svg" iconOnRight={true}/>
        </>)
    return <ServicesSection titleTextColour="[--starick-black]" titleBackgroundColour="[--starick-olive]" sectionBody={body} title="What our schools have achieved"/>
}