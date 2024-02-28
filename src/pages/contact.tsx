import { FormEvent, useState } from "react";
import PageHeader from "@/components/page-header";

export default function ContactUs() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget)
    const firstname = (
      event.currentTarget.elements.namedItem(
        process.env.NEXT_PUBLIC_FIRSTNAME_FIELD_NAME as string
      ) as HTMLInputElement
    ).value;
    const lastname = (
      event.currentTarget.elements.namedItem(
        process.env.NEXT_PUBLIC_LASTNAME_FIELD_NAME as string
      ) as HTMLInputElement
    ).value;
    const phone = (
      event.currentTarget.elements.namedItem(
        process.env.NEXT_PUBLIC_PHONE_FIELD_NAME as string
      ) as HTMLInputElement
    ).value;
    const email = (
      event.currentTarget.elements.namedItem(
        process.env.NEXT_PUBLIC_EMAIL_FIELD_NAME as string
      ) as HTMLInputElement
    ).value;
    const enquiry = (
      event.currentTarget.elements.namedItem(
        process.env.NEXT_PUBLIC_ENQUIRY_FIELD_NAME as string
      ) as HTMLInputElement
    ).value;

    const response = await fetch("/api/email/email", {
      method: "POST",
      body: JSON.stringify({
        [process.env.NEXT_PUBLIC_FIRSTNAME_FIELD_NAME as string]: firstname,
        [process.env.NEXT_PUBLIC_LASTNAME_FIELD_NAME as string]: lastname,
        [process.env.NEXT_PUBLIC_PHONE_FIELD_NAME as string]: phone,
        [process.env.NEXT_PUBLIC_EMAIL_FIELD_NAME as string]: email,
        [process.env.NEXT_PUBLIC_ENQUIRY_FIELD_NAME as string]: enquiry
      })
    });

    if (response.status == 200) {
      setSuccess("Thank you for your email.");
      (document.getElementById("emailform") as HTMLFormElement).reset();
    } else {
      setError("Something went wrong.");
    }
  }

  return (
    <>
      <PageHeader titleText="Contact Us" />
      <div className="bg-[--starick-white] px-6 py-2">
        <div className="flex flex-wrap">
          <div className="basis-full p-6 md:basis-1/2 md:pl-16 lg:pl-32">
            <div>
              <p className="text pb-6 text-2xl font-semibold">Starick</p>
              <p>
                <span className="font-semibold">Refuges:</span> Phone: 08
                9458107
              </p>
              <p>
                <span className="font-semibold">Admin:</span> Phone: 08 9478
                5300
              </p>
              <p>
                <span className="font-semibold">Email: </span>
                info@starick.org.au
              </p>
              <p>PO Box 174</p>
              <p>CLOVERDALE WA 6985</p>
              <p>ABN 56 721 993 085</p>
              <p>
                <span className="font-semibold">Admin hours:</span> Mon-Fri
                8:30am to 4:30pm
              </p>
            </div>

            <div className="py-6">
              <p className="text pb-6 text-2xl font-semibold">
                Starick Op Shop
              </p>
              <p>
                <span className="font-semibold">Address:</span> 110 Kooyong
                Road, Riverdale
              </p>
              <p>
                <span className="font-semibold">Phone:</span> 08 6271 0299
              </p>
              <p>
                <span className="font-semibold">Hours:</span> Mon-Fri 10am to
                3pm, Sat 10am to 2pm
              </p>
            </div>
          </div>

          <div className="basis-full  p-6 md:basis-1/2 md:pr-16 lg:pr-32">
            <form id="emailform" onSubmit={handleSubmit}>
              <div>
                <p className="text pb-6 text-2xl font-semibold">
                  Send us an email
                </p>

                {error && (
                  <div className="mb-8 border border-red-700 bg-red-100 p-4 text-red-700">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="mb-8 rounded-lg border border-starick-green bg-starick-olive p-4 text-[#3a4726]">
                    {success}
                  </div>
                )}
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
                  <div className="col-span-1">
                    <label htmlFor="firstname">
                      First Name <span className="text-red-700">*</span>
                    </label>
                    <div>
                      <input
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 outline-none ring-2 ring-inset ring-starick-olive focus:outline-2 focus:outline-offset-0 focus:outline-starick-green "
                        name={process.env.NEXT_PUBLIC_FIRSTNAME_FIELD_NAME}
                        id="firstname"
                        type="text"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="lastname">
                      Last Name <span className="text-red-700">*</span>
                    </label>
                    <div>
                      <input
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 outline-none ring-2 ring-inset ring-starick-olive focus:outline-2 focus:outline-offset-0 focus:outline-starick-green"
                        name={process.env.NEXT_PUBLIC_LASTNAME_FIELD_NAME}
                        id="lastname"
                        type="text"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label htmlFor="phone">
                      Phone <span className="text-red-700">*</span>
                    </label>
                    <div>
                      <input
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 outline-none ring-2 ring-inset ring-starick-olive focus:outline-2 focus:outline-offset-0 focus:outline-starick-green"
                        name={process.env.NEXT_PUBLIC_PHONE_FIELD_NAME}
                        id="phone"
                        type="text"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label htmlFor="email">
                      Email Address <span className="text-red-700">*</span>
                    </label>
                    <div>
                      <input
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 outline-none ring-2 ring-inset ring-starick-olive focus:outline-2 focus:outline-offset-0 focus:outline-starick-green"
                        name={process.env.NEXT_PUBLIC_EMAIL_FIELD_NAME}
                        id="email"
                        type="text"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label htmlFor="enquiry">
                      Enquiry <span className="text-red-700">*</span>
                    </label>
                    <div>
                      <textarea
                        className="bock w-full rounded-md border-0 px-1.5 py-1.5 outline-none ring-2 ring-inset ring-starick-olive focus:outline-2 focus:outline-offset-0 focus:outline-starick-green"
                        name={process.env.NEXT_PUBLIC_ENQUIRY_FIELD_NAME}
                        id="enquiry"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="m-5 flex justify-center">
                  <button
                    className="text-lg font-semibold text-black group-hover:text-starick-orange"
                    type="submit"
                  >
                    <div className="group flex">
                      <div className="mr-2 inline-block flex-none bg-starick-green px-2 font-mono text-xl font-bold text-white group-hover:bg-starick-orange">
                        &#62;
                      </div>
                      <p className="text-lg font-semibold text-black group-hover:text-starick-orange">
                        Enquire
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
