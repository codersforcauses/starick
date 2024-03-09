import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import AboriginalFlag from "~/images/aboriginal_flags/aboriginal-flag-150x150.png";
import TorresStraitIslanderFlag from "~/images/aboriginal_flags/torres-strait-islander-flag-150x150.png";

type SiteLink = {
  title: string;
  link: string;
};
type Props = {
  children: SiteLink[];
};
const SiteLinks: SiteLink[] = [
  /* write the sitemap's title and link here */
  { title: "Site map / links to pages here", link: "#" },
  { title: "Home", link: "/home" }
];
{
  /* figue out the Privacy & Disclaimer link */
}
const PrivacyDisclaimerLink = "/privacy";

const Footer = () => {
  return (
    <>
      {/* only in large window will get the sticky effect */}
      <div className="flex flex-col overflow-hidden   bg-starick-green  px-5 lg:grid lg:grid-cols-2">
        <Subscribe></Subscribe>
        <Contact>{SiteLinks}</Contact>
        <Donation></Donation>
        <Acknowledgement></Acknowledgement>
      </div>
      <ButtomNav></ButtomNav>
    </>
  );
};

const ButtomNav = () => {
  return (
    <>
      <div className=" flex h-16 w-full items-center border-starick-white bg-starick-white p-4 text-sm font-light  text-starick-black">
        <p className="  w-1/2 pr-3 text-right">
          © 2023 Starick. All Rights Reserved
        </p>
        <p className="relative flex  h-full   w-1/2 items-center pl-2 before:absolute before:left-0 before:top-0 before:block before:h-full   before:w-1 before:bg-starick-olive before:content-['']">
          <Link
            href={PrivacyDisclaimerLink}
            className=" pl-2 hover:text-starick-orange hover:underline"
          >
            Privacy & Disclaimer
          </Link>
        </p>
      </div>
    </>
  );
};

const Acknowledgement = () => {
  return (
    <section className=" relative order-4 border-starick-olive before:absolute before:left-0  before:top-0 before:w-[50vw] before:bg-starick-olive before:content-[''] lg:auto-rows-min lg:border-l-[0.25rem] lg:p-12  lg:before:block lg:before:h-1  ">
      <div className=" mx-auto  flex h-44 max-w-xl flex-col flex-wrap  p-1 lg:ml-2">
        <div className=" pb-2 ">
          <Image
            src={AboriginalFlag}
            alt="Aboriginal Flag"
            width={40}
            height={40}
            className=" float-left mr-2 mt-1 "
          />
          <Image
            src={TorresStraitIslanderFlag}
            alt="Torres Strait Islander Flag"
            width={40}
            height={40}
            className=" float-left mt-1"
          />
        </div>

        <p className=" max-w-lg pb-2 text-left text-xs font-light text-starick-white ">
          Starick acknowledges Aboriginal and Torres Strait Islander people as
          the Traditional Custodians of this country and its waters. We pay
          respect to their Elders past and present and extend this to all
          Aboriginal people seeing this message.
        </p>
      </div>
    </section>
  );
};

const Contact = ({ children }: Props) => {
  // const siteLists = children.map((site) => (
  //   <li key={site.title} className=" hover:text-starick-orange hover:underline">
  //     <a href={site.link}>{site.title}</a>
  //   </li>
  // ));

  return (
    <>
      <section className="order-2 text-starick-white lg:order-1  lg:p-12">
        <div className="mx-auto flex max-w-xl flex-col justify-end  lg:mr-0 ">
          <p className="mb-2 max-w-lg text-4xl font-normal text-starick-white  lg:mr-0 lg:text-left">
            Building futures for women and children free from violence
          </p>
          <div className="mt-4 flex font-medium">
            <div className="mr-10 flex flex-col">
              <div>
                <h4 className="pb-2  text-2xl">Refuges</h4>
                <p className="mt-2 max-w-xs items-center font-light">
                  <MdLocalPhone className="inline" />: 08 9458 1107
                </p>
              </div>
              <div>
                <h4 className="pb-2 text-2xl">Admin</h4>
                <p className="max-w-xs  font-light">
                  <MdLocalPhone className="inline" />: 08 9478 5300
                </p>
                <p>
                  @: <span>info@starick.org.au</span>
                </p>
                <p>
                  <MdEmail className="inline" />
                  PO Box 174
                </p>
                <p>CLOVERDALE WA 6985</p>
              </div>
            </div>
            <div className="flex flex-col  text-base">
              <div>
                <h4 className="mb-2 pb-2 text-2xl  ">Starick Op Shop</h4>
                <p className="max-w-xs  font-light">
                  <MdLocalPhone className="inline" />: 08 6271 0299
                </p>
                <p className=" max-w-xs  font-light ">
                  <FaMapMarkerAlt className="inline" />: 110 Kooyong Road,
                  RIVERVALE WA 6103
                </p>
              </div>
              <div>
                <h4 className="pb-2 text-2xl">Social Media</h4>
                <div className="mx-auto ml-3 flex min-w-fit font-light ">
                  <a href="#">
                    <FaFacebookSquare className=" mr-3"></FaFacebookSquare>
                  </a>
                  <a href="#">
                    <FaXTwitter className=" mr-3"></FaXTwitter>
                  </a>
                  <a href="#">
                    <FaLinkedin className=" mr-3"></FaLinkedin>
                  </a>
                  <a href="#">
                    <FaSquareInstagram className=" mr-3"></FaSquareInstagram>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Subscribe = () => {
  const subscribeInputStyle = `h-29 rounded px-5 py-2 text-sm  placeholder-slate-400 shadow-sm outline-none ring-2
 ring-starick-olive invalid:border-starick-orange invalid:text-red-600  focus:ring-2  focus:ring-starick-orange
focus:invalid:border-starick-orange focus:invalid:ring-starick-orange`;
  const [userLastName, setUserLastName] = useState<string>("");
  const [userFirstName, setUserFirstName] = useState<string>("");
  const [userMail, setUserMail] = useState<string>("");
  const [isNotValid, setIsNotValid] = useState<boolean>(true);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<string>>
  ): void => {
    const validation: boolean = e.target.checkValidity();
    setIsNotValid(true);
    if (validation) {
      setIsNotValid(false);
    }
    setState(e.target.value);
  };
  const handleSubmit = async (
    e: React.MouseEvent,
    userMail: string,
    setUserMail: Dispatch<SetStateAction<string>>
  ) => {
    /* figue out the Privacy & Disclaimer link */
    e.preventDefault();
    const isSuccess = await fetch("url");
    if (isSuccess) {
      setUserMail("");
      return;
    }

    // send a POST and send userMail to the DB
  };
  return (
    <section className="order-1 border-starick-olive pt-8 lg:order-2 lg:border-l-[0.25rem]   lg:p-12 lg:text-left">
      <div className=" mx-auto max-w-xl lg:ml-2">
        <p className="mb-2 max-w-lg text-4xl  font-normal  text-starick-white lg:text-left">
          Subscribe to the Friends of Starick Newsletter
        </p>
        <form className=" mt-6 max-w-xl">
          <fieldset className="grid grid-rows-3 gap-8">
            <input
              type="text"
              name="firstname"
              className={subscribeInputStyle}
              placeholder="Your first name"
              value={userFirstName}
              onChange={(e) => handleChange(e, setUserFirstName)}
            />
            <input
              type="text"
              name="lastname"
              className={subscribeInputStyle}
              placeholder="Your last name"
              value={userLastName}
              onChange={(e) => handleChange(e, setUserLastName)}
            />
            <input
              type="email"
              name="email"
              className={subscribeInputStyle}
              placeholder="you@example.com"
              value={userMail}
              onChange={(e) => handleChange(e, setUserMail)}
            />
          </fieldset>

          <button
            onClick={(e) => handleSubmit(e, userMail, setUserMail)}
            className=" h-9 text-sm font-semibold text-starick-white lg:text-left  "
            disabled={isNotValid}
          >
            <div className="ml-2 mt-8 flex items-center gap-2">
              <span className="relative inline-block h-5 w-5 bg-starick-white before:absolute before:left-1/4 before:top-1/3 before:inline-block before:h-[7px] before:w-[7px] before:rotate-45 before:border-r-2 before:border-t-2 before:border-starick-black     before:content-['']"></span>
              <span className=" text-lg">Subscribe</span>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

const Donation = () => {
  return (
    <>
      <section className="relative order-3 text-starick-white before:absolute before:right-0 before:top-0 before:w-[50vw] before:bg-starick-olive before:content-[''] lg:auto-rows-min lg:p-12 lg:before:block  lg:before:h-1  ">
        <div className="mx-auto flex max-w-xl lg:mr-0">
          <div className="pr-6">
            <h4 className="pb-2 text-2xl">Make a donation</h4>
            <p className="mb-5 max-w-xs text-xs font-light">
              Donate now to help us support women and children escaping domestic
              and family violence
            </p>
            <button className=" h-9 text-sm font-semibold text-starick-white lg:text-left  ">
              <div className="ml-2 flex items-center gap-2">
                <span className="relative inline-block h-5 w-5 bg-starick-white before:absolute before:left-1/4 before:top-1/3 before:inline-block before:h-[7px] before:w-[7px] before:rotate-45 before:border-r-2 before:border-t-2 before:border-starick-black     before:content-['']"></span>
                <span className=" text-lg">Donate</span>
              </div>
            </button>
          </div>
          <div>
            <h4 className="pb-2 text-2xl">Explore our services</h4>
            <p className="max-w-xs text-xs font-light">
              Our services include core services, such as refuges and outreach
              programs, and our other health and wellbeing services and programs
            </p>
            <button className="mt-4 h-9 text-sm font-semibold text-starick-white lg:text-left  ">
              <div className="ml-2 flex items-center gap-2">
                <span className="relative inline-block h-5 w-5 bg-starick-white before:absolute before:left-1/4 before:top-1/3 before:inline-block before:h-[7px] before:w-[7px] before:rotate-45 before:border-r-2 before:border-t-2 before:border-starick-black     before:content-['']"></span>
                <span className="text-lg">Our Services</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
