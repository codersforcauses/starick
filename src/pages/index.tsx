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
import FillerOpshop from "~/images/home/carousel-4.png";
import HomeTitle from "~/images/Parents-with-kids-graphic.png";
import { getWordpress } from "@/utils/utils";
import FillerImage1 from "~/images/starick-image1.jpg";

export default function Home({ data }: { data: any }) {
  const homeData = data[0];
  return (
    <>
      <div className="relative">
        <p
          className="bottom-15 left absolute left-20 top-20 w-2/5 text-7xl font-bold text-white"
          dangerouslySetInnerHTML={{ __html: homeData["acf"]["index_title"] }}
        >
          {/*Domestic Violence Support & Services for Women and Children*/}
        </p>

        <Image
          src={HomeTitle}
          alt="description"
          width="0"
          height="0"
          className="w-50 h-auto"
        />
      </div>

      <div className="relative flex items-center justify-center bg-starick-olive py-10 pl-8 text-center font-bold text-starick-brown">
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

      <div className="flex items-center pb-20 pt-20">
        <Image
          src={Staricklogo}
          alt="starick logo"
          width="0"
          height="0"
          className="justify-left mx-20  w-1/3"
        />

        <p
          className=" white-space-normal mx-36 ml-auto w-1/3 text-right  text-2xl font-semibold text-starick-brown"
          dangerouslySetInnerHTML={{
            __html: homeData["acf"]["index_supporting"]
          }}
        >
          {/*Supporting women and children escaping domestic and family violence. We work predominantly in Perth's south-eastern metropolitan region and our vision is to build futures free from violence for the women and children the community as a whole.*/}
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

        {/* Top Right: Core Services https://www.starick.org.au/services/transitional-housing/*/}
        <div className="bg-starick-olive ">
          <p className="p-10 text-center text-2xl font-bold text-starick-brown">
            Core Services
          </p>
          <div className="mx-5 mb-10 grid gap-4 px-24 text-starick-brown">
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
            <div className="flex justify-around p-10">
              <LinkButton text="View Core Services" link="./core-services" />
            </div>
          </div>
        </div>

        {/* Bottom left: Other Services */}
        <div className="bg-starick-olive">
          <p className="mb-10 mt-10 text-center text-2xl text-starick-brown">
            Other Services
          </p>
          <div className="mx-5 grid h-1/2 gap-4 px-24 text-starick-brown">
            <p>WA Respectful Relationships Teaching Support Program</p>
            <p>Our Work with Children and Young People</p>
            <p>Workplace Awareness</p>
            <p>Health and Wellbeing</p>
            <p>
              Thriving Through Connection Supporting Young People Aged 11 -17
              years
            </p>
            <div className="justify-around">
              <LinkButton text="View Other Services" link="./other-services" />
            </div>
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

      <div className="grid justify-items-center gap-5 px-10 py-10 font-semibold text-starick-black">
        <p className="text-center text-2xl">Did you know?</p>
        <p dangerouslySetInnerHTML={{ __html: homeData["acf"]["index_one"] }}>
          {/*One woman dies every week in Australia as a result of domestic and*/}
          {/*family violence. 1.6 million women in Australia have experienced some*/}
          {/*form of domestic or family violence. Escaping domestic or family*/}
          {/*violence is a major contributor to homelessness among women and*/}
          {/*children.*/}
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

      <div className=" py-10 font-semibold text-starick-black">
        <Image
          src={FillerOpshop}
          alt="opshop image"
          width="0"
          height="0"
          className=" object-cover "
        />
        <p className=" text-2xl">Starick Op Shop</p>
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

      <div className="relative mx-auto mb-8 w-1/2">
        <Carousel images={carousel_list} />

        <div className="flex justify-center text-center text-2xl  font-semibold text-starick-brown">
          <p>
            {" "}
            Keep up with upcoming events! Follow us on instagram for more
            information how you can get involved
          </p>
        </div>
      </div>

      <div className=" mt-1/2 mb-36 flex flex-row justify-center">
        <a
          href="https://www.instagram.com/starickservices/"
          className="flex items-center rounded-md bg-starick-green px-3 py-1 text-white transition-colors duration-300 hover:bg-starick-orange"
        >
          <Image
            src="/icons/white_insta.svg"
            alt="instagram"
            width={40}
            height={40}
            className="my-1"
          />

          <div className=" mx-20 text-xl font-semibold">
            <p>Instagram</p>
          </div>
        </a>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  return await getWordpress("index");
}
