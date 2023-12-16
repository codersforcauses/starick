import Link from "next/link";
import Banner from "@/components/Services/banner";

export default function ResourcesAndToolkits() {
  return (
    <>
      <Banner
        titleText="Work with Children and Young People"
        subtitleText="Resources and Toolkits"
      />
      <br></br>
      <br></br>
      <div className="-mx-2 flex flex-wrap justify-center bg-[--starick-white]">
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <Link href="./resources-and-toolkits/child-safe-resources">
            <img
              className="block h-auto w-full"
              src="/images/child-safe-organisation-resources.png"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <Link href="./resources-and-toolkits/childrens-participation-and-engagement">
            <img
              className="block h-auto w-full"
              src="/images/children's-participation-and-engagement.png"
              alt=""
            ></img>
          </Link>
        </div>
      </div>

      <br></br>
      <div className="-mx-2 flex flex-wrap justify-center bg-[--starick-white]">
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <Link href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Childrens-Resource-11.7.22.pdf">
            <img
              className="block h-auto w-full"
              src="/images/covid-19-kit-for-children-&-young-people.png"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <Link href="./resources-and-toolkits/covid-19-kit-for-parents">
            <img
              className="block h-auto w-full"
              src="/images/covid-19-kit-for-parents.png"
              alt=""
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
}
