export interface ArticleSection {
  heading?: string;
  body?: string[];
  bullets?: string[];
}

export interface ArticleContent {
  intro?: string;
  sections: ArticleSection[];
  closing?: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateLabel: string;
  readTime?: string;
  image?: string;
  color?: string;
  featured?: boolean;
  content?: ArticleContent;
}

export const articles: BlogArticle[] = [
  {
    slug: "announcing-backing-from-y-combinator",
    title: "Announcing Enjamb's $650K pre-seed",
    excerpt:
      "What this raise unlocks for collaborative scientific writing, AI-assisted drafting, and publication-ready workflows.",
    category: "Company news",
    date: "2026-03-11",
    dateLabel: "March 11, 2026",
    readTime: "4 min read",
    image: "/images/blog-featured.jpg",
    featured: true,
    content: {
      intro:
        "Today we're sharing that Enjamb has raised a $650K pre-seed round, led by Y Combinator with participation from Founders, Inc. and a small group of researcher-operators who care deeply about how science actually gets made. This is a checkpoint, not a destination — and it unlocks the next chapter of what we're building.",
      sections: [
        {
          heading: "Why we exist",
          body: [
            "Research has a production problem. The scientific method hasn't changed, but the tooling around it has fragmented into dozens of disconnected apps — reference managers here, code notebooks there, word processors that weren't designed for citations, and figure editors that live in a separate world from the data that drives them.",
            "Researchers spend an astonishing share of their time on the administrative tax of writing — chasing formatting, reconciling references, rebuilding figures when a reviewer requests a change, and threading context between tools that don't talk to each other. That tax compounds. It slows the moment where a hypothesis meets a result, and it blunts the sharpness of the work itself.",
          ],
        },
        {
          heading: "What we're building",
          body: [
            "Enjamb is a collaborative research workspace where agents and humans work side by side across every layer of the research lifecycle — literature review, methodology, data analysis, grants, figures, and manuscript. Not another chatbot bolted onto a document, and not a wrapper that fires off prompts and hopes the output lands. Agents operate natively inside the editors your team already uses, with full context over your files, your data, and your prior work.",
          ],
          bullets: [
            "A shared workspace with Word, Excel, LaTeX, and a scientific canvas — all agent-compatible with 1:1 desktop parity.",
            "A sandboxed Python and R compute environment wired into 66 scientific databases and 150+ preloaded packages.",
            "A Zotero-style reference manager with 10,000+ citation formats, integrated directly into the drafting surface.",
            "Transparent agent reasoning — every tool call, every source, every step visible in real time.",
          ],
        },
        {
          heading: "What this raise unlocks",
          body: [
            "With this round we're growing the team in two areas. The first is research infrastructure: deeper integration with the databases and file formats that researchers live in, and the evaluation harness we use to keep agent output rigorous and reproducible. The second is the editor surface itself — a writing environment that feels as fluid as Word but that agents can drive with precision.",
            "We're also onboarding a small group of research labs as design partners. If your lab spends real hours on literature review, grant prep, or manuscript formatting, we'd like to hear from you. The best features we've shipped have come from watching scientists actually work, not from prompts in a vacuum.",
          ],
        },
        {
          heading: "Thank you",
          body: [
            "To our investors, to the researchers who sat through early demos and told us exactly what was wrong with them, and to the small team building this — thank you. There's a long road between a pre-seed and a product that truly changes how research gets made. We're heads-down on it.",
          ],
        },
      ],
      closing:
        "If you're a researcher, a lab PI, or an R&D leader and what we're building sounds like something you'd use — we'd love to talk.",
    },
  },
  {
    slug: "scientists-feedback-loops",
    title: "What scientists actually want from manuscript feedback loops",
    excerpt:
      "A closer look at review cycles, annotation fatigue, and how teams keep momentum while revising.",
    category: "User research",
    date: "2026-03-08",
    dateLabel: "March 8, 2026",
    readTime: "6 min read",
    color: "bg-amber-100",
  },
  {
    slug: "shared-draft-questions",
    title: "Five questions every team should ask before starting a shared draft",
    excerpt:
      "Short alignment rituals can reduce confusion before the first version even leaves the lab.",
    category: "Collaboration",
    date: "2026-03-05",
    dateLabel: "March 5, 2026",
    readTime: "5 min read",
    color: "bg-pink-100",
  },
  {
    slug: "workspace-automation",
    title: "What a better manuscript workspace should automate for you",
    excerpt:
      "From file organization to reviewer responses, the best tools remove administrative drag.",
    category: "Product updates",
    date: "2026-03-03",
    dateLabel: "March 3, 2026",
    readTime: "5 min read",
    color: "bg-orange-100",
  },
  {
    slug: "ai-writing-process",
    title: "Where AI can help without taking over the writing process",
    excerpt:
      "A practical framework for using assistants to speed up drafting while preserving authorship.",
    category: "AI workflows",
    date: "2026-02-28",
    dateLabel: "February 28, 2026",
    readTime: "7 min read",
    color: "bg-slate-200",
  },
  {
    slug: "submission-friction",
    title: "Reducing submission friction across journals, coauthors, and revisions",
    excerpt:
      "The most painful steps in the publication journey usually happen after the science is done.",
    category: "Publishing",
    date: "2026-02-24",
    dateLabel: "February 24, 2026",
    readTime: "6 min read",
    color: "bg-purple-100",
  },
  {
    slug: "modern-manuscript-collaboration",
    title: "Why modern manuscript collaboration still breaks down",
    excerpt:
      "A closer look at the handoff friction between drafting, feedback, versioning, and final submission.",
    category: "Collaboration",
    date: "2026-02-20",
    dateLabel: "February 20, 2026",
    readTime: "6 min read",
    color: "bg-blue-100",
  },
];

export function getArticle(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): BlogArticle[] {
  return articles.filter((a) => a.slug !== slug).slice(0, limit);
}
