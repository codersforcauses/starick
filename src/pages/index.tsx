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
import Opshoppic from "~/images/home/_MG_9216.jpg"
import Afterdidyouknow from "~/images/home/_MG_9261.jpg"
import Gridpic2 from "~/images/home/_MG_9460.jpg"
import Gridpic1 from "~/images/home/Starick-Op-Shop-Volunteers.jpg";
import HomeTitle from "~/images/Parents-with-kids-graphic.png";

export default function Home() {
  return (
    <>
      <div className="relative">
        <p className="bottom-15 left absolute left-20 top-24 w-2/5 text-7xl font-bold text-white">
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

      <div className="relative flex items-left bg-starick-olive py-10 pl-8 font-bold text-starick-brown">
        <Image
          src={CrisisAlert}
          alt="crisis alert sign"
          width="0"
          height="0"
          className="z-2 absolute pb-10 left-20 top-20 h-40 w-20 -translate-x-1/2 -translate-y-1/2 transform"
        />
        
        <p className="flex justify-center mx-36"> 
        If you need urgent help, call Crisis Care: (08) 9223 1111 or Country Freecall: 1800 199 008 <br />
        If you are in immediate physical danger, call Police: 000
        </p>
        
      </div>

      <div className="flex items-center pb-20 pt-20">
        <Image
          src={Staricklogo}
          alt="starick logo"
          width="0"
          height="0"
          className="flex justify-center mx-20"
        />


        <p className=" white-space-normal mx-36 ml-auto w-1/3 text-right  text-2xl font-semibold text-starick-brown">
          Supporting women and children escaping domestic and family violence.
          We work predominantly in Perth&apos;s south-eastern metropolitan
          region and our vision is to build futures free from violence for the
          women and children the community as a whole.
        </p>
      </div>

      <div className="grid grid-cols-2 font-semibold text-starick-black">
        {/* Top Left: picture */}
        <div className=" bg-gray-200 ">
          <Image
            src={Gridpic2}
            alt="image of starick people for home page"
            width="0"
            height="0"
            className=" h-full"
          />
        </div>

        {/* Top Right: Core Services https://www.starick.org.au/services/transitional-housing/*/}
            <div className="bg-starick-olive">
      <p className="mt-10 text-center text-2xl text-starick-brown font-bold">Core Services</p>
      <div className="mx-5 grid gap-4 px-24 mb-10 text-starick-brown">
        <a href="./counselling-services">
          <CoreServiceItem text="Counselling Services" img={CounsellingServices} />
        </a>
        <a href="./transitional-housing">
          <CoreServiceItem text="Transitional Housing" img={TransitionalHousing} />
        </a>
        <a href="./two-refuges">
          <CoreServiceItem text="Two Refuges" img={TwoRefuges} />
        </a>
        <a href="./support-in-police-stations">
          <CoreServiceItem text="Support in Police Stations" img={SupportInPoliceStations} />
        </a>
        <a href="./safe-at-home-program">
          <CoreServiceItem text="Safe at Home Program" img={SafeAtHomeProgram} />
        </a>
        <div className="flex justify-around">
          <LinkButton text="View Core Services" link="./core-services" />
        </div>
      </div>
    </div>

        {/* Bottom left: Other Services */}
        <div className="bg-starick-green">
          <p className="mb-10 mt-10 text-center text-2xl text-white">
            Other Services
          </p>
          
          <div className="mx-5 grid gap-4 px-24 mb-10 text-white">
        <a href="./respectful-relationships.tsx">
          <CoreServiceItem text="WA Respectful Relationship Teaching Support Program" img={CounsellingServices} />
        </a>
        <a href="./work-with-children-and-young-people">
          <CoreServiceItem text="Our Work with Children and Young People" img={CounsellingServices} />
        </a> 
        <a href="./workplace-awareness">
          <CoreServiceItem text="Workplace Awareness" img={CounsellingServices} />
        </a>  
        <a href="./health-wellbeing">
          <CoreServiceItem text="Health and Wellbeing" img={CounsellingServices} />
        </a>   
           
          <p className="flex justify-center">
              Thriving Through Connection Supporting Young People Aged 11 -17
              years
          </p>
            <div className="flex justify-around ">
              <LinkButton text="View Other Services" link="./other-services" />
            </div>
          </div>
        </div>
  
        {/* bottom right: picture */}
        <div className=" t-10 h-200 bg-gray-200">

          <Image
            src={Afterdidyouknow}
            alt="image of starick people for home page"
            width="0"
            height="0"

            className="h-full"
          />
        </div>
      </div>

      <div className="grid justify-items-center gap-5 px-10 py-10 font-semibold text-starick-brown">
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


      <div className="flex z-2  text-left font-semibold bg-starick-green">
      <div className="flex items-center">
            <Image
              src={Gridpic1}
              alt="description"
              width="0"
              height="0"
              className="w-3/4 "
              
            />
          </div>
          <div className="grid bg-starick-green text-left justify-items-left">
            <p className=" text-white  mt-10 text-2xl">Op Shop</p>
            <p className="text-white text-left ">
              Give women and children a second chance through giving our wonderful shop items a second chance
            </p>
            <LinkButton text="Through to Op Shop >" link="./op-shop"/>
          </div>
        
        </div>

          <div>
        <p className="text-left mx-60 text-3xl mt-10 font-bold text-starick-brown">
          Follow the movement on Facebook!
        </p>

        <div className="flex flex-row justify-left  my-8 mx-36">
          <FacebookFeed />
        </div>
      </div>

      <div className="flex justify-center text-center text-2xl  font-semibold text-starick-brown">
          <p>
            {" "}
            Keep up with upcoming events! Follow us on instagram for more
            information how you can get involved
          </p>
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

      <div className="relative mx-auto mb-8 w-1/2">
        <Carousel images={carousel_list} />

      </div>

      
    </>
  );
}
