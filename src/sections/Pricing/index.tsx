import React from "react";
import Image from "next/image";
import GlowButton from "@/components/GlowButton";
import HighlightButton from "@/components/HighlightButton";
import ShinyText from '@/components/ShinyText';


const CheckIcon = () => (
  <Image
    src="/icons/check-icon.svg"
    alt="Check"
    width={24}
    height={24}
    className="flex-shrink-0 mt-0.5 w-[1rem] h-[1rem] lg:w-[1.5rem] lg:h-[1.5rem]"
  />
);

const CheckCheckIcon = () => (
  <Image
    src="/icons/check-check-icon.svg"
    alt="Check Check"
    width={24}
    height={24}
    className="flex-shrink-0 mt-0.5 w-[1.25rem] h-[1.25rem] lg:w-[1.75rem] lg:h-[1.75rem]"
  />
);

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="fade-in-up z-11 relative overflow-hidden max-w-[90rem] min-h-[75rem] mx-auto bg-none px-4 sm:px-6 xl:px-10"
      style={{ animationDelay: "0.1s" }}
    >
      {/* Background Text */}
      <div
        aria-hidden="true"
        className="fade-in-up absolute inset-0 flex items-start justify-center z-0 text-[5rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-archivo text-black tracking-wide p-0 overflow-hidden"
        style={{
          textShadow:
            "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
          fontWeight: 1000,
          animationDelay: "0.2s"
        }}
      >
        <span className="fade-in-up" style={{ animationDelay: "0.2s" }}>PRICING</span>
      </div>
      <div className="relative z-10">
        {/* Pricing Cards */}
        <div className="slide-up z-18 relative grid grid-cols-1 xl:grid-cols-3 gap-[1rem] xl:gap-[1.5rem] mt-20 xs:mt-24 sm:mt-32 md:mt-48 lg:mt-64 xl:mt-72 items-end justify-center max-w-[90rem] mx-auto stagger-children" style={{ animationDelay: "0.1s" }}>
          {/* Card 1 */}
          <div
            className="relative flex flex-col sm:flex-row xl:flex-col backdrop-blur-[10px] rounded-[1.5625rem] w-full xl:max-w-[29rem] mx-auto xl:mx-0 h-auto xl:h-[40rem] p-4 xl:pb-8"
            style={{
              background:
                "radial-gradient(200% 200% at 50% 10%, rgba(0, 0, 0, 1) 24%, #59295bbf 50%)",
              border: "1px solid #694578",
              boxShadow:
                "0px 0px 2rem 0.5rem rgba(0, 0, 0, 0.5), 0px 0px 2rem 0rem rgba(215, 0, 255, 0.5)",
            }}
          >
            {/* Inner Content Card */}
            <div className="fade-in-up bg-[#ff4cff1f] backdrop-blur- rounded-[1.5625rem] py-2 flex flex-col items-start xl:mb-6 sm:max-w-[22rem] sm:min-w-[22rem] xl:max-w-[25.250rem]" style={{ animationDelay: "0.2s" }}>
              <h3
                className="fade-in mx-4 text-white font-geist text-[1.25rem] sm:text-[1.375rem]"
                style={{ textShadow: "0 0 0.9375rem rgba(255, 255, 255, 0.75)", animationDelay: "0.2s" }}
              >
                <ShinyText text="MCF Signals Access" disabled={false} speed={3} className='custom-class' /> 
              </h3>
              <hr className="slide-up w-full border-t left-0 border-white/20 my-2" style={{ animationDelay: "0.3s" }} />
              <p className="fade-in-up mx-4 font-poppins text-sm sm:text-base font-light text-white/60 leading-snug" style={{ animationDelay: "0.4s" }}>
                Best to start journey with trading
              </p>
              <div className="scale-in mx-4 my-1 sm:my-3 flex items-baseline" style={{ animationDelay: "0.4s" }}>
                <span
                  className="price-bounce-1 text-white font-poppins text-[2rem] sm:text-[2.25rem]"
                  style={{ textShadow: "0 0 0.9375rem rgba(255, 255, 255, 0.75)" }}
                >
                  <ShinyText text="$1,500" disabled={false} speed={2} className='custom-class' />
                </span>
                <span className="fade-in ml-2 font-poppins text-[#834D92] text-[0.65rem] sm:text-[0.875rem] font-regular" style={{ animationDelay: "0.5s" }}>
                  per month
                </span>
              </div>
              <div className="fade-in-up mb-2 lg:mb-6 mt-2 w-full flex justify-left" style={{ animationDelay: "0.6s" }}>
                <GlowButton
                  width="100%"
                  className="sm:max-w-[23rem] mx-4"
                  href="https://calendly.com/marketmakermax/next-steps-with-mcf"
                >
                  Get started
                </GlowButton>
              </div>
            </div>

            {/* WHAT YOU'LL GET Section */}
            <div className="fade-in-up sm:ml-4 mt-4 xl:mt-4 flex-grow flex flex-col justify-start" style={{ animationDelay: "0.6s" }}>
              <h4 className="fade-in uppercase font-poppins text-[1.125rem] md:text-[1.25rem] font-medium text-white/60 mb-2 xs:mb-4 tracking-wide" style={{ animationDelay: "0.7s" }}>
                WHAT YOU&apos;LL GET:
              </h4>
              <ul className="slide-up ml-2 flex flex-col gap-3 lg:gap-5 stagger-children" style={{ animationDelay: "0.7s" }}>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    Live Trading Alerts across multiple markets
                  </span>
                </li>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    20,000+ Trader Community Access
                  </span>
                </li>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    Pre-Built TradingView Indicators
                  </span>
                </li>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    Multi-Timeframe Signal Validation
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Card 2 (Highlighted) */}
          <div
            className="z-20 relative flex flex-col sm:flex-row xl:flex-col backdrop-blur-[10px] rounded-[1.5625rem] w-full xl:max-w-[29rem] mx-auto xl:mx-0 h-auto xl:h-[41.5rem] p-4 xl:pt-[1.5rem] xl:pb-8"
            style={{
              background:
                "radial-gradient(195.26% 192.37% at 50% -4.35%, rgba(0, 0, 0, 1) 19.79%, #0021C8 47.75%, #FFF 68.92%)",
              border: "1px solid #5057BF",
              boxShadow:
                "0px 0px 2rem 0.5rem rgba(0, 0, 0, 0.5), 0px 0px 4rem 1rem #002aff9a",
            }}
          >
            {/* RECOMMENDED Badge - Absolutely positioned */}
            <div className="scale-in absolute -top-3 left-1/2 sm:left-[12rem] xl:left-1/2 transform -translate-x-1/2 z-30 bg-gradient-to-b from-black to-blue-500 text-white/80 text-center uppercase font-poppins text-[0.75rem] sm:text-[0.875rem] px-4 py-1 rounded-full border border-blue-300 shadow-lg" style={{ animationDelay: "0.2s" }}>
              RECOMMENDED
            </div>
            
            <div className="fade-in-up bg-[#1628558e] backdrop-blur-sm rounded-[1.5625rem] py-2 flex flex-col items-start xl:mb-6 sm:max-w-[22rem] sm:min-w-[22rem] xl:max-w-[25.250rem] mt-3 sm:mt-0 xl:mt-3" style={{ animationDelay: "0.3s" }}> 
              <h3
                className="fade-in mx-4 text-white font-geist text-[1.25rem] sm:text-[1.375rem]"
                style={{ textShadow: "0 0 0.9375rem rgba(255, 255, 255, 0.75)", animationDelay: "0.4s" }}
              >
                <ShinyText text="MCF Institutional Intelligence Suite" disabled={false} speed={3} className='custom-class' />
              </h3>
              <hr className="slide-up w-full border-t left-0 border-white/20 my-2" style={{ animationDelay: "0.4s" }} />
              <p className="fade-in-up mx-4 font-poppins text-sm sm:text-base font-light text-white/60 leading-snug" style={{ animationDelay: "0.5s" }}>
                Best for large institution and professionals
              </p>
              <div className="scale-in mx-4 my-1 sm:my-3 flex items-center" style={{ animationDelay: "0.5s" }}>
                <span
                  className="price-bounce-2 text-white font-poppins text-[2rem] sm:text-[2.25rem]"
                  style={{ textShadow: "0 0 0.9375rem rgba(255, 255, 255, 0.75)" }}
                >
                  <ShinyText text="$9,450" disabled={false} speed={2} className='custom-class' />
                </span>
                <span className="fade-in ml-2 font-poppins text-[#5d6bc3] text-[0.65rem] sm:text-[0.875rem] font-regular" style={{ animationDelay: "0.6s" }}>
                  billed monthly <br /> other billing options available
                </span>
              </div>
              <div className="fade-in-up mb-2 lg:mb-6 mt-2 w-full flex justify-left" style={{ animationDelay: "0.7s" }}>
                <HighlightButton width="100%" className="sm:max-w-[23rem] mx-4"
                href="https://calendly.com/marketmakermax/next-steps-with-mcf">
                  <span className="font-medium">Apply</span>
                </HighlightButton>
              </div>
            </div>

            {/* WHAT YOU'LL GET Section */}
            <div className="fade-in-up sm:ml-4 mt-4 xl:mt-4 flex-grow flex flex-col justify-start" style={{ animationDelay: "0.7s" }}>
              <h4 className="fade-in uppercase font-poppins text-[1.125rem] md:text-[1.25rem] font-medium text-white/60 mb-2 xs:mb-4 tracking-wide" style={{ animationDelay: "0.7s" }}>
                WHAT YOU&apos;LL GET:
              </h4>
              <ul className="slide-up ml-2 flex flex-col gap-3 lg:gap-5 stagger-children" style={{ animationDelay: "0.8s" }}>
                <li className="fade-in-up flex items-center">
                  <CheckCheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-extrabold text-white/70">
                    Trading Strategy Program
                  </span>
                </li>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    Institutional Risk Management Tools
                  </span>
                </li>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    Scalable Technology Solutions
                  </span>
                </li>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    Institutional Grade Reporting
                  </span>
                </li>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    Expert strategic guidance
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="relative flex flex-col sm:flex-row xl:flex-col backdrop-blur-[10px] rounded-[1.5625rem] w-full xl:max-w-[29rem] mx-auto xl:mx-0 h-auto xl:h-[40rem] p-4 xl:pb-8"
            style={{
              background:
                "radial-gradient(200% 200% at 50% 10%, rgba(0, 0, 0, 1) 24%, rgba(110, 61, 23, 0.75) 50%)",
              border: "1px solid #574029",
              boxShadow:
                "0px 0px 2rem 0.5rem rgba(0, 0, 0, 0.5), 0px 0px 2rem 0rem rgba(255, 132, 0, 0.5)",
            }}
          >
            {/* Inner Content Card */}
            <div className="fade-in-up bg-[#5e3b2053] backdrop-blur-sm rounded-[1.5625rem] py-2 flex flex-col items-start xl:mb-6 sm:max-w-[22rem] sm:min-w-[22rem] xl:max-w-[25.250rem]" style={{ animationDelay: "0.1s" }}>
              <h3
                className="fade-in mx-4 text-white font-geist text-[1.25rem] sm:text-[1.375rem]"
                style={{ textShadow: "0 0 0.9375rem rgba(255, 255, 255, 0.75)", animationDelay: "0.2s" }}
              >
                <ShinyText text="90 Day - Trading Strategy Program" disabled={false} speed={3} className='custom-class' />
              </h3>
              <hr className="slide-up w-full border-t left-0 border-white/20 my-2" style={{ animationDelay: "0.3s" }} />
              <p className="fade-in-up mx-4 font-poppins text-sm sm:text-base font-light text-white/60 leading-snug" style={{ animationDelay: "0.4s" }}>
                Best for beginner and intermediate traders
              </p>
              <div className="scale-in mx-4 my-1 sm:my-3 flex items-center" style={{ animationDelay: "0.4s" }}>
                <span
                  className="price-bounce-3 text-white font-poppins text-[2rem] sm:text-[2.25rem]"
                  style={{ textShadow: "0 0 0.9375rem rgba(255, 255, 255, 0.75)" }}
                >
                  <ShinyText text="$5,000" disabled={false} speed={2} className='custom-class' />
                </span>
                <span className="fade-in ml-2 font-poppins text-[#875E46] text-[0.65rem] md:text-[0.875rem] font-regular" style={{ animationDelay: "0.5s" }}>
                  one time payment
                  <br />
                  other billing options available
                </span>
              </div> 
              <div className="fade-in-up mb-2 lg:mb-6 mt-2 w-full flex justify-left" style={{ animationDelay: "0.6s" }}>
                <GlowButton
                  width="100%"
                  className="sm:max-w-[23rem] mx-4"
                  href="https://calendly.com/marketmakermax/next-steps-with-mcf"
                >
                  Book a call
                </GlowButton>
              </div>
            </div>

            {/* WHAT YOU'LL GET Section */}
            <div className="fade-in-up sm:ml-4 mt-4 xl:mt-4 flex-grow flex flex-col justify-start" style={{ animationDelay: "0.6s" }}>
              <h4 className="fade-in uppercase font-poppins text-[1.125rem] md:text-[1.25rem] font-medium text-white/60 mb-2 xs:mb-4 tracking-wide" style={{ animationDelay: "0.7s" }}>
                WHAT YOU&apos;LL GET:
              </h4>
              <ul className="slide-up ml-2 flex flex-col gap-3 lg:gap-5 stagger-children" style={{ animationDelay: "0.7s" }}>
                <li className="fade-in-up flex items-center">
                  <CheckCheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-extrabold text-white/70">
                    MCF Signals Access
                  </span>
                </li>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    One-on-One Weekly Mentorship
                  </span>
                </li>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    Complete Technical Curriculum
                  </span>
                </li>
                <li className="fade-in-up flex items-center">
                  <CheckIcon />
                  <span className="ml-3 font-poppins text-[0.875rem] lg:text-[1rem] font-light text-white/60">
                    Lifetime Learning Resources
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="fade-in-up relative text-center flex flex-col items-center gap-4 lg:gap-[1.5625rem] mt-12 lg:mt-16 px-4 text-shadow-xl" style={{ animationDelay: "0.8s" }}>
          <h2 
            className="fade-in text-white text-[1.6rem] sm:text-[2rem] lg:text-[2.25rem] font-normal leading-none"
            style={{textShadow: "0px 0px 0.5rem rgba(255, 255, 255, 0.75), 0px 0px 1.875rem rgba(255, 255, 255, 0.73)", fontFamily: "var(--font-monda)", animationDelay: "0.9s"}}
          >
            Which Solution Should I Choose?
          </h2>
          <p 
            className="fade-in-up text-white/75 text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] max-w-[90%] sm:max-w-[40rem] lg:max-w-[50rem] tracking-[-0.04em] sm:tracking-[0.04em] mt-2 mx-auto"
            style={{ 
              fontFamily: "var(--font-poppins), sans-serif", 
              lineHeight: 1.4, 
              fontWeight: 200,
              animationDelay: "0.9s"
            }}
          >
            If you don&apos;t know which product to choose lets get on a call! Well get you through our offer blah blah blah!
          </p>
          <div className="scale-in w-full" style={{ animationDelay: "1s" }}>
            <GlowButton
              width="100%"
              className="max-w-[22.5rem] mb-24"
              href="https://calendly.com/marketmakermax/next-steps-with-mcf"
            >
              Book a call
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
