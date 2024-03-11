import React, { ReactNode } from 'react';
import Image from 'next/image';

interface DecoratedContentProps {
  children ?: ReactNode;
  bottomRightCircle: string;
}

export default function BottomRightDecoratedContent({ children, bottomRightCircle } : DecoratedContentProps){
  return (
    <div className="relative flex items-center justify-center ">
      {/* Content */}
      <div className="text-center z-30">
        {children}
      </div>

      {/* Top Right Circle */}

      {/* Bottom Left Circle */}
      <div className="absolute bottom-0 right-0 z-20 opacity-80">
        <Image src={bottomRightCircle} alt="Bottom Left Circle" width={400} height={400} />
      </div>
    </div>
  );
};

