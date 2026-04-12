"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { EnjambLogo, ChevronDownIcon, HamburgerIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "AI PLATFORM", hasDropdown: true },
  { label: "PRODUCTS", hasDropdown: true },
  { label: "USE CASES", hasDropdown: true },
  { label: "RESOURCES", hasDropdown: false },
  { label: "ABOUT", hasDropdown: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled ? "border-[#D4DFE4] bg-white shadow-sm" : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-[5%]">
        {/* Logo */}
        <Link href="/" aria-label="Enjamb Home">
          <EnjambLogo className="h-8 w-[162px] text-[#101F33]" />
        </Link>

        {/* Center Nav Links - hidden below lg */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 text-sm font-medium uppercase tracking-[1px] text-[#101F33] font-body"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDownIcon className="h-3 w-3" />
              )}
            </a>
          ))}
        </div>

        {/* Right Buttons - hidden below lg */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="rounded-[4px] border border-[#101F33] px-5 py-2 text-sm font-medium uppercase tracking-[1px] text-[#101F33] font-body"
          >
            LOGIN
          </a>
          <a
            href="#"
            className="rounded-[4px] bg-[#101F33] px-5 py-2 text-sm font-medium uppercase tracking-[1px] text-white font-body"
          >
            REQUEST A DEMO
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="text-[#101F33] lg:hidden" aria-label="Open menu">
          <HamburgerIcon className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
