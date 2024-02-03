import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

const JumpButton = () => {
  return (
    <>
      <button
        onClick={(e) => handClick()}
        className=" h-9 text-sm font-semibold text-starick-white lg:text-left  "

      >
        <div className="ml-2 mt-8 flex items-center gap-2">
          <span className="relative inline-block h-5 w-5 bg-starick-white before:absolute before:left-1/4 before:top-1/3 before:inline-block before:h-[7px] before:w-[7px] before:rotate-45 before:border-r-2 before:border-t-2 before:border-starick-black     before:content-['']"></span>
          <span className=" text-lg">Subscribe</span>
        </div>
      </button>
    </>
  );
};

const Footer = () => {
  return (
    <>
      {/* only in large window will get the sticky effect */}
      <div className="flex flex-col overflow-hidden  bg-starick-green p-8 px-5 lg:grid lg:grid-cols-2 lg:grid-rows-2 ">
        <Subscribe></Subscribe>
        <Contact>{SiteLinks}</Contact>
        <Donation></Donation>
        <Acknowledgement></Acknowledgement>
      </div>
    </>
  );
};

const Acknowledgement = () => {
  return (
    <div className="relative order-4 border-starick-olive text-center before:absolute before:left-0 before:top-0 before:w-[50vw] before:bg-starick-olive before:content-[''] lg:border-l lg:before:block lg:before:h-[1px] ">
      <div className=" flex flex-wrap items-center justify-center p-1">
        <div className="w-auto overflow-hidden">
          <Image
            src={AboriginalFlag}
            alt="Aboriginal Flag"
            width={50}
            height={50}
            className=" float-left mr-2 mt-1 "
          />
          <Image
            src={TorresStraitIslanderFlag}
            alt="Torres Strait Islander Flag"
            width={50}
            height={50}
            className=" float-left mt-1"
          />
        </div>

        <p className=" my-2 ml-3 max-w-sm text-left text-xs font-normal text-black ">
          Starick acknowledges Aboriginal and Torres Strait Islander people as
          the Traditional Custodians of this country and its waters. We pay
          respect to their Elders past and present and extend this to all
          Aboriginal people seeing this message.
        </p>
      </div>

      <p className="mb-1 pb-1 font-normal text-black  ">
        © 2023 Starick. All Rights Reserved. |{" "}
        <Link
          href={PrivacyDisclaimerLink}
          className=" hover:text-starick-orange hover:underline"
        >
          Privacy & Disclaimer
        </Link>
      </p>
    </div>
  );
};

const Contact = ({ children }: Props) => {
  const siteLists = children.map((site) => (
    <li key={site.title} className=" hover:text-starick-orange hover:underline">
      <a href={site.link}>{site.title}</a>
    </li>
  ));

  return (
    <>
      <section>
        <div>
          <p>Building futures for women and children free from violence</p>
          <div>
            <div></div>
            <div></div>
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
    <section className=" order-1 border-starick-olive pt-8 lg:border-l lg:pb-14 lg:pl-14 lg:pt-14 lg:text-left">
      <div className=" mx-auto max-w-xl">
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
      <section className="relative order-3 before:absolute before:right-0 before:top-0 before:w-[50vw] before:bg-starick-olive before:content-[''] lg:before:block  lg:before:h-[1px]  ">
        <div>
          <div>
            <p>Make a donation</p>
            <p>
              Donate now to help us support women and children escaping domestic
              and family violence
            </p>
          </div>
          <div>
            <p>Explore our services</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
