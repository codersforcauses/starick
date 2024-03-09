import PageHeader from "@/components/page-header";
import ManagementAndStaff from "@/components/OurPeople/management-and-staff";
import OurBoard from "@/components/OurPeople/our-board";

export default function OurPeople() {
  return (
    <>
      <PageHeader titleText="About Starick" />
      <ManagementAndStaff />
      <OurBoard />
    </>
  );
}
