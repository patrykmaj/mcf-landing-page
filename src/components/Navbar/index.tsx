'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import HighlightButton from "@/components/HighlightButton";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  // { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Smooth scroll function
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 75; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  // Active section detection
  useEffect(() => {
    const sections = navItems.map(item => ({
      id: item.href.substring(1), // Remove the '#'
      element: document.getElementById(item.href.substring(1))
    })).filter(section => section.element);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-80px 0px -80px 0px' // Account for navbar height
      }
    );

    sections.forEach(section => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.element) {
          observer.unobserve(section.element);
        }
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-12 sm:h-[4.5rem] pt-4"
     style={{background: "linear-gradient(rgba(0, 0, 0, 0.80) 25%,rgba(0, 0, 0, 0.00) 99%)"}}>
       <div className="relative flex items-center justify-between max-w-[116.875rem] mx-auto px-6 md:px-10 h-full">
         {/* Logo */}
         <Link
             href="/"
             className="navbar-logo flex items-center justify-center select-none rounded-lg p-2"
             aria-label="MCF Home"
             onClick={(e) => {
               e.preventDefault();
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
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
               <ul className="flex gap-4 lg:gap-6 xl:gap-8 px-2 lg:px-4 pb-1 relative">
                    {navItems.map((item) => (
                        <li key={item.label} className="relative">
                            <Link
                                href={item.href}
                                onClick={(e) => smoothScroll(e, item.href)}
                                style={{
                                    fontFamily:
                                        "var(--font-geist), var(--font-poppins), sans-serif",
                                }}
                                className={`navbar-item text-white text-[1rem] lg:text-[1.125rem] font-extralight tracking-wide px-1 lg:px-2 pb-1 focus:text-white focus:outline-none whitespace-nowrap ${
                                  activeSection === item.href ? 'active' : ''
                                }`}
                            >
                                {item.label}
                                {/* Menu Frame with Corner Elements */}
                                <div className="menu-frame">
                                    <span className="corner top-right"></span>
                                    <span className="corner bottom-left"></span>

                                </div>
                            </Link>
                        </li>
                    ))}
               </ul>
               {/* <div className="w-full h-[1px] bg-gradient-to-r from-white/0 via-white to-white/0 mt-0" /> */}
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
                onClick={(e) => smoothScroll(e, item.href)}
                className={`navbar-item text-white text-[1.25rem] hover:text-blue-300 transition ${
                  activeSection === item.href ? 'active' : ''
                }`}
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
