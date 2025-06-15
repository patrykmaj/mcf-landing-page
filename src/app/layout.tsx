import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Poppins, Roboto, Monda, Archivo_Black, Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700"],
  display: "swap",
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});
const monda = Monda({
  variable: "--font-monda",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400"],
});
const notoSansHebrew = Noto_Sans_Hebrew({
  variable: "--font-noto-sans-hebrew",
  subsets: ["hebrew", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MCF Landing Page",
  description: "MCF Trading Intelligence Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={[
          geistSans.variable,
          poppins.variable,
          roboto.variable,
          monda.variable,
          archivoBlack.variable,
          notoSansHebrew.variable,
          "antialiased",
        ].join(" ")}
      >
        <Navbar />
          {children}
        
        {/* Initialize visual load animations */}
        <Script 
          id="visual-load-animations"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initVisualLoadAnimations() {
                const observerOptions = {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      const element = entry.target;
                      
                      if (element.classList.contains('fade-in-up') ||
                          element.classList.contains('fade-in') ||
                          element.classList.contains('slide-up') ||
                          element.classList.contains('scale-in')) {
                        element.classList.add('animate');
                        observer.unobserve(element);
                      }
                    }
                  });
                }, observerOptions);

                const animatedElements = document.querySelectorAll(
                  '.fade-in-up, .fade-in, .slide-up, .scale-in'
                );
                
                animatedElements.forEach((el) => {
                  observer.observe(el);
                });
              }

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initVisualLoadAnimations);
              } else {
                initVisualLoadAnimations();
              }
            `
          }}
        />
      </body>
    </html>
  );
}
