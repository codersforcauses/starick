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
    <div className="fixed right-0 top-1/3">
      <Link href="https://www.google.com.au/">
        <button className="square bg-starick-brown px-4 py-2 text-white hover:bg-starick-orange">
          <span className="font-bold">X</span> Quick Exit (Esc)
        </button>
      </Link>
    </div>
  );
}
