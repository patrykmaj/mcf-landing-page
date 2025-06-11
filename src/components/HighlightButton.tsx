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
      className={` inline-flex px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 rounded-full text-[1rem] lg:text-[1.25rem] font-normal relative transition-all duration-150 bg-gradient-to-r from-[#71b6ff] via-white to-[#71b6ff] animate-gradient-x text-center justify-center items-center whitespace-nowrap hover:scale-105 ${className}`}
      style={{
        fontFamily: "var(--font-geist-sans), var(--font-poppins), sans-serif",
        fontWeight: 400,
        boxShadow: "0 0 6.25rem 0 #9fc4ff85,0 0 0.625rem 0 #54b2ff65",
        background: "linear-gradient(-45deg, #71b6ff 0%, #fff 50%, #71b6ff 100%)",
        backgroundSize: "200% 200%",
        width: width,
        ...style,
      }}
      tabIndex={tabIndex}
      aria-hidden={ariaHidden}
      {...props}
    >
      {children}
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ boxShadow: "0 0 0.75rem 0.125rem #fff3" }}
      />
    </a>
  );
};

export default HighlightButton;
