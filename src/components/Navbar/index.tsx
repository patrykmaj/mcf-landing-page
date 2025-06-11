'use client';
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import HighlightButton from "@/components/HighlightButton";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full z-50 h-12 sm:h-[4.5rem] pt-4"
         style={{background: "linear-gradient(rgba(0, 0, 0, 0.80) 25%,rgba(0, 0, 0, 0.00) 99%)"}}>
           <div className="relative flex items-center justify-between max-w-[116.875rem] mx-auto px-6 md:px-10 h-full">
             {/* Logo */}
             <Link
                 href="/"
                 className="flex items-center justify-center select-none"
                 aria-label="MCF Home"
             >
                 <Image
                     src="/images/logo-white.png"
                     alt="MCF Logo"
                     width={30}
                     height={30}
                     priority
                     className="h-6 sm:h-10 w-auto object-contain"
                 />
             </Link>

             {/* Hamburger Button */}
             <button
               className="sm:hidden text-white text-2xl "
               onClick={() => setIsOpen(!isOpen)}
               aria-label="Toggle menu"
             >
               {isOpen ? '✕' : '☰'}
             </button>

             {/* Centered nav links */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
                   <ul className="flex gap-4 lg:gap-6 xl:gap-8 px-2 lg:px-4 py-1 relative">
                        {navItems.map((item) => (
                            <li key={item.label} className="relative">
                                <Link
                                    href={item.href}
                                    style={{
                                        fontFamily:
                                            "var(--font-geist), var(--font-poppins), sans-serif",
                                    }}
                                    className="text-white text-[1rem] lg:text-[1.125rem] font-extralight tracking-wide px-1 lg:px-2 py-1 transition-colors duration-150 hover:text-blue-800 focus:text-white focus:outline-none whitespace-nowrap"
                                >
                                    {item.label}
                                </Link>
                                {/* Underline on hover/active */}
                            </li>
                        ))}
                   </ul>
                   <div className="w-full h-[1px] bg-gradient-to-r from-white/0 via-white to-white/0 mt-0" />
                 </div>

             {/* CTA Button */}
                <div className="hidden sm:flex">
                   <HighlightButton href="#book">
                     <span className="lg:inline">Book a <span className="font-black">Call</span></span>
                   </HighlightButton>
                 </div>
           </div>

        {/* Mobile Overlay Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-6 z-50 sm:hidden">
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white text-[1.875rem]"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <ul className="space-y-4 text-center">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white text-[1.25rem] hover:text-blue-300 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Highlighted CTA */}
            <HighlightButton href="#book">
              <span onClick={() => setIsOpen(false)} className="block px-4">
                Book a <span className="font-black">Call</span>
              </span>
            </HighlightButton>
          </div>
        )}
        </nav>
    );
}
