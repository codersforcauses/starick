import { ReactNode } from "react";

interface SubSectionProps {
  iconPath: string;
  sectionBody: ReactNode;
}

export default function SubSection({ sectionBody, iconPath }: SubSectionProps) {
  return (
    <div className="mb-4 flex w-full flex-row">
      <img src={iconPath} className="h-12 w-12 md:h-24 md:w-24" alt="!"></img>
      <div className="pl-3">{sectionBody}</div>
    </div>
  );
}
