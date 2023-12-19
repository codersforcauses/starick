import Image, { StaticImageData } from "next/image";

interface ItemProps {
  img: StaticImageData;
  text: string;
}

const CoreServiceItem: React.FC<ItemProps> = ({ img, text }) => {
  return (
    <div className="flex items-center justify-items-start">
      <Image src={img} alt="description" width={150} height={150} />
      <p className="ml-20 font-bold text-starick-white">{text}</p>
    </div>
  );
};
export default CoreServiceItem;
