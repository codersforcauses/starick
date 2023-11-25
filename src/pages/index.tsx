import Footer from "@/components/footer";
import { Inter } from "next/font/google";
// import '../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Hello!</h1>
      <Footer/>
    </main>
  );
}
