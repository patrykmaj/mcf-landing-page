import React from "react";

const Product = () => {
  return (
    <section
      id="product"
      className="relative flex flex-col items-center justify-center min-h-[43.75rem] mx-4 lg:mx-6 mt-4 lg:mt-6 mb-0 overflow-hidden rounded-[1.875rem] lg:rounded-[3.125rem]"
      style={{
        background:
            "radial-gradient(180% 180% at 50% 105%,rgba(0, 0, 0, 0.00) 39.21%, #00058A 54.79%, #FFF 72.06%)",
        // boxShadow: "0rem 0.5rem 3rem 0.625rem rgba(42, 60, 255, 0.18)",
      }}
    >
      {/* Product Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[56.25rem] mx-auto px-6 sm:px-8 mb-8 text-center lg:pt-24">
        <h2
          className="text-white text-[2rem] sm:text-[3rem] lg:text-[4rem] leading-tight drop-shadow-[0_0.25rem_2rem_rgba(42,60,255,0.18)] tracking-[-0.02em]"
          style={{
            fontFamily: "var(--font-akira), sans-serif",
          }}
        >
          Discover the next generation<br />of trading intelligence
        </h2>
        <p
          className="mt-3 sm:mt-6 text-white/80 text-[1rem] lg:text-[1.250rem] font-light max-w-4xl mx-auto drop-shadow-[0_0.125rem_0.75rem_rgba(42,60,255,0.10)] tracking-[-0.04em] sm:tracking-[0.04em]"
          style={{
            fontFamily:"var(--font-poppins), sans-serif",
            fontWeight: 200,
          }}
        >
          Our multi-confirmation system leverages market structure, volume profiling, and volatility analytics to support data-driven trade decisions and risk management engines that adapt to changing market conditions
        </p>
        {/* Product Image/Video Placeholder */}
        <div className="relative flex justify-center items-center w-full max-w-3xl mx-auto mt-6 sm:mt-12 ">
          <div 
            className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto border border-white/10 bg-gradient-to-br from-[#101223]/80 via-blue-900/20 to-[#101223]/80 flex items-center justify-center min-h-[17.5rem] max-h-[25rem]"
            style={{
              boxShadow: "0rem 0.5rem 3rem 0rem rgba(42, 60, 255, 0.18)",
            }}
          >
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">MCF Trading Dashboard</h3>
              <p className="text-white/70 text-sm">Advanced analytics and trade management interface</p>
            </div>
          </div>
          {/* Play button overlay (optional) */}
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 border border-white/30 rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-white/20 transition"
            style={{ backdropFilter: "blur(0.5rem)" }}
            aria-label="Play demo video"
          >
            <svg width="18" height="18" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#fff"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
