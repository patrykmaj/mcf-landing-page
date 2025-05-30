"use client";

import React, { useState } from "react";
import GlowButton from "@/components/GlowButton";

const Demo = () => {
  const [mcfIntelligenceEnabled, setMcfIntelligenceEnabled] = useState(true);

  return (
    <div>
      <div
        className="relative z-45 pointer-events-none rounded-b-[50px] h-[calc(90vh-48px)] max-h-[1030px] mx-6 overflow-hidden"
        style={{
          background:
            "radial-gradient(180% 180% at 50% 0%, rgba(0, 0, 0, 0.00) 45%, #00058A 55%, #FFF 70%)",
        }}
      />
      <section
        className="relative z-10  max-h-[1200px] text-white  mx-6 mt-6 overflow-hidden rounded-t-[50px]"
        style={{
          background:
            "radial-gradient(180% 180% at 50% 100%,rgba(0, 0, 0, 0.00) 45%, #00058A 55%, #FFF 70%)",
        }}
      >
        <div className="relative z-10 w-full max-w-[1440px] mx-auto mt-[100px] text-center">
          {/* Heading with gradient text */}
          <h2
            className="text-[36px] md:text-[64px] text-white tracking-tight "
            style={{
              fontFamily: "var(--font-monda), sans-serif",
              backgroundImage:
                "linear-gradient(45deg, #8C9CDB 0%, #FFFFFF 50%, #8C9CDB 95%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(140, 156, 219, 0.3)", // Adjusted shadow color
            }}
          >
            See MCF Trading Intelligence In Action
          </h2>

          {/* Description text */}
          <p
            className="mt-2 text-white/75 text-[22px] max-w-[1100px] mx-auto tracking-wide" 
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
          <div className=" mt-12 relative w-full aspect-[5/2] max-w-[1440px] mx-auto bg-[#0A0A1F]/90 rounded-[50px] overflow-hidden mb-16 border border-[#090921]"
          style={{
          background:
            "radial-gradient(206.83% 190.93% at 50% -4.37%, rgba(0, 0, 0, 0.00) 7.16%, rgba(0, 0, 0, 0.00) 34.47%, rgba(0, 5, 138, 0.75) 54.79%, rgba(255, 255, 255, 0.75) 68.76%)",
        }}> {/* Adjusted bg color, shadow, border */}
            {/* Placeholder for chart/trading video */}
            <video
              className="w-full h-full object-cover"
              poster="/placeholder-chart.png"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/path-to-your-chart-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Notification Overlay */}
            <div className="absolute top-4 right-4 bg-[rgba(44,44,44,0.7)] backdrop-blur-[150px] text-white p-[14px_14px_12px] rounded-[24px] shadow-xl flex items-center space-x-[10px] border border-[#333333] w-[386px]">
              <div className="bg-black rounded-[8.5px] w-[38px] h-[38px] flex items-center justify-center">
                <img src="/images/notification-icon.png" alt="Notification Icon" className="w-[30px] h-[16px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-[15px] leading-[1.33] tracking-[-0.015em]" style={{fontFamily: "var(--font-noto-sans-hebrew)"}}>Maximus</p>
                  <p className="text-[13px] text-[rgba(127,127,127,0.5)] leading-[1.53]" style={{fontFamily: "var(--font-sf-pro)"}}>9:41 AM</p>
                </div>
                <p className="text-[15px] text-[#AEAEAE] leading-[1.33] tracking-[-0.015em]" style={{fontFamily: "var(--font-noto-sans-hebrew)"}}>
                  You just NUKED💣💥🤯 your portfolio
                </p>
              </div>
            </div>

            {/* XAUUSD Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none"> {/* Centered using flex */}
              <p className="text-[90px] md:text-[140px] text-white/5 font-bold tracking-wider select-none"> {/* Adjusted size, opacity, tracking */}
                XAUUSD
              </p>
            </div>

            {/* Chart Elements - Price Lines/Points (optional based on image) */}
            {/* Removed example price line, as it's not clearly visible or essential from screenshot */}
          </div>

          {/* Controls Area */}
          <div className="flex flex-col items-center justify-center gap-y-8 mb-10 max-w-[700px] mx-auto"> {/* Main container: vertical stack, gap between rows */}
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
                <div className="w-[51px] h-[31px] bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-[#0033FF] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[27px] after:w-[27px] after:transition-all"
                style={mcfIntelligenceEnabled ? { boxShadow: "0px 3px 1px 0px rgba(0, 0, 0, 0.06), 0px 3px 8px 0px rgba(0, 0, 0, 0.15), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)" } : {}}></div> {/* Adjusted colors, focus ring, dimensions, and knob shadow */}
              </label>
              <span
                className="text-sm font-thin text-[#F8F8F8]" 
                style={{ fontFamily: "var(--font-roboto)", fontSize: "20px", letterSpacing: "0.05em", lineHeight: "1.47" }}
              >
                MCF Trading Intelligence
              </span>
            </div>

            {/* Buttons and Amount (Row 2) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-x-12"> {/* Inner container: responsive horizontal stack for buttons/amount */}
              {/* Buy Button */}
              <GlowButton
                className="px-12 py-3"
                glowColor="#00ff0017)"
                style={{ 
                  background: 'rgba(0, 128, 2, 0.2)',
                  textShadow: '0px 0px 13.7px rgba(30, 255, 0, 1)',
                  color: '#CBFFD1',
                  boxShadow: '0px 0px 50px 0px rgba(0, 255, 0, 0.5)',
                }}
                height="50px"
                width="180px"
              >
                Buy
              </GlowButton>

              {/* Amount Display */}
              <div className="text-center px-4">
                <p
                  className="text-3xl font-normal text-white mb-1"
                  style={{ fontFamily: "var(--font-poppins)", fontSize: "36px", textShadow: "0px 0px 6.6px rgba(255, 255, 255, 0.6), 0px 0px 34.5px rgba(255, 255, 255, 0.47)" }}
                >
                  $10,000
                </p>
                <button className="text-xs text-[#858585] hover:text-white transition-colors font-thin" style={{fontFamily: "var(--font-roboto)", fontSize: "20px", letterSpacing: "0.05em"}}>
                  Reset
                </button>
              </div>

              {/* Sell Button */}
              <GlowButton
                className="px-12 py-3"
                glowColor="rgba(255, 0, 0, 1)" // Main glow color
                style={{ 
                  textShadow: '0px 0px 13.7px rgba(255, 0, 0, 1)',
                  color: '#FFCBCB',
                }}
                height="50px"
                width="180px"
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
