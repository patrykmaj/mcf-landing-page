import React from "react";

const FooterBackground = () => {
  return (
    <div
      className="absolute bottom-0 left-0 w-full z-0 pointer-events-none max-h-[1600px]"
      style={{
        height: "150vh",
        background: `radial-gradient(220% 150% at 50% -40%, rgba(0, 0, 0, 0.00) 35%, #000470 50%, #761C9D 57%, #FF8C2E 67%, #FFD5AB 72%, #FFF7E9 75%)`,
      }}
    />
  );
};

export default FooterBackground;
