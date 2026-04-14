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
  sections?: BlogSection[];
  ctaTitle?: string;
  ctaText?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "announcing-backing-from-y-combinator",
    title: "Announcing Enjamb's $650K pre-seed",
    excerpt:
      "What this raise unlocks for collaborative scientific writing, AI-assisted drafting, and publication-ready workflows.",
    metaDescription:
      "Enjamb announces its $650K pre-seed and outlines what the milestone unlocks for collaborative scientific writing.",
    category: "Company news",
    date: "2026-03-11",
    dateLabel: "March 11, 2026",
    readTime: "3 min read",
    featured: true,
    authorName: "Enjamb team",
    authorRole: "Product, collaboration, and publishing workflows",
    ctaTitle: "See what we're building",
    ctaText:
      "Explore the Enjamb product, follow future updates on the blog, or book a demo if your team is rethinking how manuscript collaboration should work.",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "Scientific teams still spend too much time moving drafts between disconnected tools, cleaning up formatting, and chasing version control issues that have nothing to do with the science itself. Enjamb exists to change that.",
          "This pre-seed gives us more room to invest in the product areas our users care about most: faster manuscript collaboration, more useful AI assistance inside the writing flow, and smoother submission-ready output when it is time to publish.",
        ],
      },
      {
        id: "what-this-unlocks",
        title: "What this unlocks",
        paragraphs: [
          "We are focused on building the writing workspace research teams actually need, not another generic document editor. That means tighter support for the messy middle of manuscript work: drafting, coauthor feedback, revisions, and preparing final files for journals.",
        ],
        bullets: [
          "Better collaboration flows for multi-author manuscript drafting and review.",
          "More useful AI workflows that help with writing without replacing authorship.",
          "Stronger publication-ready tooling for the final submission process.",
        ],
      },
      {
        id: "why-now",
        title: "Why now",
        paragraphs: [
          "The need is clear. Research teams are producing more complex, collaborative work, but the tools around writing and submission still create avoidable drag. We believe there is an opportunity to make the manuscript process faster, calmer, and more reliable from first draft to final package.",
          "We are grateful to everyone who has supported us early, including the researchers, labs, design partners, and backers who helped shape the direction of Enjamb.",
        ],
      },
      {
        id: "what-comes-next",
        title: "What comes next",
        paragraphs: [
          "Over the coming months we will keep improving the core manuscript workspace, deepen the assistant experience around drafting and revision, and keep polishing the parts of the workflow that teams usually have to stitch together themselves.",
          "This milestone is just the start. We are excited to keep building with the researchers and teams who are pushing the product forward with us.",
        ],
      },
    ],
  },
  {
    slug: "scientists-feedback-loops",
    title: "What scientists actually want from manuscript feedback loops",
    excerpt:
      "A closer look at review cycles, annotation fatigue, and how teams keep momentum while revising.",
    metaDescription:
      "A closer look at manuscript feedback loops, review cycles, and how research teams maintain momentum while revising.",
    category: "User research",
    date: "2026-03-08",
    dateLabel: "March 8, 2026",
    readTime: "4 min read",
    authorName: "Enjamb team",
    authorRole: "User research and workflow design",
    ctaTitle: "Build calmer review cycles",
    ctaText:
      "If your team is buried in comments, version confusion, and revision churn, Enjamb is built to make manuscript feedback loops easier to manage.",
    sections: [
      {
        id: "why-feedback-loops-break",
        title: "Why feedback loops break down",
        paragraphs: [
          "Most teams do not struggle because they lack comments. They struggle because feedback arrives in too many places, at different levels of specificity, and without a shared system for deciding what happens next.",
          "A coauthor flags a paragraph in one document, another sends a list by email, and a third leaves a note about figures in a meeting. The scientific work is still moving forward, but the coordination layer becomes fragile and expensive.",
        ],
      },
      {
        id: "what-scientists-actually-want",
        title: "What scientists actually want",
        paragraphs: [
          "When researchers talk about better feedback loops, they are usually asking for the same three things: a single place where comments live, clear ownership over follow-up, and confidence that a resolved point will stay resolved.",
          "They do not want an elaborate project-management ritual layered on top of writing. They want the manuscript itself to remain the center of gravity while decisions, revisions, and rationale stay connected to the text.",
        ],
        bullets: [
          "Comments attached directly to the relevant draft context.",
          "A shared view of what is open, resolved, and blocked.",
          "Lightweight accountability without turning the manuscript into a task board.",
        ],
      },
      {
        id: "where-tools-create-friction",
        title: "Where tools create friction",
        paragraphs: [
          "The biggest failure mode is context switching. Every time a team has to move from manuscript to email thread to spreadsheet tracker and back again, it becomes harder to keep the revision history coherent.",
          "That fragmentation also makes it harder for AI tools to be helpful. If the manuscript lives in one place and the feedback logic lives somewhere else, assistants can summarize pieces of the process but cannot actually support the full revision workflow.",
        ],
      },
      {
        id: "what-good-looks-like",
        title: "What good looks like",
        paragraphs: [
          "The best review loop feels boring in the best possible way. A comment arrives, the right person sees it, the team makes a decision, and the draft moves forward without drama.",
          "That is the bar we care about. Faster reviews, fewer duplicate conversations, and less confusion about what changed and why.",
        ],
      },
    ],
  },
  {
    slug: "shared-draft-questions",
    title: "Five questions every team should ask before starting a shared draft",
    excerpt:
      "Short alignment rituals can reduce confusion before the first version even leaves the lab.",
    metaDescription:
      "Five alignment questions that reduce confusion before a shared manuscript draft begins.",
    category: "Collaboration",
    date: "2026-03-05",
    dateLabel: "March 5, 2026",
    readTime: "4 min read",
    authorName: "Enjamb team",
    authorRole: "Collaboration systems",
    sections: [
      {
        id: "why-starting-well-matters",
        title: "Why starting well matters",
        paragraphs: [
          "The earliest decisions in a shared draft shape everything that follows. If a team starts writing before it agrees on audience, ownership, structure, and source of truth, confusion compounds quickly.",
          "A half hour of alignment at the beginning can save days of cleanup later. Most collaboration pain shows up much later than the decision that caused it.",
        ],
      },
      {
        id: "question-one",
        title: "1. What is this draft trying to do?",
        paragraphs: [
          "Every document has a job. Some manuscripts are trying to persuade, others are trying to document, and others are trying to frame an early result for internal decision-making.",
          "If the team is not aligned on the job of the document, it will argue about tone, scope, and detail in circles.",
        ],
      },
      {
        id: "question-two",
        title: "2. Who owns which parts?",
        paragraphs: [
          "Shared authorship does not mean diffuse ownership. Teams move faster when each section has a clear primary owner, even if multiple people contribute to revisions.",
          "Ownership also helps collaborators know where to leave comments versus where to make direct edits.",
        ],
      },
      {
        id: "question-three-to-five",
        title: "3. Which tools are in play and what counts as final?",
        paragraphs: [
          "Before the first draft starts, decide where references live, where figures are maintained, where statistical outputs come from, and which version of the manuscript counts as current.",
          "The final three questions are simple: where do comments live, how do we resolve disagreements, and what is the submission path? If those answers are clear, collaboration gets much calmer.",
        ],
        bullets: [
          "Where does the team leave review comments?",
          "Who makes the final call on disputed edits?",
          "What file or workspace is the canonical version at every stage?",
        ],
      },
    ],
  },
  {
    slug: "workspace-automation",
    title: "What a better manuscript workspace should automate for you",
    excerpt:
      "From file organization to reviewer responses, the best tools remove administrative drag.",
    metaDescription:
      "From file organization to reviewer responses, the best manuscript tools should remove administrative drag.",
    category: "Product updates",
    date: "2026-03-03",
    dateLabel: "March 3, 2026",
    readTime: "5 min read",
    authorName: "Enjamb team",
    authorRole: "Product systems",
    sections: [
      {
        id: "automation-should-remove-drag",
        title: "Automation should remove drag",
        paragraphs: [
          "Good automation handles the repetitive, brittle, and administrative parts of manuscript work. It should not get in the way of scientific judgment, authorship, or interpretation.",
          "The point is not to automate for the sake of novelty. The point is to remove the tasks that consume time without adding insight.",
        ],
      },
      {
        id: "best-automation-targets",
        title: "The best automation targets",
        paragraphs: [
          "There are a few areas where automation consistently helps: reference formatting, document structure checks, reviewer response organization, file naming, figure export requirements, and template conformance.",
          "These are painful jobs because they are detail-heavy, high-friction, and easy to get wrong under deadline pressure.",
        ],
        bullets: [
          "Formatting references and citations consistently.",
          "Checking journal compliance before submission.",
          "Tracking revision requests across authors and reviewers.",
          "Turning source data and notes into draft-ready material faster.",
        ],
      },
      {
        id: "what-not-to-automate-blindly",
        title: "What not to automate blindly",
        paragraphs: [
          "Claims, interpretations, and final scientific framing need human review. Automation can prepare options and speed up revision, but researchers still need to decide what is defensible and what is worth saying.",
          "This matters most when teams are tired. The closer you get to submission, the more tempting it is to accept machine-generated structure without fully inspecting it.",
        ],
      },
      {
        id: "toward-a-better-workspace",
        title: "Toward a better workspace",
        paragraphs: [
          "A better manuscript workspace does not feel like an AI toy sitting beside a document. It feels like the environment itself understands the jobs surrounding the draft and helps carry them with less overhead.",
          "That is the kind of automation we care about: visible, useful, and grounded in the real workflow.",
        ],
      },
    ],
  },
  {
    slug: "ai-writing-process",
    title: "Where AI can help without taking over the writing process",
    excerpt:
      "A practical framework for using assistants to speed up drafting while preserving authorship.",
    metaDescription:
      "A practical framework for using AI assistants to speed up drafting while preserving authorship.",
    category: "AI workflows",
    date: "2026-02-28",
    dateLabel: "February 28, 2026",
    readTime: "5 min read",
    authorName: "Enjamb team",
    authorRole: "Assistant design",
    sections: [
      {
        id: "where-ai-is-actually-helpful",
        title: "Where AI is actually helpful",
        paragraphs: [
          "AI is most helpful when it speeds up the parts of writing that are expensive but not identity-defining. Summarizing reviewer themes, restructuring a section, generating alternatives, and helping maintain consistency are all fair game.",
          "It becomes less helpful when teams expect it to replace the scientific judgment that gives a manuscript its value.",
        ],
      },
      {
        id: "preserving-authorship",
        title: "Preserving authorship",
        paragraphs: [
          "Researchers are right to care about authorship. The solution is not to avoid AI entirely. It is to use it in ways that keep the human author clearly in charge of argument, evidence, and final expression.",
          "That usually means treating assistants as accelerators, not originators. They can help you move, but they should not decide what the work means.",
        ],
      },
      {
        id: "practical-guidelines",
        title: "Practical guidelines",
        paragraphs: [
          "Teams that use AI well tend to establish simple internal rules. They decide which tasks are safe to delegate, which outputs require review, and which decisions remain fully human.",
        ],
        bullets: [
          "Use AI to prepare structure, not final claims.",
          "Review every generated output against sources and intent.",
          "Keep a clear record of where AI helped and where authors made the final decision.",
        ],
      },
      {
        id: "the-right-standard",
        title: "The right standard",
        paragraphs: [
          "The standard is not whether AI touched the draft. The standard is whether the final document is accurate, accountable, and clearly owned by the authors.",
          "If a team can use AI and still meet that bar, then the technology is serving the work rather than distorting it.",
        ],
      },
    ],
  },
  {
    slug: "submission-friction",
    title: "Reducing submission friction across journals, coauthors, and revisions",
    excerpt:
      "The most painful steps in the publication journey usually happen after the science is done.",
    metaDescription:
      "Why submission friction across journals, coauthors, and revisions slows research teams down.",
    category: "Publishing",
    date: "2026-02-24",
    dateLabel: "February 24, 2026",
    readTime: "4 min read",
    authorName: "Enjamb team",
    authorRole: "Publishing workflows",
    sections: [
      {
        id: "where-submission-gets-painful",
        title: "Where submission gets painful",
        paragraphs: [
          "For many teams, the worst part of manuscript work starts after the science is largely done. Submission introduces a new class of tasks: formatting requirements, supplementary files, metadata fields, reviewer responses, and packaging details that vary by destination.",
          "Those tasks are not intellectually central, but they are operationally expensive. They slow down teams at the exact moment they want momentum.",
        ],
      },
      {
        id: "friction-comes-from-translation",
        title: "Friction comes from translation",
        paragraphs: [
          "Most submission work is translation between systems. The manuscript needs to become a journal-compliant package. The references need to become the right style. The figures need to become the right format. The authorship details need to be copied into forms accurately.",
          "Every translation step introduces risk. Something gets missed, reformatted incorrectly, or separated from the source context that made it understandable.",
        ],
      },
      {
        id: "what-teams-need",
        title: "What teams need",
        paragraphs: [
          "Teams need a submission layer that is closer to the draft itself. Instead of treating submission as a last-mile scramble, the workflow should surface formatting issues early and keep required metadata connected to the manuscript from the start.",
        ],
        bullets: [
          "Clear checks for missing required sections.",
          "Consistent citation and reference handling.",
          "Figure and supplementary file readiness before the deadline week.",
          "A single place to prepare the final package.",
        ],
      },
      {
        id: "submission-should-not-feel-chaotic",
        title: "Submission should not feel chaotic",
        paragraphs: [
          "The final handoff should feel procedural, not panicked. If it feels chaotic, the tooling is failing the team.",
          "That is why we think manuscript systems need to care about the submission workflow as much as they care about drafting.",
        ],
      },
    ],
  },
  {
    slug: "modern-manuscript-collaboration",
    title: "Why modern manuscript collaboration still breaks down",
    excerpt:
      "A closer look at the handoff friction between drafting, feedback, versioning, and final submission.",
    metaDescription:
      "A closer look at why modern manuscript collaboration still breaks down between drafting and submission.",
    category: "Collaboration",
    date: "2026-02-20",
    dateLabel: "February 20, 2026",
    readTime: "4 min read",
    authorName: "Enjamb team",
    authorRole: "Collaboration systems",
    sections: [
      {
        id: "why-collaboration-still-breaks",
        title: "Why collaboration still breaks down",
        paragraphs: [
          "Modern teams have more ways to work together than ever, but manuscript collaboration still breaks down because the work spans too many disconnected surfaces. Drafting, references, figures, comments, approvals, and final exports often live in different systems.",
          "That fragmentation creates ambiguity. People stop knowing which version is current, where feedback belongs, and whether a change in one place has implications elsewhere.",
        ],
      },
      {
        id: "handoff-costs",
        title: "The hidden cost of handoffs",
        paragraphs: [
          "Every handoff between collaborators creates an opportunity for drift. The person editing the results section may not have the latest figure context. The person fixing references may not see a structural change in the introduction. The person preparing the submission may be working from a slightly stale export.",
          "Those are not edge cases. They are the daily reality of manuscript work for many labs and teams.",
        ],
      },
      {
        id: "what-better-collaboration-looks-like",
        title: "What better collaboration looks like",
        paragraphs: [
          "Better collaboration means fewer translation layers. The manuscript, comments, data references, and revision logic should live close enough together that collaborators can move with confidence.",
          "It also means assistants need access to the same context the team has, so they can help with revision, summaries, and formatting without forcing more copy-paste between tools.",
        ],
      },
      {
        id: "the-goal",
        title: "The goal",
        paragraphs: [
          "The goal is not just easier co-editing. The goal is making the entire process of collaborative scientific writing less fragile.",
          "When teams feel less operational drag, they can spend more energy on the work that actually matters.",
        ],
      },
    ],
  },
  {
    slug: "how-labs-keep-manuscript-momentum",
    title: "How labs keep manuscript momentum after the first draft",
    excerpt:
      "What separates teams that finish strong from teams that stall after a promising first version.",
    metaDescription:
      "How research teams maintain manuscript momentum after the first draft and avoid revision stalls.",
    category: "Collaboration",
    date: "2026-02-16",
    dateLabel: "February 16, 2026",
    readTime: "5 min read",
    authorName: "Enjamb team",
    authorRole: "Workflow research",
    sections: [
      {
        id: "the-first-draft-is-not-the-hard-part",
        title: "The first draft is not the hard part",
        paragraphs: [
          "For many labs, the hardest part of a manuscript is not getting the first full version on the page. It is maintaining momentum once that draft exists and everyone starts seeing what still needs work.",
          "The first draft creates optimism. The revision phase tests discipline.",
        ],
      },
      {
        id: "why-teams-stall",
        title: "Why teams stall",
        paragraphs: [
          "Stalls happen when ownership gets fuzzy, comments pile up without decisions, or no one is responsible for converting review into a concrete next version.",
          "Momentum also drops when the manuscript becomes emotionally heavier. The closer a draft gets to done, the easier it is for every unresolved detail to feel more consequential.",
        ],
      },
      {
        id: "practices-that-help",
        title: "Practices that help",
        paragraphs: [
          "Teams that keep moving tend to use a small set of simple practices. They review on a cadence, they decide quickly, and they preserve a clean source of truth for the next round.",
        ],
        bullets: [
          "One owner for each active revision cycle.",
          "A clear rule for when comments become edits.",
          "Short checkpoints that end with decisions, not just discussion.",
        ],
      },
      {
        id: "finishing-is-a-system",
        title: "Finishing is a system",
        paragraphs: [
          "Finishing a manuscript is not just a matter of motivation. It is a systems problem.",
          "When the workflow reduces ambiguity, teams can keep moving even when the draft is in its messy middle.",
        ],
      },
    ],
  },
  {
    slug: "what-reviewer-response-work-really-costs",
    title: "What reviewer response work really costs",
    excerpt:
      "Reviewer responses look small on paper, but they often expand into one of the most expensive phases of the writing cycle.",
    metaDescription:
      "Why reviewer response work becomes one of the most expensive parts of the manuscript cycle.",
    category: "Publishing",
    date: "2026-02-12",
    dateLabel: "February 12, 2026",
    readTime: "5 min read",
    authorName: "Enjamb team",
    authorRole: "Publishing workflows",
    sections: [
      {
        id: "responses-are-more-than-letters",
        title: "Responses are more than letters",
        paragraphs: [
          "A reviewer response is rarely just a letter. It is a bundle of linked work: manuscript edits, figure updates, source checks, reference changes, and coordination across authors.",
          "That is why the response phase often feels larger than the comment list suggests.",
        ],
      },
      {
        id: "where-the-cost-comes-from",
        title: "Where the cost comes from",
        paragraphs: [
          "The real cost comes from synchronization. Teams need to ensure that every promised change in the response document is actually reflected in the manuscript and supporting files.",
          "When those systems are disconnected, confidence drops and review time increases.",
        ],
      },
      {
        id: "what-better-response-work-needs",
        title: "What better response work needs",
        paragraphs: [
          "The response workflow should connect comments, edits, and supporting evidence in one place. Otherwise the team ends up manually rebuilding trust in the package before resubmission.",
        ],
        bullets: [
          "A linked view of reviewer comments and resulting manuscript changes.",
          "A way to assign response ownership without losing shared context.",
          "Clear evidence for what changed and where.",
        ],
      },
      {
        id: "less-drag-more-confidence",
        title: "Less drag, more confidence",
        paragraphs: [
          "The best reviewer response process does not just make the team faster. It makes the resubmission package easier to trust.",
          "That matters because confidence, not just speed, is what determines whether the team is ready to send the work back out.",
        ],
      },
    ],
  },
  {
    slug: "how-research-teams-decide-what-to-automate",
    title: "How research teams decide what to automate first",
    excerpt:
      "The right first automation target is usually not the flashiest one. It is the one that removes the most repeated drag.",
    metaDescription:
      "How research teams can choose the highest-value automation targets first.",
    category: "AI workflows",
    date: "2026-02-08",
    dateLabel: "February 8, 2026",
    readTime: "5 min read",
    authorName: "Enjamb team",
    authorRole: "Product systems",
    sections: [
      {
        id: "start-with-repeated-friction",
        title: "Start with repeated friction",
        paragraphs: [
          "Teams often get excited about automating the most visible task in the workflow. But the best place to start is usually the most repeated source of drag, not the most impressive demo.",
          "Repeated friction compounds. If a team loses small amounts of time every day to formatting, file organization, or revision tracking, the annual cost becomes meaningful very quickly.",
        ],
      },
      {
        id: "good-first-targets",
        title: "Good first targets",
        paragraphs: [
          "A good first target is high-frequency, low-ambiguity, and easy to verify. It should save time without introducing a trust problem.",
        ],
        bullets: [
          "Template conformance and format checks.",
          "Citation cleanup and reference organization.",
          "Summarizing change requests into structured next steps.",
        ],
      },
      {
        id: "bad-first-targets",
        title: "Bad first targets",
        paragraphs: [
          "A bad first target is one where the output is hard to judge, expensive to correct, or likely to create a debate about ownership. Those can still be valuable later, but they are not where most teams should begin.",
        ],
      },
      {
        id: "build-trust-in-steps",
        title: "Build trust in steps",
        paragraphs: [
          "Automation adoption works best when the team can build trust incrementally. One reliable win creates permission for the next.",
          "That is why choosing the first automation target carefully matters so much.",
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
