import { ReactNode } from "react";

import SectionHeader from "../section-header";

interface SectionProps {
  title: string;
  titleBackgroundColour: string;
  titleTextColour: string;
  textOnLeft: boolean;
  sectionBody: ReactNode;
}

export default function Section({
  title,
  titleBackgroundColour,
  titleTextColour,
  sectionBody,
  textOnLeft,
}: SectionProps) {
  return (
    <div
      className="bg-starick-white px-6 py-2 md:px-32"
      id={title.replace("\n", "")}
    >
      <SectionHeader
        backgroundColour={titleBackgroundColour}
        titleText={title}
        imagePath="/images/starick-image1.jpg"
        textOnLeft={textOnLeft}
        textColour={titleTextColour}
      />
      <div className="pt-5 md:px-20">{sectionBody}</div>
    </div>
  );
}
