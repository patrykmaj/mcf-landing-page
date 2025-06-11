"use client";

import React, { useState } from "react";
import Image from "next/image";
import GlowButton from "@/components/GlowButton";
import GradientText from "@/components/GradientText";

const Demo = () => {
  const [mcfIntelligenceEnabled, setMcfIntelligenceEnabled] = useState(true);

  return (
    <div>
      <div
        className="relative z-45 pointer-events-none rounded-b-[3.125rem] h-[calc(90vh-3rem)] max-h-[64.375rem] mx-4 sm:mx-6 overflow-hidden"
        style={{
          background:
            "radial-gradient(180% 180% at 50% 0%, rgba(0, 0, 0, 0.00) 45%, #00058A 55%, #FFF 70%)",
        }}
      />
      {/*Delete "Hidden" to show section */}
      <section
        className="hidden relative z-10  max-h-[75rem] text-white  mx-4 sm:mx-6 mt-4 sm:mt-6  overflow-hidden rounded-t-[3.125rem]"
        style={{
          background:
            "radial-gradient(180% 180% at 50% 100%,rgba(0, 0, 0, 0.00) 45%, #00058A 55%, #FFF 70%)",
        }}
      >
        <div className="relative z-10 w-full max-w-[90rem] mx-auto mt-[4rem] text-center p-6">
          {/* Heading with gradient text */}
          <h2 className="text-[2rem] sm:text-[2.625rem] lg:text-[4rem] font-monda">
            <GradientText colors="from-[#8C9CDB] via-white to-[#8C9CDB]" animationSpeed="6s">
              See MCF Trading Intelligence<br /> In Action
            </GradientText>
          </h2>

          {/* Description text */}
          <p
            className="text-white/75 text-[1rem] lg:text-[1.25rem] max-w-[40rem] lg:max-w-[50rem] tracking-[-0.04em] sm:tracking-[0.04em] mt-2 mx-auto" 
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              lineHeight: 1.4,
              fontWeight: 200, 
            }}
          >
            Our multi-confirmation system leverages market structure, volume
            profiling, and volatility analytics to support data-driven trade
            decisions and risk management engines.
          </p>

          {/* Video/Chart Container */}
          <div className=" mt-12 relative w-full aspect-[1/1] sm:aspect-[5/2] max-w-[90rem] mx-auto bg-[#0A0A1F]/90 rounded-b-[1.875rem] lg:rounded-b-[3.125rem] overflow-hidden mb-16 border border-[#090921]"
          style={{
          background:
            "radial-gradient(206.83% 190.93% at 50% -4.37%, rgba(0, 0, 0, 0.00) 7.16%, rgba(0, 0, 0, 0.00) 34.47%, rgba(0, 5, 138, 0.75) 54.79%, rgba(255, 255, 255, 0.75) 68.76%)",
        }}> {/* Adjusted bg color, shadow, border */}
            {/* Placeholder for chart/trading video */}
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm">Trading Chart Preview</p>
                <p className="text-white/50 text-xs mt-1">Live market data visualization</p>
              </div>
            </div>

            {/* Notification Overlay */}
            <div className="absolute top-4 right-4 bg-[rgba(44,44,44,0.7)] backdrop-blur-[9.375rem] text-white p-[0.875rem_0.875rem_0.75rem] rounded-[1.5rem] shadow-xl flex items-center space-x-[0.625rem] border border-[#333333] w-[24.125rem]">
              <div className="bg-black rounded-[0.531rem] w-[2.375rem] h-[2.375rem] flex items-center justify-center">
                <Image src="/images/logo-white.png" alt="Notification Icon" width={30} height={16} className="object-contain" />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-[0.9375rem] leading-[1.33] tracking-[-0.015em]" style={{fontFamily: "var(--font-noto-sans-hebrew)"}}>Maximus</p>
                  <p className="text-[0.8125rem] text-[rgba(127,127,127,0.5)] leading-[1.53]" style={{fontFamily: "var(--font-sf-pro)"}}>9:41 AM</p>
                </div>
                <p className="text-[0.9375rem] text-[#AEAEAE] leading-[1.33] tracking-[-0.015em]" style={{fontFamily: "var(--font-noto-sans-hebrew)"}}>
                  You just NUKED💣💥🤯 your portfolio
                </p>
              </div>
            </div>

            {/* XAUUSD Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none"> {/* Centered using flex */}
              <p className="text-[5.625rem] md:text-[8.75rem] text-white/5 font-bold tracking-wider select-none"> {/* Adjusted size, opacity, tracking */}
                XAUUSD
              </p>
            </div>

            {/* Chart Elements - Price Lines/Points (optional based on image) */}
            {/* Removed example price line, as it's not clearly visible or essential from screenshot */}
          </div>

          {/* Controls Area */}
          <div className="flex flex-col items-center justify-center gap-y-8 mb-10 max-w-[43.75rem] mx-auto"> {/* Main container: vertical stack, gap between rows */}
            {/* Toggle Switch (Row 1) */}
            <div className="flex items-center space-x-3">
              <label
                htmlFor="mcfToggle"
                className="relative inline-flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="mcfToggle"
                  className="sr-only peer"
                  checked={mcfIntelligenceEnabled}
                  onChange={() =>
                    setMcfIntelligenceEnabled(!mcfIntelligenceEnabled)
                  }
                />
                <div className="w-[3.125rem] h-[1.875rem] bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-[#0033FF] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.125rem] after:left-[0.125rem] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.6875rem] after:w-[1.6875rem] after:transition-all"
                style={mcfIntelligenceEnabled ? { boxShadow: "0px 3px 1px 0px rgba(0, 0, 0, 0.06), 0px 3px 8px 0px rgba(0, 0, 0, 0.15), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)" } : {}}></div> {/* Adjusted colors, focus ring, dimensions, and knob shadow */}
              </label>
              <span
                className="text-[1rem] sm:text-[1.25rem] font-thin text-[#F8F8F8]" 
                style={{ fontFamily: "var(--font-roboto)", letterSpacing: "0.05em", lineHeight: "1.47" }}
              >
                MCF Trading Intelligence
              </span>
            </div>

            {/* Buttons and Amount (Row 2) */}
            <div className="flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-x-12 px-6"> {/* Inner container: responsive horizontal stack for buttons/amount */}
              {/* Buy Button */}
              <GlowButton
                glowColor="rgba(0, 255, 0, 0.4)"
                style={{ 
                  textShadow: '0rem 0rem 0.85625rem rgba(30, 255, 0, 1)',
                  color: '#CBFFD1',
                }}
                width="5.625rem"
              >
                Buy
              </GlowButton>

              {/* Amount Display */}
              <div className="text-center px-4">
                <p
                  className="font-normal text-white mb-1 text-[1.75rem] sm:text-[2rem] tracking-tight"
                  style={{ fontFamily: "var(--font-poppins)", textShadow: "0rem 0rem 0.4125rem rgba(255, 255, 255, 0.6), 0rem 0rem 2.15625rem rgba(255, 255, 255, 0.47)" }}
                >
                  $10,000
                </p>
                <button className="text-[1.125rem] underline font-light text-[#858585] hover:text-white transition-colors " style={{fontFamily: "var(--font-roboto)",  letterSpacing: "0.05em"}}>
                  Reset
                </button>
              </div>

              {/* Sell Button */}
              <GlowButton
                glowColor="rgba(255, 0, 0, 0.5)" // Main glow color
                style={{ 
                  textShadow: '0rem 0rem 0.85625rem rgba(255, 0, 0, 1)',
                  color: '#FFCBCB',
                }}
                width="5.625rem"
              >
                Sell
              </GlowButton>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Demo;
