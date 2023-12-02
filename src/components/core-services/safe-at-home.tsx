import React from "react"
import ServicesSection from "./services-section"

export default function SafeAtHomeSection() {
    const body = (<>
        <p>What is the Safe at Home program?</p>
    </>)
    return <ServicesSection colour="bg-white-200" sectionBody={body} title="Safe At Home Program" />
}