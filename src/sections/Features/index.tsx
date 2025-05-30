import React from "react";
import BentoBox from "@/components/BentoBox";

const features = [
  {
    gradientDirection: "300% 300% at 90% 0%",
    bgAnimationSrc: "/file.svg",
    subtitle: "TRANSPARENT EXECUTION ANALYTICS",
    title:
      "Real-Time, Automated Execution lightning-fast trade execution with zero emotional bias, ensuring you never miss an opportunity",
    size: "col-span-12",
  },
  {
    gradientDirection: "300% 300% at 95% 100%",
    bgAnimationSrc: "/globe.svg",
    subtitle: "VOLATILITY AUTOMATION",
    title: "ATR-based dynamic risk management adapts to real-time market",
    size: "col-span-7",
  },
  {
    gradientDirection: "300% 300% at 0% 95%",
    bgAnimationSrc: "/next.svg",
    subtitle: "CONFIRMATION ENGINES",
    title: "Confirmation engines reduce false signals, maximizing win rate",
    size: "col-span-6",
  },
  {
    gradientDirection: "300% 300% at 0% 0%",
    bgAnimationSrc: "/vercel.svg",
    subtitle: "VOLUME PROFILE",
    title: "Advanced VPVR algorithms confirm momentum and liquidity zones",
    size: "col-span-8",
  },
  {
    gradientDirection: "300% 300% at 0% 95%",
    bgAnimationSrc: "/window.svg",
    subtitle: "SIGNAL PRECISION",
    title: "Signals trigger only near key areas for optimal risk/reward trades",
    size: "col-span-7",
  },
  {
    gradientDirection: "300% 300% at 5% -5%",
    bgAnimationSrc: "/logo-white.png",
    subtitle: "STRUCTURE AWARENESS",
    title:
      "Proprietary trendline detection identifies high-probability trading opportunities",
    size: "col-span-10",
  },
];

const Features = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 pb-[100px] z-12">
      <div>
        <h2
          className="text-[64px]  text-white "
          style={{
            fontFamily: "var(--font-monda), sans-serif",
            color: "#8C9CDB",
            backgroundImage:
              "linear-gradient(45deg, #8C9CDB 0%, #FFFFFF 45%, #8C9CDB 85%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span className="text-blue-200">MCF</span> Trading Intelligence Features
        </h2>
        <p
          className="text-white/75 text-[22px] max-w-[850px] tracking-wide mt-2"
          style={{ fontFamily: "var(--font-poppins), sans-serif",lineHeight: 1.4 ,fontWeight: 200,}}
        >
          Our core, volume profiling, and volatility analytics to support
          data-driven trade decisions and risk management engines that adapt to
          changing market conditions.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-25 gap-[24px]">
        {features.map((f, i) => (
          <BentoBox
            key={i}
            gradientDirection={f.gradientDirection}
            bgAnimationSrc={f.bgAnimationSrc}
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
