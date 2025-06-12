"use client";
import React from "react";
import BentoBox3D from "@/components/BentoBox3D"
import GradientText from "@/components/GradientText";

const features = [
  {
    gradientDirection: "300% 300% at 90% 0%",
    bgVideoSrc: "/animations/cpu.webm",
    subtitle: "TRANSPARENT EXECUTION ANALYTICS",
    title:
      "Real-Time, Automated Execution lightning-fast trade execution with zero emotional bias, ensuring you never miss an opportunity",
    size: "col-span-1 lg:col-span-12",
  },
  {
    gradientDirection: "300% 300% at 95% 100%",
    bgVideoSrc: "/animations/slider.webm",
    subtitle: "VOLATILITY AUTOMATION",
    title: "ATR-based dynamic risk management adapts to real-time market",
    size: "col-span-1 lg:col-span-7",
  },
  {
    gradientDirection: "300% 300% at 0% 95%",
    bgVideoSrc: "/animations/multi.webm",
    subtitle: "CONFIRMATION ENGINES",
    title: "Confirmation engines reduce false signals, maximizing win rate",
    size: "col-span-1 lg:col-span-6",
  },
  {
    gradientDirection: "300% 300% at 0% 0%",
    bgVideoSrc: "/animations/heatmap.webm",
    subtitle: "VOLUME PROFILE",
    title: "Advanced VPVR algorithms confirm momentum and liquidity zones",
    size: "col-span-1 lg:col-span-8",
  },
  {
    gradientDirection: "300% 300% at 0% 95%",
    bgVideoSrc: "/animations/pixelzone.webm",
    subtitle: "SIGNAL PRECISION",
    title: "Signals trigger only near key areas for optimal risk/reward trades",
    size: "col-span-1 lg:col-span-7",
  },
  {
    gradientDirection: "300% 300% at 5% -5%",
    bgVideoSrc: "/animations/trendlines.webm",
    subtitle: "STRUCTURE AWARENESS",
    title:
      "Proprietary trendline detection identifies high-probability trading opportunities",
    size: "col-span-1 lg:col-span-10",
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full max-w-[90rem] mx-auto px-4 lg:px-6 pb-[6.25rem] z-12 mt-16">
      <div>
        <h2 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-monda">
          <GradientText colors="from-[#8C9CDB] via-white to-[#8C9CDB]" animationSpeed="4s">
            MCF Trading Intelligence Features
          </GradientText>
        </h2>
        <p
          className="text-white/75 text-[1rem] lg:text-[1.25rem] max-w-[40rem] lg:max-w-[50rem] tracking-[-0.04em] sm:tracking-[0.04em] mt-2"
          style={{ fontFamily: "var(--font-poppins), sans-serif",lineHeight: 1.4 ,fontWeight: 200,}}
        >
          Our core, volume profiling, and volatility analytics to support
          data-driven trade decisions and risk management engines that adapt to
          changing market conditions.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-25 gap-[1rem] lg:gap-[1.5rem]">
        {features.map((f, i) => (
          <BentoBox3D
            key={i}
            gradientDirection={f.gradientDirection}
            bgVideoSrc={f.bgVideoSrc}
            subtitle={f.subtitle}
            title={f.title}
            size={f.size}
            />
        ))}
      </div>
    </section>
  );
};

export default Features;
