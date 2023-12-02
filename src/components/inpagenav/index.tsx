import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// todo: styling

type listDetails = {
  href: string;
  name: string;
};

export default function InPageNav({ list }: { list: listDetails[] }) {
  const inPageNavList = list.map((details) => {
    return (
      <Link href={details.href} key={details.name}>
        {details.name}
      </Link>
    );
  });
  return (
    <div className={`flex justify-between ${inter.className}`}>
      {inPageNavList}
    </div>
  );
}
