import Link from "next/link";

import type { BlogPost } from "@/lib/blog";

function renderSectionHref(id: string) {
  return `#${id}`;
}

export function BlogPostTemplate({
  post,
  recentPosts,
}: {
  post: BlogPost;
  recentPosts: BlogPost[];
}) {
  const sections = post.sections ?? [];

  return (
    <div className="mx-auto max-w-[1560px] px-[5%] pb-24 pt-14 lg:pt-20">
      <Link
        href="/blog"
        className="inline-flex items-center text-[14px] text-[#55677E] transition-colors hover:text-[#101F33]"
      >
        ← Back to blog
      </Link>

      <div className="mt-10 grid grid-cols-1 gap-14 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-16">
        <article className="min-w-0">
          <section className="overflow-hidden border border-[#b08968] bg-[#fbf6eb]">
            <div className="flex min-h-[280px] items-center justify-center border-b border-[#b08968] bg-[#efe2cd] px-8 py-14 text-center md:min-h-[340px]">
              <div>
                <div className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#55677E]">
                  Enjamb Blog
                </div>
                <div className="mt-5 font-heading text-[54px] font-medium leading-[0.92] tracking-[-0.07em] text-[#b08968] md:text-[84px]">
                  Enjamb
                </div>
              </div>
            </div>

            <div className="border-none px-6 pb-8 pt-10 md:px-8 lg:px-10">
              <div className="flex flex-col gap-4 border-b border-[#4c3a21]/10 pb-9 md:flex-row md:items-center md:justify-between">
                <div className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#55677E]">
                  {post.category}
                </div>
                <div className="text-[13px] text-[#55677E]">
                  {post.dateLabel} - {post.readTime}
                </div>
              </div>

              <div className="pt-10">
                <h1 className="font-heading text-[34px] font-medium leading-[1.08] text-[#101F33] md:text-[48px]">
                  {post.title}
                </h1>
                <p className="mt-5 max-w-[760px] text-[18px] leading-[1.8] text-[#55677E]">
                  {post.excerpt}
                </p>

                <div className="mt-10 flex items-center gap-4 border-t border-[#4c3a21]/10 pt-7">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#b08968] bg-[#efe2cd] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#101F33]">
                    E
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-[#101F33]">
                      {post.authorName}
                    </div>
                    <div className="mt-0.5 text-[13px] leading-[1.5] text-[#55677E]">
                      {post.authorRole}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
            <section className="lg:sticky lg:top-32 lg:self-start">
              <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#55677E]">
                Table of contents
              </div>
              <nav
                aria-label="Table of contents"
                className="mt-5 flex flex-col gap-3.5 text-[14px] text-[#55677E]"
              >
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={renderSectionHref(section.id)}
                    className="transition-colors hover:text-[#101F33]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </section>

            <article className="min-w-0 text-[18px] leading-[1.9] text-[#2f3e4d]">
              {sections.map((section) => (
                <section
                  key={section.id}
                  className="scroll-mt-28 border-t border-[#4c3a21]/8 pt-8 first:border-t-0 first:pt-0"
                  id={section.id}
                >
                  {section.id === "introduction" ? null : (
                    <h2 className="mt-4 font-heading text-[30px] font-medium leading-[1.15] text-[#101F33] sm:text-[36px]">
                      {section.title}
                    </h2>
                  )}

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-7">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets ? (
                    <ul className="mt-7 list-disc space-y-4 pl-6 text-[18px] leading-[1.8]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </article>
          </div>

          <section className="mt-14 border border-[#b08968] bg-[#f5ecd7] px-6 py-9 md:px-8 lg:px-10">
            <h2 className="font-heading text-[30px] font-medium leading-tight text-[#101F33]">
              {post.ctaTitle ?? "See what we're building"}
            </h2>
            <p className="mt-4 max-w-[760px] text-[16px] leading-[1.8] text-[#55677E]">
              {post.ctaText ??
                "Explore the Enjamb product, follow future updates on the blog, or book a demo if your team is rethinking how manuscript collaboration should work."}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://cal.com/enjamb/15min"
                target="_blank"
                rel="noreferrer"
                className="bg-[#101F33] px-5 py-3 text-[13px] font-medium uppercase tracking-[1px] text-white transition-colors hover:bg-[#1a2f47]"
              >
                Book a demo
              </a>
              <Link
                href="/blog"
                className="border border-[#101F33] px-5 py-3 text-[13px] font-medium uppercase tracking-[1px] text-[#101F33] transition-colors hover:bg-[#101F33] hover:text-white"
              >
                Back to the blog
              </Link>
            </div>
          </section>
        </article>

        <aside className="space-y-7 xl:sticky xl:top-32 xl:self-start">
          <section className="border border-[#b08968] bg-[#fbf6eb] p-6 md:p-7">
            <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#55677E]">
              Recent posts
            </div>
            <div className="mt-6 space-y-6">
              {recentPosts.map((recentPost) => (
                <Link
                  key={recentPost.slug}
                  href={`/blog/${recentPost.slug}`}
                  className="group block"
                >
                  <div className="flex aspect-[16/10] items-center justify-center border border-[#b08968] bg-[#efe2cd] text-center">
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#55677E]">
                        {recentPost.category}
                      </div>
                      <div className="mt-3 font-heading text-[26px] font-medium leading-[0.95] tracking-[-0.05em] text-[#b08968]">
                        Enjamb
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-[12px] text-[#55677E]">
                    {recentPost.dateLabel}
                  </div>
                  <h3 className="mt-2 text-[18px] font-medium leading-[1.4] text-[#101F33] transition-colors group-hover:text-[#3C1FFA]">
                    {recentPost.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          <section className="border border-[#b08968] bg-[#f5ecd7] p-6 md:p-7">
            <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#55677E]">
              Explore more
            </div>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#55677E]">
              Browse the full archive for product updates, collaboration
              patterns, and publishing workflow ideas.
            </p>
            <div className="mt-6">
              <Link
                href="/blog"
                className="inline-flex bg-[#101F33] px-5 py-3 text-[13px] font-medium uppercase tracking-[1px] text-white transition-colors hover:bg-[#1a2f47]"
              >
                Open blog archive
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
