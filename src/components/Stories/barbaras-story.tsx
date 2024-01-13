import ServicesSection from "../Services/services-section";
import QuoteBlock from "./quote-block";

export default function BarbarasStory() {
    const quoteBlockText = "The family started to attend a local church and the children enjoyed participating in youth groups and other activities there. Barbara was pleased to have re-engaged with the church since leaving her marriage. Her husband had stopped her and her children from attending.";
    const body = (
    <>
    <p className="text-lg my-6 mx-10 text-center">Barbara was initially an Outreach Services client, who moved into one of our transitional homes. We have changed the names of herself and her three children to protect their identity.</p>
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-6">
      <div>
        <p className="mb-2">Barbara moved into a Starick transitional house with her three children, 18-year-old James, 16-year-old Annie and 11-year-old Connie.</p>
        <p className="mb-2">Barbara had struggled with clinical depression and James and Connie were diagnosed with developmental disabilities.</p>
        <p className="mb-2">Starick Outreach staff supported Barbara as she contacted Adult Mental Health Services and settled into regular visits with a clinician from the service.</p>
        <p className="mb-2">Staff also supported Barbara in her attempts to access services for her children.</p>
        <p className="mb-2">There had been little support for James because he had declined to engage with disability services. Starick provided information on available supports and encouraged Barbara to access services for James’s long-term benefit.</p>
        <p className="mb-2">Annie, who was at high school, was linked into the Young Carers and Siblings programs.</p>
        <p className="mb-2">Staff worked with Connie so that she was able to walk to her primary school on her own and our Outreach staff gently encouraged Barbara to consider respite services and recreational programs for Connie.</p>
        <p className="mb-2">Barbara stated that her severe clinical depression she had caused her to fall into severe financial difficulties, and Starick staff worked with her to address arrears she accumulated in rent and utilities. Special arrangements were made to provide regular emergency relief for her assist her in clearing her debts and met with her regularly to assist her in managing her budget. Barbara received help from a financial counsellor and considered Centrelink’s Voluntary Income Management.</p>
      </div>
      <div>
        <QuoteBlock text={quoteBlockText} />
        <p className="my-2">Barbara was given a high level of support from Starick staff to assist her in maintaining her tenancy and meeting her financial obligations. Staff also engaged with other specialist services to assist Barbara in maintaining the support needs she required long term.</p>
        <p className="mb-2">Barbara felt that her outcomes were positive, as a result of her good rapport with Starick and her ability to work collaboratively with other agencies.</p>
        <p className="mb-2">Staff supported Barbara  to assist her in maintaining her tenancy and meeting her financial obligations. Staff also engaged with other specialist services to assist Barbara in maintaining the support needs she required long term.</p>
        <p className="mb-2">Barbara felt that her outcomes were positive, as a result of her good rapport with Starick and her ability to work collaboratively with other agencies.</p>
      </div>
    </div>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-brown"
      sectionBody={body}
      title="Barbaras's Story"
    />
  );
}
