import Link from "next/link";
import Image from "next/image";
import HighlightButton from "@/components/HighlightButton";

const navItems = [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50  h-[72px] pt-4"
        style={{background: "linear-gradient(rgba(0, 0, 0, 0.80) 25%,rgba(0, 0, 0, 0.00) 99%)", }}>
            <div className="relative flex items-start justify-between max-w-[1870px] mx-auto px-8 xl:px-10 h-full">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center select-none"
                    aria-label="MCF Home"
                >
                    <Image
                        src="/logo-white.png"
                        alt="MCF Logo"
                        width={30}
                        height={30}
                        priority
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Centered nav links */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <ul className="flex gap-10 px-8 py-1 relative">
                        {navItems.map((item) => (
                            <li key={item.label} className="relative">
                                <Link
                                    href={item.href}
                                    style={{
                                        fontFamily:
                                            "var(--font-geist), var(--font-poppins), sans-serif",
                                    }}
                                    className="text-white text-[18px] font-extralight tracking-wide px-2 py-1 transition-colors duration-150 hover:text-blue-800 focus:text-white focus:outline-none"
                                >
                                    {item.label}
                                </Link>
                                {/* Underline on hover/active */}
                            </li>
                        ))}
                    </ul>
                    {/* Underline for the whole nav group (matches Figma) */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-white/0 via-white to-white/0 mt-0" />
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex">
                    <HighlightButton href="#book">
                        <span>Book a <span className="font-black">Call</span></span>
                    </HighlightButton>
                </div>
            </div>
        </nav>
    );
}
