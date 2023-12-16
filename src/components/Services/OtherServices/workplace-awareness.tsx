import React from "react";

import ServicesSection from "../services-section";
import SubSection from "../subsection";

export default function WorkplaceAwarenessSection() {
  const subBodyHelp = (
    <div className="pl-3">
      <p className="text-xl font-semibold">How we can help</p>
      <br></br>
      <p>
        <b>Guidance</b>
      </p>
      <p>
        Starick staff are available to speak to HR managers, team leaders or
        employees about FDV. We can also offer ideas on how to communicate to
        staff about FDV and make suggestions to promote available resources.
      </p>
      <br></br>
      <p>
        <b>Resources for workplaces</b>
      </p>
      <p>
        Starick has a range of resources including brochures, guest speakers,
        posters, fact sheets and information regarding FDV support services.
      </p>
      <br></br>
      <p>
        <b>Education and training</b>
      </p>
      <p>
        We can refer you to free and low-cost options to increase staff
        knowledge about FDV. We can also provide you with resources for
        integrating FDV awareness and respectful relationships into your
        induction package and staff development programs.
      </p>
      <br></br>
      <p>
        Email Karen Kerlin at communitylinkages@starick.org.au for more
        information.
      </p>
    </div>
  );

  const subBodyRightsResponsibilities = (
    <div className="pl-3">
      <p className="text-xl font-semibold">Rights and responsibilities</p>
      <br></br>
      <p>
        We encourage all employers to be aware of their obligations because of
        the impact FDV can have on the workplace.
      </p>
      <br></br>
      <p>
        For instance, did you know that in Australia, the Fair Work Act 2009
        entitles all staff (full time, part time or casual) to a minimum of five
        days unpaid FDV leave every 12 months of service? This entitlement is
        enforceable by law, and forms a part of the National Employment
        Standards (NES). Workplaces can also opt to provide paid FDV leave as
        part of their conditions.
      </p>
      <br></br>
      <p>
        When an employee experiences FDV, their workplace can offer them
        flexible working arrangements. This might include a change to work
        patterns and hours, a potential transfer to a different location or
        branch, allocating a different desk or office location or changing their
        work email address and phone number.
      </p>
      <br></br>
      <p>
        Formal policies or strategies to support workers experiencing FDV can be
        key to an organisation&apos;s social responsibility. Such practices may
        be embedded within the workplace&apos;s corporate social responsibility
        charter and contribute towards a supportive organisational culture.
      </p>
      <br></br>
      <p>
        Starick can offer tips when you are drafting your organisation&apos;s
        FDV leave policy or reviewing flexible options for staff. We can also
        provide examples of FDV leave policy related to legislation, FDV leave
        provisions and flexible work options.
      </p>
    </div>
  );

  const subBodyAware = (
    <div className="pl-3">
      <p className="text-xl font-semibold">
        Is your workplace family and domestic violence aware?
      </p>
      <br></br>
      <p>
        Family and domestic violence (FDV) can impact all areas of an employee’s
        life, including work. Managers and team leaders can play an important
        role in supporting employees and colleagues by being FDV aware. Here are
        some things to be aware of:
      </p>
      <br></br>
      <ul>
        <li className="list-inside list-disc">
          <b>FDV is a workplace health and safety issue.</b> For instance, did
          you know that one in five women are harassed by perpetrators while at
          work?
        </li>
        <li className="list-inside list-disc">
          <b>Abuse comes in many forms.</b> These include physical, emotional,
          sexual, financial and technological abuse.
        </li>
        <li className="list-inside list-disc">
          <b>FDV is a workplace productivity issue.</b> It costs Australia’s
          economy $21.7 billion per year in health, administration and social
          welfare costs. FDV also contributes to increased absenteeism, lost
          wages and staff turnover. It can also impact on job satisfaction and
          staff morale.
        </li>
      </ul>
      <br></br>
      <p>
        Research shows that{" "}
        <b>
          nearly half of those experiencing FDV will disclose it to a manager or
          supervisor.
        </b>{" "}
        So knowing how to respond if someone discloses to you, and having some
        information about FDV ready to support them, lies at the core of being
        workplace aware.
      </p>
    </div>
  );

  const body = (
    <>
      <SubSection
        sectionBody={subBodyAware}
        iconPath="images/What-is-150x150.png"
      />
      <br></br>
      <br></br>
      <SubSection
        sectionBody={subBodyRightsResponsibilities}
        iconPath="images/Icons-FAQ-150x150.png"
      />
      <br></br>
      <br></br>
      <SubSection
        sectionBody={subBodyHelp}
        iconPath="images/I-need-help-150x150.png"
      />
    </>
  );
  return (
    <ServicesSection
      titleTextColour="[--starick-white]"
      titleBackgroundColour="[--starick-green]"
      sectionBody={body}
      title="Workplace Awareness"
      iconPath=""
    />
  );
}
