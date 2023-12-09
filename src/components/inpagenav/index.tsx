import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// todo: collapsable
// focus: (been clicked on)
// todo: styling

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
          className="rounded-md border-x-2 border-y border-light-green p-2 text-gray-600 first:border-t-2 last:border-b-2"
        >
          <Link href={details.href}>{details.name}</Link>
        </div>
      </>
    );
  });
  return (
    <div className={`flex flex-col justify-between ${inter.className}`}>
      <div className="rounded-md border-x-2 border-y border-light-green p-2 text-gray-600 first:border-t-2 first:font-semibold last:border-b-2">
        {header}
      </div>
      {inPageNavList}
    </div>
  );
}
