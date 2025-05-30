import React from "react";
import Image from "next/image";
import GlowButton from "@/components/GlowButton";
import HighlightButton from "@/components/HighlightButton";

const CheckIcon = () => (
  <Image
    src="/icons/check-icon.svg"
    alt="Check"
    width={24}
    height={24}
    className="flex-shrink-0 mt-0.5"
  />
);

const CheckCheckIcon = () => (
  <Image
    src="/icons/check-check-icon.svg"
    alt="Check Check"
    width={24}
    height={24}
    className="flex-shrink-0 mt-0.5"
  />
);

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="z-11 relative overflow-hidden max-w-[1440px] min-h-[1200px] max-h-[1300px]  mx-auto bg-none"
    >
      {/* Background Text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-start justify-center z-0 text-[320px] font-archivo text-black tracking-wide p-0 overflow-hidden"
        style={{
          textShadow:
            "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
          fontWeight: 1000,
        }}
      >
        <span>PRICING</span>
      </div>
      <div className="relative z-10">
        {/* Pricing Cards */}
        <div className="relative flex items-end justify-center left-0 right-0 gap-[24px] mt-72">
          {/* Card 1 */}
          <div
            className="relative backdrop-blur-[10px] rounded-[25px] min-w-[464px] h-[620px] p-4"
            style={{
              background:
                "radial-gradient(200% 200% at 50% 10%, rgba(0, 0, 0, 0.4) 24%, #59295bbf 50%)",
              border: "1px solid #694578",
              boxShadow:
                "0px 4px 50px 10px rgba(0, 0, 0, 0.5), 0px 0px 100px 5px rgba(215, 0, 255, 0.15)",
            }}
          >
            {/* Inner Content Card */}
            <div className="bg-[#ff4cff1f] backdrop-blur-sm rounded-[25px] py-2 flex flex-col items-start mb-6">
              <h3
                className="ml-8 text-white font-geist text-[22px]"
                style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.75)" }}
              >
                MCF Signals Access
              </h3>
              <hr className="w-full border-t left-0 border-white/20 my-2" />
              <p className="ml-8 font-poppins text-base text-center font-light text-white/60 leading-snug">
                Best to start journey with trading
              </p>
              <div className="ml-8 my-3 flex items-baseline">
                <span
                  className="text-white font-poppins text-[36px]"
                  style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.75)" }}
                >
                  $120
                </span>
                <span className="ml-2 font-poppins text-[#834D92] text-[14px]  font-regular">
                  per month
                </span>
              </div>
              <div className="mb-6 mt-2 w-full flex justify-center">
                <GlowButton
                  height="50px"
                  width="360px"
                >
                  Get started
                </GlowButton>
              </div>
            </div>

            {/* WHAT YOU'LL GET Section */}
            <div className="ml-8 mt-8 flex-grow flex flex-col justify-end">
              {" "}
              {/* Pushes this section towards bottom if space allows */}
              <h4 className="uppercase font-poppins text-[20px] font-medium text-white/60 mb-4 tracking-wide">
                WHAT YOU’LL GET:
              </h4>
              <ul className="ml-2 flex flex-col gap-5">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    Live Trading Alerts across multiple markets
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    20,000+ Trader Community Access
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    Pre-Built TradingView Indicators
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    Multi-Timeframe Signal Validation
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Card 2 (Highlighted) */}
          <div
            className="relative backdrop-blur-[10px] rounded-[25px]  min-w-[464px] flex flex-col h-[672px] p-4" // Added p-4
            style={{
              background:
                "radial-gradient(195.26% 192.37% at 50% -4.35%, rgba(0, 0, 0, 0.50) 19.79%, #0021C8 47.75%, #FFF 68.92%)",
              border: "1px solid #5057BF",
              boxShadow:
                "0px 4px 50px 10px rgba(0, 0, 0, 0.5), 0px 4px 113.5px 14px rgba(23, 39, 117, 1)",
            }}
          >
            <div className=" z-20 text-center text-white/20 uppercase justify-center font-poppins text-[24px] ">
              RECOMMENDED
            </div>
            {/* Adjusted pt-12 to give space for RECOMMENDED tag */}
            <div className="bg-[#0b142a8e] backdrop-blur-sm rounded-[25px] py-2 flex flex-col items-start mt-4"> 
              <h3
                className="ml-8 text-white font-geist text-[22px]"
                style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.75)" }} // Style from Card 1 title
              >
                MCF Institutional Intelligence Suite
              </h3>
              <hr className="w-full border-t left-0 border-white/20 my-2" />
              <p className="ml-8 font-poppins text-base text-center font-light text-white/60 leading-snug">
                Best for large institution and professionals
              </p>
              <div className="ml-8 my-3 flex items-center">
                <span
                  className="text-white font-poppins text-[36px]"
                  style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.75)" }} // Style from Card 1 price
                >
                  $9,450
                </span>
                {/* Price subtitle - styling from original card 2, adjusted for consistency */}
                <span className="ml-2 font-poppins text-[#5d6bc3] text-[14px] font-regular">
                  billed monthly <br /> other billing options available
                </span>
              </div>
              <div className="mb-6 mt-2 w-full flex justify-center">
                    <HighlightButton width={"360px"} height="50px">
                        <span className="font-medium">Apply</span>
                    </HighlightButton>
                </div>
            </div>

            {/* WHAT YOU'LL GET Section - Structure from Card 1, Content from original Card 2 */}
            <div className="ml-8 mt-8 flex-col justify-end">
              <h4 className="uppercase font-poppins text-[20px] font-medium text-white/60 mb-4 tracking-wide">
                WHAT YOU’LL GET:
              </h4>
              <ul className="ml-2 flex flex-col gap-5">
                <li className="flex items-center"> {/* Adjusted from items-start and div for icon */}
                  <CheckCheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    Trading Strategy Program
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    Institutional Risk Management Tools
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    Scalable Technology Solutions
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    Institutional Grade Reporting
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    Expert strategic guidance
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="relative backdrop-blur-[10px] rounded-[25px] min-w-[464px] h-[620px] p-4 "
            style={{
              background:
                "radial-gradient(200% 200% at 50% 10%, rgba(0, 0, 0, 0.4) 24%, rgba(110, 61, 23, 0.75) 50%)",
              border: "1px solid #574029",
              boxShadow:
                "0px 4px 50px 10px rgba(0, 0, 0, 0.5), 0px 0px 100px 5px rgba(255, 105, 0, 0.1)",
            }}
          >
            {/* Inner Content Card */}
            <div className="bg-[#2a1a0e7d] backdrop-blur-sm rounded-[25px] py-2 flex flex-col items-start mb-6">
              <h3
                className="ml-8 text-white font-geist text-[22px]"
                style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.75)" }}
              >
                90 Day - Trading Strategy Program
              </h3>
              <hr className="w-full border-t left-0 border-white/20 my-2" />
              <p className="ml-8 font-poppins text-base text-center font-light text-white/60 leading-snug">
                Best for beginner and intermediate traders
              </p>
              <div className="ml-8 my-3 flex items-center">
                <span
                  className="text-white font-poppins text-[36px]"
                  style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.75)" }}
                >
                  $5,000
                </span>
                <span className="ml-2 font-poppins text-[#875E46] text-[14px]  font-regular">
                  one time payment
                  <br />
                  other billing options available
                </span>
              </div>
              <div className="mb-6 mt-2 w-full flex justify-center">
                <GlowButton
                  height="50px"
                  width="360px"
                  glowColor="rgba(255, 105, 0, 0.18)"
                >
                  Book a call
                </GlowButton>
              </div>
            </div>

            {/* WHAT YOU'LL GET Section */}
            <div className="ml-8 mt-8 flex-grow flex flex-col justify-end">
              <h4 className="uppercase font-poppins text-[20px] font-medium text-white/60 mb-4 tracking-wide">
                WHAT YOU’LL GET:
              </h4>
              <ul className="ml-2 flex flex-col gap-5">
                <li className="flex items-center">
                  <CheckCheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    MCF Signals Access
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    One-on-One Weekly Mentorship
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    Complete Technical Curriculum
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[16px] font-light text-white/60">
                    Lifetime Learning Resources
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="relative text-center flex flex-col items-center gap-[25px] mt-16">
          <h2 
            className="text-white font-monda text-[40px] font-normal leading-none"
            style={{textShadow: "0px 0px 6.6px rgba(255, 255, 255, 0.25), 0px 0px 30px rgba(255, 255, 255, 0.33)"}}
          >
            Which Solution Should I Choose?
          </h2>
          <p 
            className="font-poppins text-[24px] font-thin leading-[1.47] tracking-[0.05em] text-[#F8F8F8] w-[898px] max-w-[90%]"
          >
            If you don't know which product to choose lets get on a call! Well get you through our offer blah blah blah!
          </p>
          <GlowButton
            height="50px"
            width="360px"
          >
            Book a call
          </GlowButton>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
