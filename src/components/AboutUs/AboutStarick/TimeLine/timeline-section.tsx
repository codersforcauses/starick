export default function TimelineSection({
  year,
  description
}: {
  year: string;
  description: string;
}) {
  return (
    <div className="grow">
      {/* year and description */}
      {year != "" && (
        <>
          <div className="mx-auto w-4/6 p-2 text-center shadow-xl">
            <p>{description}</p>
          </div>
          <div className="my-3 flex justify-center">
            <h3 className="text-md inline-block bg-starick-olive px-1 font-semibold">
              {year}
            </h3>
          </div>
        </>
      )}

      {/* line and dot */}
      <div className="my-5 flex justify-center">
        {year != "" && (
          <div className="absolute -my-2 h-6 w-6 rounded-full bg-starick-orange"></div>
        )}
        <div className="h-2 w-full bg-starick-olive"></div>
      </div>
    </div>
  );
}
