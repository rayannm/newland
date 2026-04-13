"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TABS = [
  {
    label: "Agentic research",
    eyebrow: "agentic research",
    title: "Your Research-Grade AI Partner for R&D",
    description:
      "From complex questions to full scientific workflows. Domain-specialized AI agents search the literature, design methodologies, analyze data, discover funding, and draft manuscripts — turning weeks of groundwork into hours.",
    link: "LEARN MORE",
  },
  {
    label: "Collaborative Workspace",
    eyebrow: "COLLABORATIVE WORKSPACE",
    title: "Your team in one Research Environment",
    description:
      "Bring your lab or R&D group into a shared workspace where your team and AI agents collaborate side by side. All your research files, documents, and datasets in one place, with project task management, persistent context that remembers your research goals across sessions, and real-time co-editing across every document type.",
    link: "LEARN MORE",
  },
  {
    label: "Integrated Editors",
    eyebrow: "INTEGRATED EDITORS",
    title: "Every Research Tool, Native and Agent-Ready",
    description:
      "Full-featured Word, Excel, PowerPoint, and LaTeX editors built directly into the workspace — with 1:1 parity to desktop. A scientific canvas editor with 1,000+ icons for publication-grade figures. A Python and R computation environment for statistics, visualizations, and bioinformatics pipelines. Every tool is agent-compatible — your AI works inside the same editors you do, in real time.",
    link: "LEARN MORE",
  },
  {
    label: "Private Data",
    eyebrow: "PRIVATE DATA",
    title: "Accelerate R&D With Your IP",
    description:
      "Bring Enjamb's Agentic intelligence to your science securely for richer context and faster insights across internal and external data. With enterprise-grade isolation, your team's files, datasets, and institutional knowledge become a single source of truth that your agents and team build on.",
    link: "LEARN MORE",
  },
] as const;

export function PlatformSection() {
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = TABS[activeTab];

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1560px] px-[4.5%]">
        {/* Heading composition - NO extra inner padding, sits at container edge */}
        <div className="flex flex-col gap-6 pt-20">
          {/* Eyebrow */}
          <p className="font-body text-[16px] font-medium uppercase leading-[1.5] tracking-[3.2px] text-[#55677E]">
            ENJAMB PLATFORM
          </p>

          {/* H2 Heading - full width */}
          <h2 className="font-heading text-[48px] font-medium leading-[57.6px] text-[#101F33]">
            An enterprise AI workspace for rigorous, end-to-end research
          </h2>

          {/* Description - full width */}
          <p className="font-body text-[18px] font-light leading-[27px] text-[#55677E]">
            Enjamb aligns research teams around scientific discovery and
            execution at speed — from literature to methodology to final output.
            Empower your team with precision source retrieval, governed
            scientific reasoning, and specialized agentic automation within a
            purpose-built collaborative workspace.
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
          className="flex flex-col border border-[#b08968] lg:min-h-[500px] lg:flex-row"
        >
          {/* Left side - text content */}
          <div className="flex w-full flex-col justify-center lg:w-1/2 lg:border-r lg:border-[#b08968]">
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

        {/* Bottom padding */}
        <div className="pb-20" />
      </div>
    </section>
  );
}
