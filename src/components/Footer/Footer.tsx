import Image from "next/image";

const Footer = () => {
  return (
    <>
    {/* only in large window will g */}
      <footer className="lg:sticky bottom-0 grid bg-[#C3C9A0] p-0 lg:grid-cols-[2fr_1.2fr_1fr] ">
        <Flag></Flag>
        <Contact></Contact>
        <Email></Email>
      </footer>
    </>
  );
};

const Flag = () => {
  return (
    <div className=" text-center md:ml-6 ">
      <div className=" flex flex-wrap items-center justify-center p-1 ">
        <div className=" w-auto overflow-hidden  ">
          <Image
            src=""
            alt=""
            width="0"
            height="0"
            className=" float-left mr-2 h-[50px]  w-[50px]"
          />
          <Image
            src=""
            alt=""
            width="0"
            height="0"
            className=" float-left h-[50px] w-[50px]"
          />
        </div>

        <p className=" my-2 ml-3 max-w-sm text-left text-xs font-normal text-black  ">
          Starick acknowledges Aboriginal and Torres Strait Islander people as
          the Traditional Custodians of this country and its waters. We pay
          respect to their Elders past and present and extend this to all
          Aboriginal people seeing this message.
        </p>
      </div>

      <p className="pb-1 font-normal text-black mb-1  ">
        © 2023 Starick. All Rights Reserved. |{" "}
        <a href="#" className="hover:underline">
          Privacy & Disclaimer
        </a>
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="m-3 p-2 text-center lg:text-left   ">
      <p className="min-w-min hover:underline  ">
        <a href="#">Site map / links to pages here</a>
      </p>
      <p className="min-w-min hover:underline  ">
        <a href="#">Site map / links to pages here</a>
      </p>{" "}
      <p className="min-w-min hover:underline  ">
        <a href="#">Site map / links to pages here</a>
      </p>{" "}
      <p className="min-w-min hover:underline  ">
        <a href="#">Site map / links to pages here</a>
      </p>
    </div>
  );
};
const Email = () => {
  return (
    <div className=" mx-auto my-5 mb-9  lg:ml-6 lg:text-left ">
      <p className="mb-4 text-left text-base font-normal text-black">
        Subscribe to our newsletter
      </p>
      <section className=" flex min-w-[100px] overflow-hidden ">
        <input
          type="email"
          name="email"
          className=" px-5 py-2 placeholder-slate-400 shadow-sm  focus:outline-none focus:ring-1 sm:text-sm"
          placeholder="you@example.com"
        />
        <button className="ml-0 rounded-none bg-[#738C4B] px-5 py-2 text-sm font-semibold text-white shadow-sm">
          Submit
        </button>
      </section>
    </div>
  );
};

export default Footer;
