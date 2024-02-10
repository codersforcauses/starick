import Image from "next/image";

export default function FacebookFeed() {
  return (
    <div>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FStarickServices&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        width="340"
        height="500"
        title="facebook-embed"
        className="mx-40 flex justify-center"
      ></iframe>

      <div className="mt-20 text-center text-3xl font-bold text-starick-brown ">
        <p>Check out our past events!</p>
      </div>
    </div>
  );
}
