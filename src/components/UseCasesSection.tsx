"use client";

import Image from "next/image";

interface UseCaseCard {
  image: string;
  title: string;
  description: string;
}

const useCases: UseCaseCard[] = [
  {
    image: "/images/use-cases/gemini-generated-mechanisms.png",
    title: "Uncover novel mechanisms",
    description:
      "Maximize the commercial value of your proprietary data. Deploy autonomous data agents to run complex statistical analyses on raw experimental CSVs and instantly cross-reference those findings against global literature. Rapidly test hypotheses, discover hidden biological links, and identify high-value white space without the bioinformatics bottleneck.",
  },
  {
    image: "/images/use-cases/gemini-generated-target-discovery.png",
    title: "Accelerate target discovery",
    description:
      "Collapse the research timeline from months to minutes. Enjamb\u2019s autonomous agents instantly synthesize millions of papers and extract validated methodologies, freeing your R&D scientists to focus on advancing novel targets to the bench rather than drowning in manual literature reviews.",
  },
  {
    image: "/images/use-cases/gemini-generated-regulatory.jpg",
    title: "Bulletproof regulatory and grant submissions",
    description:
      "Reach absolute confidence in your INDs, grants, and journal filings. Enjamb traces every scientific claim directly back to the exact source PDF. Let repeatable, agentic formatting workflows scale your lab\u2019s output, guarantee 100% compliance with strict submission guidelines, and eliminate the risk of administrative rejection.",
  },
];

export function UseCasesSection() {
  return (
    <section className="w-full bg-[#101F33]">
      <div className="mx-auto max-w-[1620px] px-[4.5%]">
        {/* Vertical border lines */}
        <div className="flex flex-col border-x border-white/30 px-6 py-14 md:px-10 md:py-20 lg:px-[60px] lg:min-h-[998px]">
          {/* Eyebrow */}
          <p className="mb-4 font-body text-[14px] font-medium uppercase leading-none tracking-[3.2px] text-[#687E9B] md:text-[16px]">
            USE CASES
          </p>

          {/* Heading */}
          <h2 className="mb-4 font-heading text-[32px] font-medium leading-[1.2] tracking-[-0.01em] text-white md:text-[40px] md:leading-[1.2] lg:text-[48px] lg:leading-[57.6px]">
            Supporting the full research lifecycle
          </h2>

          {/* Description - wider */}
          <p className="font-body text-[17px] font-light leading-[1.6] text-[#D4DFE4] md:text-[19px] md:leading-[1.55]">
            From early discovery, through development and validation, to
            submission and post-market, research and R&amp;D teams choose
            Enjamb to execute, automate, and accelerate the vital scientific
            workflows that drive outcomes.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4 pt-20 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((card) => (
              <a
                key={card.title}
                href="https://cal.com/enjamb/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer flex-col px-1 py-4 transition-colors duration-200 hover:bg-[#0a1729] sm:px-2 md:p-4"
              >
                {/* Card Image - wider, no radius */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Card Content - grows to fill, pushes learn more to bottom */}
                <div className="flex flex-1 flex-col pt-5">
                  <h3 className="mb-4 font-heading text-[28px] font-medium leading-[1.3] text-white">
                    {card.title}
                  </h3>
                  <p className="mb-6 font-body text-[17px] font-light leading-[1.55] text-[#D4DFE4]">
                    {card.description}
                  </p>

                  {/* Learn more - pushed to bottom */}
                  <div className="mt-auto flex items-center gap-2 pt-10 text-[15px] font-medium uppercase tracking-[1px] text-white transition-colors group-hover:text-[#FF5038]">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
