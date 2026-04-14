const features = [
  {
    title: "Rigor and Quality at every step",
    description:
      "Domain-specialized agents collaborate, cross-validate, and handoff seamlessly through Enjamb\u2019s orchestration framework. Models, tools, and data are carefully selected for each stage of research, with quality control at every step and transparent reasoning visible to your team throughout.",
  },
  {
    title: "Science-Backed Evidence Retrieval",
    description:
      "Enjamb interprets your scientific intent to surface only the most precise, relevant, and traceable evidence, with zero tolerance for hallucination. Direct integrations with Semantic Scholar, PubMed, arXiv, bioRxiv, OpenAlex, grants.gov, and 60+ specialized scientific databases deliver cited, peer-reviewed, deeply-relevant insights your team can trust.",
  },
  {
    title: "Transparent by Design",
    description:
      "Every tool call, every source, every reasoning step visible to you in real time. Enjamb agents don\u2019t operate as black boxes. You see what they\u2019re searching, what they\u2019re reading, and how they\u2019re synthesizing, while parallel sub-agents execute research workflows simultaneously to accelerate time-to-insight. Verify every step, audit every output, and trust every result.",
  },
  {
    title: "Built for the Full R&D Stack",
    description:
      "From literature to methodology to data analysis to manuscript, Enjamb is the only workspace where agents operate natively across every layer of your research. Full document editors, sandboxed Python and R compute, integrated reference management, and a built-in scientific canvas, unified in one collaborative environment.",
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
              <p className="font-body text-[16px] font-medium uppercase tracking-[3.2px] text-[#55677E]">
                What makes Enjamb different
              </p>
              <h2 className="font-heading text-[32px] font-medium leading-[1.15] text-[#101F33] md:text-[48px]">
                AI for rigorous science.
                <br />
                Not generic chat.
              </h2>
            </div>

            {/* Col 2: description - one paragraph with br breaks */}
            <div className="lg:w-[45%] lg:pt-8">
              <p className="font-body text-[18px] font-light leading-[27px] text-[#55677E]">
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
                {/* Icon placeholder */}
                <div className="h-16 w-16 rounded-lg bg-[#b08968]/50" />

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
