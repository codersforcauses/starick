import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="grid bg-[#C3C9A0] p-4 xl:grid-cols-[auto_0.8fr_1fr]">
        <div className=" xl:ml-6 text-center ">
          <div className=" flex flex-wrap items-center justify-center p-5 ">
            <div className=" w-auto overflow-hidden  ">
              <img
                src="https://via.placeholder.com/50x50"
                alt=""
                className=" float-left mr-2 h-[50px]  w-[50px]"
              />
              <img
                src="https://via.placeholder.com/50x50"
                alt=""
                className=" float-left h-[50px] w-[50px]"
              />
            </div>

            <p className=" my-2 ml-3 max-w-sm text-left text-xs font-normal text-black  ">
              Starick acknowledges Aboriginal and Torres Strait Islander people
              as the Traditional Custodians of this country and its waters. We
              pay respect to their Elders past and present and extend this to
              all Aboriginal people seeing this message.
            </p>
          </div>

          <p className="  sm:ml-[-4rem] font-normal text-black   ">
            © 2023 Starick. All Rights Reserved. |{" "}
            <a href="#" className="hover:underline">
              Privacy & Disclaimer
            </a>
          </p>
        </div>
        <div className="m-3 text-center ">
          <p className="min-w-min hover:underline  "><a href="#">Site map / links to pages here</a></p>
          <p className="min-w-min hover:underline  "><a href="#">Site map / links to pages here</a></p>{" "}
          <p className="min-w-min hover:underline  "><a href="#">Site map / links to pages here</a></p>{" "}
          <p className="min-w-min hover:underline  "><a href="#">Site map / links to pages here</a></p>
        </div>
        <div className=" mx-auto text-center xl:ml-6 xl:text-left my-5 mb-9 ">
          <p className="text-base font-normal text-black mb-4">
            Subscribe to our newsletter
          </p>
          <input
            className="  border-0 py-1.5 pl-4 pr-10 text-gray-900  placeholder:text-gray-400   sm:text-sm sm:leading-6"
            placeholder="youremail@gmail.com"
            type="text"
          />
          <button className="px-5 py-2 font-semibold text-sm bg-[#738C4B] text-white rounded-none shadow-sm ml-0">Submit</button>
        </div>
      </footer>
    </>
  );
};
export default Footer;
