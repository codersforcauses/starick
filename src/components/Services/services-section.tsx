import { ReactNode } from "react";

import SectionTitle from "../section-title";

interface SectionProps {
  title: string;
  titleBackgroundColour: string;
  titleTextColour: string;
  sectionBody: ReactNode;
  iconPath?: string;
}

export default function Section({
  title,
  titleBackgroundColour,
  titleTextColour,
  sectionBody,
  iconPath
}: SectionProps) {
  return (
    <div
      className="bg-[--starick-white] px-6 py-2 md:px-32"
      id={title.replace("\n", "")}
    >
      <SectionTitle
        backgroundColour={titleBackgroundColour}
        text={title}
        iconPath={iconPath}
        textColour={titleTextColour}
      />
      <div className="pt-5 md:px-20">{sectionBody}</div>
    </div>
  );
}
