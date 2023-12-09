import React from "react"

import ServicesSection from "../services-section"

export default function TransitionalHousingSection() {
    const body = (<>
        <p>Starick&apos;s <b>Housing of Women in the Community</b> (HOWIC) program provides transitional medium to long term housing in the south-east metropolitan area for women and children who are escaping family and domestic violence and who would otherwise have difficulty securing safe, affordable housing.</p>
        <br></br>
        <p>In partnership with Access Housing, Starick also provides transitional housing.</p>
        <br></br>
        <p>Transitional housing is primarily used to accommodate Starick clients and clients of other refuges. Ten families can be supported at any one time.</p>
        <br></br>
        <p>Properties are located close to community services and amenities. The location of the properties is important to facilitate our clients&apos; return to independence and stability, and to encourage them to access the services available to them within the community, with the guidance and support of our outreach workers.</p>
        <br></br>
        <p>For information about accessing Starick&apos;s transitional housing, contact Starick&apos;s outreach worker on 9398 5039.</p>
        <br></br>
    </>)
    return <ServicesSection titleTextColour="[--starick-white]" titleBackgroundColour="[--starick-green]" sectionBody={body} title="Transitional Housing" iconPath="icons/houses.svg"/>
}