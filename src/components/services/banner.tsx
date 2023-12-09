interface BannerProps {
    titleText: string
    subtitleText?: string
}

export default function Banner ( {titleText, subtitleText}: BannerProps){
    return <div>
        <img src="/images/starick-image1.jpg" className="w-full" alt="banner"></img>
        <div className={`bg-white relative rounded-r-full w-fit mb-6 px-14 ${subtitleText ? "-mt-32" : "-mt-20"}`}>
            <p className="text-[--starick-brown] font-bold text-4xl p-2">{titleText}</p>
            { subtitleText ? <p className="text-[--starick-brown] font-bold text-3xl p-2 text-center">{subtitleText}</p> : null}
        </div>
    </div>
}