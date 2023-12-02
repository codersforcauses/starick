import { ReactNode } from "react"

interface SectionProps {
    title: string;
    colour: string;
    sectionBody: ReactNode;
}

export default function Section({ title, colour, sectionBody }: SectionProps) {
    return <div className={`${colour} md:px-40 px-6`}>
        <p className="text-center text-2xl py-8 font-semibold">{title}</p>
        { sectionBody }
    </div>
}