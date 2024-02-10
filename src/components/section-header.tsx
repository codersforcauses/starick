import Image from "next/image";

interface SectionHeaderProps {
    backgroundColour: string;
    textColour: string;
    textOnLeft: boolean;
    imagePath: string;
    titleText: string;
}

export default function SectionHeader({backgroundColour, textColour, textOnLeft, imagePath, titleText}: SectionHeaderProps) {
    
    const textSection = <div className={`bg-${backgroundColour} flex w-full items-center ${textOnLeft ? "order-first" : "order-last"} px-12 w-full`}>
        <p className={`text-${textColour} w-full text-lg font-semibold ${textOnLeft ? "text-right" : "text-left"}`}>{titleText}</p>
    </div>
    const imageSection = <div className="relative">
        <Image src={imagePath} alt={titleText} fill/>
    </div>
    return <div className={`grid grid-cols-2 h-24`}>
        {textSection}{imageSection}
    </div>
}