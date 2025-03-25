"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["Home", "Projects", "About", "Contact"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section.toLowerCase());
                if (sectionElement) {
                    const { offsetTop, offsetHeight } = sectionElement;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg border-b-2 border-cyber-blue shadow-[0_0_15px_var(--cyber-blue)] z-50">
            <div className="container mx-auto flex justify-between items-center p-4">

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {sections.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className={`relative uppercase text-sm tracking-wider transition duration-300 neon-hover ${activeSection === item ? "text-cyber-blue neon-active" : "text-cyber-green hover:text-cyber-blue"
                                    }`}
                            >
                                {item}
                                {activeSection === item && (
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyber-blue transition-all duration-300"></span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-cyber-green hover:text-cyber-blue transition duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-t-2 border-cyber-blue shadow-[0_0_15px_var(--cyber-blue)] transition-transform duration-500 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >
                <ul className="flex flex-col items-center py-4 space-y-4">
                    {sections.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className={`uppercase text-sm tracking-wider transition duration-300 neon-hover ${activeSection === item ? "text-cyber-blue neon-active" : "text-cyber-green hover:text-cyber-blue"
                                    }`}
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveSection(item);
                                }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
