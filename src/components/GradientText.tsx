import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string;
  animationSpeed?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  colors = "from-blue-500 via-white to-blue-500",
  animationSpeed = "2s",
}) => {
  return (
    <span
      className={`
        inline-block text-transparent bg-clip-text bg-gradient-to-r ${colors}
        animate-gradient-x
        ${className}
      `}
      style={{
        animationDuration: animationSpeed,
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;
