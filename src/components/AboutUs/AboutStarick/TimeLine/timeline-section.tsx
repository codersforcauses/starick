export default function TimelineSection() {
  return (
    <div>
      {/* bubble and date */}
      <div className="mx-auto w-4/6 rounded-lg p-2 text-center shadow-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
      <div className="my-3 flex justify-center">
        <h3 className="text-md inline-block bg-starick-olive px-1 font-semibold">
          1987
        </h3>
      </div>

      {/* line and dot */}
      <div className="my-5 flex justify-center">
        <div className="absolute -my-2 h-6 w-6 rounded-full bg-starick-orange"></div>
        <div className="h-2 w-full bg-starick-olive"></div>
      </div>
    </div>
  );
}
