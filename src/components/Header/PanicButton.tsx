import React, { useEffect } from "react";
import Link from "next/link";

export default function PanicButton() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        window.location.href = "https://www.google.com.au/";
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <Link href="https://www.google.com.au/" className="z-50">
      <button className="square w-screen bg-starick-brown px-4 py-2 text-starick-white hover:bg-starick-orange lg:w-auto">
        <span className="font-bold">X</span> Quick Exit (Esc)
      </button>
    </Link>
  );
}
