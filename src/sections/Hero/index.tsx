import Spline from '@splinetool/react-spline/next';
import GlowButton from "@/components/GlowButton";
import HighlightButton from "@/components/HighlightButton";
import TrueFocus from "@/components/TrueFocus";


export default function Hero() {
  return (
    <>
    <section
      className="relative flex items-baseline pt-[6rem] sm:items-center h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] m-4 lg:m-6 overflow-hidden rounded-b-[1.875rem] lg:rounded-b-[3.125rem mb-5 lg:mb-7]"
      style={{
        // boxShadow: "0px 0.5rem 3rem 0.625rem rgba(42, 60, 255, 0.30)", // Figma: subtle blue shadow
      }}
    >
      {/* Spline animation background */}
      <div className="fade-in absolute inset-0 w-[1300px] -left-[600px] top-[64px] sm:left-0 sm:w-full h-full z-0" style={{ animationDelay: "0.1s" }}>
        <Spline scene="https://prod.spline.design/UypH9NeByOMsn96Q/scene.splinecode" />
      </div>
      {/* Radial gradient overlay */}
      <div
        className="fade-in absolute inset-0 w-full h-full z-10 pointer-events-none rounded-b-[1.875rem] lg:rounded-b-[3.125rem]"
        style={{
          background:
            "radial-gradient(180% 180% at 50% 0%, rgba(0, 0, 0, 0.00) 45%, #00058A 55%, #FFF 70%)",
          animationDelay: "0.2s"
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="fade-in-up relative z-20 items-start w-full max-w-[90rem] text-center sm:text-left p-4 sm:p-6 mx-auto" aria-hidden="true" style={{ animationDelay: "0.3s" }}>
        <h1
          className="fade-in-up text-white text-[2.25rem] sm:text-[3rem] lg:text-[4.5rem] font-black leading-[1.08] drop-shadow-[0_0.25rem_2rem_rgba(42,60,255,0.18)] tracking-[-0.02em] hero-glow"
          style={{
            fontFamily:"var(--font-monda)",
            letterSpacing: "-0.02em",
            textShadow: " 0 0 2rem #ffffff80",
            animationDelay: "0.5s"
          }}
        >
          <TrueFocus 
            sentence="Multi Confirmation"
            manualMode={false}
            blurAmount={6}
            borderColor="orange"
            animationDuration={0.6}
            pauseBetweenAnimations={1}
            
          />
          <br />
          Trading Intelligence
        </h1>
        <p
          className="fade-in-up mt-3 sm:mt-6 text-white/80 text-[1rem] lg:text-[1.25rem] font-light max-w-2xl drop-shadow-[0_0.125rem_0.75rem_rgba(42,60,255,0.10)] tracking-[-0.04em] sm:tracking-[0.02em]"
          style={{
            fontFamily:
             " var(--font-poppins), sans-serif",
             fontWeight: 100,
             animationDelay: "0.7s"
                      }}
        >
          Every trade validated by structure, volume, and volatility
          <br className="hidden sm:block" /> – engineered for high-probability precision to minimize risk
        </p>
        <div className="scale-in hidden sm:inline-block sm:mt-8" style={{ animationDelay: "0.9s" }}>
           <GlowButton
            href="#features"
            width="11.25rem"
            tabIndex={-1}
            ariaHidden={true}
          >
            Learn More
          </GlowButton>
        </div>
         <div className="scale-in mt-4 sm:hidden" style={{ animationDelay: "0.9s" }}>
          <HighlightButton
          className="sm:hidden"
            href="#features"
            width="11.25rem"
            tabIndex={-1}
            ariaHidden={true}
          >
            Learn More
          </HighlightButton>
        </div>
      </div>
    </section>
    </>
  );
}
