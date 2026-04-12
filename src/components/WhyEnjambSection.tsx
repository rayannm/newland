const features = [
  {
    title: "Continuity and quality, end-to-end",
    description:
      "Comprehensive evidence-backed outputs are co-ordinated by Enjamb\u2019s governed Agentic Orchestration framework. Tools, models and data are carefully selected for agents which collaborate, cross-validate, and handoff seamlessly, with thorough quality control at every step.",
  },
  {
    title: "Rigorous, relevant scientific search",
    description:
      "Enjamb interprets your scientific intent for richer results, ranking and selecting only the most accurate, traceable, relevant evidence to respond. Our Scientific Information Retrieval System (SIRS) recognises no-answer scenarios, filters for hallucination, and returns cited, hyper-relevant, science-backed insights.",
  },
  {
    title: "Grounded in fact, not fiction",
    description:
      "Enjamb\u2019s strict factual grounding leads to outputs you can trust. A high-precision Scientific Knowledge Graph imbues Enjamb search, evidence, reasoning, and insight with relational meaning from 500M facts and 70M directional relationships - and a Commercial Knowledge Graph provides intel from the drug landscape mapped in comprehensive detail.",
  },
  {
    title: "Firm data foundations",
    description:
      "Enjamb\u2019s flexible, expansive Enterprise Data Fabric keeps evidence foundations current and alerts you to updates. Data pipelines scan millions of sources to ingest, index and extract data from 100k+ documents per day across multiple file types - and allow integration of your data, MCPs, APIs, or agentic AI frameworks.",
  },
];

export function WhyEnjambSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-[5%]">
        <div className="py-20">
          {/* Heading composition - two columns side by side */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-[10%]">
            {/* Col 1: overline + H2 */}
            <div className="flex flex-col gap-4 lg:w-[45%]">
              <p className="font-body text-[16px] font-medium uppercase tracking-[3.2px] text-[#55677E]">
                What makes Enjamb different
              </p>
              <h2 className="font-heading text-[32px] font-medium leading-[1.15] text-[#101F33] md:text-[48px]">
                AI for high-stakes science.
                <br />
                Not generic chat.
              </h2>
            </div>

            {/* Col 2: description - one paragraph with br breaks */}
            <div className="lg:w-[45%] lg:pt-8">
              <p className="font-body text-[18px] font-light leading-[27px] text-[#55677E]">
                Life sciences R&amp;D demands relevant, accurate, traceable
                answers, not just conversational fluency.
                <br />
                <br />
                Every layer of Enjamb&apos;s advanced technology infrastructure
                is purpose-built for scientific intelligence, and scientific
                execution.
              </p>
            </div>
          </div>

          {/* Divider line */}
          <div className="mt-16 border-t border-[#D4DFE4]" />

          {/* Feature grid - 2 columns */}
          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-6">
                {/* Icon placeholder */}
                <div className="h-16 w-16 rounded-lg bg-[#D4DFE4]/50" />

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
