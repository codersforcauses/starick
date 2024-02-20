import React from "react";
import Image from "next/image";

import HomeSubtitle from "~/images/home/home-subtitle.png";

export default function Subtitle({ title }: { title: string }) {
  return (
    <div className="relative">
      <p className="absolute left-1/4 top-1/2 -translate-y-1/2 transform text-xl font-bold text-starick-white md:text-3xl">
        {title}
      </p>
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
