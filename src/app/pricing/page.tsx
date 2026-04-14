"use client";

import { useState } from "react";

type Billing = "yearly" | "monthly";

interface PricingTier {
  name: string;
  subtitle: string;
  yearlyPrice: string;
  monthlyPrice: string;
  priceNote?: string;
  yearlyFootnote?: string;
  monthlyFootnote?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
}

const TIERS: PricingTier[] = [
  {
    name: "Free",
    subtitle: "Great for small teams getting started.",
    yearlyPrice: "$0",
    monthlyPrice: "$0",
    priceNote: "/month",
    features: [
      "Intelligent Research Assistant",
      "3 Advanced Agent Uses per month",
      "Up to 3 Active Projects & 3 Collaborators",
      "Auto-Formatting for 3 Papers",
    ],
    ctaLabel: "Sign up FREE",
    ctaHref: "#",
  },
  {
    name: "Pro",
    subtitle: "Single user",
    yearlyPrice: "$30",
    monthlyPrice: "$35",
    priceNote: "/month",
    yearlyFootnote: "Billed annually",
    monthlyFootnote: "Billed monthly",
    features: [
      "Full Research Agent Suite (LitReview, Grant, Data, Figure)",
      "Unlimited Agent Tasks & Projects",
      "Built-In Statistical Data Editor (GraphPad alternative)",
      "Integrated Scientific Figure Canvas",
      "Direct Access to 400M+ Curated Research Papers",
    ],
    ctaLabel: "Try it FREE",
    ctaHref: "#",
    highlight: true,
  },
  {
    name: "Lab",
    subtitle: "Includes 5+ seats (only 1 PI seat)",
    yearlyPrice: "$40",
    monthlyPrice: "$45",
    priceNote: "/seat/month",
    yearlyFootnote: "Billed annually",
    monthlyFootnote: "Billed monthly",
    features: [
      "Priority AI Processing (Maximum compute speed)",
      "Shared Lab Knowledge Base",
      "Real-Time Collaborative Workspaces",
      "Centralized PI Admin & Billing",
      "Priority Support Channel",
    ],
    ctaLabel: "Try it FREE",
    ctaHref: "#",
  },
  {
    name: "Enterprise",
    subtitle: "Enterprise SSO & Guaranteed SLAs",
    yearlyPrice: "Contact",
    monthlyPrice: "Contact",
    features: [
      "Private Institutional Data Silos",
      "Advanced Security & Compliance (SOC2, ISO 27001)",
      "Custom Agent & Workflow Engineering",
      "Dedicated Account Manager",
    ],
    ctaLabel: "Contact us",
    ctaHref: "#",
  },
];

// Comparison table rows. Use strings for text, `true`/`false` for check/X marks.
type Cell = boolean | string;

interface CompareRow {
  feature: string;
  cells: [Cell, Cell, Cell, Cell, Cell]; // Enjamb, Overleaf, Word, Anara, Jenni
}

const COMPARISON: CompareRow[] = [
  {
    feature: "Core Engine: Full-feature native Word editor",
    cells: [true, false, true, false, false],
  },
  {
    feature: "Core Engine: Native LaTeX editor & compiler",
    cells: [true, true, false, false, false],
  },
  {
    feature: "Automation: Automatic rebuttal generation",
    cells: [true, false, false, false, false],
  },
  {
    feature: "Automation: Citation discovery",
    cells: [true, false, false, true, true],
  },
  {
    feature: "Automation: Context-aware AI",
    cells: [
      true,
      "Limited Context",
      "Limited Context",
      "No AI edits",
      "Limited Context",
    ],
  },
  {
    feature: "Collaboration: Real-time collaboration",
    cells: [true, true, true, false, false],
  },
  {
    feature: "Collaboration: Version control & merging",
    cells: [
      true,
      "Version history only",
      "Version history only",
      "Version history only",
      "Version history only",
    ],
  },
  {
    feature: "Collaboration: Task management",
    cells: [true, false, false, false, false],
  },
  {
    feature: "Submission: Journal templates/formatting",
    cells: [true, "Templates only", false, false, false],
  },
];

const COMPETITOR_COLUMNS = ["Enjamb", "Overleaf", "Word", "Anara", "Jenni"];

export default function PricingPage() {
  const [billing, setBilling] = useState<Billing>("yearly");

  const toggle = () =>
    setBilling((prev) => (prev === "yearly" ? "monthly" : "yearly"));

  return (
    <div className="pb-20">
      {/* Intro */}
      <section className="border-b border-[#b08968] bg-[#f5ecd7] py-20">
        <div className="mx-auto max-w-[1620px] px-[5%] text-center">
          <h1 className="font-heading text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-[#101F33] md:text-[64px]">
            Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-[640px] font-body text-[17px] leading-relaxed text-[#55677E]">
            The ultimate agentic workspace for scientists.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`font-body text-[14px] font-medium uppercase tracking-[1.5px] transition-colors ${
                  billing === "yearly" ? "text-[#101F33]" : "text-[#94a3b8]"
                }`}
              >
                Yearly
              </span>
              <span className="bg-[#3C1FFA] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[1px] text-white">
                Save up to 23%
              </span>
            </div>

            <button
              type="button"
              onClick={toggle}
              role="switch"
              aria-checked={billing === "monthly"}
              aria-label="Toggle monthly billing"
              className="relative h-6 w-12 cursor-pointer border border-[#b08968] bg-background transition-colors"
            >
              <span
                className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 bg-[#101F33] transition-all ${
                  billing === "monthly" ? "left-[26px]" : "left-[2px]"
                }`}
              />
            </button>

            <span
              className={`font-body text-[14px] font-medium uppercase tracking-[1.5px] transition-colors ${
                billing === "monthly" ? "text-[#101F33]" : "text-[#94a3b8]"
              }`}
            >
              Monthly
            </span>
          </div>
        </div>
      </section>

      {/* Pricing grid */}
      <section className="mx-auto max-w-[1620px] px-[5%]">
        <div className="mt-16 grid grid-cols-1 gap-0 border border-[#b08968] md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, i) => (
            <article
              key={tier.name}
              className={`flex flex-col p-8 ${
                i < TIERS.length - 1
                  ? "border-b border-[#b08968] lg:border-b-0 lg:border-r"
                  : ""
              } ${i === 1 ? "md:border-r md:border-[#b08968]" : ""} ${
                tier.highlight ? "bg-[#f5ecd7]" : ""
              }`}
            >
              <h2 className="font-heading text-[24px] font-medium text-[#101F33]">
                {tier.name}
              </h2>
              <p className="mt-2 font-body text-[14px] leading-relaxed text-[#55677E]">
                {tier.subtitle}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <p className="font-heading text-[40px] font-medium leading-none text-[#101F33]">
                  {billing === "yearly" ? tier.yearlyPrice : tier.monthlyPrice}
                </p>
                {tier.priceNote && (
                  <p className="font-body text-[14px] text-[#55677E]">
                    {tier.priceNote}
                  </p>
                )}
              </div>

              {(billing === "yearly"
                ? tier.yearlyFootnote
                : tier.monthlyFootnote) && (
                <p className="mt-2 font-body text-[12px] text-[#94a3b8]">
                  {billing === "yearly"
                    ? tier.yearlyFootnote
                    : tier.monthlyFootnote}
                </p>
              )}

              <div className="mt-6 border-t border-[#b08968]" />

              <ul className="mt-6 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 font-body text-[14px] leading-relaxed text-[#101F33]"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#101F33]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex-1" />

              <a
                href={tier.ctaHref}
                className={`mt-8 inline-flex w-full items-center justify-center px-5 py-3 font-body text-[13px] font-medium uppercase tracking-[1px] transition-colors ${
                  tier.highlight
                    ? "bg-[#3C1FFA] text-white hover:bg-[#2d18c4]"
                    : "bg-[#101F33] text-white hover:bg-[#1a2f47]"
                }`}
              >
                {tier.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto mt-20 max-w-[1620px] px-[5%]">
        <h2 className="font-heading text-[32px] font-medium leading-tight text-[#101F33] md:text-[40px]">
          Compare platforms
        </h2>

        <div className="mt-8 overflow-x-auto border border-[#b08968]">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="bg-[#f5ecd7]">
                <th
                  scope="col"
                  className="border-b border-r border-[#b08968] p-4 text-left font-body text-[13px] font-semibold uppercase tracking-[1px] text-[#55677E]"
                >
                  Feature
                </th>
                {COMPETITOR_COLUMNS.map((col, idx) => (
                  <th
                    key={col}
                    scope="col"
                    className={`border-b border-[#b08968] p-4 text-center font-body text-[13px] font-semibold uppercase tracking-[1px] ${
                      idx === 0
                        ? "bg-[#ebe1ca] text-[#101F33]"
                        : "text-[#55677E]"
                    } ${idx < COMPETITOR_COLUMNS.length - 1 ? "border-r border-[#b08968]" : ""}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, rowIdx) => (
                <tr
                  key={row.feature}
                  className={rowIdx % 2 === 1 ? "bg-[#fff6e8]" : "bg-background"}
                >
                  <th
                    scope="row"
                    className="border-r border-[#b08968] p-4 text-left font-body text-[14px] font-medium text-[#101F33]"
                  >
                    {row.feature}
                  </th>
                  {row.cells.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className={`p-4 text-center font-body text-[14px] ${
                        cellIdx === 0 ? "bg-[#ebe1ca]/40" : ""
                      } ${cellIdx < row.cells.length - 1 ? "border-r border-[#b08968]" : ""}`}
                    >
                      {cell === true ? (
                        <span
                          className="text-[18px] text-[#3C1FFA]"
                          aria-label="Included"
                        >
                          ✓
                        </span>
                      ) : cell === false ? (
                        <span
                          className="text-[18px] text-[#94a3b8]"
                          aria-label="Not included"
                        >
                          ✕
                        </span>
                      ) : (
                        <span className="text-[13px] text-[#55677E]">
                          {cell}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
