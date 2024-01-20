import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function Home({data}) {
  const postHtml = data.map((post,i) => {
    return(
      <p key={post.id}>{post.title.rendered}</p>
    )
  })

  return (
    <div>
            <Head>
              <title> Create Next APP</title>
            </Head>
    {postHtml}
    </div>

        );
      }

export async function getServerSideProps(context){
  const res = await fetch('http://localhost/wp-json/wp/v2/posts')
  const data = await res.json()
  console.log(data[0].title)
  if(!data){
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data
    },
  }
}
