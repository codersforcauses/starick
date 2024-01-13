import SectionTitle from "@/components/section-title";

export default function WhoWeAre() {
  // const icon = (
  //     <img src=""
  // )
  const body = (
    <>
      <p>
        Starick is an independent, not for profit organisation with charitable
        status based in Perth&apos;s south-eastern metropolitan region and
        working to end family and domestic violence. We assist women, young
        people and children experiencing abuse, whether by a partner or by
        another family member.
      </p>
      <br />
      <p>
        Starick employs a team of dedicated staff who support, advocate and
        provide resources to women and children escaping domestic violence. We
        also refer our clients to other community resources.
      </p>
      <br />
      <p>
        The dedicated Starick team comprises our managers and staff, board and
        volunteers.
      </p>
      <br />
    </>
  );
  return (
    <div className="bg-starick-white px-6 py-2 md:px-32">
      <SectionTitle
        backgroundColour="starick-green"
        text="Who We Are"
        iconPath=""
        textColour="starick-white"
      />
      <div className="pt-5 md:px-20">{body}</div>
    </div>
  );
}
