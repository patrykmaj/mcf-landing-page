'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import HighlightButton from "@/components/HighlightButton";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  // { label: "About", href: "#about" },
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
    <nav className="fade-in fixed top-0 left-0 w-full z-50 h-12 sm:h-[4.5rem] pt-4"
     style={{background: "linear-gradient(rgba(0, 0, 0, 0.80) 25%,rgba(0, 0, 0, 0.00) 99%)", animationDelay: "0.1s"}}>
       <div className="fade-in relative flex items-center justify-between max-w-[116.875rem] mx-auto px-6 md:px-10 h-full" style={{ animationDelay: "0.2s" }}>
         {/* Logo */}
         <Link
             href="/"
             className="scale-in navbar-logo flex items-center justify-center select-none rounded-lg p-2"
             aria-label="MCF Home"
             onClick={(e) => {
               e.preventDefault();
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
             style={{ animationDelay: "0.3s" }}
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
           className="fade-in-up sm:hidden text-white text-2xl"
           onClick={() => setIsOpen(!isOpen)}
           aria-label="Toggle menu"
           style={{ animationDelay: "0.4s" }}
         >
           {isOpen ? '✕' : '☰'}
         </button>

         {/* Centered nav links */}
            <div className="slide-up absolute left-1/2 transform -translate-x-1/2 hidden sm:block" style={{ animationDelay: "0.5s" }}>
               <ul className="fade-in flex gap-4 lg:gap-6 xl:gap-8 px-2 lg:px-4 pb-1 relative stagger-children" style={{ animationDelay: "0.6s" }}>
                    {navItems.map((item, index) => (
                        <li key={item.label} className="fade-in-up relative" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
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
            <div className="scale-in hidden sm:flex" style={{ animationDelay: "1.1s" }}>
               <HighlightButton href="https://calendly.com/marketmakermax/next-steps-with-mcf">
                 <span className="lg:inline">Book a <span className="font-black">Call</span></span>
               </HighlightButton>
             </div>
       </div>

    {/* Mobile Overlay Menu */}
    {isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-6 z-50 sm:hidden" style={{ animationDelay: "0.1s" }}>
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-white text-[1.875rem] z-50"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          style={{ animationDelay: "0.2s" }}
        >
          ✕
        </button>
        <ul className="space-y-4 text-center stagger-children z-50" style={{ animationDelay: "0.3s " }}>
          {navItems.map((item, index) => (
            <li key={item.label} className="fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
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
        <div className="z-50" style={{ animationDelay: "0.8s" }}>
          <HighlightButton href="https://calendly.com/marketmakermax/next-steps-with-mcf">
            <span onClick={() => setIsOpen(false)} className="block px-4">
              Book a <span className="font-black">Call</span>
            </span>
          </HighlightButton>
        </div>
      </div>
    )}
    </nav>
  );
}
