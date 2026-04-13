"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const articles = [
  {
    slug: "announcing-backing-from-y-combinator",
    title: "Announcing Enjamb's $650K pre-seed",
    excerpt:
      "What this raise unlocks for collaborative scientific writing, AI-assisted drafting, and publication-ready workflows.",
    category: "Company news",
    date: "2026-03-11",
    dateLabel: "March 11, 2026",
    image: "/images/blog-featured.jpg",
    featured: true,
  },
  {
    slug: "scientists-feedback-loops",
    title: "What scientists actually want from manuscript feedback loops",
    excerpt:
      "A closer look at review cycles, annotation fatigue, and how teams keep momentum while revising.",
    category: "User research",
    date: "2026-03-08",
    dateLabel: "March 8, 2026",
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
    color: "bg-blue-100",
  },
];

const categories = [
  "All",
  "User research",
  "Product updates",
  "AI workflows",
  "Collaboration",
  "Publishing",
  "Company news",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const result = articles.filter(
      (a) => activeCategory === "All" || a.category === activeCategory
    );
    return result.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [activeCategory]);

  const featuredArticle = articles.find((a) => a.featured);
  const gridArticles = filtered.filter((a) => !a.featured);

  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="border-b border-[#b08968] bg-[#f5ecd7] py-16">
        <div className="mx-auto max-w-[1560px] px-[5%] text-center">
          <h1 className="font-heading text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-[#101F33] md:text-[56px]">
            News & Updates
          </h1>
          <p className="mx-auto mt-4 max-w-[600px] font-body text-[16px] leading-relaxed text-[#55677E]">
            What we&apos;re building, why it matters, and what we&apos;re
            learning along the way.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1560px] px-[5%]">
        {/* Featured article */}
        {featuredArticle && activeCategory === "All" && (
          <section className="mt-12">
            <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
              Featured
            </div>
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group grid grid-cols-1 overflow-hidden border border-[#b08968] md:grid-cols-2"
            >
              <div className="aspect-[16/10] overflow-hidden md:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
                  {featuredArticle.category}
                </div>
                <h2 className="font-heading text-[28px] font-medium leading-tight text-[#101F33] group-hover:text-[#3C1FFA] md:text-[32px]">
                  {featuredArticle.title}
                </h2>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-[#55677E]">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-6 text-[13px] text-[#94a3b8]">
                  {featuredArticle.dateLabel}
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Filter tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-[13px] font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#101F33] text-white"
                  : "bg-[#ebe1ca] text-[#55677E] hover:bg-[#ddd0b0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mt-8 mb-6 flex items-center justify-between border-b border-[#b08968] pb-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
            All articles
          </div>
          <p className="text-sm text-[#94a3b8]">
            {gridArticles.length} article{gridArticles.length !== 1 ? "s" : ""}
          </p>
        </div>

        {gridArticles.length === 0 && (
          <div className="mt-12 text-center">
            <h2 className="font-heading text-[24px] font-medium text-[#101F33]">
              No matching articles
            </h2>
            <p className="mt-2 text-[15px] text-[#55677E]">
              Try another category or clear your filters.
            </p>
          </div>
        )}

        {/* Articles grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gridArticles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ArticleCard({
  article,
}: {
  article: (typeof articles)[number];
}) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden border border-[#b08968]"
    >
      {article.image ? (
        <div className="aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className={`flex aspect-[16/10] items-center justify-center ${article.color || "bg-gray-100"}`}
        />
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
          {article.category}
        </div>
        <h3 className="font-heading text-[18px] font-medium leading-tight text-[#101F33] group-hover:text-[#3C1FFA]">
          {article.title}
        </h3>
        <p className="mt-2 font-body text-[13px] leading-relaxed text-[#55677E]">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-3 text-[12px] text-[#94a3b8]">
          {article.dateLabel}
        </div>
      </div>
    </Link>
  );
}
