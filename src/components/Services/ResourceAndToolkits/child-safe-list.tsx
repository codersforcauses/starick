import ChildSafeItem from "./child-safe-item";
import { ChildSafeItemProps } from "./child-safe-item";

export default function ChildSafeList({
  itemList
}: {
  itemList: ChildSafeItemProps[];
}) {
  return (
    <div>
      {itemList.map((child, index) => (
        <ChildSafeItem
          key={index}
          backgroundColor={child.backgroundColor}
          text={child.text}
          link={child.link}
        />
      ))}
    </div>
  );
}
