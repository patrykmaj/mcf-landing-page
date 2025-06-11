import React from "react";
import Image from "next/image";

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
      className={`relative rounded-[1.5625rem] overflow-hidden p-4 flex flex-col justify-end min-h-[30rem] h-[30rem] shadow-xl bento-box ${size} z-10`}
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
          background: `radial-gradient(${gradientDirection}, rgba(0, 0, 0, 0.00) 28%, rgba(4, 9, 99, 0.9)41%, rgba(34, 55, 195, 0.8) 44%,rgb(255, 255, 255) 51%) `,
          border: "1px solid #0b0d22",
        }}
      />
      {bgAnimationSrc && !bgVideoSrc && (
        <Image
          src={bgAnimationSrc}
          alt="Background animation"
          fill
          className="object-cover opacity-40 pointer-events-none z-0"
        />
      )}
      <div className="relative z-10">
        <div
            className="mb-2 font-medium uppercase text-[0.9rem] sm:text-[1rem]"
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            color: '#3D4577',
            textShadow: '0 0 1rem rgb(0, 0, 0)',
          }}
        >
          {subtitle}
        </div>
        <div
        className="text-[1.25rem] font-light sm:text-[1.375rem] xl:text-[1.625rem] text-white tracking-tight "
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            lineHeight: 1.2,
            color: '#fff',
          }}
        >
          {title}
        </div>
        {children && <div className="text-[1rem] text-blue-100 mt-1">{children}</div>}
      </div>
    </div>
  );
};

export default BentoBox;
