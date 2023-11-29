import React, { useEffect, } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Panicbutton = () => {
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            router.push('/Redirect');
          }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
          };
        }, []);

    return (
    <div className="fixed top-1/3 right-0">
        <Link href="https://www.google.com">
            <button className="px-4 py-2 bg-green-800 text-white sqaure hover:bg-blue-600">
                Quick Escape (Esc)
            </button>
        </Link>
    </div>
    );
};

export default Panicbutton;