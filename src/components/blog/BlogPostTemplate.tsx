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
    <div className="mx-auto max-w-[1944px] px-[5%] pb-24 pt-14 lg:pt-20">
      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[220px_minmax(0,1080px)_220px] 2xl:items-start 2xl:gap-12">
        {/* Left column: Back link + floating Table of Contents */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center text-[14px] text-[#55677E] transition-colors hover:text-[#101F33]"
          >
            ← Back to blog
          </Link>
          <aside className="mt-10 hidden 2xl:block">
            <div className="sticky top-32">
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
            </div>
          </aside>
        </div>

        <article className="mx-auto w-full min-w-0 max-w-[1080px]">
          <section className="overflow-hidden border border-[#b08968] bg-[#fbf6eb]">
            <div className="border-none px-6 pb-10 pt-10 md:px-8 lg:px-10">
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

                <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-[#4c3a21]/10 pt-7">
                  <div className="flex items-center gap-4">
                    <div className="h-[44px] w-[44px] shrink-0 overflow-hidden border border-[#b08968]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/rayan-headshot.jpg"
                        alt="Rayan Mubarak"
                        className="h-full w-full object-cover"
                        style={{ objectPosition: "center 58%", transform: "scale(2.4)", transformOrigin: "center 58%" }}
                      />
                    </div>
                    <div>
                      <div className="text-[17px] font-semibold text-[#101F33]">
                        Rayan Mubarak
                      </div>
                      <div className="mt-1 text-[14px] leading-[1.5] text-[#101F33]">
                        CEO, Enjamb
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-[44px] w-[44px] shrink-0 overflow-hidden border border-[#b08968]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/maadhav-headshot.jpg"
                        alt="Maadhav Deekshitha"
                        className="h-full w-full object-cover"
                        style={{ objectPosition: "center 10%", transform: "scale(1.1)", transformOrigin: "center 20%" }}
                      />
                    </div>
                    <div>
                      <div className="text-[17px] font-semibold text-[#101F33]">
                        Maadhav Deekshitha
                      </div>
                      <div className="mt-1 text-[14px] leading-[1.5] text-[#101F33]">
                        CTO, Enjamb
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {post.bannerImage ? (
              <div className="relative aspect-[16/9] overflow-hidden border-t border-[#b08968]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.bannerImage}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex min-h-[420px] items-center justify-center border-t border-[#b08968] bg-[#efe2cd] px-8 py-20 text-center md:min-h-[520px]">
                <div>
                  <div className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#55677E]">
                    Enjamb Blog
                  </div>
                  <div className="mt-5 font-heading text-[64px] font-medium leading-[0.92] tracking-[-0.07em] text-[#b08968] md:text-[104px]">
                    Enjamb
                  </div>
                </div>
              </div>
            )}
          </section>

          <div className="mt-12 text-[18px] leading-[1.9] text-[#2f3e4d]">
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
      </div>

      <section className="mx-auto mt-20 w-full max-w-[1680px]">
        <div className="flex items-end justify-between gap-6">
            <h2 className="font-heading text-[32px] font-medium leading-tight text-[#101F33] md:text-[40px]">
              Related posts
            </h2>
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 bg-[#101F33] px-5 py-3 text-[13px] font-medium uppercase tracking-[1px] text-white transition-colors hover:bg-[#1a2f47]"
            >
              More articles <span>&rarr;</span>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((recentPost) => (
              <Link
                key={recentPost.slug}
                href={`/blog/${recentPost.slug}`}
                className="group flex flex-col overflow-hidden border border-[#b08968] bg-[#fbf6eb]"
              >
                {recentPost.bannerImage ? (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[#b08968]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={recentPost.bannerImage}
                      alt={recentPost.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center border-b border-[#b08968] bg-[#efe2cd] px-6 py-6 text-center">
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#55677E]">
                        {recentPost.category}
                      </div>
                      <div className="mt-3 font-heading text-[28px] font-medium leading-[0.95] tracking-[-0.05em] text-[#b08968]">
                        Enjamb
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-[12px] text-[#55677E]">
                    {recentPost.dateLabel}
                  </div>
                  <h3 className="mt-2 font-heading text-[20px] font-medium leading-[1.35] text-[#101F33] transition-colors group-hover:text-[#3C1FFA]">
                    {recentPost.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#55677E]">
                    {recentPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
    </div>
  );
}
