import { FormEvent, useState } from "react";
import PageHeader from "@/components/page-header";


export default function ContactUs() {
  // const [error, setError] =useState("dsadsadsads")
  // const [formErrorState, setFormErrorState] = 


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // const formData = new FormData(event.currentTarget)
    const firstname = (event.currentTarget.elements.namedItem("entry.339576848") as HTMLInputElement).value
    const lastname = (event.currentTarget.elements.namedItem("entry.810035821") as HTMLInputElement).value
    const phone = (event.currentTarget.elements.namedItem("entry.622549956") as HTMLInputElement).value
    const email = (event.currentTarget.elements.namedItem("entry.2009362426") as HTMLInputElement).value
    const enquiry = (event.currentTarget.elements.namedItem("entry.1073078232") as HTMLInputElement).value


    // console.log((event.currentTarget.elements.namedItem("entry.339576848") as HTMLInputElement).value)
    // const test: string = process.env.REACT_APP_FIRSTNAME_INPUT_NAME || '';
    console.log(process.env.NEXT_PUBLIC_TEST);
    

    const response = await fetch('/api/email/email' , {
      method: 'POST',
      body: JSON.stringify({
        'entry.339576848': firstname,
        'entry.810035821': lastname,
        'entry.622549956': phone,
        'entry.2009362426': email,
        'entry.1073078232': enquiry,
      }),
    })

    // if(response.status != "200"){
    //   setError("Something went wrong")
    // }


  }

  return (
    <>
      <PageHeader titleText="Contact Us" />
      <div className="bg-[--starick-white] px-6 py-2">
        <div className="flex flex-wrap">
          <div className="p-6 basis-full md:basis-1/2 md:pl-16 lg:pl-32">
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

          <div className="p-6  md:pr-16 lg:pr-32 basis-full md:basis-1/2">
            {/* {error && <div>{error}</div>} */}

            <form
              onSubmit={handleSubmit}
            >
              <div>
                <p className="text pb-6 text-2xl font-semibold">Send us an email</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  <div className="col-span-1">
                    <label htmlFor="firstname">First Name <span className="text-red-700">*</span></label>
                    <div>
                      <input className="block w-full rounded-md border-0 ring-2 ring-inset ring-starick-olive py-1.5 px-1.5 outline-none focus:outline-2 focus:outline-offset-0 focus:outline-starick-green "
                        name="entry.339576848"
                        id="firstname"
                        type="text"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="lastname">Last Name <span className="text-red-700">*</span></label>
                    <div>
                      <input className="block w-full rounded-md border-0 ring-2 ring-inset ring-starick-olive py-1.5 px-1.5 outline-none focus:outline-2 focus:outline-offset-0 focus:outline-starick-green"
                        name="entry.810035821"
                        id="lastname"
                        type="text"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label htmlFor="phone">Phone <span className="text-red-700">*</span></label>
                    <div>
                      <input className="block w-full rounded-md border-0 ring-2 ring-inset ring-starick-olive py-1.5 px-1.5 outline-none focus:outline-2 focus:outline-offset-0 focus:outline-starick-green"
                        name="entry.622549956"
                        id="phone"
                        type="text"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label htmlFor="email">Email Address <span className="text-red-700">*</span></label>
                    <div>
                      <input className="block w-full rounded-md border-0 ring-2 ring-inset ring-starick-olive py-1.5 px-1.5 outline-none focus:outline-2 focus:outline-offset-0 focus:outline-starick-green"
                        name="entry.2009362426"
                        id="email"
                        type="text"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label htmlFor="enquiry">Enquiry <span className="text-red-700">*</span></label>
                    <div>
                      <textarea className="bock w-full rounded-md border-0 ring-2 ring-inset ring-starick-olive py-1.5 px-1.5 outline-none focus:outline-2 focus:outline-offset-0 focus:outline-starick-green" name="entry.1073078232" id="enquiry" required></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="m-5 p-5 rounded-2xl bg-starick-brown text-white" type="submit">Enquire</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
