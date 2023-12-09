import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// collapsable
// focus: (been clicked on)
// html link bookmarks for jumping to section

type listDetails = {
  href: string;
  name: string;
};

export default function InPageNav({
  header,
  list
}: {
  header: string;
  list: listDetails[];
}) {
  const inPageNavList = list.map((details) => {
    return (
      <>
        <div
          key={details.name}
          className="rounded-md border-x-2 border-y border-[--starick-green] p-2 text-gray-600 last:border-b-2"
        >
          <Link href={details.href}>{details.name}</Link>
        </div>
      </>
    );
  });
  return (
    <div className={`flex flex-col justify-between ${inter.className}`}>
      <div className="inline-flex justify-between rounded-md border-2 border-b border-[--starick-green] p-2 font-semibold text-gray-600">
        {header}
        <svg
          className="mr-3 h-5 w-5 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      {inPageNavList}
    </div>
  );
}
