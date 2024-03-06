import PageHeader from "@/components/page-header";
import ManagementAndStaff from "@/components/OurPeople/management-and-staff";
import OurBoard from "@/components/OurPeople/our-board";
import Banner from "@/components/Services/banner";

export default function OurPeople() {
  return (
    <>
      <Banner titleText="Our People" />
      <PageHeader titleText="About Starick" />
      <ManagementAndStaff />
      <OurBoard />

    </>
  );
}