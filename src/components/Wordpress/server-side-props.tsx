export async function getServerSideProps(slug: string) {
  const res = await fetch(
    `${process.env.URL}wp-json/wp/v2/pages?_embed&${slug}`
  );
  const data = await res.json();
  return {
    props: { data }
  };
}
