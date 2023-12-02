import { ReactNode } from "react"

interface SectionProps {
    title: string;
    colour: string;
    sectionBody: ReactNode;
}

export default function Section({ title, colour, sectionBody }: SectionProps) {
    return <div className={`${colour} px-40`}>
        <p className="text-center text-2xl pt-1 font-semibold">{title}</p>
        { sectionBody }
    </div>
}