import React from "react";

interface GlowButtonProps {
  href?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  ariaHidden?: boolean;
  children: React.ReactNode;
  glowColor?: string; // Added glowColor prop
}

const GlowButton: React.FC<GlowButtonProps> = ({
  href = "#",
  width = "180px",
  className,
  style = {},
  tabIndex = -1,
  ariaHidden = true,
  children,
  glowColor, // Destructure glowColor
  ...props
}) => {
  // Default shadow values
  let currentBoxShadow = "0 0 48px #ffffff2d, 0 0 24px #ffffff36 inset";
  let currentTextShadow = "0 0 20px #ffffff";

  // If glowColor is provided, override shadows
  if (glowColor) {
    // Attempt to derive a suitable opacity for boxShadow if glowColor is hex/rgb
    // For simplicity, using a fixed opacity. Adjust if more complex logic is needed.
    let boxShadowColor = glowColor;
    if (glowColor.startsWith('#') && glowColor.length === 7) {
      boxShadowColor = `${glowColor}70`; // Append 70 for ~44% opacity
    } else if (glowColor.startsWith('rgb(')) {
      boxShadowColor = glowColor.replace('rgb(', 'rgba(').replace(')', ', 0.44)');
    } else if (glowColor.startsWith('rgba(')) {
      // If rgba, assume opacity is already set, or use it as is
      boxShadowColor = glowColor;
    }
    currentBoxShadow = `0 0 48px ${boxShadowColor}, 0 0 8px ${boxShadowColor}inset`;
    currentTextShadow = `0 0 20px ${glowColor}`;
  }

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-white/0 border border-white/75 text-white/85 text-[1rem] lg:text-[1.125rem] shadow-lg hover:bg-white/5 transition-all duration-150 tracking-wide py-1.5 sm:py-2 hover:scale-105 ${className}`}
      style={{
        fontFamily: "var(--font-poppins), sans-serif",
        letterSpacing: "0.02em",
        fontWeight: 400,
        boxShadow: currentBoxShadow, // Use dynamic boxShadow
        textShadow: currentTextShadow, // Use dynamic textShadow
        width: width,
        ...style,
      }}
      tabIndex={tabIndex}
      aria-hidden={ariaHidden}
      {...props}
    >
      {children}
    </a>
  );
};

export default GlowButton;
