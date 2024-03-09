import Icon from "@/components/OurSupporter/supporter_icon";
import Name from "@/components/OurSupporter/supporter_name";

interface Sponsor {
  name: string;
  src: string;
}

interface SponsorName {
  name: string;
}

export default function Sponsor() {
  const sponsors = [
    {
      name: "move",
      src: "./supporter/telethon-logo.png"
    },
    {
      name: "Apple Cross Rotary",
      src: "./supporter/applecrossrotary.png"
    },
    {
      name: "Rotary Club of Ascot",
      src: "./supporter/ascotrotary.png"
    },
    {
      name: "move",
      src: "./supporter/restorehopeaus.png"
    },
    {
      name: "Ride Against Domestic Violence",
      src: "./supporter/radv.png"
    },
    {
      name: "Scentre Group",
      src: "./supporter/scentregroup.png"
    }
  ];

  const sponsor_name_first_col = [
    "Aquinas College",
    "Bendigo Bank",
    "Beyond Bank",
    "Brookfield",
    "Distributive and Allied Employees Association of WA",
    "Gosnells Hotel",
    "Gosnells Ladies Golf Club",
    "Jacob Group Australia",
    "Jenny Berry",
    "Lions club of Gosnells",
    "Racing and Wagering WA",
    "Restore Hope Australia",
    "Ride Against Domestic Violence",
    "Riverton Primary School",
    "Roleystone Community Garden Market",
    "Ross Thorpe",
    "Sarina Elder",
    "SCentre Group"
  ];

  const sponsor_name_second_col = [
    "Soroptimist International South Perth",
    "St Luke’s Anglican Parish of Mosman Park",
    "St Michael and All Angels",
    "Student Leadership Team of Penrhos College",
    "Surfside Ladies Golf Club",
    "Swing Dance Academy",
    "Tavolo Bar and Kitchen",
    "The Boronia Club",
    "The Gelo Company",
    "The Petroleum Women of Perth",
    "The Rotary Club of Applecross",
    "The Rotary Club of Ascot",
    "The Rotary Club of Southern Districts",
    "Transalta",
    "Trevors Carpet",
    "Wesfarmers",
    "Women in Mining",
    "Woodside"
  ];

  return (
    <>
      <div>
        <div className="mb-10 mt-32 flex justify-center">
          <div>
            <div className="image flex grid grid-cols-3 justify-center gap-8 p-10">
              {sponsors.map((sponsor, index) => (
                <Icon key={index} name={sponsor.name} src={sponsor.src} />
              ))}
            </div>
            <div className="flex justify-center">
              <p className="hidden">Soroptimist International South Perth</p>
              <img
                className="h-80 w-80"
                src="./supporter/soroptimistint.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-center">
          <div className="first_col m-10 p-10">
            {sponsor_name_first_col.map((sponsor_name, index) => (
              <Name key={index} name={sponsor_name} />
            ))}
          </div>
          <div className="second_col m-10 p-10">
            {sponsor_name_second_col.map((sponsor_name, index) => (
              <Name key={index} name={sponsor_name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
