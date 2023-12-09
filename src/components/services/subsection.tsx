import { ReactNode } from "react"

interface SubSectionProps {
    iconPath: string;
    sectionBody: ReactNode;
    iconOnRight: boolean;
}

export default function SubSection({ sectionBody, iconPath, iconOnRight}: SubSectionProps) {
    const icon = <img src={iconPath} className="md:w-24 md:h-24 w-12 h-12 mx-2" alt="!"></img>
    const body = <div className="pl-3">
            { sectionBody }
        </div>
    if (iconOnRight) {
        var combined = <>{body}{icon}</>
    } else {
        var combined = <>{icon}{body}</>
    }
    return (
    <div className="flex flex-row mb-4 w-full">
        {combined}
    </div>
    );
}