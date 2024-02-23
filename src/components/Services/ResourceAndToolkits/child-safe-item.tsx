export interface ChildSafeItemProps {
  backgroundColor: string;
  text: string;
  link?: string;
}

export default function ChildSafeItem({
  backgroundColor,
  text,
  link
}: ChildSafeItemProps) {
  return (
    <a href={link}>
      <p
        className={`flex h-full w-full items-center px-10 py-2 bg-${backgroundColor} hover:my-link`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </a>
  );
}
