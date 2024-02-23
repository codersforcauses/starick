import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import Disclaimer from "@/components/Services/ResourceAndToolkits/disclaimer";

export default function ResourcesAndToolkits() {
  return (
    <>
      <PageHeader
        titleText="Work with Children and Young People"
        subtitleText="Resources and Toolkits"
      />

      <div className="-mx-2 mb-8 mt-12 flex flex-wrap justify-center bg-starick-white">
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <Link href="./resources-and-toolkits/child-safe-resources">
            <Image
              className="block h-auto w-full"
              src="/images/child-safe-organisation-resources.png"
              alt=""
              height="300"
              width="300"
            />
          </Link>
        </div>
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <Link href="./resources-and-toolkits/childrens-participation-and-engagement">
            <Image
              className="block h-auto w-full"
              src="/images/children's-participation-and-engagement.png"
              alt=""
              height="300"
              width="300"
            />
          </Link>
        </div>
      </div>

      <div className="-mx-2 mb-12 flex flex-wrap justify-center bg-starick-white">
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Childrens-Resource-11.7.22.pdf">
            <Image
              className="block h-auto w-full"
              src="/images/covid-19-kit-for-children-&-young-people.png"
              alt=""
              height="300"
              width="300"
            />
          </a>
        </div>
        <div className="w-1/2 px-4 md:w-1/3 lg:w-1/4">
          <Link href="./resources-and-toolkits/covid-19-kit-for-parents">
            <Image
              className="block h-auto w-full"
              src="/images/covid-19-kit-for-parents.png"
              alt=""
              height="300"
              width="300"
            />
          </Link>
        </div>
      </div>
      <Disclaimer />
    </>
  );
}
