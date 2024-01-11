import Link from "next/link";


export default function LinkButton({text, link}: { text: string, link: string }) {
    return (
        <div className="relative">
            <Link href={link}>
                <button className="rounded-lg bg-starick-brown text-starick-white p-2 text-xs">{text}</button>
            </Link>
        </div>
    );
}
