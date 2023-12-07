interface SectionTitleProps {
    text: string
    backgroundColour: string
    textColour: string
    iconPath?: string
}

export default function SectionTitle({ text, backgroundColour, textColour, iconPath}: SectionTitleProps) {
    return <div className={`bg-${backgroundColour} h-24 p-3`}>
        <div className = {`bg-${backgroundColour} border-solid border-[--starick-white] border-4 h-full flex flex-row items-center justify-center`}>
            {iconPath ? <img src={iconPath} className="w-12 mx-2" alt={text}></img> : null}
            <p className={`text-2xl font-semibold align-middle text-${textColour} mx-2`}>{text}</p>
        </div>
    </div>
}