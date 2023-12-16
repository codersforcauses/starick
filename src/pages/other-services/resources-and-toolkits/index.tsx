import Image from "next/image";
import Link from "next/link";

export default function ResourcesAndToolkits() {
  return (
    <>
      <div>
        <Image
          src="/images/starick-image1.jpg"
          className="w-full"
          alt=""
        ></Image>
        <div className="relative -mt-36 mb-6 w-fit rounded-r-full bg-white px-10">
          <p className="p-2 text-4xl font-bold text-[--starick-brown]">
            Work with Children and Young People
          </p>
          <p className="p-2 text-center text-3xl font-bold text-[--starick-brown]">
            Resources and Toolkits
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="-mx-2 flex flex-wrap justify-center bg-[--starick-white]">
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <Link href="./resources-and-toolkits/child-safe-resources">
            <Image
              className="block h-auto w-full"
              src="/images/child-safe-organisation-resources.png"
              alt=""
            ></Image>
          </Link>
        </div>
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <Link href="./resources-and-toolkits/childrens-participation-and-engagement">
            <Image
              className="block h-auto w-full"
              src="/images/children's-participation-and-engagement.png"
              alt=""
            ></Image>
          </Link>
        </div>
      </div>

      <br />
      <div className="-mx-2 flex flex-wrap justify-center bg-[--starick-white]">
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Childrens-Resource-11.7.22.pdf">
            <Image
              className="block h-auto w-full"
              src="/images/covid-19-kit-for-children-&-young-people.png"
              alt=""
            ></Image>
          </a>
        </div>
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <Link href="./resources-and-toolkits/covid-19-kit-for-parents">
            <Image
              className="block h-auto w-full"
              src="/images/covid-19-kit-for-parents.png"
              alt=""
            ></Image>
          </Link>
        </div>
      </div>
      <br />
    </>
  );
}
