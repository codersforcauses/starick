import { ReactNode } from "react"
import SectionTitle from "../section-title"

interface SectionProps {
    title: string
    titleBackgroundColour: string
    titleTextColour: string;
    sectionBody: ReactNode
    iconPath?: string
}

export default function Section({ title, titleBackgroundColour, titleTextColour, sectionBody, iconPath }: SectionProps) {
    return <div className={`bg-[--starick-white] md:px-32 px-6 py-2`}>
        <SectionTitle backgroundColour={titleBackgroundColour} text={title} iconPath={iconPath} textColour={titleTextColour}/>
        <div className="pt-5 md:px-20">
            { sectionBody }
        </div>
        
    </div>
}