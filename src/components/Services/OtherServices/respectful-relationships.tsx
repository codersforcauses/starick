import React from "react";

import ServicesSection from "../services-section";

export default function RespectfulRelationshipsSection() {
  const body = (
    <>
      <p>
        As part of our commitment to preventing violence and building safer
        communities, Starick is delivering the Western Australian Respectful
        Relationships Teaching Support Program (WARRTSP) to primary and
        secondary public schools across Western Australia.
      </p>
      <br></br>
      <p>
        WARRSTP uses a whole-of-school approach to support staff in delivering
        appropriate respectful relationships material in the school curriculum
        and the broader school environment.
      </p>
    <br></br>
      <ul>
        <li>
          Armadale: Walk into Armadale Police Station at 23 Prospect Rd,
          Armadale
        </li>
        <li>
          Cannington: Walk into Cannington Police Station at 1325 Albany Hwy,
          Cannington.
        </li>
      </ul>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="[--starick-white]"
      titleBackgroundColour="[--starick-green]"
      sectionBody={body}
      title="WA Respectful Relationships Teaching Support Program"
      iconPath="images/Icon-CRISIS-150x150.png"
    />
  );
}
