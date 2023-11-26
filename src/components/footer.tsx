
import React from 'react';
import { faFacebook, faInstagram,faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Starick</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Starick</a>. All Rights Reserved | <a href="www.example.com" className="hover:underline"> Privacy & Disclaimer </a> | Site by OM4</span>

                <div className="container mx-auto my-2 flex justify-center">
                    <a href="https://www.facebook.com/StarickServices/" target="_blank" className="mr-4"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://twitter.com/starickceo" target="_blank" className="mr-4"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.linkedin.com/company/starick/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;



