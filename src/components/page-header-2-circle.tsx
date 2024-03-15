import React, { ReactNode } from "react";
import Image from "next/image";

interface DecoratedContentProps {
  content?: ReactNode;
  topRightCircle: string;
  bottomLeftCircle: string;
}

export default function DecoratedContent({
  content,
  topRightCircle,
  bottomLeftCircle
}: DecoratedContentProps) {
  return (
    <div className="relative flex items-center justify-center ">
      {/* Content */}
      <div className="z-30 text-center">{content}</div>

      {/* Top Right Circle */}
      <div className="absolute right-0 top-0 z-20 opacity-80">
        <Image
          src={topRightCircle}
          alt="Top Right Circle"
          width={400}
          height={400}
        />
      </div>

      {/* Bottom Left Circle */}
      <div className="absolute bottom-0 left-0 z-20 opacity-80">
        <Image
          src={bottomLeftCircle}
          alt="Bottom Left Circle"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
