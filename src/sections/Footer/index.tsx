import React from "react";
import Image from "next/image";

const FooterSection = () => {
  return (
    <section
      id="footer"
      className="relative z-10 overflow-hidden w-full  flex items-end justify-end"
    >
        {/* Main Content Container - Centered */}
        <div
          className="max-w-[1440px] w-full mx-auto px-4 pb-6 pt-[300px]"
          style={{
            minHeight: "327px",
          }}
        >
          {/* Content Grid */}
          <div className="flex gap-24 w-full justify-between">
            {/* Left Column - Logo and Disclaimer */}
            <div
              className="flex flex-col"
              style={{
                width: "100%",
                maxWidth: "629.33px",
                gap: "61px",
              }}
            >
              {/* Logo */}
              <div
                className="w-full"
                style={{
                  maxWidth: "630px",
                  height: "57px",
                }}
              >
                <Image
                  src="/images/footer-logo.png"
                  alt="MCF Logo"
                  width={629}
                  height={57}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Disclaimer Text */}
              <div
                className="w-full"
                style={{
                  maxWidth: "630px",
                }}
              >
                <p
                  className="font-poppins text-[#000000]"
                  style={{
                    fontWeight: 300,
                    fontSize: "20px",
                    lineHeight: "1.2em",
                    textAlign: "justify",
                  }}
                >
                  <span style={{fontWeight: "700"}}>DISCLAIMER:</span> Earnings and income representations made by Maximus Fay, and MCF Enterprise and their advertisers/sponsors are aspirational statements only of your earnings potential. These results are not typical and results will vary. The results on this page are OUR results and from years of testing. We can in NO way guarantee you will get similar results. If you're not willing to accept that, please <span style={{fontWeight: "700"}}>LEAVE THIS SITE.</span>
                </p>
              </div>
            </div>

            {/* Middle Column - Contact Us */}
            <div
              className="flex flex-col "
              style={{
                top: "0px",
                width: "100%",
                maxWidth: "300px",
                gap: "96px",
              }}
            >
              {/* Section Header */}
              <h3
                className="font-geist text-[#000000]"
                style={{
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "1em",
                }}
              >
                Contact Us
              </h3>

              {/* Address */}
              <div 
                className="flex flex-col"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  gap: "24px",
                }}
              >
                <p
                  className="font-poppins text-[#191919]"
                  style={{
                    fontWeight: 300,
                    fontSize: "20px",
                    lineHeight: "1em",
                  }}
                >
                  800 Third Avenue FRNT A #1116
                </p>
                <p
                  className="font-poppins text-[#191919]"
                  style={{
                    fontWeight: 300,
                    fontSize: "20px",
                    lineHeight: "1em",
                  }}
                >
                  New York, NY 10022
                </p>
                <p
                  className="font-poppins text-[#191919]"
                  style={{
                    fontWeight: 300,
                    fontSize: "20px",
                    lineHeight: "1em",
                  }}
                >
                  United States
                </p>
              </div>
            </div>

            {/* Right Column - Terms & Conditions */}
            <div
              className="flex flex-col "
              style={{
                top: "0px",
                width: "100%",
                maxWidth: "300px",
                gap: "96px",
              }}
            >
              {/* Section Header */}
              <h3
                className="font-geist text-[#000000]"
                style={{
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "1em",
                }}
              >
                Terms & Conditions
              </h3>

              {/* Links */}
              <div 
                className="flex flex-col"
                style={{
                  gap: "24px",
                }}
              >
                <a
                  href="https://docs.google.com/document/d/1ktIl6uEPdZonn-reSF7Z7QgzqDJuzxqUgbLMCAXEFoo/mobilebasic"
                  className="font-poppins text-[#191919] hover:opacity-70 transition-opacity"
                  style={{
                    fontWeight: 300,
                    fontSize: "20px",
                    lineHeight: "1em",
                  }}
                >
                  Earnings Disclaimer
                </a>
                <a
                  href="https://docs.google.com/document/d/15u5MyBpGa8PNRUvRAq484EskxyHCzwcwNkdVqoiDHZ0/mobilebasic"
                  className="font-poppins text-[#191919] hover:opacity-70 transition-opacity"
                  style={{
                    fontWeight: 300,
                    fontSize: "20px",
                    lineHeight: "1em",
                  }}
                >
                  Privacy Policy
                </a>
                <a
                  href="https://docs.google.com/document/d/1oUfJic6CfMYXsJ6imUWxLNwbD8JPKPZxPmNAIIv3M0g/mobilebasic"
                  className="font-poppins text-[#191919] hover:opacity-70 transition-opacity"
                  style={{
                    fontWeight: 300,
                    fontSize: "20px",
                    lineHeight: "1em",
                  }}
                >
                  Terms Of Service
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Text */}
          <div
            className="text-center mt-20"
            style={{
              width: "100%",
            }}
          >
            <p
              className="font-poppins text-[#191919]"
              style={{
                fontWeight: 200,
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Copyright © MCF ENTERPRISE 2025. <span style={{fontWeight: "700"}}> All rights reserved.</span>
            </p>
          </div>
        </div>
    </section>
  );
};

export default FooterSection;
