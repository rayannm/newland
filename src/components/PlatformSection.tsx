"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TABS = [
  {
    label: "Agentic research",
    eyebrow: "agentic research",
    title: "Your Science-Grade AI Partner for R&D",
    description:
      "From complex questions, to full scientific workflows. Domain-specialized AI agents plan, search, reason and conclude behind a clean chat interface, speeding you from hypothesis to evidence-backed decision in minutes and hours, not days and weeks.",
    link: "LEARN MORE",
  },
  {
    label: "BIO GRAPH",
    eyebrow: "BIO GRAPH",
    title: "Cause-and-Effect Biology At A Glance",
    description:
      "Accelerate understanding and inform choices with a view into deep biology. Visualize pathways and mechanisms, uncover non-obvious hypotheses, and prioritize actionable targets and biomarkers with confidence.",
    link: "LEARN MORE",
  },
  {
    label: "pipeline graph",
    eyebrow: "PIPELINE GRAPH",
    title: "Science Meets Competitive Intelligence",
    description:
      "Unify pipeline intelligence with deep biology to compare programs, spot white space, and de-risk target and portfolio decisions. Visualize the commercial landscape - assets, competitors, and pipelines - in an interactive environment that gets you informed, fast.",
    link: "LEARN MORE",
  },
  {
    label: "PRIVATE DATA",
    eyebrow: "PRIVATE DATA",
    title: "Amplify R&D With Your IP",
    description:
      "Bring Enjamb intelligence to your science securely for richer research relevance, and faster insights across internal and external data. With a 'single source of truth', you'll build enterprise-wide continuity - and shared intelligence that compounds over time.",
    link: "LEARN MORE",
  },
] as const;

export function PlatformSection() {
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = TABS[activeTab];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-[5%]">
        {/* Heading composition - NO extra inner padding, sits at container edge */}
        <div className="flex flex-col gap-6 pt-20">
          {/* Eyebrow */}
          <p className="font-body text-[16px] font-medium uppercase leading-[1.5] tracking-[3.2px] text-[#55677E]">
            ENJAMB PLATFORM
          </p>

          {/* H2 Heading - full width */}
          <h2 className="font-heading text-[48px] font-medium leading-[57.6px] text-[#101F33]">
            An enterprise AI workspace for science-backed decisions
          </h2>

          {/* Description - full width */}
          <p className="font-body text-[18px] font-light leading-[27px] text-[#55677E]">
            Enjamb aligns R&D teams around scientific and commercial insight at
            speed for faster, stronger outcomes. Empower your enterprise with
            precision evidence retrieval, governed scientific reasoning, and
            specialized agentic automation within a purpose-built, frictionless
            platform.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-6 overflow-x-auto">
          {TABS.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "shrink-0 cursor-pointer px-0 pb-3 font-body text-[14px] font-medium uppercase tracking-[2px] transition-colors",
                activeTab === index
                  ? "border-b-[3px] border-[#3C1FFA] text-[#101F33]"
                  : "border-b-[3px] border-transparent text-[#55677E] hover:text-[#101F33]"
              )}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content - bordered box with two equal columns */}
        <div
          key={activeTab}
          className="flex flex-col border border-[#D4DFE4] lg:flex-row"
        >
          {/* Left side - text content */}
          <div className="flex w-full flex-col justify-center lg:w-1/2 lg:border-r lg:border-[#D4DFE4]">
            <div className="flex flex-col gap-6 p-8 lg:px-[60px] lg:py-[80px]">
              {/* Content eyebrow */}
              <p className="font-body text-[16px] font-medium uppercase leading-[1.5] tracking-[3.2px] text-[#55677E]">
                {currentTab.eyebrow}
              </p>

              {/* H3 Title */}
              <h3 className="font-heading text-[32px] font-medium leading-[36px] text-[#101F33]">
                {currentTab.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[16px] font-light leading-[24px] text-[#55677E]">
                {currentTab.description}
              </p>

              {/* Learn more button */}
              <a
                href="#"
                className="inline-block w-fit rounded-[4px] bg-[#101F33] px-6 py-3 text-[14px] font-medium uppercase tracking-[1px] text-white transition-colors hover:bg-[#1a2f47]"
              >
                {currentTab.link}
              </a>
            </div>
          </div>

          {/* Right side - product screenshot */}
          <div className="relative flex w-full items-center justify-center overflow-hidden lg:w-1/2">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/platform/platform-screenshot.avif"
                alt={`${currentTab.title} - Enjamb platform screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
