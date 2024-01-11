import Image, {StaticImageData} from "next/image";
import HomeSubtitle from "~/images/home/home-subtitle.png"


export default function Subtitle({title}: { title: string }) {
    return (
        <div className="relative">
            <p className="absolute font-bold text-xl md:text-3xl text-starick-white left-1/4 top-1/2 transform -translate-y-1/2">{title}</p>
            <Image
                src={HomeSubtitle}
                alt="description"
                width="0"
                height="0"
                className="h-auto w-full"
            />
        </div>
    );
}
