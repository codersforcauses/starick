export function List({
  items,
  style
}: {
  items: string[];
  style: "list-disc" | "list-decimal";
}) {
  return (
    <ul className="ml-4">
      {items.map((text, index) => (
        <li className={`${style} list-outside`} key={index}>
          {text}
        </li>
      ))}
    </ul>
  );
}
