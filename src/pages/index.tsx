import Image from "next/image";
import Link from "next/link";

import Carousel from "@/components/Home/carousel/carousel";
import carousel_list from "@/components/Home/carousel/carousel_list.json";
import FacebookFeed from "@/components/social-media-feed";
import PageHeader from "@/components/page-header";

import CrisisAlert from "~/icons/crisis_alert.svg";
import Staricklogo from "~/icons/starick-logo.svg";
import Opshoppic from "~/images/home/_MG_9216.jpg";
import Afterdidyouknow from "~/images/home/_MG_9261.jpg";
import Gridpic2 from "~/images/home/_MG_9460.jpg";
import Gridpic1 from "~/images/home/Starick-Op-Shop-Volunteers.jpg";
import HomeTitle from "~/images/home/speech.png";
import PageHeaderBigCircle from "@/components/page-header-bigcircle";
export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="relative">
          <Image
            src={HomeTitle}
            alt="description"
            width="0"
            height="0"
            className="w-25 h-30 mt-1"
          />
          <div
            className="z-2 absolute top-0 flex flex flex-col items-center justify-center bg-black bg-opacity-40 p-24 text-center text-white"
            style={{ width: "100%", height: "100%" }}
          >
            <p className="text-3xl font-bold">
              Domestic Violence Support & Services for Women and Children
            </p>
            <p className="pt-8" style={{ width: "80%" }}>
              Starick is a charity supporting women and children escaping
              domestic and family violence. We work predominantly in
              Perth&rsquo;s south-eastern metropolitan region. Our vision is to
              build futures free from violence for the women and children who
              use our service and for the community as a whole.
            </p>
            <div className="mt-10 flex justify-center gap-10">
              <span className="justify-center text-xl  font-semibold hover:text-starick-green">
                <Link href="/about-us">
                  <span className="mr-2 border-none bg-white px-1 text-black">
                    &gt;
                  </span>
                  Learn more about us
                </Link>
              </span>
              <p className="justify-center text-xl  font-semibold hover:text-starick-green">
                <Link href="/op-shop/donations">
                  <span className="mr-2 border-none bg-white px-1 text-black">
                    &gt;
                  </span>
                  Donate Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center bg-starick-orange">
        <div>
          <Image src={CrisisAlert} alt="Crisis Alert Icon" className="m-5" />
        </div>
        <div className="">
          <p className="h-auto">
            If you need urgent help, call Crisis Care: (08) 9223 1111 or Country
            Freecall: 1800 199 008 <br />
            If you are in immediate physical danger, call Police: 000
          </p>
        </div>
      </div>

      <div className="grid h-96 w-full justify-items-center font-semibold text-black">
        <PageHeaderBigCircle
          titleText="Did you know?"
          subtitleText={[
            "One woman dies every week in Australia as a result of domestic and family violence",
            "1.6 million women in Australia have experienced some form of domestic or family violence",
            "Escaping domestic or family violence is a major contributor to homelessness among women and children"
          ]}
          subtitleElement={
            <Link href="./what-is-domestic-violence">
              <span className="service-item mb-5 mt-5 hover:text-starick-green">
                <span className="mb-10 mr-2 bg-starick-green px-1.5 pb-1 text-white">
                  &gt;
                </span>{" "}
                What is domestic violence?
              </span>
            </Link>
          }
          socialMedia={false}
          textOnLeft={true}
        />
      </div>

      <div className="flex ">
        {/* Left side: Image */}
        <div className="relative w-1/2">
          <div className="relative h-full w-full object-cover">
            <Image
              src={Gridpic2}
              alt="description"
              width="0"
              height="0"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right side: Core Services */}
        <div className="w-1/2 bg-starick-olive text-starick-brown">
          <p className="ml-10 mt-10 flex justify-center text-left text-2xl font-bold text-starick-brown">
            Core Services
          </p>
          {/* Newly added Counselling Services */}
          <div className="service-link">
            <p className="service-item mt-5 hover:text-starick-green">
              <Link href="/core-services#Counselling%20Services">
                <span
                  className="service-item ml-10 mt-5 flex items-center justify-between hover:text-starick-green"
                  style={{ width: "85%" }}
                >
                  <span className="flex items-center">
                    <img
                      className="mr-5 h-10 w-10 rounded-full"
                      src="./icons/books.svg"
                      alt=""
                    />
                    Counselling Services
                  </span>
                  <span
                    className="mr-2 bg-starick-green px-1.5 text-white"
                    style={{ height: "50%" }}
                  >
                    &gt;
                  </span>
                </span>
              </Link>
            </p>
          </div>
          <div
            className="brown-line ml-10 mt-5"
            style={{
              width: "90%",
              height: "1px",
              backgroundColor: "#738e4b"
            }}
          ></div>

          <div className="starick-brown-line mt-5"></div>
          <div className="service-link">
            <Link href="/core-services#Counselling%20Services">
              <span
                className="service-item ml-10 mt-5 flex items-center justify-between hover:text-starick-green"
                style={{ width: "85%" }}
              >
                <span className="flex items-center">
                  <img
                    className="mr-5 h-10 w-10 rounded-full"
                    src="./icons/care.svg"
                    alt=""
                  />
                  Transitional Housing
                </span>
                <span
                  className="mr-2 bg-starick-green px-1.5 text-white"
                  style={{ height: "50%" }}
                >
                  &gt;
                </span>
              </span>
            </Link>
            <div
              className="brown-line mb-5 ml-10 mt-5"
              style={{
                width: "90%",
                height: "1px",
                backgroundColor: "#738e4b"
              }}
            ></div>
          </div>

          <div className="brown-line mb-5"></div>
          <div className="service-link">
            <Link href="/core-services#Refugees">
              <span
                className="service-item ml-10 mt-5 flex items-center justify-between hover:text-starick-green"
                style={{ width: "85%" }}
              >
                <span className="flex items-center">
                  <img
                    className="mr-5 h-10 w-10 rounded-full"
                    src="./icons/aid.svg"
                    alt=""
                  />
                  Two Refugees
                </span>
                <span
                  className="mr-2 bg-starick-green px-1.5 text-white"
                  style={{ height: "50%" }}
                >
                  &gt;
                </span>
              </span>
            </Link>
            <div
              className="brown-line mb-5 ml-10 mt-5"
              style={{
                width: "90%",
                height: "1px",
                backgroundColor: "#738e4b"
              }}
            ></div>
          </div>

          <div className="brown-line mb-5"></div>
          <div className="service-link">
            <Link href="/core-services#Transitional%20Housing">
              <span
                className="service-item ml-10 mt-5 flex items-center justify-between hover:text-starick-green"
                style={{ width: "85%" }}
              >
                <span className="flex items-center">
                  <img
                    className="mr-5 h-10 w-10 rounded-full"
                    src="./icons/domestic violence.svg"
                    alt=""
                  />
                  Support in Police Stations
                </span>
                <span
                  className="mr-2 bg-starick-green px-1.5 text-white"
                  style={{ height: "50%" }}
                >
                  &gt;
                </span>
              </span>
            </Link>
            <div
              className="brown-line mb-5 ml-10 mt-5"
              style={{
                width: "90%",
                height: "1px",
                backgroundColor: "#738e4b"
              }}
            ></div>
          </div>

          <div className="brown-line mb-5"></div>
          <div className="service-link mb-8">
            <Link href="/core-services#Safe%20at%20Home%20Program">
              <span
                className="service-item ml-10 mt-5 flex items-center justify-between hover:text-starick-green"
                style={{ width: "85%" }}
              >
                <span className="flex items-center">
                  <img
                    className="mr-5 h-10 w-10 rounded-full"
                    src="./icons/health.svg"
                    alt=""
                  />
                  Safe at Home Program
                </span>
                <span
                  className="mr-2 bg-starick-green px-1.5 text-white"
                  style={{ height: "50%" }}
                >
                  &gt;
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        {/* Other Services */}
        <div className="col-span-1 bg-starick-green">
          <p className="mb-10 mt-10 text-center text-2xl font-bold text-white">
            Other Services
          </p>
          <div className="mx-5 mb-10 mt-5">
            <Link href="/other-services#WA%20Respectful%20Relationships%20Teaching%20Support%20Program">
              <span
                className="service-item mt-5 flex items-center justify-between text-white hover:text-starick-olive"
                style={{ width: "88%" }}
              >
                <span className="flex items-center">
                  <img
                    className="mr-5 h-10 w-10 rounded-full"
                    src="./icons/history.svg"
                    alt=""
                  />
                  WA Respectful Relationships Teaching Support <br /> Program
                </span>
                <span
                  className="mr-2 bg-starick-white px-1.5 text-black"
                  style={{ height: "50%" }}
                >
                  &gt;
                </span>
              </span>
            </Link>
            <div
              className="brown-line mb-5 mt-5"
              style={{
                width: "90%",
                height: "1px",
                backgroundColor: "#FFFFFF"
              }}
            ></div>
            <Link href="/other-services#Our%20Work%20with%20Children%20and%20Young%20People">
              <span
                className="service-item mt-5 flex items-center justify-between text-white hover:text-starick-olive"
                style={{ width: "88%" }}
              >
                <span className="flex items-center">
                  <img
                    className="mr-5 h-10 w-10 rounded-full"
                    src="./icons/houses.svg"
                    alt=""
                  />
                  Our Work With Children and Young People
                </span>
                <span
                  className="mr-2 bg-starick-white px-1.5 text-black"
                  style={{ height: "50%" }}
                >
                  &gt;
                </span>
              </span>
            </Link>
            <div
              className="brown-line mb-5 mt-5"
              style={{
                width: "90%",
                height: "1px",
                backgroundColor: "#FFFFFF"
              }}
            ></div>
            <Link href="/other-services#Workplace%20Awareness ">
              <span
                className="service-item mt-5 flex items-center justify-between text-white hover:text-starick-olive"
                style={{ width: "88%" }}
              >
                <span className="flex items-center">
                  <img
                    className="mr-5 h-10 w-10 rounded-full"
                    src="./icons/humanright.svg"
                    alt=""
                  />
                  Workplace Awareness
                </span>
                <span
                  className="mr-2 bg-starick-white px-1.5 text-black"
                  style={{ height: "50%" }}
                >
                  &gt;
                </span>
              </span>
            </Link>
            <div
              className="brown-line mb-5 mt-5"
              style={{
                width: "90%",
                height: "1px",
                backgroundColor: "#FFFFFF"
              }}
            ></div>
            <Link href="/other-services#Health%20and%20Wellbeing">
              <span
                className="service-item mt-5 flex items-center justify-between text-white hover:text-starick-olive"
                style={{ width: "88%" }}
              >
                <span className="flex items-center">
                  <img
                    className="mr-5 h-10 w-10 rounded-full"
                    src="./icons/online-help.svg"
                    alt=""
                  />
                  Health and Wellbeing
                </span>
                <span
                  className="mr-2 bg-starick-white px-1.5 text-black"
                  style={{ height: "50%" }}
                >
                  &gt;
                </span>
              </span>
            </Link>
            <div
              className="brown-line mb-5 mt-5"
              style={{
                width: "90%",
                height: "1px",
                backgroundColor: "#FFFFFF"
              }}
            ></div>
            <Link href="other-services">
              <span
                className="service-item mt-5 flex items-center justify-between text-white hover:text-starick-olive"
                style={{ width: "88%" }}
              >
                <span className="flex items-center">
                  <img
                    className="mr-5 h-10 w-10 rounded-full"
                    src="./icons/psychology.svg"
                    alt=""
                  />
                  Thriving Through Connections -
                  <br />
                  Supporting Young People Aged 11-17 years{" "}
                </span>
                <span
                  className="mr-2 bg-starick-white px-1.5 text-black"
                  style={{ height: "50%" }}
                >
                  &gt;
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Right: picture */}
        <div className="col-span-1 flex justify-end">
          <Image
            src={Afterdidyouknow}
            alt="image of starick people for home page"
            width="0"
            height="0"
            className="w-full object-cover"
          />
        </div>
      </div>

      <Image
        src={Opshoppic}
        alt="description"
        width="0"
        height="0"
        className="w-full object-cover"
      />
      <div className="text-white">
        <PageHeader
          titleText="Make a Donation"
          subtitleText="Donate to Starick to help us support women and children escaping domestic and family violence"
          backgroundColor="starick-brown"
          buttonHref="./donations"
          buttonText="Donate"
        />
      </div>

      <div className="z-2 flex bg-starick-green">
        <Image
          src={Gridpic1}
          alt="description"
          width="0"
          height="0"
          className="w-2/4"
        />
        <div className="bg-starick-green text-white">
          <p className="my-7 text-center text-2xl">Op Shop</p>
          <div className="p-8">
            <p className="text-l mb-5 text-start">
              Give women and children a second chance through giving our
              wonderful shop items a second chance
            </p>
            <p className="text-l">
              The op shop is operated and run by hard-working, dedicated
              volunteers, and proceeds from sales of discounted clothing, toys,
              bedding, household goods and more support Starick&rsquo;s
              services.
            </p>
            <div className="flex justify-center text-center">
              <Link href="./donations" className="mt-10">
                <span>
                  <span className="mr-2 bg-starick-white px-1.5 text-black">
                    &gt;
                  </span>
                  More Info
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Social Media */}
      <div>
        <PageHeaderBigCircle
          titleText="Social Media"
          subtitleElement={<FacebookFeed />}
          socialMedia={true}
        />
      </div>

      <div className="mt-10 flex justify-center">
        <div className="flex flex-col">
          <div className="mt-10 flex justify-center">
            <p className="text-2xl font-bold">Upcoming Events</p>
          </div>
          <div className="flex justify-center">
            <div className="w-1/2">
              <Carousel images={carousel_list} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
