export default function QuoteBlock({text} : {text: string}) {
    return <div className="bg-starick-orange rounded-3xl px-4 py-10">
        <p className="text-starick-white text-lg font-semibold">{text}</p>
    </div>
}