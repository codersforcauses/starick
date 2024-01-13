import Image from "next/image";
import { FormEvent } from "react";



export default function ContactUs() {



  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const firstname = (event.currentTarget.elements.namedItem("entry.339576848") as HTMLInputElement).value
    const lastname = (event.currentTarget.elements.namedItem("entry.810035821") as HTMLInputElement).value
    const phone = (event.currentTarget.elements.namedItem("entry.622549956") as HTMLInputElement).value
    const email = (event.currentTarget.elements.namedItem("entry.2009362426") as HTMLInputElement).value
    const enquiry = (event.currentTarget.elements.namedItem("entry.1073078232") as HTMLInputElement).value




    // console.log((event.currentTarget.elements.namedItem("entry.339576848") as HTMLInputElement).value)
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


  }

  return (
    <>
      <div className="h-auto w-full">
        <img src="/images/starick-image1.jpg" className="w-full" alt="" />
        <div className="relative -mt-20 mb-6 w-fit rounded-r-full bg-white px-14">
          <p className="p-2 text-4xl font-bold text-[--starick-brown]">
            Contact Us
          </p>
        </div>
      </div>
      <div className="bg-[--starick-white] px-6 py-2">
        <div className="flex flex-wrap">
          <div className=" basis-full md:basis-1/2">
            <div className="p-6 md:px-16 ">
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
                <span className="font-semibold">Email:</span>{" "}
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

            <div className="p-6 md:px-16">
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
                <span className="font-semibold">Hours: </span>Mon-Fri 10am to
                3pm, Sat 10am to 2pm
              </p>
            </div>
          </div>

          <div className="p-6 basis-full md:basis-1/2">

            <form
              id="mG61Hd"
              onSubmit={handleSubmit}
            >
              <div>
                <p className="text pb-6 text-2xl font-semibold">Send us an email</p>
                <div>
                  <label htmlFor="firstname">First Name *</label>
                  <div>
                    <input
                      name="entry.339576848"
                      id="firstname"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="lastname">Last Name *</label>
                  <div>
                    <input
                      name="entry.810035821"
                      id="lastname"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="phone">Phone *</label>
                  <div>
                    <input
                      name="entry.622549956"
                      id="phone"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="email">Email Address *</label>
                  <div>
                    <input
                      name="entry.2009362426"
                      id="email"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="enquiry">Enquiry *</label>
                  <div>
                    <textarea name="entry.1073078232" id="enquiry"></textarea>
                  </div>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
