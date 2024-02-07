import { useEffect, useState } from "react";
import Image from "next/image";

export default function FacebookFeed() {
  return (
    <div>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FStarickServices&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        width="340"
        height="500"
        title="facebook-embed"
        className="mx-40 flex justify-center"
      ></iframe>

      <div className="mt-20 items-center text-3xl font-bold text-starick-brown ">
        <p>Get involved! Follow our events on Instagram</p>
      </div>

      <div className="mt-10 flex flex-row items-center justify-center">
        <a
          href="https://www.instagram.com/starickservices/"
          className="flex w-auto items-center rounded-md bg-blue-500 px-3 py-1 text-white transition-colors duration-300 hover:bg-blue-600"
        >
          <Image
            src="/icons/instagram.svg"
            alt="instagram"
            width={30}
            height={40}
            className="my-1"
          />
          <div className=" mx-20">
            <p>Instagram</p>
          </div>
        </a>
      </div>
    </div>
  );
}
