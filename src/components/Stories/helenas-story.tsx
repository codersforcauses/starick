import QuoteBlock from "./quote-block";
import ServicesSection from "../Services/services-section";

export default function HelenasStory() {
  const quoteBlockText =
    "Starick’s Outreach team continued to provide emotional support to Helena.  Referrals were also made to other agencies who were able to provide ongoing co-ordinated support and services to her.";
  const body = (
    <>
      <p className="mb-10 mt-6 pb-5 text-center text-xl">
        Helena was assisted by our outreach services team. We have changed her
        name to protect her identity.
      </p>
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
        <div>
          <p>
            Helena is an elderly single woman who was socially isolated and
            lived in her own home. Her adult children were the perpetrators,
            regularly abusing her, physically, verbally and financially.
          </p>
          <br />
          <p>
            Helena was referred to Starick after being physically assaulted by a
            family member. Helena had not reported these earlier assaults by her
            family to anyone, she was frightened of being alone and abandoned by
            her family if she did not give them what they wanted. However, she
            acknowledged to Starick staff that these assaults were ongoing and
            she just wanted them to stop.
          </p>
          <br />
          <p>
            The Starick Outreach worker who visited Helena was very concerned
            about her vulnerability, repeated intimidation by family members for
            money and threats to harm her or damage her property if she did not
            comply were a great cause of stress and fear, and Helena stated that
            she felt very unsafe.
          </p>
          <br />
          <p>
            Helena worked with staff on how to safely disengage with her family
            and she showed great strength in refusing to hand over money to
            family members, even though this meant that they were verbally
            abusing her as a result.
          </p>
        </div>
        <div>
          <p>
            Starick staff supported Helena to access health services who would
            visit her weekly and assist in her daily care. Staff assisted Helena
            to contact legal services who assisted her in financially securing
            her home so her family could have no claim on it, Helena stated that
            she felt secure and safe in her home and the fear of homelessness
            had gone.
          </p>
          <br />
          <p>
            From the risk assessment and safety plan and security assessment
            that was done with Helena the gate height was raised so that people
            could not climb over, locks were rekeyed and a security camera
            installed. These services helped to protect Helena from her
            perpetrators.
          </p>
          <br />
          <QuoteBlock text={quoteBlockText} />
        </div>
      </div>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="Helena's Story"
      imagePath="/placeholder_starick_logo.png"
      textOnLeft={true}
    />
  );
}
