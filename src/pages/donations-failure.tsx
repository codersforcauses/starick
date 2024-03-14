import PageHeaderBigCircle from "@/components/page-header-bigcircle";
import { format } from "path";
import Link from "next/link";

export default function donationSuccess() {
  const failureBody = (
    <div className="my-10 flex flex-col justify-center">
      <div className="items-top mb-10 flex justify-center">
        <img
          src="/icons/exclamation.svg"
          alt=""
          style={{ height: "120px", width: "120px" }}
        />
      </div>
      <div>
        <p className="text-l mb-8 font-bold">Your payment was unsuccessful!</p>
      </div>
      <div>
        <p className="">Please try again, or contact Starick for support.</p>
      </div>
      <div className="mt-10 flex flex-row justify-between">
        <Link href="/donations">
          <span className="mr-2 border-none bg-starick-green px-1 text-white">
            &gt;
          </span>
          Go back
        </Link>
        <Link href="/contact">
          <span className="mr-2 border-none bg-starick-green px-1 text-white">
            &gt;
          </span>
          Contact Us
        </Link>
      </div>
    </div>
  );
  return (
    <>
      <div>
        <PageHeaderBigCircle
          titleText="Oh no!"
          subtitleElement={failureBody}
          socialMedia={false}
          textOnLeft={true}
        />
      </div>
    </>
  );
}
