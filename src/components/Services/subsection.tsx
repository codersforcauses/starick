import { ReactNode } from "react";

interface SubSectionProps {
  iconPath: string;
  sectionBody: ReactNode;
  iconOnRight: boolean;
}

export default function SubSection({
  sectionBody,
  iconPath,
  iconOnRight
}: SubSectionProps) {
  const icon = (
    <img
      src={iconPath}
      className="mx-2 h-12 w-12 md:h-24 md:w-24"
      alt="!"
    ></img>
  );
  const body = <div className="pl-3 grow">{sectionBody}</div>;
  const combined = iconOnRight ? (
    <>
      {body}
      {icon}
    </>
  ) : (
    <>
      {icon}
      {body}
    </>
  );
  return <div className="mb-4 flex w-full flex-row">{combined}</div>;
}
