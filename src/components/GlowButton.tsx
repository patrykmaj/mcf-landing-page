"use client";

import React, { useRef, useCallback } from "react";

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
  ...props
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    buttonRef.current.style.setProperty('--mouse-x', `${x}%`);
    buttonRef.current.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`glow-button inline-flex items-center justify-center rounded-full bg-white/0 border border-white/75 text-white/85 text-[1rem] lg:text-[1.125rem] shadow-lg hover:bg-white/10 transition-all duration-500 tracking-wide py-1.5 sm:py-2 hover:scale-105 hover:border-white/90 ${className}`}
      style={{
        fontFamily: "var(--font-poppins), sans-serif",
        letterSpacing: "0.02em",
        fontWeight: 400,
        width: width,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      tabIndex={tabIndex}
      aria-hidden={ariaHidden}
      {...props}
    >
      {children}
    </a>
  );
};

export default GlowButton;
