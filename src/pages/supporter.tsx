import Header from "@/components/OurSupporter/supporter_header";
import Body from "@/components/OurSupporter/supporter_body";

export default function Supporter(){
  return (
    <>
      <div>
        <div className = "flex justify-center h-auto bg-starick-green text-white">
          <Header />
        </div>
        <div>
          <Body />
        </div>
      </div>
    </>
  )
}