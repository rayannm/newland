import Link from "next/link";

import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

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
        <div className="mx-auto max-w-[1120px] px-5 pb-20 pt-[172px]">
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
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="mt-8 font-heading text-[30px] leading-[1.2] tracking-[-0.02em] text-[#101F33] first:mt-0">
                    {section.title}
                  </h2>
                  <div className="my-4 h-px bg-[rgba(15,23,42,0.18)]" />
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </article>

            <aside className="lg:sticky lg:top-24 lg:self-start lg:pt-1.5">
              <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#55677E]">
                On this page
              </div>
              <nav className="mt-4 space-y-1.5" aria-label={`${title} table of contents`}>
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
                  href="mailto:support@enjamb.org"
                  className="text-[#2563eb] hover:underline"
                >
                  support@enjamb.org
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
