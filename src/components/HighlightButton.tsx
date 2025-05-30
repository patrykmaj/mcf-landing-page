import React from "react";

interface HighlightButtonProps {
  href?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  ariaHidden?: boolean;
  children: React.ReactNode;
}

const HighlightButton: React.FC<HighlightButtonProps> = ({
  href = "#book",
  width,
  height,
  className = "",
  style = {},
  tabIndex = -1,
  ariaHidden = true,
  children,
  ...props
}) => {
  return (
    <a
      href={href}
      className={`inline-flex px-10 py-2 rounded-full text-[20px]  font-normal shadow-xl relative transition-all duration-150 bg-gradient-to-r from-[#71b6ff] via-white to-[#71b6ff] text-center justify-center items-center ${className}`}
      style={{
        fontFamily: "var(--font-geist-sans), var(--font-poppins), sans-serif",
        fontWeight: 400,
        boxShadow: "0 0 100px 0 #9fc4ff85,0 0 10px 0 #54b2ff65",
        background: "linear-gradient(-45deg, #71b6ff 0%, #fff 50%, #71b6ff 100%)",
        width: width,
        height: height,
        ...style,
      }}
      tabIndex={tabIndex}
      aria-hidden={ariaHidden}
      {...props}
    >
      {children}
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ boxShadow: "0 0 12px 2px #fff3" }}
      />
    </a>
  );
};

export default HighlightButton;
