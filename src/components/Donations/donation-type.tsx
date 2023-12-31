import Image, { StaticImageData } from "next/image";

interface ItemProps {
  image: StaticImageData;
  text: string;
}

export default function DonationTitle({ image, text }: ItemProps) {
  return (
    <div className="flex flex-col">
      <Image
        src={image}
        alt="description"
        width="0"
        height="0"
        sizes="100vw"
        className="h-auto w-full self-center"
      />
      <p className="font-bold italic text-starick-brown">{text}</p>
    </div>
  );
}
