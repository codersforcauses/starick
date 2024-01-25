import { useEffect, useState } from "react";

export default function FacebookFeed() {
  /*const [facebookData, setFacebookData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch("/api/facebook-feed", {
          method: "GET"
        }).then(res => res.json());
        setFacebookData(data);
      }
      fetchData();
    }, []);
    if (facebookData) {
      return (<p>{facebookData}</p>);
    } else {
      return null;
    }*/
  return (
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FStarickServices&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
      width="340"
      height="500"
      title="facebook-embed"
    ></iframe>
  );
}
