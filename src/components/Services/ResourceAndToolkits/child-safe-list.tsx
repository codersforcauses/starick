import ChildSafeItem from "./child-safe-item";

interface ChildSafeListProps {
  itemList: Array<{
    backgroundColor: string;
    text: string;
  }>;
}

export default function ChildSafeList({ itemList }: ChildSafeListProps) {
  return (
    <div>
      {itemList.map((child, index) => (
        <ChildSafeItem
          key={index}
          backgroundColor={child.backgroundColor}
          text={child.text}
        />
      ))}
    </div>
  );
}
