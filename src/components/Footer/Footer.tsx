import Image from "next/image";
import Link from "next/link";

import AboriginalFlag from "~/aboriginal_flags/aboriginal-flag-150x150.png";
import TorresStraitIslanderFlag from "~/aboriginal_flags/aboriginal-flag-blue-150x150.png";

interface SiteMap {
  title: string;
  link: string;
}
type Props = {
  children: SiteMap[];
};
{
  /* write the sitemap's title and link here */
}
const SiteMaps: SiteMap[] = [
  { title: "Site map / links to pages here", link: "#" },
  { title: "Home", link: "/home" }
];
{
  /* figue out the Privacy & Disclaimer link */
}
const PrivacyDisclaimerLink = "/privacy";

const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
  {
    /* figue out the Privacy & Disclaimer link */
  }
  return event;
};

const Footer = () => {
  return (
    <>
      {/* only in large window will get the sticky effect */}
      <div className="bottom-0 grid flex-grow-0 items-center justify-items-center bg-starick-olive p-0 lg:grid-cols-[2fr_1.2fr_1fr] xl:grid-cols-[1.2fr_1fr_1fr]">
        <Flag></Flag>
        <Contact>{SiteMaps}</Contact>
        <Email></Email>
      </div>
    </>
  );
};

const Flag = () => {
  return (
    <div className="text-center md:ml-6">
      <div className=" flex flex-wrap items-center justify-center p-1 ">
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
          className=" transition ease-in-out hover:text-starick-orange hover:underline"
        >
          Privacy & Disclaimer
        </Link>
      </p>
    </div>
  );
};

const Contact = ({ children }: Props) => {
  const siteLists = children.map((site) => (
    <li
      key={site.title}
      className=" transition ease-in-out hover:text-starick-orange hover:underline"
    >
      <a href={site.link}>{site.title}</a>
    </li>
  ));

  return (
    <>
      <ul className="m-3 p-2 text-center lg:text-left">{siteLists}</ul>
    </>
  );
};

const Email = () => {
  return (
    <div className=" mx-auto  mb-9 lg:mb-2 lg:ml-6  lg:mr-5 lg:text-left">
      <p className="mb-2 text-center text-base font-normal text-black lg:text-left">
        Subscribe to our newsletter
      </p>
      <section className=" flex min-w-[100px] overflow-hidden ">
        <input
          type="email"
          name="email"
          className=" rounded-l-lg px-5 py-2 placeholder-slate-400  shadow-sm outline-none ring-0 
          invalid:border-starick-orange invalid:text-starick-orange focus:ring-2 focus:ring-inset focus:ring-starick-orange focus:invalid:border-starick-orange
          focus:invalid:ring-starick-orange sm:text-sm"
          placeholder="you@example.com"
        />
        <button
          onClick={onSubmit}
          className="ml-0 rounded-none rounded-r-lg bg-starick-olive  px-5 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default Footer;
