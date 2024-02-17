import Image from "next/image";

interface PortraitInfo {
    name: string;
    info: string;
    imagePath: string;
}

export default function Portrait( {
    name,
    info,
    imagePath }: PortraitInfo) {

    return(
        <>
        <p>{name}</p>
        <Image src = {imagePath} alt={name} width={200} height={200}/>

        </>
    )

}