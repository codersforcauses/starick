import { ReactNode } from "react"

interface SubSectionProps {
    iconPath: string;
    sectionBody: ReactNode;
}

export default function SubSection({ sectionBody, iconPath}: SubSectionProps) {
    return (
    <div className="flex flex-row mb-4 w-full">
        <img src={iconPath} className="w-24 h-24" alt="!"></img>
        <div className="pl-3">
            { sectionBody }
        </div>
    </div>
    );
}