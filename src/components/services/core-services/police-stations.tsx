import React from "react"
import ServicesSection from "../services-section"
import { List } from "../list"

export default function PoliceSection() {
    const services = <List items={["Safety planning", 
                        "Case management",
                        "Information on police and legal processes",
                        "Emotional support",
                        "Support to those applying for a Family Violence Restraining Order or attending court",
                        "Assistance with income support",
                        "Referral to other services and agencies as appropriate"]} />

    const body = (<><p>Our domestic violence advocates are based at local police stations and offer an advocacy service, safety planning and case management with court support. They can also refer you to legal and other services:</p>
                    <ul>
                        <li>Armadale: Walk into Armadale Police Station at 23 Prospect Rd, Armadale</li>
                        <li>Cannington: Walk into Cannington Police Station at 1325 Albany Hwy, Cannington.</li>
                    </ul>
                <p>Our domestic violence advocates provide a range of services including:</p>
                { services }
                <br></br>
    </>)
    return <ServicesSection titleTextColour="[--starick-black]" titleBackgroundColour="[--starick-olive]" sectionBody={body} title="Support in Police Stations" iconPath="images/Icon-CRISIS-150x150.png"/>
}