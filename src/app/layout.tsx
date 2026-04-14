import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Enjamb: The Agentic Workspace for Research",
  description:
    "Enjamb accelerates every stage of research — literature review, methodology, data analysis, grants, and drafting — with scientific rigor and repeatable execution at scale.",
  icons: {
    icon: "/seo/favicon.ico",
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
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-navy bg-background">
        {children}
      </body>
    </html>
  );
}
