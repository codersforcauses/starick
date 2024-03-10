import InPageNav from "@/components/InPageNav";
import PageHeader from "@/components/page-header";
import AnnesStory from "@/components/Stories/annes-story";
import BarbarasStory from "@/components/Stories/barbaras-story";
import CarolsStory from "@/components/Stories/carols-story";
import HelenasStory from "@/components/Stories/helenas-story";
import TaranehsStory from "@/components/Stories/taranehs-story";

export default function Stories() {
  const navLinkDetails = [
    {
      href: "#Anne's Story",
      name: "Anne's Story: \"It'll never happen to me\""
    },
    {
      href: "#Taraneh's Story",
      name: "Taraneh's Story: Mary Smith Refuge"
    },
    {
      href: "#Carol's Story",
      name: "Carol's Story: Starick House Refuge"
    },
    {
      href: "#Helena's Story",
      name: "Helena's Story: Outreach Services"
    },
    {
      href: "#Barbara's Story",
      name: "Barbara's Story: Transitional Housing"
    }
  ];
  return (
    <>
      <PageHeader titleText="Our Stories" />
      <InPageNav list={navLinkDetails} />
      <AnnesStory />
      <TaranehsStory />
      <CarolsStory />
      <HelenasStory />
      <BarbarasStory />
    </>
  );
}
