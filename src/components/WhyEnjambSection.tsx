import type { ReactNode } from "react";

function ShieldCheckIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-8 w-8"
    >
      <path d="M16 3 L5 7 V15 C5 22 10 27 16 29 C22 27 27 22 27 15 V7 Z" />
      <path d="M11 16 L15 20 L22 12" />
    </svg>
  );
}

function EvidenceSearchIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-8 w-8"
    >
      <path d="M7 4 H18 L23 9 V24 A2 2 0 0 1 21 26 H9 A2 2 0 0 1 7 24 Z" />
      <path d="M18 4 V9 H23" />
      <line x1="11" y1="12" x2="19" y2="12" />
      <line x1="11" y1="16" x2="17" y2="16" />
      <circle cx="20" cy="22" r="3" />
      <line x1="22.5" y1="24.5" x2="25" y2="27" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-8 w-8"
    >
      <path d="M3 16 C6 9 11 6 16 6 C21 6 26 9 29 16 C26 23 21 26 16 26 C11 26 6 23 3 16 Z" />
      <circle cx="16" cy="16" r="4.5" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

function StackLayersIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-8 w-8"
    >
      <path d="M16 3 L28 9 L16 15 L4 9 Z" />
      <path d="M4 16 L16 22 L28 16" />
      <path d="M4 23 L16 29 L28 23" />
    </svg>
  );
}

const features: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Rigor and Quality at every step",
    description:
      "Domain-specialized agents collaborate, cross-validate, and handoff seamlessly through Enjamb\u2019s orchestration framework. Models, tools, and data are carefully selected for each stage of research, with quality control at every step and transparent reasoning visible to your team throughout.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Science-Backed Evidence Retrieval",
    description:
      "Enjamb interprets your scientific intent to surface only the most precise, relevant, and traceable evidence, with zero tolerance for hallucination. Direct integrations with Semantic Scholar, PubMed, arXiv, bioRxiv, OpenAlex, grants.gov, and 60+ specialized scientific databases deliver cited, peer-reviewed, deeply-relevant insights your team can trust.",
    icon: <EvidenceSearchIcon />,
  },
  {
    title: "Transparent by Design",
    description:
      "Every tool call, every source, every reasoning step visible to you in real time. Enjamb agents don\u2019t operate as black boxes. You see what they\u2019re searching, what they\u2019re reading, and how they\u2019re synthesizing, while parallel sub-agents execute research workflows simultaneously to accelerate time-to-insight. Verify every step, audit every output, and trust every result.",
    icon: <EyeIcon />,
  },
  {
    title: "Built for the Full R&D Stack",
    description:
      "From literature to methodology to data analysis to manuscript, Enjamb is the only workspace where agents operate natively across every layer of your research. Full document editors, sandboxed Python and R compute, integrated reference management, and a built-in scientific canvas, unified in one collaborative environment.",
    icon: <StackLayersIcon />,
  },
];

export function WhyEnjambSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1620px] px-[5%]">
        <div className="py-20">
          {/* Heading composition - two columns side by side */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-[10%]">
            {/* Col 1: overline + H2 */}
            <div className="flex flex-col gap-4 lg:w-[45%]">
              <p className="font-body text-[14px] font-medium uppercase tracking-[3.2px] text-[#55677E] md:text-[16px]">
                What makes Enjamb different
              </p>
              <h2 className="font-heading text-[30px] font-medium leading-[1.2] tracking-[-0.01em] text-[#101F33] md:text-[40px] lg:text-[48px]">
                AI for rigorous science.
                <br />
                Not generic chat.
              </h2>
            </div>

            {/* Col 2: description - one paragraph with br breaks */}
            <div className="lg:w-[45%] lg:pt-8">
              <p className="font-body text-[17px] font-light leading-[1.6] text-[#55677E] md:text-[18px] md:leading-[27px]">
                Research demands relevant, accurate, and executable
                workflows, not just summaries.
                <br />
                <br />
                Every layer of Enjamb&apos;s advanced technology infrastructure
                is purpose-built for scientific intelligence, and scientific
                execution.
              </p>
            </div>
          </div>

          {/* Divider line */}
          <div className="mt-16 border-t border-[#b08968]" />

          {/* Feature grid - 2 columns */}
          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-6">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center border border-[#b08968] bg-[#f5ecd7] text-[#101F33]">
                  {feature.icon}
                </div>

                <h3 className="font-heading text-[24px] font-medium leading-[33.6px] text-[#101F33]">
                  {feature.title}
                </h3>
                <p className="font-body text-[16px] font-light leading-[24px] text-[#55677E]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
