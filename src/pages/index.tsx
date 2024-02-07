import Image from "next/image";

import Carousel from "@/components/Home/carousel/carousel";
import carousel_list from "@/components/Home/carousel/carousel_list.json";
import CoreServiceItem from "@/components/Home/core-service-item";
import LinkButton from "@/components/Home/link-button";
import FacebookFeed from "@/components/social-media-feed";

import CrisisAlert from "~/icons/crisis_alert.svg";
import SafeAtHomeProgram from "~/icons/health.svg";
import TransitionalHousing from "~/icons/houses.svg";
import SupportInPoliceStations from "~/icons/police-justice.svg";
import CounsellingServices from "~/icons/psychology.svg";
import TwoRefuges from "~/icons/refugees.svg";
import Staricklogo from "~/icons/starick-logo.svg";

import Gridpic1 from "~/images/home/carousel-1.png";
import HomeTitle from "~/images/Parents-with-kids-graphic.png";
import FillerImage1 from "~/images/starick-image1.jpg";

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

      <div className="relative flex items-center justify-center bg-starick-olive py-10 py-2 pl-8 text-center font-bold text-starick-brown">
        <Image
          src={CrisisAlert}
          alt="crisis alert sign"
          width="0"
          height="0"
          className="z-2 absolute left-96 top-20 h-40 w-20 -translate-x-1/2 -translate-y-1/2 transform"
        />

        {/* Right warning sign */}
        <Image
          src={CrisisAlert}
          alt="crisis alert sign"
          width="0"
          height="0"
          className="z-2 absolute right-96 top-20 h-40 w-20 -translate-y-1/2 translate-x-1/2 transform"
        />
        <p>
          For urgent help call: <br />
          Crisis Care:(08) 9223 1111 <br />
          or <br />
          Country Freecall: 1800 199 008 <br />
          <br />
          If you are in immediate physical danger call Police: 000
        </p>
      </div>

      <div className="mx-20 my-36 grid grid-cols-2 gap-4 p-4">
        {/* starick logo top left */}
        <div className="w-1/4 p-4">
          <Image
            src={Staricklogo}
            alt="starick logo"
            width="0"
            height="0"
            className=" absolute ml-20 mt-20 h-auto w-auto p-4"
          />
        </div>

        {/* blurb top right */}
        <div className="mx-40 w-2/3 p-2">
          <p className="white-space-normal text-right text-2xl font-semibold text-starick-brown">
            Supporting women and children escaping domestic and family violence.
            We work predominantly in Perth&apos; south-eastern metropolitan
            region, and our vision is to build futures free from violence for
            the women and children the community as a whole.
          </p>
        </div>


      <div className="grid grid-cols-2 font-semibold text-starick-black">
        {/* Top Left: picture */}
        <div className="bg-gray-200 ">
          <Image
            src={Gridpic1}
            alt="image of starick people for home page"
            width="0"
            height="0"
            className=" h-full"
          />
        </div>


        {/* Top Right: Core Services */}
        <div className="bg-starick-olive ">
          <p className="p-10 text-center text-2xl">Core Services</p>
          <div className="mx-5 grid gap-4 px-24">
            <CoreServiceItem
              text="Counselling Services"
              img={CounsellingServices}
            />
            <CoreServiceItem
              text="Transitional Housing"
              img={TransitionalHousing}
            />
            <CoreServiceItem text="Two Refuges" img={TwoRefuges} />
            <CoreServiceItem
              text="Support in Police Stations"
              img={SupportInPoliceStations}
            />
            <CoreServiceItem
              text="Safe at Home Program"
              img={SafeAtHomeProgram}
            />
          </div>
        </div>


        {/* Bottom left: Other Services */}
        <div className="bg-starick-olive">
          <p className="mb-10 mt-10 text-center text-2xl">Other Services</p>
          <div className="mx-5 grid h-1/2 gap-4 px-24">

            <p>WA Respectful Relationships Teaching Support Program</p>
            <p>Our Work with Children and Young People</p>
            <p>Workplace Awareness</p>
            <p>Health and Wellbeing</p>
            <p>
              Thriving Through Connection Supporting Young People Aged 11 -17
              years
            </p>
          </div>
        </div>


        {/* bottom right: picture */}
        <div className="t-10 bg-gray-200">
          <Image
            src={Gridpic1}
            alt="image of starick people for home page"
            width="0"
            height="0"
            className=""
          />
        </div>

      </div>

      {/* MAKE SURE TO CHANGE THESE LATER TO CORRESPOND EACH SERVICE */}
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
      <div className="flex place-items-center gap-4 ">
        <Image
          src={FillerImage1}
          alt="description"
          width="0"
          height="0"
          className="h-auto w-full"
        />
      </div>

      <div className="grid justify-items-center gap-5 px-10 py-10 font-semibold text-starick-black">
        <p className="text-center text-2xl">Make a Donation</p>
        <p>Make a direct impact on woman and children by donating now!</p>
        <LinkButton text="Make A Donation" link="./what-is-domestic-violence" />
      </div>

      <div className="grid justify-items-center gap-5 px-10 py-10 font-semibold text-starick-black">
        <p className="text-center text-2xl">Starick Op Shop</p>
        <p>
          Give women and children a second chance through giving our wonderful
          shop items a second chance
        </p>
        <LinkButton text="Make A Donation" link="./what-is-domestic-violence" />
      </div>


      <div>
        <p className="text-center text-3xl font-bold text-starick-brown">
          Follow the movement on Facebook!
        </p>
        <div className="flex flex-row justify-center">
          <FacebookFeed />
        </div>
      </div>

      <div className="relative mx-auto w-1/2">
        <Carousel images={carousel_list} />
      </div>
    </>
  );
}
