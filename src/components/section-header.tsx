import Image from "next/image";

interface SectionHeaderProps {
    backgroundColour: string;
    textColour: string;
    textOnLeft: boolean;
    imagePath: string;
    titleText: string;
}

export default function SectionHeader({backgroundColour, textColour, textOnLeft, imagePath, titleText}: SectionHeaderProps) {
    const sectionHeaderHeight: number = 24;
    
    const textSection = <div className={`bg-${backgroundColour} flex w-full items-center`}>
        <div className="px-12 w-full">
            <p className={`text-${textColour} w-full text-lg font-semibold ${textOnLeft ? "text-right" : "text-left"}`}>{titleText}</p>
        </div>
    </div>
    const imageSection = <div className="flex w-full">
        <Image src={imagePath} alt={titleText} width={1000} height={1000}/>
    </div>
    return <div className={`flex flex-row w-full h-${sectionHeaderHeight}`}>
        {textOnLeft ? <>{textSection}{imageSection}</> : <>{imageSection}{textSection}</>}
    </div>
}