import React from "react";
import Link from "next/link";
import ServicesSection from "../services-section";

export default function WorkWithChildrenAndYoungPeopleSection() {
    const body = (
        <>
            <p>Starick is committed to the safety and wellbeing of children and young people and to creating and 
                maintaining a child safe organisation that creates a culture, strategies and actions to promote children 
                and young people's wellbeing and protect them from harm. 
            </p>
            <br></br>
            <p>We believe that supporting children and young people to grow, learn and flourish is integral to their 
                ongoing safety and development. 
            </p>
            <br></br>
            <p>We are committed to creating environments where children and young people feel safe and heard. 
            </p>
            <br></br>
            <p>Starick has zero tolerance of child abuse, and all allegations and safety concerns will be treated 
                very seriously and consistently with our robust policies and procedures. 
            </p>
            <br></br>
            <p>Every person working at Starick understands the important role they play individually and collectively 
                in children and young people's lives and demonstrates this by putting children and young people and 
                their mothers/carers at the centre of decision making and actions.
            </p>
            <br></br>
            <p>Our Child Safety Code of Conduct outlines how staff, students and volunteers will behave when working 
                with and around children.
            </p>
            <br></br>
            <p>We are committed to upholding children and young people's rights and needs in relation to equity and 
                cultural diversity, with particular attention to the needs of Aboriginal and Torres Strait Islander children, children with disability, children from culturally and linguistically diverse backgrounds and lesbian, gay, bisexual, transgender and intersex children and young people. 
            </p>

            <div className="flex items-center justify-center bg-[--starick-white] py-10">
                <button className="rounded-2xl bg-[--starick-brown] p-5 text-lg text-white hover:bg-[--starick-black]">
                    <Link href="/resources-toolkits-reading">Resources, toolkits, and further reading</Link>
                </button>
            </div>
        </>
        
    );
    return (
        <ServicesSection
            titleTextColour="[--starick-black]"
            titleBackgroundColour="[--starick-olive]"
            sectionBody={body}
            title="Our Work with Children and Young People"
            iconPath="images/Icon-CRISIS-150x150.png"
        />
    );
}