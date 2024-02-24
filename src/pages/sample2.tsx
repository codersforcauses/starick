// import { Inter } from "next/font/google";
import Head from 'next/head';


export default function Home({data}) {

    const title = data[0].acf.apple_name;
    const image = data[0].acf.image_of_apple.url;
    const paragraph = data[0].acf.apple_description;
  
  return (
    <div>
            <Head>
              <title> APPLES </title>
            </Head>
        <p> <strong>{title}</strong></p>
        <img src={image} alt ="Apple" width="400" height="500"></img>
        {paragraph}
     

    </div>

        );
      }

export async function getServerSideProps(context){
  const res = await fetch('http://localhost/wp-json/wp/v2/apples?&acf_format=standard')
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


// const reqUrl = 'http://localhost/wp-json/wp/v2/apples?&acf_format=standard&_fields=id,title,acf'
// const Apples = async () => {
//   const req = await fetch(reqUrl);
//   const apples = await req.json();

//   console.log('apples',apples);

//   return (
//     <div>
//             <Head>
//               <title> APPLES </title>
//             </Head>
//         {apples.map(apple => (
//           <Card
//             key={apple.id}
//             thumbnail={apple.thumbnail}
//             title = "Apple Title"
//             subtitle="Category"
//             />
//         ))}

//     </div>

//         );
// }