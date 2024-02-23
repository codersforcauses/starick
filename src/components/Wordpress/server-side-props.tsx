export async function getServerSideProps(slug: string) {
  const res = await fetch(
    `http://localhost/wp-json/wp/v2/pages?_embed&${slug}`
  );
  const data = await res.json();
  return {
    props: { data }
  };
}
