// need to get the text to fit inside the image,
// but no matter which way I adjust it, it jumps under

export default function childResources() {
  return (
    <>
      <div>
        <img src="../images/starick-image1.jpg" className="w-full" alt=""></img>
        <div className="relative -mt-20 mb-6 w-fit rounded-r-full bg-white px-14">
          <p className="p-2 text-4xl font-bold text-[--starick-brown]">
            Work with Children and Young People
          </p>
          <p className="p-2 text-3xl font-bold text-[--starick-brown]">
            Resources and Toolkits
          </p>
        </div>
      </div>
    </>
  );
}
