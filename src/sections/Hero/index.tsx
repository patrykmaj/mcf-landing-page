import Spline from '@splinetool/react-spline/next';
import GlowButton from '@/components/GlowButton';

export default function Hero() {
  return (
    <>
    <section
      className="relative flex items-center min-h-[calc(100vh-24px)] max-h-[1030px] mx-6 overflow-hidden rounded-b-[50px]"
      style={{
      }}
    >
      {/* Spline animation background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/UypH9NeByOMsn96Q/scene.splinecode" />
      </div>
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 w-full h-full z-10 pointer-events-none rounded-b-[50px]"
        style={{
          background:
            "radial-gradient(180% 180% at 50% 0%, rgba(0, 0, 0, 0.00) 45%, #00058A 55%, #FFF 70%)",
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-20 items-start w-full max-w-[1440px] text-left px-6 mx-auto" aria-hidden="true">
        <h1
          className="text-white text-[84px] font-black leading-[1] drop-shadow-[0_4px_32px_rgba(42,60,255,0.18)]"
          style={{
            fontFamily:"var(--font-monda)",
            textShadow: " 0 0 42px #868686"
          }}
        >
          Multi-Confirmation 
          <br /> Trading Intelligence
        </h1>
        <p
          className="mt-6 text-white/75 text-[22px] font-light max-w-[800px] drop-shadow-[0_2px_12px_rgba(42,60,255,0.10)] tracking-wider"
          style={{
            fontFamily:
              "var(var(--font-poppins), sans-serif",
              lineHeight: 1.4,
            fontWeight: 200,
          }}
        >
          Every trade validated by structure, volume, and volatility
          <br />– engineered for high-probability precision to minimize risk
        </p>
        <div className="mt-6">
          <GlowButton
            href="#features"
            width="180px"
            height="50px"
            tabIndex={-1}
            ariaHidden={true}
          >
            Learn More
          </GlowButton>
        </div>
      </div>
    </section>
    </>
  );
}
