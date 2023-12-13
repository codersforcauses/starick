export function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((text, index) => (
        <li className="list-inside list-disc" key={index}>
          {text}
        </li>
      ))}
    </ul>
  );
}
