"use client";

import Link from "next/link";
import { EnjambLogo, ChevronDownIcon, HamburgerIcon } from "@/components/icons";

const navLinks = [
  { label: "AI PLATFORM", hasDropdown: true },
  { label: "USE CASES", hasDropdown: true },
  { label: "PRICING", hasDropdown: false },
  { label: "BLOG", hasDropdown: false },
  { label: "ABOUT", hasDropdown: false },
];

export function Navbar() {

  return (
    <nav
      className="sticky top-0 z-50 border-b border-[#D4DFE4] bg-white"
    >
      <div className="mx-auto flex h-[70px] max-w-[1560px] items-center justify-between px-[5%]">
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
            className="bg-black px-5 py-2 font-body text-sm font-medium text-white"
          >
            Log in
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 bg-neutral-500 px-5 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-neutral-700"
          >
            Request a demo
            <span>&rarr;</span>
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
