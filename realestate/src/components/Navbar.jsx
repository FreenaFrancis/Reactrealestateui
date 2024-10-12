import React, { useEffect, useState } from 'react';
// Added Link import
import navlogo from '../assets/navlogo.png';
import { FaXmark, FaBars } from 'react-icons/fa6'; // Fixed icon import
import {Link} from 'react-scroll'
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Sticky Navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Added dependency array

    // Navigation array
    const navigation = [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Service', path: 'service' },
        { link: 'Product', path: 'product' },
        { link: 'Testimonial', path: 'testimonial' }, // Fixed spelling
        { link: 'FAQ', path: 'faq' },
    ];

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50">
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    {/* Logo */}
                    <a className="text-2xl font-semibold flex items-center space-x-3" href="/">
                        <img src={navlogo} alt="Logo" className="w-10 inline-block" />
                        <span className="text-[#263238]">REALCENT</span>
                    </a>

                    {/* Nav items for large screens */}
                    <ul className="hidden lg:flex space-x-8">
                        {navigation.map(({ link, path }) => (
                            <Link
                                to={path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                key={path}
                                className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium"
                            >
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* Buttons for large screens */}
                    <div className="space-x-12 hidden lg:flex items-center">
                        <a href="/" className="text-brandPrimary hover:text-gray-900">Login</a>
                        <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
                            Signup
                        </button>
                    </div>

                    {/* Menu button for mobile */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none focus:text-gray-500 text-neutralDGray"
                        >
                            {isMenuOpen ? (
                                <FaXmark className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary text-white lg:hidden transition-all duration-300
                    ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}
                >
                    {navigation.map(({ link, path }) => (
                        <Link
                            to={path}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            key={path}
                            className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

