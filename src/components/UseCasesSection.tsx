"use client";

import Image from "next/image";

interface UseCaseCard {
  image: string;
  title: string;
  description: string;
}

const useCases: UseCaseCard[] = [
  {
    image: "/images/use-cases/target-identification.avif",
    title: "Identify and prioritize targets",
    description:
      "Save R&D scientists thousands of hours each year, and unlock a new level of revenue potential. Get biomedical clarity with mature agentic AI workflow automations built for target assessment.",
  },
  {
    image: "/images/use-cases/novel-indications.avif",
    title: "Discover novel indications",
    description:
      "Unlock new revenue growth from existing assets. Find hidden links between drugs, targets, and diseases, generate and test hypotheses fast, and identify white space for strategic prioritization.",
  },
  {
    image: "/images/use-cases/regulatory-filings.avif",
    title: "Validate evidence for regulatory filings",
    description:
      "Reach consistent confidence in submissions. Confirm MoAs, trace outcomes to biology, and expedite concise, defensible summaries while repeatable workflows scale your effort and minimize manual review.",
  },
];

export function UseCasesSection() {
  return (
    <section className="w-full bg-[#101F33]">
      <div className="mx-auto max-w-[1440px] px-[5%]">
        {/* Vertical border lines */}
        <div className="border-x border-[#1e3a5c] px-[60px] py-20">
          {/* Eyebrow */}
          <p className="mb-4 font-body text-[16px] font-medium uppercase leading-none tracking-[3.2px] text-[#687E9B]">
            USE CASES
          </p>

          {/* Heading */}
          <h2 className="mb-4 font-heading text-[48px] font-medium leading-[57.6px] text-white">
            Supporting the full R&D pipeline
          </h2>

          {/* Description - wider */}
          <p className="mb-12 font-body text-[18px] font-light leading-[27px] text-[#687E9B]">
            From early research, through clinical development, to post-market -
            life sciences enterprises choose Enjamb to execute, automate, and
            accelerate vital scientific workflows and use cases that are key to
            success.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((card) => (
              <div
                key={card.title}
                className="group flex cursor-pointer flex-col"
              >
                {/* Card Image - wider, no radius */}
                <div className="relative aspect-[2/1] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Card Content - grows to fill, pushes learn more to bottom */}
                <div className="flex flex-1 flex-col pt-4">
                  <h3 className="mb-4 font-heading text-[24px] font-medium leading-[1.4] text-white">
                    {card.title}
                  </h3>
                  <p className="mb-6 font-body text-[14px] font-light leading-[21px] text-[#687E9B]">
                    {card.description}
                  </p>

                  {/* Learn more - pushed to bottom */}
                  <div className="mt-auto pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[14px] font-medium uppercase tracking-[1px] text-white transition-colors group-hover:text-[#FF5038]"
                    >
                      Learn more
                      <span className="transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
