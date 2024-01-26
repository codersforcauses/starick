import Image from "next/image";

import Carousel from "@/components/Home/carousel/carousel";
import carousel_list from "@/components/Home/carousel/carousel_list.json";
import CoreServiceItem from "@/components/Home/core-service-item";
import LinkButton from "@/components/Home/link-button";
import Subtitle from "@/components/Home/subtitle";

import SafeAtHomeProgram from "~/icons/health.svg";
import TransitionalHousing from "~/icons/houses.svg";
import SupportInPoliceStations from "~/icons/police-justice.svg";
import CounsellingServices from "~/icons/psychology.svg";
import TwoRefuges from "~/icons/refugees.svg";
import Staricklogo from "~/icons/starick-logo.svg";
import Poster1 from "~/images/home/poster1.png";
import Poster2 from "~/images/home/poster2.png";
import Poster3 from "~/images/home/poster3.png";
import HomeTitle from "~/images/Parents-with-kids-graphic.png";

export default function Home() {
  return (
    <>
      <div className="relative">
        <p className="bottom-15 left absolute left-20 top-20 w-2/5 text-7xl font-bold text-white">
          Domestic Violence Support & Services for Women and Children
        </p>

        <Image
          src={HomeTitle}
          alt="description"
          width="0"
          height="0"
          className="w-50 h-auto"
        />
      </div>

      <div className="bg-starick-olive py-2 pl-6 text-center font-bold text-starick-brown  ">
        <p>
          For urgent help call: <br />
          Crisis Care:(08) 9223 1111 <br />
          or <br />
          Country Freecall: 1800 199 008 <br />
          <br />
          If you are in immediate physical danger call Police: 000
        </p>
      </div>

      <div className="flex items-center pb-20 pt-20">
        <Image

          src={Staricklogo}
          alt="starick logo"
          width="0"
          height="0"
          className="justify-left mx-20  w-1/3"
        />

        <p className=" white-space-normal mx-36 ml-auto w-1/3 text-right  text-2xl font-semibold text-starick-brown">
          Supporting women and children escaping domestic and family violence.
          We work predominantly in Perth&apos;s south-eastern metropolitan
          region and our vision is to build futures free from violence for the
          women and children the community as a whole.
        </p>
      </div>

      <Subtitle title="Our Services" />

      <div className="grid gap-10 px-10 py-20 font-semibold text-starick-black">
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
        <div className="grid px-10 lg:justify-center">
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
          Follow the movement on Facebook!
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

      <div className="relative mx-auto w-1/2">
        <Carousel images={carousel_list} />
      </div>
    </>
  );
}
