import React, { ReactNode } from 'react';
import Image from 'next/image';

interface DecoratedContentProps {
  children ?: ReactNode;
  topRightCircle: string;
  bottomLeftCircle: string;
}

export default function DecoratedContent({ children, topRightCircle, bottomLeftCircle } : DecoratedContentProps){
  return (
    <div className="relative flex items-center justify-center ">
      {/* Content */}
      <div className="text-center z-30">
        {children}
      </div>

      {/* Top Right Circle */}
      <div className="absolute top-0 right-0 z-20 opacity-80">
        <Image src={topRightCircle} alt="Top Right Circle" width={400} height={400}/>
      </div>

      {/* Bottom Left Circle */}
      <div className="absolute bottom-0 left-0 z-20 opacity-80">
        <Image src={bottomLeftCircle} alt="Bottom Left Circle" width={400} height={400} />
      </div>
    </div>
  );
};

