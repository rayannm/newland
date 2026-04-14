"use client";

import { useState } from "react";
import Link from "next/link";
import { EnjambLogo, ChevronDownIcon, HamburgerIcon } from "@/components/icons";

const dropdownData: Record<string, { label: string; items: { title: string; subtitle: string }[] }> = {
  "AI PLATFORM": {
    label: "AI PLATFORM",
    items: [
      { title: "Generative AI Copilot", subtitle: "The first AI copilot purpose-built for scientists" },
      { title: "Knowledge Graph", subtitle: "High-precision biomedical knowledge graph" },
      { title: "Enterprise Data Fabric", subtitle: "Get more from your data" },
      { title: "Scientific Information Retrieval System (SIRS)", subtitle: "Information retrieval for life sciences AI" },
    ],
  },
  "USE CASES": {
    label: "USE CASES",
    items: [
      { title: "Target Identification & Prioritization", subtitle: "Rapidly identify and prioritize targets" },
      { title: "Biomarker Discovery", subtitle: "Revolutionize biomarker research" },
      { title: "Disease Pathophysiology", subtitle: "Decipher complex disease biology" },
      { title: "Target Disease Association", subtitle: "Connect targets and diseases with confidence" },
      { title: "Indication Expansion", subtitle: "Unlock new revenue growth from existing assets" },
    ],
  },
};

const navLinks = [
  { label: "AI PLATFORM", hasDropdown: true, href: "#" },
  { label: "USE CASES", hasDropdown: true, href: "#" },
  { label: "PRICING", hasDropdown: false, href: "/pricing" },
  { label: "BLOG", hasDropdown: false, href: "/blog" },
  { label: "ABOUT", hasDropdown: false, href: "#" },
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isOpen = !!(openDropdown && dropdownData[openDropdown]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background">
        <div className="mx-auto flex h-[70px] max-w-[1620px] items-center justify-between px-[5%]">
          {/* Logo */}
          <Link href="/" aria-label="Enjamb Home">
            <EnjambLogo className="text-[#101F33]" />
          </Link>

          {/* Center Nav Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <button
                  key={link.label}
                  type="button"
                  className={`flex items-center gap-1 font-body text-sm font-medium uppercase tracking-[1px] transition-colors hover:text-black ${openDropdown === link.label ? "text-black" : "text-[#55677E]"}`}
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                >
                  {link.label}
                  <ChevronDownIcon
                    className={`h-3 w-3 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm font-medium uppercase tracking-[1px] text-[#55677E] transition-colors hover:text-black"
                  onClick={() => setOpenDropdown(null)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#" className="bg-black px-5 py-2 font-body text-sm font-medium text-white">
              Log in
            </a>
            <a href="#" className="flex items-center gap-1.5 bg-neutral-500 px-5 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-neutral-700">
              Request a demo <span>&rarr;</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="text-[#101F33] lg:hidden" aria-label="Open menu">
            <HamburgerIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Border line - always visible */}
        <div className="border-b border-[#b08968]" />

        {/* Mega dropdown */}
        <div
          className="grid transition-[grid-template-rows] duration-200 ease-in-out"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr_1fr_1.5fr] bg-[#f5ecd7]">
              {/* Col 1 - Label */}
              <div className="flex justify-end py-10 pr-8">
                <span className="font-body text-xs font-semibold uppercase tracking-[2px] text-[#55677E]">
                  {(openDropdown && dropdownData[openDropdown]?.label) || ""}
                </span>
              </div>

              {/* Col 2 - Links */}
              <div className="border-l border-[#b08968] py-10 pl-10 pr-8">
                <div className="flex flex-col gap-7">
                  {((openDropdown && dropdownData[openDropdown]?.items) || []).map((item) => (
                    <a
                      key={item.title}
                      href="#"
                      className="group block"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <div className="text-[15px] font-medium text-[#101F33] group-hover:text-[#3C1FFA]">
                        {item.title}
                      </div>
                      <div className="mt-1 text-[13px] text-[#55677E]">
                        {item.subtitle}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Col 3 - Empty spacer */}
              <div className="border-l border-[#b08968]" />

              {/* Col 4 - Featured card, dark bg extends to edge */}
              <div className="bg-[#101F33] py-10 pl-10 pr-10">
                <h3 className="font-heading text-[22px] font-medium leading-tight text-white">
                  Mitigating clinical failures with AI
                </h3>
                <p className="mt-2 text-sm font-medium text-white/80">
                  Overcoming the Toxicity Hurdle in Clinical Development
                </p>
                <p className="mt-4 max-w-[360px] text-[13px] leading-relaxed text-white/60">
                  Scientists from big pharma are incorporating AI into their R&D
                  processes to identify potential safety red flags earlier on in
                  the development pipeline.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-block border border-white/40 px-5 py-2 text-[13px] font-medium uppercase tracking-[1px] text-white transition-colors hover:bg-white/10"
                >
                  Request access
                </a>
              </div>
            </div>

            {/* Bottom border */}
            <div className="border-b border-[#b08968]" />
          </div>
        </div>
      </nav>

      {/* Click-outside overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
