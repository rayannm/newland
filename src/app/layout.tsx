import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const neueRegrade = localFont({
  src: [
    {
      path: "../../public/fonts/NeueRegrade-Variable.ttf",
      style: "normal",
    },
  ],
  variable: "--font-neue-regrade",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Causaly: The Agentic AI Platform For Life Sciences",
  description:
    "Causaly accelerates enterprises through discovery and development with scientific rigor - turning evidence into decision-ready intelligence, and best practice into repeatable execution at scale.",
  icons: {
    icon: "/seo/favicon-32.png",
    apple: "/seo/favicon-256.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} ${neueRegrade.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-navy bg-white">
        {children}
      </body>
    </html>
  );
}
