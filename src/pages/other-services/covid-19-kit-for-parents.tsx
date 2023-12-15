import { List } from "@/components/services/list";
import Link from "next/link";

export default function ResourcesAndToolkits() {

    const covidBookletList = <List items={[
        "families and organisations with practical tips, activities and links to resources that are focused on women and children and young people’s health and wellbeing.",
        "offers guidance, support and information for women whose families are in isolation."
    ]}/>

    const body = (
        <>
        <div className={`bg-[--starick-white] px-6 py-2 md:px-32 flex justify-center`} > 
        <div className="w-fit"> 
            <br></br>
            <p>Starick’s COVID-19 resource booklets were developed in consultation with children, 
                young people and families living in refuges or receiving support from FDV services. </p>
            <br></br>
            <p>The booklet provides  
            </p>
            {covidBookletList}
            <br></br>
            <p>As we move into living with COVID-19, 
                this booklet can be used more broadly to support families and children 
                living in refuges and outreach services</p>
            <br></br>
            <p>The booklets provide direct links to online resources. Please make sure that supervision of 
                children and young people online is age appropriate.</p>
            <br></br>
            <br></br>
        </div>
        </div>
        </>
        
    );

    return (
        <>

        <div>
            <img src="/images/Parents-with-kids-graphic.png" className="w-full object-cover h-[500px]"  alt=""></img>
            <div className="relative -mt-20 mb-6 w-fit rounded-r-full bg-white px-10">
                <p className="p-2 text-4xl font-bold text-[--starick-brown]">
                    COVID-19 Kit for Parents
                </p>
            </div>
        </div>
        {body}
       
        <div className="bg-[--starick-white] flex flex-wrap -mx-2 justify-center">
            <div className="px-8 w-1/2 md:w-1/3 lg:w-1/6">
                <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource11.7.22.pdf">
                    <img className="block h-auto w-full" src="/images/covid-19-pdf-English.png" alt=""></img>
                </a>
            </div>
            <div className="px-8 w-1/2 md:w-1/3 lg:w-1/6">
                <a href="https://www.starick.org.au/wp-content/uploads/COVID-womens-resource-Chinese-Simplified.pdf">
                    <img className="block h-auto w-full" src="/images/covid-19-pdf-Chinese.png" alt=""></img>
                </a>
            </div>
            <div className="px-8 w-1/2 md:w-1/3 lg:w-1/6">
                <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-Resource-ARABIC.pdf">
                    <img className="block h-auto w-full" src="/images/covid-19-pdf-Arabic.png" alt=""></img>
                </a>
            </div>
            <div className="px-8 w-1/2 md:w-1/3 lg:w-1/6">
                <a href="https://www.starick.org.au/wp-content/uploads/STARICK-Covid-Womens-booklet-FARSI.pdf">
                    <img className="block h-auto w-full" src="/images/covid-19-pdf-Farsi.png" alt=""></img>
                </a>
            </div>
        </div>
       
        </>
    );
}


