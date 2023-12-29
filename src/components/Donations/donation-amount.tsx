import Image from "next/image";

import BequestIcon7 from "~/images/donations/bequests/BequestIcon7.png";
import BequestIcon8 from "~/images/donations/bequests/BequestIcon8.png";

interface ItemProps {
  pos: boolean;
  amount: string;
  description: string;
}

export default function DonationAmount({
  pos,
  amount,
  description
}: ItemProps) {
  if (pos) {
    return (
      <div className="grid grid-cols-2 place-items-center">
        <div className="relative min-w-[160px] max-w-[60%]">
          <p className="absolute left-1/2 top-1/2 -translate-x-2/3 -translate-y-1/2 transform font-bold text-starick-white sm:text-xs md:text-xl lg:text-2xl xl:text-4xl">
            {amount}
          </p>
          <Image
            src={BequestIcon7}
            alt="description"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full min-w-[160px]"
          />
        </div>
        <p className="m-10">{description}</p>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 place-items-center">
        <p className="m-10">{description}</p>
        <div className="relative min-w-[160px] max-w-[60%]">
          <p className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-bold text-starick-white sm:text-xs md:text-xl lg:text-2xl xl:text-4xl">
            {amount}
          </p>
          <Image
            src={BequestIcon8}
            alt="description"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full min-w-[160px]"
          />
        </div>
      </div>
    );
  }
}
