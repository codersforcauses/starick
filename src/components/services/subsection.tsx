import { ReactNode } from "react"

interface SubSectionProps {
    iconPath: string;
    sectionBody: ReactNode;
}

export default function SubSection({ sectionBody, iconPath}: SubSectionProps) {
    return (
    <div className="flex flex-row mb-4 w-full">
        <img src={iconPath} className="md:w-24 md:h-24 w-12 h-12" alt="!"></img>
        <div className="pl-3">
            { sectionBody }
        </div>
    </div>
    );
}