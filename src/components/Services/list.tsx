export function List({
  items,
  style
}: {
  items: string[];
  style: "list-disc" | "list-decimal";
}) {
  return (
    <ul className={`ml-8 list-outside ${style}`}>
      {items.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
