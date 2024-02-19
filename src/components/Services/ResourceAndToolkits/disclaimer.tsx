export default function Disclaimer() {
  const items = [
    "This content is for educational and informational purposes; it is not intended as a substitute for professional advice.",
    "While the information has been verified to the best of our abilities, we cannot guarantee there are no mistakes or errors.",
    "We recommend that users exercise their own judgment and use their skills, knowledge, and experience to evaluate the accuracy, currency, completeness, relevance, and suitability of the information for their needs.",
    "We reserve the right to change this information at any time."
  ];
  return (
    <div className="h-auto w-full bg-starick-brown px-20 pb-10 pt-4 text-starick-white md:px-40 lg:px-60">
      <p className="mb-2 text-center text-xl font-medium">Disclaimer</p>
      <ol className="list-decimal">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
}
