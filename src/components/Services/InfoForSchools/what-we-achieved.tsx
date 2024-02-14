import { List } from "../list";
import ServicesSection from "../services-section";
import SubSection from "../subsection";

export default function AchievedSection() {
  const list1 = [
    "Developing a respectful relationships education policy and a respectful relationships statement.",
    "Updating the school's Care and Support Policy, which includes a Respectful Relationships and Sexual Education Policy."
  ];
  const list2 = [
    "Instituting school-wide behaviour expectations and agreements that were upheld by the school’s PBS incentive scheme.",
    "Designing a respect mural with students.",
    'Building a "Respect Wall", highlighting what respect looks like. This was a student engaging activity.',
    "Introducing LGBTQI+ accommodations, including gender neutral uniform and toilets."
  ];
  const list3 = [
    "Engaging parents and caregivers early by sending an introduction letter informing them of their involvement in the program with an invitation for comments.",
    "Ensuring that all teaching and learning around respectful relationships was communicated via the school’s fortnightly chronicle.  School partners included SDERA, the community health nurse, community police, Holyoake, Narrogin Rainbow Women’s Centre.",
    "Engaging in NAIDOC Week planning with Aboriginal Elders and organisations."
  ];
  const list4 = [
    "Ensuring that students affected by FDV receive individualised case management.  This everyday assistance was framed through Culture & Environment and Teaching & Learning Domains."
  ];
  const list5 = [
    "One school's teaching staff completed Domestic Violence and Complex Trauma training."
  ];
  const sections = [
    { title: "Policy and Practice", items: list1 },
    { title: "School Culture and Environment", items: list2 },
    { title: "Community Partnerships", items: list3 },
    { title: "Support for staff and students", items: list4 },
    { title: "Professional Learning", items: list5 }
  ];

  const subbody = (
    <>
      <p>
        The following real examples show what some schools have achieved as a
        result of engaging with the Starick RRE program.
      </p>
      <br />
      <p className="text-xl font-semibold">Teaching and Learning:</p>
      <br />
      <ul className="ml-4 list-outside list-disc">
        <li>
          Creating Coded Zones of Regulation, Respectful Relationships, and PBS
          to the Curriculum Guidelines.
        </li>
        <li>
          Producing positive behaviour videos with concrete examples of how to
          model respect in the school context.
        </li>
        <li>
          Hosting a{" "}
          <a href="https://rseproject.org.au/" className="my-link">
            Relationships and Sexuality Education (RSE)
          </a>{" "}
          Project Sessions with Year 7 – 12 students using teaching resources
          from the Growing and Developing Healthy Relationships (GDHR) website.
        </li>
        <li>
          Hosting RSE Project Sessions with Year 6 students to empower students
          transitioning to high school.
        </li>
        <li>
          Engaging in the{" "}
          <a href="https://tomorrowman.com.au/" className="my-link">
            Tomorrow Man
          </a>
          /
          <a href="https://tomorrowwoman.com.au/" className="my-link">
            Tomorrow Woman
          </a>{" "}
          Program once a term every term for three years.
        </li>
      </ul>
      <br />
      {sections.map(({ title, items }) => (
        <>
          <p className="text-xl font-semibold">{title}:</p>
          <br />
          <List items={items} style="list-disc" />
          <br />
        </>
      ))}
    </>
  );
  const body = (
    <>
      <SubSection
        sectionBody={subbody}
        iconPath="/icons/reports.svg"
        iconOnRight={false}
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-black"
      titleBackgroundColour="starick-olive"
      sectionBody={body}
      title="What our schools have achieved"
      textOnLeft={false}
    />
  );
}
