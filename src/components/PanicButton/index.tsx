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
    <div className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between bg-starick-brown px-4 text-center hover:bg-starick-orange">
      <Link href="https://www.google.com.au/">
        <button className="fixed left-0 right-0 top-0 z-50 h-14 items-center justify-between bg-starick-brown px-4 text-center text-white hover:bg-starick-orange">
          <span className="font-bold text-white">X</span> Quick Exit (Esc)
        </button>
      </Link>
    </div>
  );
}
