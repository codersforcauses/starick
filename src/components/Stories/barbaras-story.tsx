import QuoteBlock from "./quote-block";
import ServicesSection from "../Services/services-section";

export default function BarbarasStory() {
  const quoteBlockText =
    "The family started to attend a local church and the children enjoyed participating in youth groups and other activities there. Barbara was pleased to have re-engaged with the church since leaving her marriage. Her husband had stopped her and her children from attending.";
  const body = (
    <>
      <p className="mb-10 mt-6 pb-7 text-center text-xl">
        Barbara was initially an Outreach Services client, who moved into one of
        our transitional homes. We have changed the names of herself and her
        three children to protect their identity.
      </p>
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
        <div>
          <p>
            Barbara moved into a Starick transitional house with her three
            children, 18-year-old James, 16-year-old Annie and 11-year-old
            Connie.
          </p>
          <br />
          <p>
            Barbara had struggled with clinical depression and James and Connie
            were diagnosed with developmental disabilities.
          </p>
          <br />
          <p>
            Starick Outreach staff supported Barbara as she contacted Adult
            Mental Health Services and settled into regular visits with a
            clinician from the service.
          </p>
          <br />
          <p>
            Staff also supported Barbara in her attempts to access services for
            her children.
          </p>
          <br />
          <p>
            There had been little support for James because he had declined to
            engage with disability services. Starick provided information on
            available supports and encouraged Barbara to access services for
            James’s long-term benefit.
          </p>
          <br />
          <p>
            Annie, who was at high school, was linked into the Young Carers and
            Siblings programs.
          </p>
          <br />
          <p>
            Staff worked with Connie so that she was able to walk to her primary
            school on her own and our Outreach staff gently encouraged Barbara
            to consider respite services and recreational programs for Connie.
          </p>
          <br />
          <p>
            Barbara stated that her severe clinical depression she had caused
            her to fall into severe financial difficulties, and Starick staff
            worked with her to address arrears she accumulated in rent and
            utilities. Special arrangements were made to provide regular
            emergency relief for her assist her in clearing her debts and met
            with her regularly to assist her in managing her budget. Barbara
            received help from a financial counsellor and considered
            Centrelink’s Voluntary Income Management.
          </p>
        </div>
        <div>
          <QuoteBlock text={quoteBlockText} />
          <br />
          <p>
            Barbara was given a high level of support from Starick staff to
            assist her in maintaining her tenancy and meeting her financial
            obligations. Staff also engaged with other specialist services to
            assist Barbara in maintaining the support needs she required long
            term.
          </p>
          <br />
          <p>
            Barbara felt that her outcomes were positive, as a result of her
            good rapport with Starick and her ability to work collaboratively
            with other agencies.
          </p>
          <br />
          <p>
            Staff supported Barbara to assist her in maintaining her tenancy and
            meeting her financial obligations. Staff also engaged with other
            specialist services to assist Barbara in maintaining the support
            needs she required long term.
          </p>
          <br />
          <p>
            Barbara felt that her outcomes were positive, as a result of her
            good rapport with Starick and her ability to work collaboratively
            with other agencies.
          </p>
        </div>
      </div>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="Barbara's Story"
      imagePath="/placeholder_starick_logo.png"
      textOnLeft={false}
    />
  );
}
