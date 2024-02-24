import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ItemProps {
  img: StaticImageData;
  text: string;
}

export default function CoreServiceItem({ img, text }: ItemProps) {
  return (
    <div className="flex items-center justify-items-start">
      <div className="relative h-24 w-24">
        <Image src={img} alt="description" layout="fill" objectFit="cover" />
      </div>
      <p className="ml-20">{text}</p>
    </div>
  );
}
