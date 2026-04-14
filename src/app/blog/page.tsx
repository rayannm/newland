"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

import { blogPosts, getBlogCategories, getFeaturedBlogPost } from "@/lib/blog";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = useMemo(() => getBlogCategories(), []);

  const filtered = useMemo(() => {
    const result = blogPosts.filter(
      (a) => activeCategory === "All" || a.category === activeCategory
    );
    return result.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [activeCategory]);

  const featuredArticle = getFeaturedBlogPost();
  const gridArticles = filtered.filter((a) => !a.featured);

  return (
    <div className="pb-24">
      {/* Hero */}
      <div className="border-b border-[#b08968] bg-[#f5ecd7] py-18 md:py-20">
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
          <section className="mt-14">
            <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
              Featured
            </div>
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group grid grid-cols-1 overflow-hidden border border-[#b08968] md:grid-cols-2"
            >
              <div className="flex min-h-[240px] items-center justify-center border-b border-[#b08968] bg-[#efe2cd] px-8 py-12 md:min-h-full md:border-b-0 md:border-r">
                <div className="text-center">
                  <div className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#55677E]">
                    Enjamb Blog
                  </div>
                  <div className="mt-4 font-heading text-[34px] font-medium leading-[0.95] tracking-[-0.05em] text-[#b08968] md:text-[56px]">
                    Enjamb
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
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
        <div className="mt-14 flex flex-wrap gap-3">
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
        <div className="mb-8 mt-10 flex items-center justify-between border-b border-[#b08968] pb-5">
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
  article: (typeof blogPosts)[number];
}) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden border border-[#b08968]"
    >
      <div className="flex aspect-[16/10] items-center justify-center border-b border-[#b08968] bg-[#efe2cd] px-6 py-6 text-center">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#55677E]">
            {article.category}
          </div>
          <div className="mt-3 font-heading text-[28px] font-medium leading-[0.95] tracking-[-0.05em] text-[#b08968]">
            Enjamb
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
          {article.category}
        </div>
        <h3 className="font-heading text-[18px] font-medium leading-tight text-[#101F33] group-hover:text-[#3C1FFA]">
          {article.title}
        </h3>
        <p className="mt-3 font-body text-[13px] leading-relaxed text-[#55677E]">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-4 text-[12px] text-[#94a3b8]">
          {article.dateLabel}
        </div>
      </div>
    </Link>
  );
}
