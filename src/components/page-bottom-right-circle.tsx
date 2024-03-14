import React, { ReactNode } from "react";
import Image from "next/image";

interface DecoratedContentProps {
  content?: ReactNode;
  bottomRightCircle: string;
}

export default function BottomRightDecoratedContent({
  content,
  bottomRightCircle
}: DecoratedContentProps) {
  return (
    <div className="relative flex items-center justify-center ">
      {/* Content */}
      <div className="z-30 text-center">{content}</div>

      {/* Top Right Circle */}

      {/* Bottom Left Circle */}
      <div className="absolute bottom-0 right-0 z-20 opacity-80">
        <Image
          src={bottomRightCircle}
          alt="Bottom Left Circle"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
