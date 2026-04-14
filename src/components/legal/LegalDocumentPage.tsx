import Link from "next/link";
import { Fragment, type ReactNode } from "react";

import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export type LegalBlock =
  | string
  | { h: string }
  | { ul: string[] }
  | { table: { headers: string[]; rows: string[][] } };

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  content?: LegalBlock[];
};

/**
 * Render inline markdown: **bold** and [text](url).
 */
function renderInline(text: string): ReactNode {
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern).filter(Boolean);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-[#101F33]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = /^https?:\/\//.test(href);
      if (isExternal) {
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-[#3C1FFA] hover:underline"
          >
            {label}
          </a>
        );
      }
      return (
        <Link
          key={i}
          href={href}
          className="text-[#3C1FFA] hover:underline"
        >
          {label}
        </Link>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function SectionBody({ section }: { section: LegalSection }) {
  const blocks: LegalBlock[] = section.content ?? section.paragraphs ?? [];

  return (
    <>
      {blocks.map((block, idx) => {
        if (typeof block === "string") {
          return (
            <p key={idx} className="mb-5 last:mb-0">
              {renderInline(block)}
            </p>
          );
        }
        if ("h" in block) {
          return (
            <h3
              key={idx}
              className="mb-3 mt-7 font-heading text-[20px] font-medium text-[#101F33]"
            >
              {renderInline(block.h)}
            </h3>
          );
        }
        if ("ul" in block) {
          return (
            <ul
              key={idx}
              className="mb-5 list-disc space-y-2 pl-6 marker:text-[#b08968] last:mb-0"
            >
              {block.ul.map((item, i) => (
                <li key={i}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        if ("table" in block) {
          return (
            <div key={idx} className="mb-5 overflow-x-auto last:mb-0">
              <table className="w-full border-collapse border border-[#b08968] text-left text-[15px]">
                <thead className="bg-[#f5ecd7]">
                  <tr>
                    {block.table.headers.map((header, i) => (
                      <th
                        key={i}
                        scope="col"
                        className="border border-[#b08968] px-4 py-3 font-semibold text-[#101F33]"
                      >
                        {renderInline(header)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.table.rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className="border border-[#b08968] px-4 py-3 align-top"
                        >
                          {renderInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export function LegalDocumentPage({
  title,
  lastUpdated,
  sections,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <main className="min-h-screen">
        <div className="mx-auto max-w-[1120px] px-5 pb-20 pt-[86px]">
          <header className="py-6 text-center">
            <h1 className="font-heading text-[42px] font-bold leading-[1.05] tracking-[-0.03em] text-[#101F33] md:text-[72px]">
              {title}
            </h1>
            <p className="mt-3 text-[16px] text-[#55677E]">
              Last updated {lastUpdated}
            </p>
          </header>

          <section className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-11">
            <article
              aria-label={title}
              className="text-[16px] leading-[1.65] text-[#101F33]"
            >
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mt-14 scroll-mt-28 first:mt-0"
                >
                  <h2 className="font-heading text-[30px] leading-[1.2] tracking-[-0.02em] text-[#101F33]">
                    {section.title}
                  </h2>
                  <div className="my-5 h-px bg-[rgba(15,23,42,0.18)]" />
                  <SectionBody section={section} />
                </section>
              ))}
            </article>

            <aside className="lg:sticky lg:top-24 lg:self-start lg:pt-1.5">
              <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#55677E]">
                On this page
              </div>
              <nav
                className="mt-4 space-y-1.5"
                aria-label={`${title} table of contents`}
              >
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block py-1 text-[14px] text-[#55677E] transition-colors hover:text-[#101F33]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className="my-4 h-px bg-[rgba(15,23,42,0.18)]" />

              <p className="text-[14px] leading-[1.7] text-[#55677E]">
                Questions about this document? Contact us at{" "}
                <Link
                  href="mailto:help@enjamb.org"
                  className="text-[#3C1FFA] hover:underline"
                >
                  help@enjamb.org
                </Link>
                .
              </p>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
