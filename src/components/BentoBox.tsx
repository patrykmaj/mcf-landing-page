import React from "react";

interface BentoBoxProps {
  gradientDirection?: string; // e.g. 'to-br', 'to-tl', etc.
  bgAnimationSrc?: string; // URL or local path to animation/image
  bgVideoSrc?: string; // URL or local path to video animation
  subtitle: string;
  title: string;
  size?: string; // e.g. 'col-span-2', 'row-span-1', etc.
  children?: React.ReactNode;
}

const BentoBox: React.FC<BentoBoxProps> = ({
  gradientDirection = "to-br",
  bgAnimationSrc,
  bgVideoSrc,
  subtitle,
  title,
  size = "",
  children,
}) => {
  return (
    <div
      className={`relative rounded-[25px] overflow-hidden p-4 flex flex-col justify-end min-h-[480px] h-[480px] shadow-xl bento-box ${size} z-10`}
    >
      {bgVideoSrc && (
        <video
          src={bgVideoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-8 left-0 w-full  object-contain pointer-events-none z-0"
        />
      )}
      <div 
        className="absolute inset-0 z-5"
        style={{
          background: `radial-gradient(${gradientDirection}, rgba(0, 0, 0, 0.00) 28%, rgba(4, 9, 99, 0.478)35%, rgba(99, 116, 225, 0.611) 45%,rgb(255, 255, 255) 50%) `,
          border: "1px solid #0b0d22",
        }}
      />
      {bgAnimationSrc && !bgVideoSrc && (
        <img
          src={bgAnimationSrc}
          alt="Background animation"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none z-0"
        />
      )}
      <div className="relative z-10">
        <div
          className="mb-2  uppercase text-[16px]"
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            fontWeight: 500,
            color: '#3D4577',
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            fontWeight: 300,
            lineHeight: 1.2,
            fontSize: 26,
            color: '#fff',
          }}
        >
          {title}
        </div>
        {children && <div className="text-sm text-blue-100 mt-1">{children}</div>}
      </div>
    </div>
  );
};

export default BentoBox;
