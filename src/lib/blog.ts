export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  date: string;
  dateLabel: string;
  readTime: string;
  featured?: boolean;
  authorName: string;
  authorRole: string;
  bannerImage?: string;
  sections?: BlogSection[];
  ctaTitle?: string;
  ctaText?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "announcing-backing-from-y-combinator",
    title: "Announcing Enjamb's $650K pre-seed",
    excerpt:
      "Backed by Y Combinator and Founders Inc. to build the first agentic research workspace for R&D teams.",
    metaDescription:
      "Enjamb announces its $650K pre-seed from Y Combinator and Founders Inc. to build the first agentic research workspace.",
    category: "Company news",
    date: "2026-04-14",
    dateLabel: "April 14, 2026",
    readTime: "5 min read",
    featured: true,
    authorName: "Rayan",
    authorRole: "Agentic research workspace",
    bannerImage: "/images/blog-yc-announcement.png",
    ctaTitle: "Be part of the movement",
    ctaText:
      "Whether you're running a university lab, leading an R&D department at a biotech, or scaling discovery at a pharma company — if you want to accelerate your research, unlock more funding, and publish faster, Enjamb is built for you. Try Enjamb at enjamb.org or request an enterprise onboarding for your team.",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "Today, we're announcing our $650K pre-seed funding round, backed by Y Combinator and Founders Inc.",
          "Enjamb is the first agentic research workspace for R&D teams. We build autonomous AI agents that execute the full research lifecycle — literature review, methodology design, data analysis, grant discovery, and manuscript drafting — inside a single collaborative platform built for how research actually happens.",
          "We're grateful to be trusted by researchers at 11+ institutions who are already using Enjamb to accelerate their publication and funding cycles.",
        ],
      },
      {
        id: "research-wasnt-meant-to-look-like-this",
        title: "Research Wasn't Meant to Look Like This",
        paragraphs: [
          "Research touches nearly every part of how a lab or R&D team operates, from submitting grants and running experiments to publishing findings and filing regulatory documents. But instead of driving discovery, the manual work behind research has become the bottleneck.",
          "Every day, millions of scientists, graduate students, and R&D engineers — people who could be curing diseases, designing new therapeutics, and pushing the frontier of human knowledge — are stuck juggling Word, Overleaf, Zotero, GraphPad, Python notebooks, Excel spreadsheets, and ChatGPT. They copy and paste between half a dozen tools. They manually reformat manuscripts for each journal. They burn weeks writing literature reviews that sit unread. They spend months on grant applications with no clear edge.",
          "This costs research billions in lost time, slows the pace of discovery, and buries breakthrough ideas under administrative overhead.",
        ],
      },
      {
        id: "legacy-tools-cant-keep-up",
        title: "Legacy Tools Can't Keep Up With How Research Works Today",
        paragraphs: [
          "Scientific workflows are highly specialized. Generic tools aren't. That mismatch is why most of the research software stack is held together with duct tape.",
          "Word processors don't understand citations. Reference managers don't understand documents. Chat tools don't understand your data. Statistical software doesn't understand the literature. No single platform knows your research goals, past work, or team context well enough to actually help you execute.",
          "So researchers fall back to fragmented workflows spread across email, Slack, shared drives, and a dozen disconnected applications — managing the same tedious tasks over and over again, manually.",
        ],
      },
      {
        id: "enjamb-is-the-agentic-workspace",
        title: "Enjamb Is the Agentic Workspace for Research",
        paragraphs: [
          "Software alone isn't enough to solve this. Chat wrappers that summarize papers and hallucinate citations aren't enough either.",
          "Enjamb is an AI-native research workspace that eliminates the manual work across the entire research lifecycle. Our agents don't just retrieve information — they execute. They run literature reviews across 250 million+ papers and ingest full-text PDFs into your workspace. They design validated methodologies and generate procurement-ready material lists with vendor catalog numbers and pricing. They analyze raw data in a sandboxed Python and R environment, run rigorous statistical tests, and deliver publication-quality figures. They draft manuscripts across 700+ journal templates with perfect formatting. They find grants matched to your research profile and write submission-ready proposals.",
          "Every output is grounded in verified scientific sources. Every citation maps to a full-text paper in your workspace. Every claim is traceable. Every step is visible to your team in real time.",
          "You don't need to change how your lab works. Enjamb adapts to your team's protocols, documents, and institutional knowledge — and automates the hardest parts behind the scenes.",
        ],
      },
      {
        id: "scaling-agentic-research",
        title: "Scaling Agentic Research to Every Lab",
        paragraphs: [
          "Since starting Enjamb, we've been adopted by labs and R&D teams across 11+ leading institutions. Our users are running full literature reviews in hours instead of weeks, drafting grant proposals in days instead of months, and analyzing datasets that used to sit unexplored for years.",
          "With our $650K pre-seed backed by Y Combinator and Founders Inc., we're deepening our agent capabilities, growing our team, and building toward a future where every research team operates at the speed their science demands.",
        ],
      },
    ],
  },
  {
    slug: "the-integrated-research-environment",
    title: "The Integrated Research Environment: Our vision for AI-native science",
    excerpt:
      "Why research needs an IDE of its own — and how agentic workspaces will collapse the friction between a question and a discovery.",
    metaDescription:
      "Enjamb's vision for the Integrated Research Environment — an AI-native workspace where researchers and agents collaborate across the full lifecycle of science.",
    category: "Company news",
    date: "2026-04-14",
    dateLabel: "April 14, 2026",
    readTime: "12 min read",
    authorName: "Rayan",
    authorRole: "Agentic research workspace",
    bannerImage: "/images/blog-ire-vision.png",
    ctaTitle: "Be part of the movement",
    ctaText:
      "Whether you're running a university lab, leading an R&D department at a biotech, or scaling discovery at a pharma company — if you want to accelerate your research, unlock more funding, and publish faster, Enjamb is built for you. Try Enjamb at enjamb.org or request an enterprise onboarding for your team.",
    sections: [
      {
        id: "the-question-vs-the-grind",
        title: "The question vs. the grind",
        paragraphs: [
          "Researchers enter their fields to ask the questions that matter — to understand how diseases progress, how materials behave under stress, how markets respond to policy, how proteins fold, how cells communicate, how the universe began.",
          "But that's not how most researchers spend their days.",
          "Picture a typical morning in a research lab. You open your laptop, pull up yesterday's experimental results, and try to make sense of the data in an Excel template that was built by a former grad student who graduated three years ago. You export a CSV, load it into Prism, and realize the statistical test you need isn't supported. You switch to a Python notebook, spend twenty minutes debugging a package import, and finally run the analysis. You paste the results into a Word document. You open Zotero to find a citation. You switch back to PubMed to check a methods section from a paper you half-remember. You jump into Overleaf because your co-author is drafting the introduction in LaTeX. You ping your PI on Slack about the figure caption. You open ChatGPT to help summarize a section, then spend ten minutes verifying its citations are real.",
          "By noon, you've bounced between eight tools, made three context switches per hour, and burned through your cognitive budget before the real thinking has even started.",
          "This is the reality of scientific research in 2026.",
        ],
      },
      {
        id: "the-software-industry-solved-this",
        title: "The software industry solved this problem decades ago",
        paragraphs: [
          "Other fields have faced the same fragmentation. Early software development was slow and painful: code was written in one editor, compiled in another tool, executed somewhere else, and debugged only after long feedback cycles. Engineers lost hours every day just moving information between systems that weren't designed to talk to each other.",
          "The breakthrough came with the Integrated Development Environment. By unifying writing, execution, debugging, version control, and testing into a single workspace, the IDE collapsed feedback loops and redefined what engineers could accomplish in a day. Suddenly, the limit on productivity wasn't tool-switching — it was the engineer's ideas.",
          "Research has never had an equivalent. The work is historically fragmented across a long tail of disconnected tools built in isolation over decades: word processors, reference managers, statistical software, LaTeX compilers, cloud notebooks, citation databases, figure editors, protocol repositories, funding databases, vendor catalogs, regulatory portals. Each tool is excellent at one job. None of them know about each other. And every researcher spends a meaningful percentage of their career writing informal glue code in their own heads to make these tools cooperate.",
          "Until now, there was no realistic path to unify them. Too many formats, too many vendors, too many edge cases, too many domains.",
        ],
      },
      {
        id: "why-this-is-changing-now",
        title: "Why this is changing now",
        paragraphs: [
          "That constraint is starting to dissolve. Large language models are no longer limited to narrow tasks or brittle pipelines. They can synthesize information across millions of documents, reason through complex problems, and learn new domains on the fly.",
          "When you build agents on top of these models, AI stops being a chatbot and starts being a collaborator. Agents can query scientific databases, read full-text PDFs, execute code in sandboxed environments, manipulate documents, orchestrate multi-step workflows, and even propose next steps. A researcher describes an intent. The agent figures out how to carry it out.",
          "For research, this is a step change. The agent becomes the integration layer that has been missing for decades — the connective tissue that can move across tools, databases, and file formats, and handle the tedious work in between. That opens the door to an entirely new workflow: researchers stay focused on the science, asking questions and interpreting results, while the agent handles the friction.",
          "We built Enjamb to make this real.",
        ],
      },
      {
        id: "what-is-an-ire",
        title: "What is an Integrated Research Environment?",
        paragraphs: [
          "An Integrated Research Environment (IRE) is a shared workspace where researchers and AI agents collaborate across the full lifecycle of scientific work. The researcher brings expertise, intuition, judgment, and taste. The agent brings the ability to search, synthesize, analyze, execute, format, cite, and keep track of everything that happens.",
          "In one place, you can:",
        ],
        bullets: [
          "Review the literature across 250 million+ papers and ingest full-text PDFs directly into your workspace.",
          "Design validated experimental methodologies from published protocols and your lab's own prior work.",
          "Generate procurement-ready materials lists with vendor catalog numbers and pricing.",
          "Analyze raw experimental data in a sandboxed Python and R environment.",
          "Run rigorous statistical tests and generate publication-ready figures.",
          "Discover grants matched to your research profile and draft submission-ready proposals.",
          "Write and format manuscripts across 700+ journal templates in Word or LaTeX.",
          "Collaborate with your team and your agents in real time, in the same documents.",
        ],
      },
      {
        id: "three-parts-that-make-it-work",
        title: "Three parts that make it work",
        paragraphs: [
          "The agent remembers what you've tried, understands your research goals, and helps you reason toward what to do next.",
          "The workspace. A purpose-built environment that unifies every research tool — full-featured Word, LaTeX, Excel, and PowerPoint editors, an integrated scientific canvas, a Python and R compute environment, a reference manager, a task manager, and file storage — all built around how researchers actually think and work.",
          "The agents. Domain-specialized AI agents that understand scientific context, reason alongside you, and execute autonomously across every stage of research. Not a single chatbot, but an orchestrated system of agents that collaborate, cross-validate, and handoff seamlessly.",
          "The integrations. Direct connections to the databases and sources researchers trust — Semantic Scholar, PubMed, arXiv, bioRxiv, OpenAlex, grants.gov, protocols.io, manufacturer catalogs, and 60+ specialized scientific databases. Every claim traceable, every citation verifiable, every output grounded in real science.",
          "This is how research should feel: the researcher asks, the agent executes, and the environment holds everything together.",
        ],
      },
      {
        id: "principles-for-building-an-ire",
        title: "Principles for building an IRE",
        paragraphs: [
          "Native to researchers. Built around how science actually happens, from first hypothesis to final submission. The interface has to be rethought from scratch to fit how researchers spend their days, not retrofitted from generic productivity tools.",
          "Rigorous. Scientific rigor is non-negotiable. Every output is reviewable, reproducible, and grounded in verified evidence. The agent flags uncertainty, challenges its own outputs, and never fabricates citations.",
          "Collaborative. A true partner, not a silent black box. The agent brainstorms, clarifies ambiguity, proposes plans before acting, and lets you intervene at any step. Every tool call, every source, every reasoning step is visible in real time.",
          "Persistent. Every project, dataset, document, and prior result stays in your workspace. Context accumulates across sessions. Institutional knowledge compounds over time. You never re-explain your research goals or re-upload your data.",
          "Collaborative across teams. Research is rarely a solo endeavor. Real-time co-editing, shared knowledge bases, persistent team context, and role-based access mean your lab, department, or R&D group operates as a unified intelligence — not a collection of silos.",
          "Scalable. Complexity is abstracted. Parallel sub-agents execute research workflows simultaneously. Compute, models, and specialized pipelines appear as simple actions, without requiring you to manage infrastructure.",
        ],
      },
      {
        id: "the-ai-native-researcher",
        title: "The AI-native researcher",
        paragraphs: [
          "The IRE changes how researchers work.",
          "You wake up thinking about questions, not about which eight tools you need to open. You describe what you want to investigate, and the agent handles the mechanics. You review, steer, decide, and interpret. What remains is the core of research: reasoning, intuition, creative leaps, and the judgment that only comes from years of expertise.",
          "The IRE shifts the focus back to science itself.",
        ],
      },
      {
        id: "from-weeks-to-hours",
        title: "From weeks to hours",
        paragraphs: [
          "An AI-native researcher operates on shorter cycles. A literature review that used to take six weeks now takes an afternoon. A grant proposal that consumed entire months can be drafted in days. A statistical analysis across dozens of experimental CSVs runs in minutes instead of sitting unexplored for years.",
          "The limiting factor shifts from logistics to thinking.",
        ],
      },
      {
        id: "expertise-without-boundaries",
        title: "Expertise without boundaries",
        paragraphs: [
          "No individual or team is an expert in every domain their work touches. A molecular biologist isn't necessarily a computational biologist. A physicist isn't always a statistician. A chemist may not track the latest advances in machine learning.",
          "An AI-native workflow bridges these gaps. Domain expertise becomes part of the environment itself, not a bottleneck that requires months of collaboration, funding, or external consultants. You can follow your curiosity farther, without stopping at the edge of what you personally know.",
        ],
      },
      {
        id: "unlocking-hidden-discoveries",
        title: "Unlocking hidden discoveries",
        paragraphs: [
          "Many of science's most important discoveries sit at intersections: between disciplines, inside under-explored datasets, and in the connections between new tools and old questions. CRISPR came from microbiologists studying bacterial immune systems. Metformin's surprising therapeutic benefits surfaced from decades of patient records. Penicillin came from a contaminated petri dish.",
          "The problem isn't that these discoveries don't exist. It's that cross-disciplinary exploration is expensive. It takes time, collaborators, constant learning, and the luxury of following tangents that might not pan out. Most researchers never go looking.",
          "An IRE lowers the activation energy. It makes it practical to connect decade-old data to models published last week, to trace ideas across fields until something clicks, to re-analyze old experiments with new techniques. The discoveries were always there. Now they're easier to reach.",
        ],
      },
      {
        id: "making-tacit-knowledge-explicit",
        title: "Making tacit knowledge explicit",
        paragraphs: [
          "Science has a provenance problem. Papers show polished conclusions, not the dozens of failed attempts, dead ends, and half-finished ideas that led to them. Labs rely on tacit knowledge — which reagent actually works, why a supposedly 30-minute step really needs 45, which protocol breaks under specific conditions, why one graduate student's results never reproduced. That knowledge disappears when people graduate, switch labs, or simply forget.",
          "In an IRE, that trail is captured by default. Every query, every analysis, every decision, and every rationale is preserved as you work. A new team member can see how the thinking evolved. A collaborator across the country can understand exactly why you made a specific call. Institutional knowledge becomes explicit, durable, and transferable.",
        ],
      },
      {
        id: "when-an-organization-becomes-ai-native",
        title: "When an organization becomes AI-native",
        paragraphs: [
          "Now imagine every researcher at a university, every scientist at a biotech, every R&D engineer at a pharma company — all working inside the same IRE.",
          "A department head gains a living map of what the organization knows. When an experiment fails, you can trace backward through prior work, cell assays, target selection, and literature context to identify exactly where assumptions broke. Documentation happens as a byproduct of doing the work. The boundary between individual contributor and institutional knowledge fades, because both operate in the same shared context.",
          "Over time, the IRE becomes the organization's scientific memory and execution layer.",
        ],
      },
      {
        id: "the-abundance-of-discoveries",
        title: "The abundance of discoveries",
        paragraphs: [
          "There is a future where working with an AI agent feels as normal as opening a pipette. Today, agents still feel new and their ROI can be hard to quantify for a skeptical PI. But so did sequencing once, and so did gene synthesis, and so did the personal computer. Costs became standard line items because the capabilities were worth it.",
          "The same shift is happening here. Running agent-driven literature reviews, orchestrating analyses, drafting grant proposals, and executing multi-step scientific workflows will become as routine as paying for reagents or instrument time.",
          "When that happens, the bottleneck is no longer bandwidth. It's imagination — the questions you think to ask.",
          "That is the future we are building toward at Enjamb. Not AI that replaces researchers, but an environment that lets researchers spend more of their time doing what drew them to research in the first place: asking hard questions, interpreting surprising results, and chasing the breakthroughs that move science forward.",
          "An abundance of discoveries.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPost() {
  return blogPosts.find((post) => post.featured);
}

export function getBlogCategories() {
  return [
    "All",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];
}

export function getRecentBlogPosts(currentSlug: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
