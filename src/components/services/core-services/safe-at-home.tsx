import React from "react"
import ServicesSection from "../services-section"
import SubSection from "../subsection"
import { List } from "../list"

export default function SafeAtHomeSection() {
    const subbody1 = (<>
        <p className="text-xl font-semibold">What is the Safe at Home program?</p>
        <br></br>
        <p>Starick&apos;s Safe at Home program is designed to help women and children experiencing domestic or family violence to stay safely in their homes after separation from their abuser.</p>
        <br></br>
        <p className="text-xl font-semibold">Who can use Safe at Home?</p>
        <br></br>
        <p>Starick&apos;s Safe at Home program is available to any woman living in our catchment area who is experiencing domestic or family violence and wants to remain in her own home.</p>
        <br></br>
        <p>This includes women with or without children. The service is free, confidential and sensitive to the needs of women.</p>
    </>)
    const subbody2 = (<>
        <p className="text-xl font-semibold">What can the Safe at Home program offer?</p>
        <br></br>
        <p>Our Safe at Home outreach workers can assist you in the following ways:</p>
        <br></br>
        <List items={["Carrying out a risk assessment and safety audit of your home.", 
        "Help with safety planning for you and your children.", 
        "Upgrading home security.", "Emotional and practical support.", 
        "Looking at other ways to help women and their children stay safe including physical, emotional, financial, and legal needs.", 
        "Providing information and referrals to other avenues of support.", "Advocacy with relevant agencies"]}/>
    </>)
    const subbody3 = (<>
        <p className="text-xl font-semibold">What is our catchment area for Safe at Home?</p>
        <br></br>
        <p>Any woman living in the following suburbs can use Starick&apos;s Safe at Home program:</p>
        <br></br>
        <p>Ascot, Belmont, Bickley, Burswood, Canning Mills, Carlisle, Carmel, Cloverdale, Darlington, East Perth, East Victoria Park, Forrestfield, Glen Forrest, Gooseberry Hill, Hacketts Gully, High Wycombe, Hovea, Jane Brook, Kalamunda, Kensington, Kewdale, Lathlain, Lesmurdie, Mahogany Creek, Maida Vale, Mundaring, Parkerville, Paulls Valley, Perth, Perth Airport, Piesse Brook, Redcliffe, Rivervale, South Kalamunda, St James, Stoneville, Victoria Park, Walliston, Wattle Grove and Welshpool.</p>
    </>)
    const body = <>
        <SubSection iconPath="images/What-is-150x150.png" sectionBody={subbody1}/>
        <SubSection iconPath="images/Lived-Experience-150x150.png" sectionBody={subbody2}/>
        <SubSection iconPath="images/Icons_Safe-at-Home-catchment-area-150x150.png" sectionBody={subbody3}/>
    </>
    return <ServicesSection titleTextColour="[--starick-white]" titleBackgroundColour="[--starick-green]" sectionBody={body} title="Safe at Home Program" iconPath="images/Icon-CRISIS-150x150.png"/>
}