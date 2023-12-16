import Image from "next/image";

import { ReactNode } from "react";
import Section from "@/components/basicInformation/Section";
import internal from "stream";

type Section = {
  titleBackgroundColor: string;
  titleTextColor: string;
  titleContent: string;
  contentBody: ReactNode;
  iconPath: string;
  isIconLeftSide: boolean;
  key: string;
};

const sections: Section[] = [
  {
    key: "1",
    titleBackgroundColor: "--starick-green",
    titleTextColor: "--starick-white",
    titleContent: "What is Domestic Violence?",
    contentBody: (
      <div className="text-3xl">
        <p className="font-bold">Domestic violence means abuse</p>
        <p>
          <span>
            Domestic violence is often called “domestic and family violence”{" "}
          </span>
          <span className="font-semibold"> because it’s not </span>
          <br></br>
          <span className="font-semibold">just partners that abuse.</span>
        </p>
        <br></br>
        <p>
          <span>
            Domestic and family violence means any type of abuse that creates
            fear and{" "}
          </span>
          <br></br>
          <span>
            controls another person, often causing physical, sexual and/or
            psychological
          </span>
          <br></br>
          <span>damage, forced social isolation and economic deprivation.</span>
        </p>
        <br></br>
        <span>
          Domestic and family violence usually means abuse against an intimate
          partner{" "}
        </span>
        <br></br>
        <span>(including same sex relationships and ex-partners). </span>
        <span className="font-semibold">But it can also occur between</span>
        <br />
        <span className="font-semibold">
          siblings, from adolescents to parents, or from family carers to a
          relative.{" "}
        </span>
        <br />
        <span>
          Domestic and family violence can also include the abuse of children
          and young
        </span>
      </div>
    ),
    iconPath: "/images/did-you-know.png",
    isIconLeftSide: true
  },
  {
    key: "2",
    titleBackgroundColor: "--starick-olive",
    titleTextColor: "--starick-black",
    titleContent: "Types of Abuse",
    contentBody: (
      <div className="text-3xl">
        <p className="font-bold">Physical abuse</p>
        <br />
        <p>
          This may include hurting you (pushing, hair-pulling, spitting,
          slapping, punching,
        </p>
        <p>
          choking, kicking), or threatening to hurt you, a loved one or a pet.
        </p>
        <br />
        <p>
          But not all abuse is physical. If someone in your life regularly
          controls, threatens or
        </p>
        <p>
          insults you, stops you using social media or won't let you contact
          your friends, it can
        </p>
        <p>harm you just as much as physical violence.</p>
        <p>Here are some of the forms that abuse may take:</p>

        <br />
        <p className="font-bold">Financial abuse</p>
        <br />
        <p>
          Taking, stealing or controlling your money, denying you access to
          money or telling{" "}
        </p>
        <p>
          you what you can and can’t buy. You'll find more information on
          financial abuse and{" "}
        </p>
        <p>how to deal with it here.</p>
        <br />
        <p className=" font-bold">Sexual abuse</p>
        <br />
        <p>
          Pressuring, manipulating or forcing you into sexual activities you
          don’t want to do.{" "}
        </p>
        <p>
          Being "forced" also means not being in a position to say no as a
          result of fear,{" "}
        </p>
        <p>threats or intimidation.</p>
        <br />
        <p className="font-bold">Emotional abuse</p>
        <br />
        <p>
          This form of abuse is often unrecognised and can be very hurtful. Mind
          games,{" "}
        </p>
        <p>
          manipulation, threats, humiliation, put-downs, shouting, telling you
          that you're{" "}
        </p>
        <p>
          worthless or no good – these are all types of emotional or
          psychological abuse.
        </p>
        <br />
        <p className="font-bold">Social abuse</p>
        <br />
        <p>
          If someone is insulting you or teasing you in front of other people,
          keeping you
        </p>
        <p>
          isolated from family, friends and work, controlling what you do and
          where you go,{" "}
        </p>
        <p>then they are being abusive and you may need to take some action</p>
        <br />
        <p className="font-bold">Spiritual abuse</p>
        <br />
        <p>
          This type of violence involves a situation where you are not allowed
          to go to your
        </p>
        <p>
          place of worship or not allowed to have your own opinions about
          religion, cultural
        </p>
        <p>
          beliefs and values. Your spirituality is manipulated to keep you
          feeling powerless, or
        </p>
        <p>
          you are forced to participate in religious practice you do not want to
          be involved
        </p>
        <p>with.</p>
        <br />
        <p className="font-bold"> Technological or digital abuse</p>
        <br />
        <p>
          Some abusers use social networks, emails and text messages to control
          you. This
        </p>
        <p>
          includes high-tech eavesdropping, video-monitoring the home, tracking
          your
        </p>
        <p>
          location with GPS devices and tampering with phone bills or emails.
        </p>
        <br />
        <p>
          Ways that texting and social media can be used to bully, harass, stalk
          or intimidate{" "}
        </p>
        <p>you include:</p>
        <div className="pl-12">
          {" "}
          <ul className="list-disc">
            <li>
              Telling you who you can or can’t be friends with on Facebook and
              other sites
            </li>
            <li>
              <p>
                Sending you negative, insulting or threatening emails, Facebook
                messages,{" "}
              </p>
              <p>tweets or other online messages</p>
            </li>
            <li>
              <p>
                Using sites like Facebook, Twitter, foursquare and others to
                keep constant tabs
              </p>
              <p>on you</p>
            </li>
            <li>Stealing or insisting you share your passwords</li>
            <li>
              Constantly texting you and punishing you if you don't respond
            </li>
            <li>
              <p>
                Looking through your phone frequently to check up on your
                pictures, texts and{" "}
              </p>
              <p>outgoing calls</p>
            </li>
            <li>
              Tagging you in negative ways in pictures on Facebook, Instagram,
              Tumblr, etc.
            </li>
          </ul>
        </div>
      </div>
    ),
    iconPath: "/images/reports.png",
    isIconLeftSide: false
  },
  {
    key: "3",
    titleBackgroundColor: "--starick-green",
    titleTextColor: "--starick-white",
    titleContent: "Your rights as a human being",
    contentBody: (
      <div className="text-3xl">
        <p className="font-bold">
          Every human being has the right to control their own life. This{" "}
        </p>
        <p className="font-bold">includes:</p>
        <div className="pl-12">
          <ul className="list-disc">
            <li>Being safe all the time.</li>
            <li>Being treated with respect.</li>
            <li>Being safe from abuse.</li>
            <li>Being able to receive support and friendship.</li>
            <li>Being treated as an equal.</li>
            <li>Having control of your own finances.</li>
            <li>Being free to leave a place if you are feeling unsafe.</li>
            <li>Being able to say what you think and feel.</li>
            <li>Being able to protect yourself and your children.</li>
            <li>Being able to seek legal assistance.</li>
            <li>Being able to contact community groups.</li>
            <li>Being able to choose your own religion.</li>
          </ul>
        </div>
      </div>
    ),
    iconPath: "/images/health.png",
    isIconLeftSide: true
  },
  {
    key: "4",
    titleBackgroundColor: "--starick-olive",
    titleTextColor: "--starick-black",
    titleContent: "Recognising the signs",
    iconPath: "/images/important.png",
    isIconLeftSide: false,
    contentBody: (
      <div className="text-3xl">
        <p className="font-bold">
          Is there someone in your life who is behaving in some or all of the{" "}
        </p>
        <p className="font-bold">following ways?</p>
        <br />
        <div className="pl-12">
          <ul className="list-disc">
            <li>
              <p>
                Do you have to be careful around this person because of their
                anger, violence or
              </p>
              <p> emotional abuse?</p>
            </li>
            <li>
              <p>
                Are you pressured by this person into sexual activities you are
                not comfortable
              </p>
              <p>with?</p>
            </li>
            <li>Are you are too scared to disagree with this person?</li>
            <li>Is this person always checking up on what you are doing?</li>
            <li>Does this person say you are stupid or useless?</li>
            <li>Does this person threaten you, your family or your pets?</li>
            <li>
              Does this person stop you going out or doing what you want to do?
            </li>
            <li>
              <p>
                Are you unable to spend time with family or friends because this
                person won’t let
              </p>
              <p>you?</p>
            </li>
            <li>Do you make excuses for this person’s violent behaviour?</li>
          </ul>
        </div>
        <br />
        <p>
          If so, you may want to seek assistance or contact a Starick worker to
          discuss your
        </p>
        <p>situation</p>
      </div>
    )
  }
];

export default function BasicInormation() {
  return (
    <div className="bg-[--starick-white]">
      <div>
        <Image
          src="/images/starick-image1.jpg"
          alt=""
          width={1440}
          height={100}
          layout="responsive"
        />
      </div>
      <div className="relative -mt-28  w-fit rounded-r-full bg-white px-20 py-4">
        <p className=" text-5xl font-extrabold text-[--starick-brown]">
          What is Domestic Violence?
        </p>
      </div>

      <div className="flex-row px-96 py-24">
        {sections.map((section) => (
          <Section
            key={section.key}
            titleBackgroundColor={section.titleBackgroundColor}
            titleContent={section.titleContent}
            titleTextColor={section.titleTextColor}
            iconPath={section.iconPath}
            isIconLeftSide={section.isIconLeftSide}
            contentBody={section.contentBody}
          />
        ))}
        <div className="flex flex-row justify-center py-20">
          <a href={`/frequently-asked-questions`}>
            <button className="rounded-3xl bg-[--starick-brown] px-12 py-6 text-3xl  font-semibold text-white ">
              Frequently Asked Questions
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
