import CoreServiceItem from "@/components/Home/core-service-item";
import Subtitle from "@/components/Home/subtitle";

import CounsellingServices from "~/images/home/counselling-services.png";
import SafeAtHomeProgram from "~/images/home/safe-at-home-program.png";
import SupportInPoliceStations from "~/images/home/support-in-police-stations.png";
import TransitionalHousing from "~/images/home/transitional-housing.png";
import TwoRefuges from "~/images/home/two-refuges.png";
import Image from "next/image";
import Staricklogo from "~/icons/starick-logo.svg";
import HomeTitle from "~/images/home/home-title.png";
import LinkButton from "@/components/Home/link-button";
import Poster1 from "~/images/home/poster1.png";
import Poster2 from "~/images/home/poster2.png";
import Poster3 from "~/images/home/poster3.png";
import EventMap from "~/images/home/event-map.png";

export default function Home() {
  return (
    <>
      <div className="relative">
        <p className="md:bottom-15 absolute bottom-10 left-10 w-2/5 text-2xl font-semibold text-starick-white md:left-20 md:text-3xl">
          Domestic Violence Support Services for Women and Children
        </p>

        <Image
          src={HomeTitle}
          alt="description"
          width="0"
          height="0"
          className="h-auto w-full"
        />
      </div>
      <div className="bg-starick-orange py-2 pl-6 text-starick-black">
        <p>
          If you need urgent help, call Crisis Care: <br />
          (08) 9223 1111 or Country Freecall: 1800 199 008 <br />
          <br />
          If you are in immediate physical danger, call Police: 000
        </p>
      </div>
      <div className="pb-10 pt-56">
        <p className="mx-auto w-4/5">
          Starick is a charity supporting women and children escaping domestic
          and family violence. We work predominantly in Perth&apos;s
          south-eastern metropolitan region. Our vision is to build futures free
          from violence for the women and children who use our service and for
          the community as a whole.
        </p>
        <Image
          src="/icons/starick-logo.svg"
          alt="starick logo"
          width="0"
          height="0"
          className="mx-auto h-auto w-1/3"
        />
      </div>

      <Subtitle title="Our Services" />

      <div className="grid gap-10 px-10 py-20 font-semibold  text-starick-black">
        <p className="text-center text-2xl">Core Services</p>

        <div className="grid grid-cols-1 gap-10 px-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="grid gap-10">
            <CoreServiceItem
              text="Counselling Services"
              img={CounsellingServices}
            />
            <CoreServiceItem
              text="Transitional Housing"
              img={TransitionalHousing}
            />
          </div>

          <div className="grid gap-10">
            <CoreServiceItem text="Two Refuges" img={TwoRefuges} />
            <CoreServiceItem
              text="Support in Police Stations"
              img={SupportInPoliceStations}
            />
          </div>
        </div>
        <div className="grid px-10  lg:justify-center">
          <CoreServiceItem
            text="Safe at Home Program"
            img={SafeAtHomeProgram}
          />
        </div>
      </div>

      <div className="grid gap-10 px-10 font-semibold  text-starick-black">
        <p className="text-center text-2xl">Other Services</p>

        <div className="grid grid-cols-1 gap-10 px-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="grid justify-center gap-10">
            <p>WA Respectful Relationships Teaching Support Program</p>
            <p>Our Work with Children and Young People</p>
          </div>

          <div className="grid justify-center gap-10">
            <p>Workplace Awareness</p>
            <p>Health and Wellbeing</p>
          </div>
        </div>
        <div className="grid px-10  lg:justify-center">
          <p>
            Thriving Through Connection Supporting Young People Aged 11 -17
            years
          </p>
        </div>
      </div>

      <div className="flex justify-around p-10">
        <LinkButton text="View Core Services" link="./core-services" />

        <LinkButton text="View Other Services" link="./other-services" />
      </div>

      <div className="grid justify-items-center gap-5 px-10 py-10 font-semibold text-starick-black">
        <p className="text-center text-2xl">Did you know?</p>
        <p>
          One woman dies every week in Australia as a result of domestic and
          family violence. 1.6 million women in Australia have experienced some
          form of domestic or family violence. Escaping domestic or family
          violence is a major contributor to homelessness among women and
          children.
        </p>
        <LinkButton
          text="Learn more about domestic violence"
          link="./what-is-domestic-violence"
        />
      </div>

      <Subtitle title="Social Media" />

      <div>
        <p className="text-center text-3xl font-bold text-starick-brown">
          FOLLOW US ON FACEBOOK!
        </p>

        <div className="flex place-items-center gap-4 px-10 py-10">
          <div className="flex w-1/2 flex-wrap place-content-end gap-4">
            <Image
              src={Poster1}
              alt="description"
              width="0"
              height="0"
              className="h-auto w-1/2"
            />
            <Image
              src={Poster3}
              alt="description"
              width="0"
              height="0"
              className="h-auto w-1/2"
            />
          </div>
          <div className="w-1/2">
            <Image
              src={Poster2}
              alt="description"
              width="0"
              height="0"
              className="h-auto w-1/2"
            />
          </div>
        </div>
      </div>

      <Subtitle title="Events" />

      <Image
        src={EventMap}
        alt="description"
        width="0"
        height="0"
        className="h-auto w-full p-10"
      />
    </>
  );
}
