/* eslint-disable react/no-unescaped-entities */
import SubSection from "../Services/subsection";
import { List } from "../Services/list";
import ServicesSection from "../Services/services-section";

export default function WhatisDomesticViolenceSection() {
  const technologicalOrDigitalAbuseExample = (
    <List
      items={[
        "Telling you who you can or can’t be friends with on Facebook and other sites",
        "Sending you negative, insulting or threatening emails, Facebook messages, tweets or other online messages",
        "Using sites like Facebook, Twitter, foursquare and others to keep constant tabs on you",
        "Stealing or insisting you share your passwords",
        "Constantly texting you and punishing you if you don't respond",
        "Looking through your phone frequently to check up on your pictures, texts and outgoing calls",
        "Tagging you in negative ways in pictures on Facebook, Instagram, Tumblr, etc."
      ]}
      style="list-disc"
    />
  );

  const subBody = (
    <div className="pl-3">
      <p className="text-xl font-bold">Physical abuse</p>
      <br />
      <p>
        This may include hurting you (pushing, hair-pulling, spitting, slapping,
        punching, choking, kicking), or threatening to hurt you, a loved one or
        a pet.
      </p>
      <br />
      <p>
        But not all abuse is physical. If someone in your life regularly
        controls, threatens or insults you, stops you using social media or
        won't let you contact your friends, it can harm you just as much as
        physical violence. Here are some of the forms that abuse may take:
      </p>
      <br /> <br />
      <p className="text-xl font-bold">Financial abuse</p>
      <br />
      <p>
        Taking, stealing or controlling your money, denying you access to money
        or telling you what you can and can’t buy. You'll find more information
        on financial abuse and how to deal with it here.
      </p>
      <br /> <br />
      <p className="text-xl font-bold">Sexual abuse</p>
      <br />
      <p>
        Pressuring, manipulating or forcing you into sexual activities you don’t
        want to do. Being "forced" also means not being in a position to say no
        as a result of fear, threats or intimidation.
      </p>
      <br /> <br />
      <p className="text-xl font-bold">Emotional abuse</p>
      <br />
      <p>
        This form of abuse is often unrecognised and can be very hurtful. Mind
        games, manipulation, threats, humiliation, put-downs, shouting, telling
        you that you're worthless or no good – these are all types of emotional
        or psychological abuse.
      </p>
      <br /> <br />
      <p className="text-xl font-bold">Social abuse</p>
      <br />
      <p>
        If someone is insulting you or teasing you in front of other people,
        keeping you isolated from family, friends and work, controlling what you
        do and where you go, then they are being abusive and you may need to
        take some action
      </p>
      <br /> <br />
      <p className="text-xl font-bold">Spiritual abuse</p>
      <br />
      <p>
        This type of violence involves a situation where you are not allowed to
        go to your place of worship or not allowed to have your own opinions
        about religion, cultural beliefs and values. Your spirituality is
        manipulated to keep you feeling powerless, or you are forced to
        participate in religious practice you do not want to be involved with.
      </p>
      <br /> <br />
      <p className="text-xl font-bold">Technological or digital abuse</p>
      <br />
      <p>
        Some abusers use social networks, emails and text messages to control
        you. This includes high-tech eavesdropping, video-monitoring the home,
        tracking your location with GPS devices and tampering with phone bills
        or emails.
      </p>
      <br />
      <p>
        Ways that texting and social media can be used to bully, harass, stalk
        or intimidate you include:
      </p>
      <br />
      {technologicalOrDigitalAbuseExample}
      <br />
    </div>
  );

  const body = (
    <>
      <SubSection
        sectionBody={subBody}
        iconPath="icons/reports.svg"
        iconOnRight={false}
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="Types of abuse"
      textOnLeft={true}
      circlesPlacement="bl"
    />
  );
}
