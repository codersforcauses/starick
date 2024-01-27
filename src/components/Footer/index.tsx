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

const Footer = () => {
  return (
    <>
      {/* only in large window will get the sticky effect */}
      <div className="flex flex-col overflow-hidden  bg-starick-green px-5 lg:grid lg:grid-cols-2 lg:grid-rows-2 ">
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
      <ul className="m-3 p-2 text-center  lg:text-left">{siteLists}</ul>
    </>
  );
};

const Subscribe = () => {
  const [userMail, setUserMail] = useState<string>("");
  const [isNotValid, setIsNotValid] = useState<boolean>(true);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const validation: boolean = e.target.checkValidity();
    setIsNotValid(true);
    if (validation) {
      setIsNotValid(false);
    }
    setUserMail(e.target.value);
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
    <div className=" order-1 border-starick-olive lg:border-l lg:text-left">
      <p className="mb-2 text-center text-base font-normal text-black lg:text-left">
        Subscribe to our newsletter
      </p>
      <form className=" relative">
        <input
          type="email"
          name="email"
          className="h-29 rounded-l-lg px-5 py-2 text-sm  placeholder-slate-400 shadow-sm outline-none 
          ring-0 invalid:border-starick-orange invalid:text-red-600 focus:ring-2 focus:ring-inset focus:ring-starick-orange
          focus:invalid:border-starick-orange focus:invalid:ring-starick-orange"
          placeholder="you@example.com"
          value={userMail}
          onChange={(e) => handleChange(e)}
        />
        <button
          onClick={(e) => handleSubmit(e, userMail, setUserMail)}
          className=" h-9 rounded-r-lg bg-starick-green px-5 text-sm font-semibold text-starick-white shadow-sm hover:bg-starick-orange "
          disabled={isNotValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const Donation = () => {
  return (
    <>
      <div className="relative order-3 before:absolute before:right-0 before:top-0 before:w-[50vw] before:bg-starick-olive before:content-[''] lg:before:block  lg:before:h-[1px]  ">
        Donation
      </div>
    </>
  );
};

export default Footer;
