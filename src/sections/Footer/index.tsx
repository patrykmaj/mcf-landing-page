import React from "react";
import Image from "next/image";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="relative z-10 overflow-hidden w-full flex items-end justify-end"
    >
        {/* Main Content Container - Centered */}
        <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-[18.75rem] min-h-[20.4375rem]">
          {/* Content Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full justify-between">
            {/* Left Column - Logo and Disclaimer */}
            <div className="col-span-2   flex flex-col lg:w-auto w-full lg:max-w-[39.333rem] gap-2 md:gap-8 lg:gap-[3.8125rem]">
              {/* Logo */}
              <div className="w-full max-w-[39.375rem] h-[3.5625rem]">
                <Image
                  src="/images/footer-logo.png"
                  alt="MCF Logo"
                  width={629}
                  height={57}
                  className="w-full h-full object-contain invert saturate-0"
                  priority
                />
              </div>

              {/* Disclaimer Text */}
              <div className="w-full lg:max-w-[39.375rem]">
                <p className="font-poppins text-black font-light text-[0.6rem] sm:text-[0.75rem] leading-[1.2] text-justify">
                  <span className="font-bold">DISCLAIMER:</span> Earnings and income representations made by Maximus Fay, and MCF Enterprise and their advertisers/sponsors are aspirational statements only of your earnings potential. These results are not typical and results will vary. The results on this page are OUR results and from years of testing. We can in NO way guarantee you will get similar results. If you&apos;re not willing to accept that, please <span className="font-bold">LEAVE THIS SITE.</span>
                </p>
              </div>
            </div>

            {/* Middle Column - Contact Us */}
            <div className="col-span-2 sm:col-span-1  flex flex-col w-full max-w-[18.75rem] gap-4 lg:gap-[6rem]">
              {/* Section Header */}
              <h3 className="font-geist text-black font-semibold text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] leading-none">
                Contact Us
              </h3>

              {/* Address */}
              <div className="flex flex-col w-full max-w-[31.25rem] gap-2">
                <p className="font-poppins text-[#191919] font-light text-[0.75rem] md:text-[1rem] leading-none">
                  800 Third Avenue FRNT A #1116
                </p>
                <p className="font-poppins text-[#191919] font-light text-[0.75rem] md:text-[1rem] leading-none">
                  New York, NY 10022
                </p>
                <p className="font-poppins text-[#191919] font-light text-[0.75rem] md:text-[1rem] leading-none">
                  United States
                </p>
              </div>
            </div>

            {/* Right Column - Terms & Conditions */}
            <div className="  flex flex-col w-full max-w-[18.75rem] gap-4 lg:gap-[6rem]">
              {/* Section Header */}
              <h3 className="font-geist text-black font-semibold text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]  leading-none">
                Terms & Conditions
              </h3>

              {/* Links */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://docs.google.com/document/d/1ktIl6uEPdZonn-reSF7Z7QgzqDJuzxqUgbLMCAXEFoo/mobilebasic"
                  className="font-poppins text-[#191919] font-light text-[0.75rem] md:text-[1rem] leading-none hover:opacity-70 transition-opacity"
                >
                  Earnings Disclaimer
                </a>
                <a
                  href="https://docs.google.com/document/d/15u5MyBpGa8PNRUvRAq484EskxyHCzwcwNkdVqoiDHZ0/mobilebasic"
                  className="font-poppins text-[#191919] font-light text-[0.75rem] md:text-[1rem] leading-none hover:opacity-70 transition-opacity"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://docs.google.com/document/d/1oUfJic6CfMYXsJ6imUWxLNwbD8JPKPZxPmNAIIv3M0g/mobilebasic"
                  className="font-poppins text-[#191919] font-light text-[0.75rem] md:text-[1rem] leading-none hover:opacity-70 transition-opacity"
                >
                  Terms Of Service
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Text */}
          <div className="text-center mt-20 w-full">
            <p className="font-poppins text-[#191919] font-extralight text-[1rem] text-center">
              Copyright &copy; MCF ENTERPRISE {currentYear}. <span className="font-bold"> All rights reserved.</span>
            </p>
          </div>
        </div>
    </section>
  );
};

export default FooterSection;
