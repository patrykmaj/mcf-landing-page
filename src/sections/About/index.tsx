"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const SCROLL_TEXTS = [
  {
    title: "True Multi-Confirmation Logic",
    description:
      "Only trades that pass structure, volume, and volatility filters are executed-eliminating false positives.",
  },
  {
    title: "Adaptive, Data-Driven Risk Controls",
    description:
      "Dynamic stop-losses and position sizing adjust in real time to market conditions.",
  },
  {
    title: "Institutional-Grade Transparency",
    description:
      "Full auditability and data-rich dashboards for every signal and trade.",
  },
  {
    title: "Continuous Strategy Evolution",
    description:
      "Algorithms are regularly updated and optimized for changing market regimes.",
  },
  {
    title: "Proven Results",
    description:
      "Documented performance, robust testing, and a thriving community of advanced traders.",
  },
];

const AboutSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastFrameRef = useRef<number>(0);
  
  // Enhanced momentum scrolling variables
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const velocityRef = useRef<number>(0);
  const lastScrollTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastTargetFrameRef = useRef<number>(1);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [sectionActive, setSectionActive] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalFrames = 168;

  // Smooth text transition function
  const transitionToText = useCallback((newIndex: number) => {
    if (newIndex === currentTextIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Fade out current text
    setTextOpacity(0);
    
    // After fade out, change text and fade in
    setTimeout(() => {
      setCurrentTextIndex(newIndex);
      setTimeout(() => {
        setTextOpacity(1);
        setIsTransitioning(false);
      }, 25); // Small delay to ensure text change happens
    }, 150); // Duration matches CSS transition
  }, [currentTextIndex, isTransitioning]);

  const getImageName = (index: number) =>
    `/frames/frame_${index.toString().padStart(4, "0")}.jpg`;

  const updateImage = useCallback((index: number) => {
    if (!contextRef.current || !canvasRef.current) return;
    if (lastFrameRef.current === index) return; // Don't redraw same frame

    const img = new Image();
    img.src = getImageName(index);
    img.onload = () => {
      if (contextRef.current && canvasRef.current) {
        contextRef.current.drawImage(
          img,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        lastFrameRef.current = index;
      }
    };
  }, []);

  // Enhanced smooth animation with improved linear momentum
  const animateFrame = useCallback(() => {
    const currentFrame = currentFrameRef.current;
    const targetFrame = targetFrameRef.current;
    const velocity = velocityRef.current;
    const isScrolling = isScrollingRef.current;

    // Enhanced stop conditions for better momentum continuation
    const distanceToTarget = Math.abs(targetFrame - currentFrame);
    const isNearTarget = distanceToTarget < 0.3;
    const isLowVelocity = Math.abs(velocity) < 0.1;
    const shouldStop = isNearTarget && isLowVelocity && !isScrolling;

    if (shouldStop) {
      currentFrameRef.current = targetFrame;
      updateImage(Math.round(targetFrame));
      animationFrameRef.current = null;
      return;
    }

    // Enhanced linear momentum system
    const distance = targetFrame - currentFrame;
    
    // Different behavior when actively scrolling vs momentum phase
    if (isScrolling) {
      // During active scrolling: responsive movement with slight momentum
      const responsiveEase = 0.25; // More responsive when actively scrolling
      const momentumDamping = 0.8; // Maintain some momentum
      
      const easingForce = distance * responsiveEase;
      velocityRef.current = velocityRef.current * momentumDamping + easingForce;
    } else {
      // During momentum phase: pure linear decay for smooth continuation
      const momentumDecay = 0.88; // Slower decay for longer momentum
      const minMomentumEase = 0.05; // Minimal target attraction during momentum
      
      // Apply very gentle target attraction to prevent drift
      const gentleEasing = distance * minMomentumEase;
      velocityRef.current = velocityRef.current * momentumDecay + gentleEasing;
    }

    // Update current frame with velocity
    currentFrameRef.current += velocityRef.current;

    // Clamp to valid frame range
    currentFrameRef.current = Math.max(1, Math.min(totalFrames, currentFrameRef.current));

    // Update the canvas
    updateImage(Math.round(currentFrameRef.current));

    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animateFrame);
  }, [totalFrames, updateImage]);

  // Start smooth animation if not already running
  const startSmoothAnimation = useCallback(() => {
    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(animateFrame);
    }
  }, [animateFrame]);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const currentTime = performance.now();

    // Calculate section boundaries
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;
    const sectionHeight = rect.height;

    // Animation starts when section top hits bottom of viewport
    // Animation ends when section bottom hits top of viewport
    const isScrollAnimationActive =
      sectionTop <= windowHeight && sectionBottom >= 0;

    if (isScrollAnimationActive) {
      setSectionActive(true);

      // Mark as actively scrolling
      isScrollingRef.current = true;

      // Clear any existing scroll timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150); // Detect scroll stop after 150ms of no scroll events

      // Calculate scroll progress through the animation range (0 to 1)
      // Progress is based on how much the section has moved through the viewport
      const totalScrollDistance = sectionHeight + windowHeight;
      const currentScrollDistance = windowHeight - sectionTop;
      const scrollProgress = Math.max(
        0,
        Math.min(1, currentScrollDistance / totalScrollDistance)
      );

      // Calculate video opacity with gradual fade in/out
      let opacity = 0;
      const fadeInEnd = 0.15; // Fade in complete at 15% scroll
      const fadeOutStart = 0.90; // Fade out starts at 85% scroll
      
      if (scrollProgress <= fadeInEnd) {
        // Fade in phase
        opacity = scrollProgress / fadeInEnd;
      } else if (scrollProgress >= fadeOutStart) {
        // Fade out phase
        opacity = (1 - scrollProgress) / (1 - fadeOutStart);
      } else {
        // Fully visible phase
        opacity = 1;
      }
      
      setVideoOpacity(Math.max(0, Math.min(1, opacity)));

      // Calculate target frame based on scroll progress
      const newTargetFrame = Math.min(
        totalFrames,
        Math.max(1, Math.ceil(scrollProgress * totalFrames))
      );

      // Enhanced velocity calculation for better momentum
      const frameDistance = newTargetFrame - lastTargetFrameRef.current;
      const timeDelta = currentTime - lastScrollTimeRef.current;
      
      if (timeDelta > 0 && timeDelta < 100) { // Only if reasonable time delta
        // Calculate instantaneous velocity with enhanced smoothing
        const rawVelocity = frameDistance / Math.max(timeDelta / 16, 1);
        
        // Apply velocity smoothing and scaling for natural feel
        const velocityScale = 0.4; // Scale down for smoother momentum
        const smoothedVelocity = rawVelocity * velocityScale;
        
        // Blend with existing velocity for smoother transitions
        const velocityBlending = 0.3;
        velocityRef.current = velocityRef.current * (1 - velocityBlending) + smoothedVelocity * velocityBlending;
      }

      // Update target frame and tracking
      targetFrameRef.current = newTargetFrame;
      lastTargetFrameRef.current = newTargetFrame;
      lastScrollTimeRef.current = currentTime;

      // Start smooth animation
      startSmoothAnimation();

      // Text logic - divide scroll into segments for each text with smooth transitions
      const textIndex = Math.floor(scrollProgress * SCROLL_TEXTS.length);
      const clampedTextIndex = Math.min(textIndex, SCROLL_TEXTS.length - 1);

      // Use smooth transition function instead of direct state update
      if (clampedTextIndex !== currentTextIndex) {
        transitionToText(clampedTextIndex);
      }

      // Show text when in middle portion of scroll with smooth opacity
      const showTextRange = scrollProgress > 0.1 && scrollProgress < 0.99;
      if (showTextRange && !showText) {
        setShowText(true);
        setTimeout(() => setTextOpacity(1), 100); // Delayed fade in for luxury feel
      } else if (!showTextRange && showText) {
        setTextOpacity(0);
        setTimeout(() => setShowText(false), 300); // Fade out before hiding
      }

    } else {
      setSectionActive(false);
      setShowText(false);
      setVideoOpacity(0);
      setTextOpacity(0);
      setIsTransitioning(false);
      isScrollingRef.current = false;
      
      // Clear scroll timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      
      // Stop animation when section is not active
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }
  }, [currentTextIndex, totalFrames, startSmoothAnimation, transitionToText, showText]);

  useEffect(() => {
    if (!canvasRef.current) return;

    contextRef.current = canvasRef.current.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Load first frame
    const img = new Image();
    img.src = getImageName(1);
    img.onload = () => {
      if (canvasRef.current && contextRef.current) {
        contextRef.current.drawImage(
          img,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Initial scroll check in case section is already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      
      // Clear scroll timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Cancel any running animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [handleScroll]);

  const currentText = SCROLL_TEXTS[currentTextIndex];

  return (
    <>
      {/* Title Section */}
      <section className="relative w-full rounded-b-[50px] z-45">
        <div className="w-full max-w-[1440px] mx-auto px-6 pb-24">
          <h2
            className="text-[64px] text-white tracking-tight"
            style={{
              fontFamily: "var(--font-monda), sans-serif",
              color: "#8C9CDB",
              backgroundImage:
                "linear-gradient(45deg, #8C9CDB 0%, #FFFFFF 30%, #8C9CDB 65%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span className="text-blue-200">What Sets</span> MCF Apart?
          </h2>
          <p
            className="text-white/75 text-[20px] max-w-[850px] tracking-wide mt-2"
            style={{ 
              fontFamily: "var(--font-poppins), sans-serif", 
              lineHeight: 1.4, 
              fontWeight: 200 
            }}
          >
            Our multi-confirmation system leverages market structure, volume
            profiling, and volatility analytics to support data-driven trade
            decisions and risk management engines that adapt to changing market
            conditions in real-time.
          </p>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center mt-24">
            <p
              className="text-white/25 text-[14px] mb-2"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Scroll to explore
            </p>
            <div className="w-6 h-10 border-2 border-white/25 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Scroll Animation Section */}
      <section ref={sectionRef} className="relative w-full h-[400vh] bg-black mt-20">

        {/* Fixed Canvas Container */}
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black z-2 transition-opacity duration-300 ease-out"
          style={{ 
            display: sectionActive ? "block" : "none",
            opacity: videoOpacity
          }}
        >
          <canvas ref={canvasRef} className="w-full h-full object-cover" />

          {/* Text Overlay with Luxury Transitions */}
          {showText && currentText && (
            <div 
              className="absolute text-right right-1/2 top-1/2 -translate-y-1/2 max-w-[720px] z-40 transition-all duration-500 ease-out"
              style={{ 
                opacity: Math.min(videoOpacity, textOpacity),
                transform: `translateY(-50%) translateX(${textOpacity === 1 ? '0' : '20px'})`,
                filter: `blur(${textOpacity === 1 ? '0' : '8'}px)`
              }}
            >
              <div className="text-white">
                <h3
                  className="text-[20px] capitalize transition-all duration-500 ease-out"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontWeight: 400,
                    color: "#4e5899",

                    transform: `translateY(${textOpacity === 1 ? '0' : '10px'})`,
                  }}
                >
                  {currentText.title}
                </h3>
                <p
                  className="mt-2 text-[36px] text-white/90 ml-auto transition-all duration-500 ease-out delay-100"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    lineHeight: 1,
                    fontWeight: 200,
                    transform: `translateY(${textOpacity === 1 ? '0' : '15px'})`,
                  }}
                >
                  {currentText.description}
                </p>

                {/* Enhanced Progress indicator with luxury transitions */}
                <div className="mt-6 justify-end flex items-center space-x-2 transition-all duration-500 ease-out delay-200"
                     style={{ transform: `translateY(${textOpacity === 1 ? '0' : '10px'})` }}>
                  {SCROLL_TEXTS.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 transition-all duration-500 ease-out ${
                        index === currentTextIndex
                          ? "w-8 bg-gradient-to-r from-white/80 to-white shadow-sm"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                      style={{
                        transitionDelay: `${index * 50}ms`,
                        borderRadius: '2px',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          
        </div>

       
      </section>
    </>
  );
};

export default AboutSection;
