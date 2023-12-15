import React from "react";
import ServicesSection from "../services-section";
import SubSection from "../subsection";
import { List } from "../list";

export default function HealthAndWellbeingSection() {
  const subBodyBabyMassage = (
    <div className="pl-3">
      <p className="text-xl font-semibold">Baby Massage</p>
      <br></br>
      <p>
        Our baby massage program is offered in our refuges to mothers and babies
        traumatised by family and domestic violence.
      </p>
      <br></br>
      <p>
        There are many reasons why mothers may not feel an instantaneous bond
        with their babies. These include a tough pregnancy, traumatic birth,
        feeding issues, sleep issues and post natal depression. Experiencing the
        trauma of family and domestic violence can lie at the root of many of
        these problems, or can make an existing problem much, much worse.
      </p>
      <br></br>
      <p>
        Our baby massage program for mothers and babies traumatised by family
        and domestic violence is offered within our refuges and seeks to
        strengthen the bond between mothers and babies.
      </p>
      <br></br>
      <p>
        Throughout our baby massage program, mothers learn to provide massage
        therapy and nurturing touch to their babies.
      </p>
      <br></br>
      <p>
        Bonding lies at the heart of a baby’s later emotional development, and
        without a secure emotional connection from a very young age a baby is
        likely to face relationship challenges later in life.
      </p>
      <br></br>
      <p>
        Research shows that the physical, psychological and behavioral
        consequences of family and domestic violence impact not just the child
        and family, but the community as a whole.
      </p>
      <br></br>
      <p>
        Baby massage is just one of the ways we seek to break the cycle of
        family and domestic violence.
      </p>
    </div>
  );

  const module2List = (
    <List
      items={[
        "creative writing prompts",
        "video examples of public speaking",
        "guidance in the use of a microphone",
        "techniques for speaking with more confidence in public"
      ]}
    />
  );

  const subBodyLivedExperience = (
    <div className="pl-3">
      <p className="text-xl font-semibold">The Lived Experience</p>
      <br></br>
      <p>
        Our Lived Experience is a program of free workshops for women who have
        experienced family and domestic violence to share their stories and gain
        confidence in public speaking.
      </p>
      <br></br>
      <p>You don't have to be a Starick client to attend the workshops.</p>
      <br></br>
      <p>
        <b>The Lived Experience creative writing program</b> is an effective way
        to help participants explore feelings and experiences in a carefully
        managed and non-judgemental space. The program helps participants gain
        perspective on themselves and their life experiences.
      </p>
      <br></br>
      <p>There are two four-hour modules available:</p>
      <br></br>
      <p>
        <b>Module 1: Telling My Stories</b> is a gently guided creative writing
        class offering a range of writing prompts tailored to participants'
        needs. In response to these prompts, participants are given the rare
        opportunity to explore and share their lived experience with others in
        the workshop.
      </p>
      <br></br>
      <p>
        The <b>Telling My Stories</b> workshop typically runs from 10 am to 2 pm
        to allow for school drop off and pick up.
      </p>
      <p>Recommended group size: 5-12 participants.</p>
      <br></br>
      <p>
        <b>Module 2: Speaking My Truth</b> (5 hours) offers those that feel
        ready an opportunity to write about their trauma in whatever way they
        choose, and to learn some basic public speaking techniques. This
        workshop includes:
      </p>
      {module2List}
      <br></br>
      <p>
        The <b>Speaking My Truth</b> workshop typically runs from 10 am to 2 pm
        to allow for school drop off and pick up.
      </p>
      <p>Recommended group size: 5-12 participants.</p>
      <br></br>
      <p>
        <b>Workshop follow up</b>
      </p>
      <p>
        At the culmination of each workshop, participants are encouraged to
        debrief with trusted others, and to seek professional support if the
        strong emotions brought up by the workshops do not dissipate in a few
        days.
      </p>
      <br></br>
      <p>
        <b>Find out more</b>
      </p>
      <p>
        To learn more about this program and to discuss your needs, email
        Starick.
      </p>
    </div>
  );

  const subBodyYoga = (
    <div className="pl-3">
      <p className="text-xl font-semibold">Yoga for Trauma</p>
      <p>
        Yoga classes are currently held for one hour on a weekly basis at both
        refuges.
      </p>
      <br></br>
      <p>
        The service is provided by a professional yoga teacher who not only
        gives her time but has also raised money through fund raising. These
        funds have allowed us to purchase yoga mats for the women to take with
        them when leaving the refuge.
      </p>
      <br></br>
      <p>
        Yoga offers participants peace, focus and relaxation, all of which are
        helpful for women having experienced abuse, violence or stress.
      </p>
      <br></br>
      <p>
        Yoga assists the body in releasing trauma. By practising breathing
        techniques, yoga helps participants let go of past traumas and intense
        emotions.
      </p>
      <br></br>
      <p>
        Yoga is a practise that emphasises the importance of listening to the
        body as participants focus on different poses. It teaches self-care and
        respect for one’s body and strengthens the mind - an important skill to
        develop for victims leaving abusive relationships and making the choice
        to start a new way of life.
      </p>
      <br></br>
      <p>
        Feedback from the women who are engaged with Starick's yoga programme
        have indicated its effectiveness - “Yoga gives me a space”, said one
        participant, while others reported a strong sense of emotional release
        and all-important time for self.
      </p>
    </div>
  );

  const body = (
    <>
      <p>
        Funded by donations, fundraising events and grants, Starick offers a
        range of services and programs that improve the lives of the women and
        children using our service.
      </p>
      <br></br>
      <p>
        These non-core services often relate to the emotional wellness of the
        families we support.
      </p>
      <br></br>
      <br></br>
      <SubSection
        sectionBody={subBodyBabyMassage}
        iconPath="images/I-need-help-150x150.png"
      />
      <br></br>
      <br></br>
      <SubSection
        sectionBody={subBodyLivedExperience}
        iconPath="images/Useful-Numbers-Support-150x150.png"
      />
      <br></br>
      <br></br>
      <SubSection
        sectionBody={subBodyYoga}
        iconPath="images/Shop-Home-Decor-150x150.png"
      />
    </>
  );

  return (
    <ServicesSection
      titleTextColour="[--starick-black]"
      titleBackgroundColour="[--starick-olive]"
      sectionBody={body}
      title="Health and Wellbeing"
      iconPath=""
    />
  );
}
