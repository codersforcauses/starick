import TimelineSection from "./timeline-section";
export default function Timeline() {
  return (
    <div className="flex justify-around bg-starick-white px-6 md:px-32">
      <TimelineSection></TimelineSection>
      <TimelineSection></TimelineSection>
      <TimelineSection></TimelineSection>
    </div>
  );
}
