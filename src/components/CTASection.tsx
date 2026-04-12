export function CTASection() {
  return (
    <section className="w-full bg-[#F2F2F2]">
      <div className="mx-auto max-w-[1440px] px-[5%] pt-16 pb-28">
        <div className="flex flex-col gap-8 md:flex-row md:gap-[5%]">
          {/* Left column (50%) */}
          <div className="flex-1">
            <div className="flex flex-col">
              {/* Top gradient line */}
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(to right, white, transparent, white)",
                }}
              />

              {/* Heading wrapper */}
              <div className="py-12">
                <h2 className="font-heading text-[32px] font-medium leading-tight text-[#101F33] md:text-[48px]">
                  Get started with Causaly
                </h2>
              </div>

              {/* Bottom gradient line */}
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(to right, white, transparent, white)",
                }}
              />
            </div>
          </div>

          {/* Right column (50%) */}
          <div className="flex flex-1 flex-col justify-center py-8">
            <p className="font-body text-[16px] font-light leading-relaxed text-[#55677E] md:text-[18px]">
              Ready to transform the way your R&amp;D teams discover and
              deliver? Take the first step - see Causaly for yourself.
            </p>
            <a
              href="#"
              className="mt-6 inline-block self-start rounded-[4px] bg-[#101F33] px-8 py-4 text-[18px] font-medium uppercase text-white transition-opacity hover:opacity-90 md:text-[20px]"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
