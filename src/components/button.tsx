import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
  textColour: string;
  arrowBackgroundColor: string;
  arrowColour: string;
  fontsmall ?: boolean;
}

export default function Button({
  text,
  link,
  textColour,
  arrowBackgroundColor,
  arrowColour,
  fontsmall
}: ButtonProps) {
  return (
    <Link href={link}>
      <div className="group flex items-center">
        <button
          className={`bg-${arrowBackgroundColor} group-hover:bg-starick-orange text-${arrowColour} mr-2 px-2 font-mono text-s ${fontsmall ? "w-6 h-6": ""} text-l font-bold`}
        >
          &#62;
        </button>
        <p
          className={`text-lg font-semibold text-${textColour} group-hover:text-starick-orange`}
        >
          {text}
        </p>
      </div>
    </Link>
  );
}
