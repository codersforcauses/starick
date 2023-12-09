import React from "react"
import ServicesSection from "../services-section"
import { List } from "../list"
import SubSection from "../subsection"

export default function ProgramComponents() {
    const list = ["Info Session", "e-Learning", "Workshop 1", "Post-workshop Visit", "Workshop 2", "Post-workshop Visit", "Tailored support is also provided throughout this period to meet the needs of individual schools"]
    const subbody = (<>
        <p>Schools participating in the WARRTSP are supported via the following components:</p> 
        <List items={list}/>
    </>)
    const body = <SubSection iconPath="/icons/resources.svg" sectionBody={subbody}/>
    return <ServicesSection titleTextColour="[--starick-white]" titleBackgroundColour="[--starick-green]" sectionBody={body} title="Program Components" />
}