import Image from "next/image";
import { useState } from "react";

export default function Questions() {
  const [isDisplayed, setIsDisplayed] = useState(true);

  return (
    <div className="bg-[--starick-white]">
      <div className="relative  ">
        <div className="">
          <Image
            src="/images/starick-image1.jpg"
            alt=""
            width={1440}
            height={100}
            layout="responsive"
          />
        </div>
        <div className=" absolute inset-y-0 left-0 z-10 w-2/3 rounded-r-full bg-[--starick-green]">
          <div className="flex h-full items-center justify-center text-4xl">
            <p className=" text-[40px] font-black text-white">
              Frequently Asked Questions
            </p>
          </div>
        </div>
      </div>

      {/* nav drop--down menu */}
      <div className="p-20">
        <button
          className=" inline-flex w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
          onClick={() => {
            setIsDisplayed(!isDisplayed);
          }}
        >
          Page Navigation
          <svg
            className="ml-auto h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {/* menu content */}
        {isDisplayed && (
          <div className="">
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                What should I do if someone I know is experiencing domestic or
                family violence?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                How do I report an incident of domestic or family violence?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                How do I get into a Starick refuge?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                What can I take with me to the refuge?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                Can I bring my pet to the refuge?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                How long can I stay at the refuge?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                How does witnessing domestic violence affect children?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                What is outreach?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                What is a child advocate?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                What is a women’s advocate?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                What is a domestic violence advocate?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                What is HOWIC?
              </a>
            </div>
            <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
              <a href="" className="">
                What is a housing cluster?
              </a>
            </div>
          </div>
        )}
      </div>

      {/* sections */}
    </div>
  );
}
