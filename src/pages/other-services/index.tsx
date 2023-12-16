// temp, being worked on in issue 27
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1 className="bg-red-500">Hello!</h1>
      </div>
    </>
  );
}
