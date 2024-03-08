export async function getWordpress(slug: string) {
  const res = await fetch(
    `${process.env.URL}wp-json/wp/v2/pages?_embed&slug=${slug}`
  );
  const data = await res.json();
  return {
    props: { data }
  };
}
