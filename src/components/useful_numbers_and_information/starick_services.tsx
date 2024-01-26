import ServicesSection from "../Services/services-section";

export default function StarickServices() {
  const body = (
    <>
      <h1 className="text-xl font-semibold"> Starick crisis accomodation</h1>
      <p>
        If you are in immediate physical danger, call the police now on 000. If
        you are not in immediate danger and would prefer to speak to a support
        worker at one of your refuges:
      </p>
      <ul>
        <li className="list-inside list-disc">Phone (08) 9458 1107</li>
      </ul>
      <br />
      <h2 className="text-xl font-semibold">Starict oureach services</h2>
      <p>
        If you are experiencing domestic and family violence but are unable or
        unwilling to stay in a refuge, contact out outreach worker to discuss
        the range of free services we offer:
      </p>
      <ul>
        <li className="list-inside list-disc">
          Phone (08) 9398 5039 or walk into Starick&apos;s outreach services
          office at Community Lotteries House, 2232 Albany Highway, Gosnells.
        </li>
      </ul>
      <br />
      <h3 className="text-xl font-semibold">
        Starick domestic violence advocates
      </h3>
      <p>
        Out domestic violence advocates are based at local police stations and
        offer free support, as well as referral to legal and other services:
      </p>
      <ul>
        <li className="list-inside list-disc">
          Armadale: Call Armadale Police Station on 9399 0222 or walk in at 23
          Prospect Rd, Armadale
        </li>
        <li className="list-inside list-disc">
          Cannington: Call Cannington Police Station on 9451 0000 or walk into
          at 1325 Albany Hwy, Cannington.
        </li>
      </ul>
      <br />
      <h4 className="text-xl font-semibold">
        Starick &quot;Safe At Home&quot; program
      </h4>
      <p>
        If you want to stay in your home safe from an abusive partner or family
        member and that person is no longer living at the property, our Safe at
        Home program can offer practical advice and support. We also have a Safe
        at Home program specifically for Aboriginal women.
      </p>
      <ul>
        <li className="list-inside list-disc">(08) 6290 2816</li>
        <li className="list-inside list-disc">
          Or walk into Starick&apos;s office at Community Lotteries House, 2232
          Albany Highway, Gosnells.
        </li>
      </ul>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="Starick Services"
      iconPath="icons/resources.svg"
    />
  );
}
