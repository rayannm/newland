import Image from "next/image";

interface Feature {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: { label: string; text: string }[];
  image: string;
}

const features: Feature[] = [
  {
    eyebrow: "LITERATURE REVIEW",
    title: "Comprehensive Literature Reviews in Seconds",
    description:
      "Transform a research question into a comprehensive, fully formatted literature review with structured tables, thematic analysis, and deep synthesis across 250 million+ papers. Enjamb agents read the full text, map the scientific landscape, and deliver rigorous, in-depth documents that turn weeks of manual review into hours.",
    bullets: [
      {
        label: "From Question to Document",
        text: "A formatted Word document with thematic mapping, tables, and structured analysis across the full body of literature, ready in minutes.",
      },
      {
        label: "Every Source at Your Fingertips",
        text: "Every paper cited is downloaded as a full PDF directly into your workspace. Read, verify, and build on the actual source material.",
      },
      {
        label: "Built-In Reference Manager",
        text: "A complete Zotero-style reference manager with BibTeX export and 10,000+ citation formats, integrated directly into your workspace.",
      },
      {
        label: "Agentic Critical Analysis",
        text: "Surfaces research gaps, active debates, and shifts in consensus across the literature. Understand where the field is headed, identify non-obvious connections, and uncover the opportunities that drive scientific discovery forward.",
      },
    ],
    image: "/images/use-cases/target-identification.avif",
  },
  {
    eyebrow: "DATA ANALYSIS & COMPUTATION",
    title: "From Raw Data to Results, Autonomously",
    description:
      "Upload your datasets and let Enjamb agents accelerate analysis end-to-end. A sandboxed Python and R compute environment with 150+ pre-installed scientific packages, connected to 66 databases, and an integrated spreadsheet editor that your agents work inside natively. Rigorous, reproducible, and grounded in precise scientific methodology.",
    bullets: [
      {
        label: "Autonomous Statistical Analysis",
        text: "From t-tests to multi-way ANOVA to non-linear regression and survival analysis. The agent selects the correct test, executes it, and delivers results with the rigor and precision your R&D demands.",
      },
      {
        label: "66 Scientific Databases",
        text: "Genomics, proteomics, drug discovery, pathways, single-cell, clinical trials, and more. Query TCGA, PubChem, ClinVar, STRING, KEGG, AlphaFold, and dozens more directly from your workspace.",
      },
      {
        label: "Bioinformatics Pipelines",
        text: "scRNA-seq with Scanpy, differential expression with DESeq2, molecular docking, CRISPR design, protein structure prediction, flow cytometry, and full genomics workflows. Execute real pipelines at enterprise scale with scientific precision.",
      },
      {
        label: "Pattern Discovery at Scale",
        text: "Process hundreds of CSVs of raw lab data autonomously. Surface meaningful results, correlations, and limitations that manual review misses. Accelerate discovery from weeks of tedious analysis into hours of verified, actionable insight.",
      },
    ],
    image: "/images/use-cases/novel-indications.avif",
  },
  {
    eyebrow: "PRECISION METHODOLOGY DESIGN",
    title: "From Hypothesis to Science-Backed Protocol, Autonomously",
    description:
      "Accelerate experimental planning with agents that extract, synthesize, and optimize validated methodologies across the scientific literature and your lab's own prior work. Enjamb searches across 400 million+ papers, verified databases, and manufacturer documentation to deliver precise, step-by-step procedures, complete equipment lists, and procurement-ready material specs grounded in proven science.",
    bullets: [
      {
        label: "Autonomous Protocol Extraction",
        text: "Locate and synthesize validated methodologies across the full body of literature and your team's published work. Identify gaps in existing methods and optimize protocols to fit your exact experimental parameters.",
      },
      {
        label: "Institutional Knowledge, Preserved",
        text: "Upload your lab's existing SOPs and established protocols directly into your workspace. Agents reference and build on your proven methods, ensuring continuity across projects and team members.",
      },
      {
        label: "Deep Methods Sourcing",
        text: "Navigate specialized databases, supplementary files, and manufacturer documentation to surface the exact techniques, conditions, and nuances that standard methods sections omit.",
      },
      {
        label: "Comprehensive Materials & Equipment",
        text: "Generate granular material lists and full equipment specifications for complex, multi-day protocols. Every consumable, antibody, reagent, and instrument accounted for with exact quantities, concentrations, and working conditions.",
      },
      {
        label: "Automated Purchase Orders",
        text: "Generate ready-to-submit procurement invoices with exact catalog numbers, quantities, unit pricing, and trusted-vendor details pre-filled for your lab. Eliminate hours of administrative overhead from every experiment.",
      },
    ],
    image: "/images/use-cases/regulatory-filings.avif",
  },
  {
    eyebrow: "INTELLIGENT GRANT DISCOVERY",
    title: "Find Funding, Fast. From Search to Submission.",
    description:
      "Accelerate grant acquisition with agents that search 10,000+ active opportunities across NIH, NSF, DOD, DOE, and premier private foundations. Enjamb analyzes your research profile and publication history to surface high-probability matches, then carries you from discovery through proposal drafting to submission-ready output.",
    bullets: [
      {
        label: "Precision Funding Matches",
        text: "Agents analyze your research trajectory, domain expertise, and publication history to identify and rank funding opportunities with the highest probability of success.",
      },
      {
        label: "Autonomous Proposal Drafting",
        text: "Synthesize your preliminary data and specific aims into rigorous, technically sophisticated proposals that align with the standards and priorities of each funding body.",
      },
      {
        label: "Strategic Narrative Optimization",
        text: "Analyze previously funded projects and review committee priorities to refine your messaging. Ensure your application mirrors the specific impact goals and technical focus each grantor is looking for.",
      },
      {
        label: "Submission-Ready Output",
        text: "Generate complete application packages with biosketches, facilities statements, budget justifications, and required supplementary documents. Eliminate the administrative burden that slows every application cycle.",
      },
    ],
    image: "/images/use-cases/target-identification.avif",
  },
  {
    eyebrow: "SCIENTIFIC FIGURES & VISUALIZATION",
    title: "From Data to Diagram, Publication-Ready",
    description:
      "Accelerate visual communication with agents that generate precise scientific figures, data visualizations, and presentation-ready graphics across every format your research demands. Domain-specialized agentic automation delivers accurate, rigorous output in minutes, eliminating the bottleneck between results and visual communication.",
    bullets: [
      {
        label: "One-Shot Figure Generation",
        text: "Describe your experiment, pathway, or mechanism in natural language and receive accurate, professionally rendered scientific diagrams instantly. Molecular structures, biological pathways, experimental workflows, and more, generated with domain-aware precision.",
      },
      {
        label: "Autonomous Data Plotting",
        text: "Generate publication-quality graphs, plots, and data figures using matplotlib, seaborn, plotly, and specialized libraries for DNA diagrams, protein structures, and small-molecule visualization. Your agent writes and executes the code, you get the output.",
      },
      {
        label: "Scientific Canvas Editor",
        text: "Full creative control in an integrated design suite with 1,000+ scientifically accurate icons and assets. Build, customize, and refine figures on a professional canvas built for researchers.",
      },
      {
        label: "Presentations & Posters",
        text: "Generate conference posters, research presentations, TikZ diagrams, and stakeholder decks directly in your workspace. Agents structure your findings into polished, presentation-ready output across LaTeX and PowerPoint in minutes.",
      },
      {
        label: "Export-Ready Output",
        text: "Automated DPI conversion and export in all journal-mandated formats including TIFF, EPS, SVG, and PDF. Every figure crisp from screen to print, every submission compliant from the start.",
      },
    ],
    image: "/images/use-cases/novel-indications.avif",
  },
  {
    eyebrow: "MANUSCRIPT DRAFTING",
    title: "Manuscript Drafting & Formatting",
    description:
      "Go from outline to submission-ready manuscript with agents that draft, format, and cite in one continuous workflow. Full-featured Word and LaTeX editors built into the workspace with 1:1 desktop parity, so your team writes, reviews, and submits without switching tools.",
    bullets: [
      {
        label: "Structured Drafting",
        text: "Generate complete manuscript sections — introduction, methods, results, discussion — grounded in your data, figures, and literature review with inline citations.",
      },
      {
        label: "Journal-Specific Formatting",
        text: "Auto-format to the submission guidelines of 10,000+ journals. Page layout, reference style, figure placement, and supplementary materials handled automatically.",
      },
      {
        label: "Collaborative Editing",
        text: "Real-time co-editing with tracked changes, inline comments, and version history. Your entire team works in the same document simultaneously.",
      },
      {
        label: "Submission-Ready Export",
        text: "Export finalized manuscripts as Word, LaTeX, or PDF with all figures, tables, supplementary files, and cover letters packaged for direct journal submission.",
      },
    ],
    image: "/images/use-cases/regulatory-filings.avif",
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1560px] px-[4.5%]">
        {/* Section header */}
        <div className="flex flex-col gap-6 pt-20">
          <p className="font-body text-[16px] font-medium uppercase leading-[1.5] tracking-[3.2px] text-[#55677E]">
            OUR FEATURES
          </p>
          <h2 className="font-heading text-[48px] font-medium leading-[57.6px] text-[#101F33]">
            Built for every stage of research
          </h2>
          <p className="max-w-[720px] font-body text-[18px] font-light leading-[27px] text-[#55677E]">
            From first question through analysis to final output — R&amp;D teams
            choose Enjamb to execute, automate, and accelerate the scientific
            workflows that drive discovery that scales.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 flex flex-col gap-6 pb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col border border-[#D4DFE4] lg:min-h-[420px] lg:flex-row"
            >
              {/* Text content */}
              <div className="flex w-full flex-col justify-center lg:w-1/2 lg:border-r lg:border-[#D4DFE4]">
                <div className="flex flex-col gap-6 p-8 lg:px-[60px] lg:py-[60px]">
                  <p className="font-body text-[14px] font-medium uppercase leading-[1.5] tracking-[3.2px] text-[#55677E]">
                    {feature.eyebrow}
                  </p>
                  <h3 className="font-heading text-[28px] font-medium leading-[1.2] text-[#101F33] md:text-[32px]">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[16px] font-light leading-[24px] text-[#55677E]">
                    {feature.description}
                  </p>

                  {/* Bullet points */}
                  {feature.bullets && feature.bullets.length > 0 && (
                    <div className="mt-2 flex flex-col gap-4 border-t border-[#D4DFE4] pt-6">
                      {feature.bullets.map((bullet) => (
                        <div key={bullet.label} className="flex gap-3">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#101F33]" />
                          <div>
                            <span className="font-body text-[14px] font-medium text-[#101F33]">
                              {bullet.label}
                            </span>
                            <span className="font-body text-[14px] font-light text-[#55677E]">
                              {" — "}{bullet.text}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="#"
                      className="bg-[#101F33] px-5 py-2.5 font-body text-[13px] font-medium uppercase tracking-[1px] text-white transition-colors hover:bg-[#1a2f47]"
                    >
                      Log in
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-1.5 bg-neutral-500 px-5 py-2.5 font-body text-[13px] font-medium uppercase tracking-[1px] text-white transition-colors hover:bg-neutral-700"
                    >
                      Request a demo <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative flex w-full items-center justify-center overflow-hidden lg:w-1/2">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
