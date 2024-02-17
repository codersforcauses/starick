import Image from "next/image";

interface PortraitInfo {
  name: string;
  position: string;
  info: string;
  imagePath: string;
}

export default function Portrait({ name, position, info, imagePath }: PortraitInfo) {
  return (
    <>
      <div>
        <img src={imagePath} alt={name} className="h-64 w-auto"/>
        <div className="h-36 bg-starick-green text-starick-white px-4 py-4">
          <p className="font-semibold text-2xl ">{name}</p>
          <p className="pt-6">{position}</p>

        </div>
      </div>
    </>
  );
}
