import Image from "next/image";

import Carousel from "@/components/Home/carousel/carousel";
import carousel_list from "@/components/Home/carousel/carousel_list.json";
import ServicesLink from "@/components/Services/services-link";
import FacebookFeed from "@/components/social-media-feed";

import CrisisAlert from "~/icons/crisis_alert.svg";
import Staricklogo from "~/icons/starick-logo.svg";
import Opshoppic from "~/images/home/_MG_9216.jpg";
import Afterdidyouknow from "~/images/home/_MG_9261.jpg";
import Gridpic2 from "~/images/home/_MG_9460.jpg";
import Gridpic1 from "~/images/home/Starick-Op-Shop-Volunteers.jpg";
import HomeTitle from "~/images/Parents-with-kids-graphic.png";
export default function Home() {
  return (
    <>
      <div className="relative">
        <p className="bottom-15 left absolute left-20 top-24 w-2/5 text-6xl font-bold text-white">
          Domestic Violence Support & Services for Women and Children
          <span className="hover:text-starick-green">
            <ServicesLink
              text={"Donate Now"}
              link={"/op-shop/donations"}
              textColour=""
              arrowColour="starick-orange"
              arrowBackgroundColor="white"
            />
          </span>
          <span className="absolute hover:text-starick-green">
            <ServicesLink
              text={"Learn more about us"}
              link={"/op-shop/donations"}
              textColour="relative hover:text-starick-green"
              arrowColour="starick-orange"
              arrowBackgroundColor="white"
            />
          </span>
        </p>
      </div>

      {/* Image */}

      <div className="justify-left items-left flex">
        <Image
          src={HomeTitle}
          alt="description"
          width="0"
          height="0"
          className="w-50 h-auto"
        />
      </div>

      <div className="items-left relative flex bg-starick-olive py-10 pl-8 font-bold text-starick-brown">
        <Image
          src={CrisisAlert}
          alt="crisis alert sign"
          width="0"
          height="0"
          className="z-2 absolute left-20 top-20 h-40 w-20 -translate-x-1/2 -translate-y-1/2 transform pb-10"
        />

        <p className="mx-36 flex justify-center">
          If you need urgent help, call Crisis Care: (08) 9223 1111 or Country
          Freecall: 1800 199 008 <br />
          If you are in immediate physical danger, call Police: 000
        </p>
      </div>

      <div className="flex items-center pb-20 pt-20">
        <Image
          src={Staricklogo}
          alt="starick logo"
          width="0"
          height="0"
          className="mx-20 flex justify-center"
        />

        <p className=" white-space-normal mx-24 ml-auto w-1/2 text-right  text-2xl font-semibold text-starick-brown">
          Supporting women and children escaping domestic and family violence.
          We work predominantly in Perth&apos;s south-eastern metropolitan
          region and our vision is to build futures free from violence for the
          women and children the community as a whole.
        </p>
      </div>

      <div className="grid grid-cols-2 font-semibold text-starick-black">
        {/* Top Left: picture */}
        <div className="h-full ">
          <Image
            src={Gridpic2}
            alt="image of starick people for home page"
            width="0"
            height="0"
            className="h-full "
          />
        </div>

        {/*Core  Services */}
        <div className="bg-starick-olive">
          <p className="mt-10  text-center text-2xl font-bold text-starick-brown">
            Core Services
          </p>
          <a href="./transitional-housing" className="service-link">
              <p className="service-item hover:text-starick-green">
                Transitional Housing &gt;
              </p>
              <div
                className="brown-line mt-5"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#738e4b"
                }}
              ></div>
            </a>
            
            <div className="starick-brown-line"></div>
            <a href="./two-refuges" className="service-link">
              <p className="service-item hover:text-starick-green">
                Two Refuges &gt;
              </p>
              <div
                className="brown-line mt-5"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#738e4b"
                }}
              ></div>
            </a>
            <div className="brown-line"></div>
            <a href="./support-in-police-stations" className="service-link">
              <p className="service-item hover:text-starick-green">
                Support in Police Stations &gt;
              </p>
              <div
                className="brown-line mt-5"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#738e4b"
                }}
              ></div>
            </a>
            
            <div className="brown-line"></div>
            <a href="./safe-at-home-program" className="service-link">
              <p className="service-item hover:text-starick-green">
                Safe at Home Program &gt;
              </p>
            </a>
          </div>
        </div>

        {/* OTHER SERVICES */}
        <div className="bg-starick-green">
          <p className="mb-10 mt-10 text-center text-2xl font-bold text-white">
            Other Services
          </p>
          <div className="mx-5 mb-10 grid gap-4 px-24 text-white">
            <a
              href="./OtherServices/respectful-relationships"
              className="service-link">
              <p className="service-item hover:text-starick-olive">
                WA Respectful Relationships Teaching Support Program &gt;
              </p>
              <div
                className="brown-line mt-5"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#FFFFFF"
                }}
              ></div>
            </a>
            <div className="brown-line"></div>

            <a
              href="./OtherServices/working-with-children-and-young-people"
              className="service-link">
              <p className="service-item hover:text-starick-olive">
                Our Work With Children and Young People &gt;
              </p>
              <div
                className="brown-line mt-5"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#FFFFFF"
                }}
              ></div>
            </a>
            <div className="brown-line"></div>

            <a
              href="./OtherServices/workplace-awareness"
              className="service-link ">
              <p className="service-item hover:text-starick-olive">
                Workplace Awareness &gt;
              </p>
              <div
                className="brown-line mt-5"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#FFFFFF"
                }}
              ></div>
            </a>
            <div className="brown-line"></div>
            <a
              href="./OtherServices/support-in-police-stations"
              className="service-link">
              <p className="service-item hover:text-starick-olive">
                Health and Wellbeing &gt;
              </p>
              <div
                className="brown-line mt-5"
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#FFFFFF"
                }}
              ></div>
            </a>
            <div className="brown-line"></div>
            <a
              href="./OtherServices/safe-at-home-program"
              className="service-link">
              <p className="service-item hover:text-starick-olive">
                Thriving Through Connections - Supporting Young People Aged
                11-17 years &gt;
              </p>
            </a>
          </div>
        </div>

        {/* bottom right: picture */}
        <div className=" t-10 h-200 bg-gray-200">
          <Image
            src={Afterdidyouknow}
            alt="image of starick people for home page"
            width="0"
            height="0"
            className=""
          />
        </div>
      

      <div className="grid justify-items-center gap-6 px-16 py-16 font-semibold text-starick-brown">
        <p className="text-center text-2xl">Did you know?</p>
        <p>
          One woman dies every week in Australia as a result of domestic and
          family violence. 1.6 million women in Australia have experienced some
          form of domestic or family violence. Escaping domestic or family
          violence is a major contributor to homelessness among women and
          children.
        </p>
        <a
          href="./what-is-domestic-violence"
          className="rounded-lg bg-starick-brown px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-starick-orange"
        >
          Learn more about domestic violence
        </a>
      </div>
      <Image
        src={Opshoppic}
        alt="description"
        width="0"
        height="0"
        className="h-fit w-auto "
      />
      <div className="grid justify-items-center gap-6 bg-starick-brown px-16 py-16 font-semibold text-white">
        <p className="text-center text-2xl">Make a Donation</p>
        <p>
          Help us support women and children being actively affected by domestic
          violence.
        </p>
        <a
          href="./donations"
          className="rounded-lg bg-starick-orange px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-starick-green"
        >
          Donate Now
        </a>
      </div>

      <div className="z-2 flex  bg-starick-green text-left font-semibold">
        <div className="flex items-center">
          <Image
            src={Gridpic1}
            alt="description"
            width="0"
            height="0"
            className="mr-2 w-3/4 "
          />
        </div>
        <div className="justify-items-left grid bg-starick-green text-left">
          <p className=" mr-12 mt-10 text-6xl text-white">Op Shop</p>
          <p className="text-centre mr-24 text-3xl text-white">
            Give women and children a second chance through giving our wonderful
            shop items a second chance
          </p>
          <a
            href="./donations"
            className="absolute mt-96 flex rounded-lg bg-starick-orange px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-starick-brown"
          >
            Through to Op-shop
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <div>
          <div className="mx-12 mt-10 text-center text-3xl font-bold text-starick-brown">
            Follow the movement on Facebook!
          </div>

          <div className="mt-10 flex justify-center">
            <div className="">
              <FacebookFeed />
            </div>
          </div>

          <div className="mb-10 ml-24 mt-10 flex  w-5/6 text-center text-2xl font-semibold text-starick-brown">
            <p>
              Keep up with upcoming events! Follow us on Instagram for more
              information on how you can get involved
            </p>
          </div>

          <div className="mt-1/2 mb-12 flex justify-center">
            <a
              href="https://www.instagram.com/starickservices/"
              className=" absolute mx-10 mb-12 flex w-1/6 items-center rounded-md bg-starick-green px-6 py-1 text-white transition-colors duration-300 hover:bg-starick-orange"
            >
              <Image
                src="/icons/white_insta.svg"
                alt="instagram"
                width={40}
                height={40}
                className="right-10 my-1 ml-2 mr-2"
              />

              <div className="mx-1 text-xl font-semibold">
                <p>Instagram</p>
              </div>
            </a>
          </div>
        </div>

        <div className="relative mb-8 mt-10 w-1/2">
          <Carousel images={carousel_list} />
        </div>
      </div>
    </>
  );
}
