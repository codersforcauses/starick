import Image from "next/image";

interface PortraitInfo {
  name: string;
  position: string;
  info: string;
  imagePath: string;
}

export default function Portrait({ name, position, info, imagePath}: PortraitInfo) {
  return (
    <>
      <div>
        {/* Image container */}
        <div className="flex justify-center ">
          <img src={imagePath} alt={name} className="w-60 h-60 object-cover"/>
        </div>

        {/* Text box container */}
        <div className = "flex justify-center">
        <div className="h-36 w-60 px-2 bg-starick-green text-white p-5">
          <p className="font-semibold text-2xl pb-2">{name}</p>
          <p>{position}</p>
        </div>
        </div>
      </div>
    </>
  );
}
