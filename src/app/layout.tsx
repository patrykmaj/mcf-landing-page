import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Roboto, Monda, Archivo_Black, Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
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
      </body>
    </html>
  );
}
