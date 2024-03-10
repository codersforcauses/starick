import Image from "next/image";

import SectionHeader from "@/components/section-header";

export default function WhoWeAre() {
  const body = (
    <div className="grow pl-3">
      <p>
        Starick is an independent, not for profit organisation with charitable
        status based in Perth&apos;s south-eastern metropolitan region and
        working to end family and domestic violence. We assist women, young
        people and children experiencing abuse, whether by a partner or by
        another family member.
      </p>
      <br />
      <p>
        Starick employs a team of dedicated staff who support, advocate and
        provide resources to women and children escaping domestic violence. We
        also refer our clients to other community resources.
      </p>
      <br />
      <p>
        The dedicated Starick team comprises our managers and staff, board and
        volunteers.
      </p>
      <br />
    </div>
  );
  return (
    <div className="bg-starick-white">
      <SectionHeader
          backgroundColour="starick-green"
          titleText="Who We Are"
          imagePath="/images/starick-image1.jpg"
          textOnLeft={false}
          textColour="starick-white"
        />
      <div className = "flex justify-center">
      <div className="my-6 flex w-3/4 flex-row py-2 pt-5 md:px-10">
        <Image
          src="icons/identity.svg"
          className="mr-10 h-12 w-12 md:h-24 md:w-24"
          height={100}
          width={100}
          alt="identity"
        />
        {body}
      </div>
      </div>
      
    </div>
  );
}
