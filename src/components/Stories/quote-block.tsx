export default function QuoteBlock({ text }: { text: string }) {
  return (
    <div className="rounded-3xl bg-starick-orange px-4 py-10">
      <p className="text-lg font-semibold text-starick-white">{text}</p>
    </div>
  );
}
