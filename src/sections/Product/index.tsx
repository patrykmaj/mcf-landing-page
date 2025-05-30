import React from "react";
import GlowButton from "@/components/GlowButton";

const Product = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[1030px] mx-6 mt-6 mb-0 overflow-hidden rounded-[50px]"
      style={{
        background:
            "radial-gradient(180% 180% at 50% 100%,rgba(0, 0, 0, 0.00) 45%, #00058A 55%, #FFF 70%)",
      }}
    >
      {/* Product Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto py-[100px] px-6 text-center">
        <h2
          className="text-white text-[64px] leading-tight drop-shadow-[0_4px_32px_rgba(42,60,255,0.18)]"
          style={{
            fontFamily: "var(--font-monda)",
            fontWeight: 400,
            textShadow: " 0 0 38px #888888",
          }}
        >
          Discover the next generation
          <br /> of trading intelligence
        </h2>
        <p
          className="mt-6 text-white/75 text-[22px] max-w-[850px] mx-auto drop-shadow-[0_2px_12px_rgba(42,60,255,0.10)] tracking-wide"
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            lineHeight: 1.4,
            fontWeight: 200,
          }}
        >
          Our multi-confirmation system leverages market structure, volume profiling, and volatility analytics to support data-driven trade decisions and risk management engines that adapt to changing market conditions
        </p>
        <GlowButton
          href="#book"
          width={"360px"}
          className="mt-6"
        >
          Book a call
        </GlowButton>
        {/* Product Image/Video Placeholder */}
        <div className="relative flex justify-center items-center w-full max-w-[1440px] mx-auto mt-12 rounded-[25px] overflow-hidden "
        style={{
              boxShadow: "0px -1px rgb(255, 255, 255)",
            }}
        >
          <img
            src="/product-dashboard.png"
            alt="Product dashboard preview"
            className="rounded-[25px] max-h-[620px] w-full h-auto object-cover bg-[#101223]/60"
            
          />1
          {/* Play button overlay (optional) */}
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/30 rounded-full shadow-lg hover:bg-white/10 transition"
            style={{ backdropFilter: "blur(8px)" }}
            aria-label="Play demo video"
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#fff" fillOpacity="0.10"/>
              <path d="M28 22L40 32L28 42V22Z" fill="#fff"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
