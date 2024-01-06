export default function ResourceToolkitItem({text, backgroundColor}: {text: string; backgroundColor: string}) {
    return <div className={`flex flex-row bg-${backgroundColor} h-full items-center`}>
        <div className="bg-neutral-200 my-2 ml-8 h-28 w-20"></div>
        <p className="ml-4">{text}</p>
    </div>
}