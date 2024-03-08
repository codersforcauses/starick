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
import HomeTitle from "~/images/Parents-with-kids-graphic.png";
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
          <div className="flex flex-col items-center z-2 absolute top-0 flex justify-center bg-black bg-opacity-40 p-24 text-white text-center" style ={{width : "100%", height : "100%"}}>
              <p className= "text-3xl font-bold">Domestic Violence Support & Services for Women and Children</p>
              <p className = "pt-8" style = {{width : "80%"}}>Starick is a charity supporting women and children escaping domestic and family violence. We work predominantly in Perth's south-eastern metropolitan region. Our vision is to build futures free from violence for the women and children who use our service and for the community as a whole.</p>
              <div className = "flex justify-center mt-10 gap-10">
                <span className="justify-center text-xl  font-semibold hover:text-starick-green">
                  <Link href="/about-us"><span className ="bg-white text-black px-1 mr-2 border-none">&gt;</span>Learn more about us</Link>
                </span>
                <p className="justify-center text-xl  font-semibold hover:text-starick-green">
                  <Link href="/op-shop/donations"><span className ="bg-white text-black px-1 mr-2 border-none">&gt;</span>Donate Now</Link>
                </p>
              </div>
          </div>
        </div>
      </div>

      <div className = "flex flex-row items-center bg-starick-orange">
        <div>
          <Image
          src={CrisisAlert}
          alt="Crisis Alert Icon"
          className = "m-5"
          />
        </div>
        <div className = "">
          <p className="h-auto">
            If you need urgent help, call Crisis Care: (08) 9223 1111 or Country
            Freecall: 1800 199 008 <br/>
            If you are in immediate physical danger, call Police: 000
          </p>
        </div>
      </div>


      <div className="grid justify-items-center font-semibold text-starick-brown h-64 w-full">
        <PageHeaderBigCircle
          titleText="Did you know?"
          subtitleText={["One woman dies every week in Australia as a result of domestic and family violence", "1.6 million women in Australia have experienced some form of domestic or family violence", "Escaping domestic or family violence is a major contributor to homelessness among women and children"]}
          subtitleElement={
          //   <Link
          //   href="./what-is-domestic-violence"
          //   className="rounded-lg bg-starick-brown px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-starick-orange"
          // >
          //   Learn more about domestic violence
          // </Link>
          <Link href="./what-is-domestic-violence" >
            <span className="service-item mt-5 hover:text-starick-green mb-5">
            <span className ="bg-starick-green text-white px-1.5 pb-1 mr-2 mb-5">&gt;</span> What is domestic violence?
            </span>
          </Link>
          }
        />
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
            <p className="service-item ml-10 mt-5 hover:text-starick-green">
              <Link href="/core-services#Counselling%20Services">
                <span className="service-item text-starick-brown hover:text-starick-green flex justify-between items-center" style ={{width :"94%"}}>
                  <span className ="flex items-center"><img className ="rounded-full h-10 w-10 mr-5" src ="./images/Group.jpg"/>Counselling Services</span>
                  <span className ="bg-starick-green text-white px-1.5 mr-2" style={{height : "50%"}}>&gt;</span>
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
            <Link href="/core-services#Counselling%20Services" >
              <span className="service-item ml-10 mt-5 hover:text-starick-green flex justify-between items-center" style ={{width :"88%"}}>
              <span className ="flex items-center"><img className ="rounded-full h-10 w-10 mr-5" src ="./images/Group.jpg"/>Transitional Housing</span>
              <span className ="bg-starick-green text-white px-1.5 mr-2" style={{height : "50%"}}>&gt;</span>
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
            <span className="service-item ml-10 mt-5 hover:text-starick-green flex justify-between items-center" style ={{width :"88%"}}>
              <span className ="flex items-center"><img className ="rounded-full h-10 w-10 mr-5" src ="./images/Group.jpg"/>Two Refugees</span>
              <span className ="bg-starick-green text-white px-1.5 mr-2" style={{height : "50%"}}>&gt;</span>
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
            <span className="service-item ml-10 mt-5 hover:text-starick-green flex justify-between items-center" style ={{width :"88%"}}>
              <span className ="flex items-center"><img className ="rounded-full h-10 w-10 mr-5" src ="./images/Group.jpg"/>Support in Police Stations</span>
              <span className ="bg-starick-green text-white px-1.5 mr-2" style={{height : "50%"}}>&gt;</span>
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
          <div className="service-link mb-5">
            <Link href="/core-services#Safe%20at%20Home%20Program">
            <span className="service-item ml-10 mt-5 hover:text-starick-green flex justify-between items-center" style ={{width :"88%"}}>
              <span className ="flex items-center"><img className ="rounded-full h-10 w-10 mr-5" src ="./images/Group.jpg"/>Safe at Home Program</span>
              <span className ="bg-starick-green text-white px-1.5 mr-2" style={{height : "50%"}}>&gt;</span>
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
            <span className="service-item mt-5 text-white hover:text-starick-olive flex justify-between items-center" style ={{width :"88%"}}>
              <span className ="flex items-center"><img className ="rounded-full h-10 w-10 mr-5" src ="./images/Group.jpg"/>WA Respectful Relationships Teaching Support <br/> Program</span>
              <span className ="bg-starick-white text-black px-1.5 mr-2" style ={{height : "50%"}}>&gt;</span>
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
              <span className="service-item mt-5 text-white hover:text-starick-olive flex justify-between items-center" style ={{width :"88%"}}>
              <span className ="flex items-center"><img className ="rounded-full h-10 w-10 mr-5" src ="./images/Group.jpg"/>Our Work With Children and Young People</span>
              <span className ="bg-starick-white text-black px-1.5 mr-2" style ={{height : "50%"}}>&gt;</span>
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
            <span className="service-item mt-5 text-white hover:text-starick-olive flex justify-between items-center" style ={{width :"88%"}}>
              <span className ="flex items-center"><img className ="rounded-full h-10 w-10 mr-5" src ="./images/Group.jpg"/>Workplace Awareness</span>
              <span className ="bg-starick-white text-black px-1.5 mr-2" style ={{height : "50%"}}>&gt;</span>
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
            <span className="service-item mt-5 text-white hover:text-starick-olive flex justify-between items-center" style ={{width :"88%"}}>
              <span className ="flex items-center"><img className ="rounded-full h-10 w-10 mr-5" src ="./images/Group.jpg"/>Health and Wellbeing</span>
              <span className ="bg-starick-white text-black px-1.5 mr-2" style ={{height : "50%"}}>&gt;</span>
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
              <span className="service-item mt-5 text-white hover:text-starick-olive flex justify-between items-center" style ={{width :"88%"}}>
              <span className ="flex items-center"><img className ="rounded-full h-10 w-10 mr-5" src ="./images/Group.jpg"/>                
                Thriving Through Connections - 
                <br/>Supporting Young People Aged
                11-17 years </span>
              <span className ="bg-starick-white text-black px-1.5 mr-2" style ={{height : "50%"}}>&gt;</span>
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
      <div className = "text-white">
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
          <p className="text-2xl text-center my-7">Op Shop</p>
          <div className = "p-8">
            <p className="text-start text-l mb-5">
              Give women and children a second chance through giving our wonderful
              shop items a second chance
            </p>
            <p className = "text-l">
            The op shop is operated and run by hard-working, dedicated volunteers, and proceeds from sales of discounted clothing, toys, bedding, household goods and more support Starick's services.
            </p> 
            <div className = "text-center flex justify-center">
            <Link
                href="./donations"
                className = "mt-10"
            >
            <span><span className ="bg-starick-white text-black px-1.5 mr-2">&gt;</span>More Info</span>
            </Link>
            </div>
          </div>
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
            <Link
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
            </Link>
          </div>
        </div>

        <div className="relative mb-8 mt-10 w-1/2">
          <Carousel images={carousel_list} />
        </div>
      </div>
    </>
  );
}
