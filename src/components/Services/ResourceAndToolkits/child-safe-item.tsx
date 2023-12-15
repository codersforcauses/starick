import React from "react";

interface ChildSafeItemProps {
  backgroundColor: string;
  text: string;
}

export default function ChildSafeItem({
  backgroundColor,
  text
}: ChildSafeItemProps) {
  return (
    <p
      className={`flex h-full w-full items-center px-10 py-2 bg-[--starick-${backgroundColor}]`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
