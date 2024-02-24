import Link from "next/link";

export default function LinkButton({
  text,
  link
}: {
  text: string;
  link: string;
}) {
  return (
    <div className="relative">
      <Link href={link}>
        <button className="rounded-lg bg-starick-brown p-2 text-xs text-starick-white">
          {text}
        </button>
      </Link>
    </div>
  );
}
