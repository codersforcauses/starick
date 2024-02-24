// import { Inter } from "next/font/google";
import Head from 'next/head';

// const inter = Inter({ subsets: ["latin"] });

import Link from "next/link";

import InPageNav from "@/components/InPageNav";

import CounsellingSection from "../components/Services/CoreServices/counselling";
import PoliceSection from "../components/Services/CoreServices/police-stations";
import RefugesSection from "../components/Services/CoreServices/refuges";
import SafeAtHomeSection from "../components/Services/CoreServices/safe-at-home";
import TransitionalHousingSection from "../components/Services/CoreServices/transitional-housing";
import Banner from "@/components/Services/banner";


export default function Home({data}) {
//   const postHtml2 = data2.map((posts) => {
//     return(
//       <p key={posts.id}>{posts.title}</p>
//     )
//   })
    // const markup = { __html: data[1].content.rendered };
    const title = data[0].title.rendered;
    // const paragraphs = data[0].content.rendered;
    const paragraphs = { __html: data[0].content.rendered };

    // console.log(data[0].title.rendered);
    const navLinkDetails = [
        {
          href: "#Counselling Services",
          name: "Counselling Services"
        },
        {
          href: "#Refuges",
          name: "Refuges"
        },
        {
          href: "#Transitional Housing",
          name: "Transitional Housing"
        },
        {
          href: "#Support in Police Stations",
          name: "Support at Police Stations"
        },
        {
          href: "#Safe at Home Program",
          name: "Safe at Home Program"
        }
      ];
  return (
    <div>
            <Head>
              <title> Create Next APP</title>
            </Head>
        {/* {postHtml} */}
        {/* {data.map((media) => ( 
        <img src={media.media_details.sizes.full.source_url} alt="screenshot"></img>
        ) )} */}
        {/* <div dangerouslySetInnerHTML={markup}></div> */}


        <Banner titleText={title} />
        {/* {paragraphs} */}        
        <InPageNav list={navLinkDetails}></InPageNav>
        <div dangerouslySetInnerHTML={paragraphs}></div>
        <br></br>
        <br></br>
        <CounsellingSection />
        <RefugesSection />
        <TransitionalHousingSection />
        <PoliceSection />
        <SafeAtHomeSection />


        <div className="flex items-center justify-center bg-starick-white py-10">
            <button className="rounded-2xl bg-starick-brown p-5 text-lg text-white hover:bg-starick-black">
            <Link href="/other-services">Other Services</Link>
            </button>
      </div>
    </div>

        );
      }

export async function getServerSideProps(context){
  const res = await fetch('http://localhost/wp-json/wp/v2/pages')
  const data = await res.json()
  // console.log(data[0].title)
  if(!data){
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data,
    },
  }
}
// export async function getServerSideProps() {
//     const [res, res2] = await Promise.all([
//       fetch('http://localhost/wp-json/wp/v2/media'), 
//       fetch('http://localhost/wp-json/wp/v2/posts')
//     ]);
//     const [data, data2] = await Promise.all([
//         res.json(), 
//         res2.json()
//     ]);
//     return { props: { data, data2 } };
//   }

