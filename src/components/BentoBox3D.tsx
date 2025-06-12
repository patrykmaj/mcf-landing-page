"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { SpringOptions } from "framer-motion";

interface BentoBox3DProps {
  gradientDirection?: string;
  bgAnimationSrc?: string;
  bgVideoSrc?: string;
  subtitle: string;
  title: string;
  size?: string;
  children?: React.ReactNode;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

const springValues: SpringOptions = {
  damping: 25,
  stiffness: 120,
  mass: 1,
};

const BentoBox3D: React.FC<BentoBox3DProps> = ({
  gradientDirection = "circle at center",
  bgAnimationSrc,
  bgVideoSrc,
  subtitle,
  title,
  size = "",
  children,
  rotateAmplitude = 12,
  scaleOnHover = 1.02,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  
  // Parallax offset values for each layer
  const backgroundX = useSpring(useMotionValue(0), springValues);
  const backgroundY = useSpring(useMotionValue(0), springValues);
  const gradientX = useSpring(useMotionValue(0), springValues);
  const gradientY = useSpring(useMotionValue(0), springValues);
  const contentX = useSpring(useMotionValue(0), springValues);
  const contentY = useSpring(useMotionValue(0), springValues);
  const titleX = useSpring(useMotionValue(0), springValues);
  const titleY = useSpring(useMotionValue(0), springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    // Perspective rotation
    const rotationY = offsetX * rotateAmplitude;
    const rotationX = -offsetY * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    // Parallax offsets - each layer moves differently to create depth illusion
    // Background (furthest) moves least
    backgroundX.set(offsetX * -20);
    backgroundY.set(offsetY * -20);
    
    // Gradient (middle) moves moderately
    gradientX.set(offsetX * 1);
    gradientY.set(offsetY * 1);
    
    // Content container moves more
    contentX.set(offsetX * 6);
    contentY.set(offsetY * 6);
    
    // Title (closest) moves most
    titleX.set(offsetX * 4);
    titleY.set(offsetY * 4);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    
    // Reset all parallax offsets
    backgroundX.set(0);
    backgroundY.set(0);
    gradientX.set(0);
    gradientY.set(0);
    contentX.set(0);
    contentY.set(0);
    titleX.set(0);
    titleY.set(0);
  }

  return (
    <div className={`[perspective:800px] ${size}`}>
      <motion.div
        ref={ref}
        className="relative rounded-[1.5625rem] overflow-hidden p-4 flex flex-col justify-end min-h-[30rem] h-[30rem] shadow-xl bento-box"
        style={{
          scale,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      {/* Background Video Layer - Furthest back (moves least) */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
      >
        {bgVideoSrc && (
          <video
            src={bgVideoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-8 left-0 w-full object-contain pointer-events-none"
          />
        )}
        {bgAnimationSrc && !bgVideoSrc && (
          <Image
            src={bgAnimationSrc}
            alt="Background animation"
            fill
            className="object-cover opacity-40 pointer-events-none"
          />
        )}
      </motion.div>

      {/* Gradient Layer - Middle (moves moderately) */}
      <motion.div 
        className="absolute inset-0 z-5"
        style={{
          background: `radial-gradient(${gradientDirection}, rgba(0, 0, 0, 0.00) 28%, rgba(4, 9, 99, 0.9) 41%, rgba(34, 55, 195, 0.8) 44%, rgb(255, 255, 255) 51%)`,
          border: "1px solid #0b0d22",
          x: gradientX,
          y: gradientY,
        }}
      />

      {/* Content Layer - Closest (moves most) */}
      <motion.div 
        className="relative z-10"
        style={{
          x: contentX,
          y: contentY,
        }}
      >
        <motion.div
          className="mb-2 font-medium uppercase text-[0.9rem] sm:text-[1rem]"
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            color: '#3D4577',
            textShadow: '0 0 1rem rgb(0, 0, 0)',
          }}
        >
          {subtitle}
        </motion.div>
        <motion.div
          className="text-[1.25rem] font-light sm:text-[1.375rem] xl:text-[1.625rem] text-white tracking-tight"
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            lineHeight: 1.2,
            color: '#fff',
            x: titleX,
            y: titleY,
          }}
        >
          {title}
        </motion.div>
        {children && (
          <motion.div 
            className="text-[1rem] text-blue-100 mt-1"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
    </div>
  );
};

export default BentoBox3D;
