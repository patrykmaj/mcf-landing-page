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
  className,
  style = {},
  tabIndex = -1,
  ariaHidden = true,
  children,
  ...props
}) => {
  return (
    <a
      href={href}
      className={`highlight-button inline-flex px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 rounded-full text-[1rem] lg:text-[1.25rem] font-normal shadow-xl relative transition-all duration-300 bg-gradient-to-r from-[#71b6ff] via-white to-[#71b6ff] animate-gradient-x text-center justify-center items-center whitespace-nowrap hover:scale-105 ${className}`}
      style={{
        fontFamily: "var(--font-geist-sans), var(--font-poppins), sans-serif",
        fontWeight: 400,
        width: width,
        ...style,
      }}
      tabIndex={tabIndex}
      aria-hidden={ariaHidden}
      {...props}
    >
      {children}
      <span
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-300 opacity-0 hover:opacity-100"
        style={{ boxShadow: "inset 0 0 2rem 0.5rem #ffffff44" }}
      />
    </a>
  );
};

export default HighlightButton;
