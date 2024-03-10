import QuoteBlock from "./quote-block";
import ServicesSection from "../Services/services-section";

export default function TaranehsStory() {
  const quoteBlockText =
    " I appreciate all the help that staff have offered to me. I am noticing improvements in my health and wellbeing since being at the refuge. I feel that staff are very respectful of my Muslim culture.My daughter’s development is much better than before. I feel I am bonding with everyone well. I have learned how to use the ATM and how to use public transport to go to different places. I am more able to seek assistance, am more confident to talk to people and I now cook healthy food. ";
  const body = (
    <>
      <p className="mb-10 pb-7 pt-7 text-center text-xl">
        Taraneh was a resident at our Mary Smith Refuge. We have changed her
        name to protect her identity.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-2">
            Taraneh and her 18-month-old daughter came to our Mary Smith Refuge
            when she had to flee her home due to family and domestic violence.
            She said she needed a break from her family because they were very
            verbally abusive.
          </p>
          <p className="mb-2">
            Taraneh had arrived in Australia as a refugee with her husband and
            extended family. She separated from her husband to escape his
            violence and moved in with her extended family. Here she was further
            abused, physically, psychologically and financially. She was
            deprived of food and privacy. She often slept in a park, which she
            found safer than living with her family.
          </p>
          <p className="mb-2">
            When Taraneh arrived at the Mary Smith Refuge, she was in very poor
            health, in a state of malnutrition and needed immediate medical
            attention. She felt shame and grief from losing her family
            connection and was socially isolated. Taraneh told Starick staff
            that she needed assistance in sourcing help for her daughter and
            herself.
          </p>
          <p className="mb-2">
            Starick staff supported Taraneh in the following ways:
          </p>
          <ul className="ml-4 list-outside list-disc">
            <li>
              Supported her to apply for accommodation through the Department of
              Housing.
            </li>
            <li>Advocated for her and offered emotional support.</li>
            <li>Developed a budget.</li>
            <li>
              Helped her to connect with other women and participate in
              workshops
            </li>
            <li>
              Made referrals at her request to health service providers,
              centrelink, legal services and Counselling.
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-2">
            We are pleased to report that Taraneh has grown emotionally
            stronger, happier and more confident and is looking forward to
            moving into her own place. She has been listed for priority
            assistance and referred to Starick’s transitional housing program.
          </p>
          <p className="mb-2">
            Her physical health has improved dramatically. She has developed
            budgeting skills and reports that she feels more in control of her
            life.
          </p>
          <p className="mb-2">
            Her social skills and confidence have improved and she is meeting
            new friends.
          </p>
          <p className="mb-2">
            Here’s what Taraneh says about the Mary Smith refuge...
          </p>
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
      imagePath="/hands.png"
      title="Taraneh's Story"
      textOnLeft={true}
    />
  );
}
