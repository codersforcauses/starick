import ServicesSection from "../Services/services-section";

export default function SupportInfo() {
  const body = (
    <>
      <h1 className="text-xl font-semibold">
        Women&apos;s Domestic Violence Helpline:
      </h1>
      <ul>
        <li className="list-inside list-disc">(08) 9223 1188</li>
        <li className="list-inside list-disc">
          Or Country Freecall 1800 007 339
        </li>
      </ul>
      <br />
      <h2 className="text-xl font-semibold">
        Legal Aid Domestic Violence Unit:
      </h2>
      <ul>
        <li className="list-inside list-disc">(08) 9261 6222</li>
      </ul>
      <br />
      <h3 className="text-xl font-semibold">
        Men&apos;s Domestic Violence Helpline:
      </h3>
      <ul>
        <li className="list-inside list-disc">(08) 9223 1199</li>
        <li className="list-inside list-disc">
          Or Country Freecall 1800 000 599
        </li>
      </ul>
      <br />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="Support Info"
      iconPath="icons/care.svg"
    />
  );
}
