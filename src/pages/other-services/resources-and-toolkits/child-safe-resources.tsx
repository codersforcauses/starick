import Image from "next/image";

import SectionTitle from "@/components/section-title";
import ChildSafeItem from "@/components/Services/ResourceAndToolkits/child-safe-item";

import ChildSafeResourcesTitle from "~/images/ResourcesToolkits/child-safe-resources-title.png";
import Disclaimer from "@/components/Services/ResourceAndToolkits/disclaimer";

export default function ChildSafeResources() {
    const emailAddress = "info@starick.org.au";
    return (
        <>
            <Image
                src={ChildSafeResourcesTitle}
                alt="description"
                width="0"
                height="0"
                className="h-auto w-full"
            />

            <div className="px-20 py-10 font-semibold md:px-40 md:py-20 lg:px-60">
                <p className="mb-4">
                    Starick’s organisational culture prioritises the safety and wellbeing
                    of all children and young people engaged with its services, to support
                    them to grow and develop in safe, caring environments free from abuse
                    and harm.
                </p>
                <p className="mb-4">
                    Starick respects the rights of the child and recognises the
                    significant role that mother’s/carer’s play and seeks their
                    involvement to support the safety and wellbeing of their child in the
                    context of family and domestic violence.
                </p>
                <p className="mb-4">
                    Starick’s developing suite of child safe policies is aligned to the{" "}
                    <a
                        href="https://www.unicef.org.au/united-nations-convention-on-the-rights-of-the-child"
                        className="underline"
                    >
                        United Nations Convention on the Rights of the Child
                    </a>
                    , the{" "}
                    <a
                        href="https://www.ccyp.wa.gov.au/media/3946/child-safe-organisations-wa-guidelines-updated-november-2019.pdf"
                        className="underline"
                    >
                        National Principles and Standards for Child Safe Organisations
                    </a>{" "}
                    and
                    <a
                        href="https://www.aracy.org.au/documents/item/700#:~:text=What%20is%20the%20Nest%3F,young%20person%20needs%20to%20thrive."
                        className="underline"
                    >
                        Australia’s Wellbeing Framework for Children and Young People
                        What&apos;s in the Nest?
                    </a>{" "}
                    - Australian Research Alliance for Children and Youth (ARACY).
                </p>
                <p className="mb-4">
                    The National Child Safe Principles and Standards provide a framework
                    for creating child safe organisations. They are designed to create,
                    maintain, and improve child safe practices. The Standards are based on
                    extensive research and consultation by the Royal Commission into
                    Institutional Responses to Child Sexual Abuse. They provide clear
                    guidance for organisations to create cultures, adopt strategies and
                    act to put the interests of children first to keep them safe from
                    harm.
                </p>
                <p>
                    Below are some child safe policy and procedure templates that can be
                    downloaded and customised for organisations’ specific needs. If you
                    have any child safe policies or procedures that your organisation
                    would like to share, please email{" "}
                    <a href={`mailto:${emailAddress}`} className="underline">
                        info@starick.org.au
                    </a>
                    .
                </p>
            </div>
            <div className="px-10 md:px-20 lg:px-32">
                <SectionTitle
                    text="Child Safe Template"
                    backgroundColour="[--starick-green]"
                    textColour="[--starick-white]"
                    iconPath="/images/ResourcesToolkits/child-safe-templates-icon.png"
                />
            </div>

            <div className="px-20 py-10 md:px-40 md:py-20 lg:px-60">
                <ChildSafeItem
                    backgroundColor="olive"
                    text={
                        "Child Safe Principle 2 - Self assessment&nbsp;<strong>FDV Board and management audit</strong>"
                    }
                />
                <ChildSafeItem
                    backgroundColor="white"
                    text={
                        "Child Safe Principle 2 - Self assessment&nbsp;<strong>FDV Service audit</strong>"
                    }
                />
                <ChildSafeItem
                    backgroundColor="olive"
                    text={
                        "Child Safe&nbsp;<strong>Organisation Procedure</strong>&nbsp;template"
                    }
                />
                <ChildSafeItem
                    backgroundColor="white"
                    text={
                        "Child Safe&nbsp;<strong>Organisation Policy</strong>&nbsp;template"
                    }
                />
                <ChildSafeItem
                    backgroundColor="olive"
                    text={
                        "Child Safe&nbsp;<strong>Code of Conduct Policy</strong>&nbsp;template"
                    }
                />
                <ChildSafeItem
                    backgroundColor="white"
                    text={"Sample WHFS&nbsp;<strong>Policy for Child Safety</strong>"}
                />
                <ChildSafeItem
                    backgroundColor="olive"
                    text={"Sample WHFS&nbsp;<strong>Code of Conduct Policy</strong>"}
                />
                <ChildSafeItem
                    backgroundColor="white"
                    text={"Sample WHFS&nbsp;<strong>Incident Reporting Policy</strong>"}
                />
                <ChildSafeItem
                    backgroundColor="olive"
                    text="<strong>Empowerment and Participation of Children and Young People Policy</strong>"
                />
                <ChildSafeItem
                    backgroundColor="white"
                    text={
                        "Children and Young People&nbsp;<strong>Safety and Wellbeing Policy</strong>"
                    }
                />

                <p className="my-10 text-center text-2xl font-semibold">
                    Practice Tools
                </p>

                <ChildSafeItem
                    backgroundColor="olive"
                    text={
                        "<strong>Practice Tool 1</strong>&nbsp;- Building Relationships"
                    }
                />
                <ChildSafeItem
                    backgroundColor="white"
                    text={
                        "<strong>Practice Tool 2</strong>&nbsp;- Empowerment & Participation"
                    }
                />
                <ChildSafeItem
                    backgroundColor="olive"
                    text={
                        "<strong>Practice Tool 3</strong>&nbsp;- Informed About Their Rights"
                    }
                />
            </div>

            <div className="px-10 md:px-20 lg:px-32">
                <SectionTitle
                    text="Posters"
                    backgroundColour="[--starick-brown]"
                    textColour="[--starick-white]"
                    iconPath="/images/ResourcesToolkits/child-safe-templates-icon.png"
                />
            </div>

            <div className="px-20 py-10 md:px-40 md:py-20 lg:px-60">
                <ChildSafeItem
                    backgroundColor="olive"
                    text="UN Convention on the Rights of the Child"
                />
            </div>

            <div className="px-10 md:px-20 lg:px-32">
                <SectionTitle
                    text="External Resources"
                    backgroundColour="[--starick-olive]"
                    textColour="black"
                    iconPath="/images/ResourcesToolkits/child-safe-templates-icon.png"
                />
            </div>

            <div className="px-20 py-10 md:px-40 md:py-20 lg:px-60">
                <ChildSafeItem
                    backgroundColor="olive"
                    text="Child friendly version of the Children's Safety and Wellbeing report"
                />
                <ChildSafeItem
                    backgroundColor="white"
                    text="Commonwealth Child Safe Framework"
                />
                <ChildSafeItem
                    backgroundColor="olive"
                    text="Learning from lived experience - a guide for professionals supporting children and young people experiencing family violence"
                />
                <ChildSafeItem
                    backgroundColor="white"
                    text="Commonwealth Child safe framework 2nd edition"
                />
            </div>

            <Disclaimer/>
        </>
    );
}
