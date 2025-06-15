import About from "@/sections/About";
import Demo from "@/sections/Demo";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Product from "@/sections/Product";
import Pricing from "@/sections/Pricing";
import FooterBackground from "@/components/FooterBackground";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Product />
      <Features />
      <About />
      <Demo />
      <Pricing />
      <Footer />
      <FooterBackground />
    </main>
  );
}
