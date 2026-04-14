const institutionLogos = [
  { src: "/images/institutions/1.png", alt: "Institution 1" },
  { src: "/images/institutions/2.png", alt: "Institution 2" },
  { src: "/images/institutions/3.png", alt: "Institution 3" },
  { src: "/images/institutions/4.png", alt: "Institution 4" },
  { src: "/images/institutions/5.png", alt: "Institution 5" },
  { src: "/images/institutions/ycombinator-full.png", alt: "Y Combinator" },
  { src: "/images/institutions/6.png", alt: "Institution 6" },
  { src: "/images/institutions/7.png", alt: "Institution 7" },
  { src: "/images/institutions/8.png", alt: "Institution 8" },
  { src: "/images/institutions/9.png", alt: "Institution 9" },
  { src: "/images/institutions/10.png", alt: "Institution 10" },
];

export function HeroSection() {
  return (
    <section className="relative w-full border-b border-[#b08968]">
      <style>{`
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Hero block */}
      <div className="mx-auto max-w-[1620px] px-[5%]">
        <div
          className="relative mt-10 overflow-hidden lg:h-[720px]"
          style={{
            backgroundImage: "url(/images/landscape-oil.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#10131a",
          }}
        >
          {/* Grid: left glass panel + right shows painting */}
          <div className="grid h-full lg:grid-cols-[720px_minmax(0,1fr)]">
            {/* Left column - glass panel */}
            <div
              className="relative flex h-full flex-col justify-center px-5 py-12 sm:px-8 lg:px-12 lg:py-16"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02) 48%, rgba(255,255,255,0.04)), rgba(16,19,26,0.72)",
                backdropFilter: "blur(22px) saturate(195%)",
                WebkitBackdropFilter: "blur(22px) saturate(195%)",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 18px 50px rgba(15,23,42,0.2), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              {/* Glass shimmer overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02) 52%, rgba(255,255,255,0.06)), radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 52%)",
                }}
              />

              <div className="relative z-10 flex w-full flex-col lg:max-w-[600px]">
                {/* Backed by */}
                <div className="mb-10 flex flex-wrap items-center gap-2 text-lg font-medium tracking-tight text-white">
                  <span>Backed by</span>
                  <a href="#" className="flex items-center gap-1.5 text-white transition-opacity hover:opacity-80">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/ycombinator.svg" width={18} height={18} alt="Y Combinator Logo" />
                    <span className="hidden md:inline">Combinator</span>
                  </a>
                  <span style={{ opacity: 0.6 }}>&amp;</span>
                  <a href="#" className="flex items-center gap-1.5 text-white transition-opacity hover:opacity-80">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/founders-inc.jpg" width={18} height={18} alt="Founders, Inc. Logo" className="rounded-sm" />
                    <span className="hidden md:inline">Founders, Inc</span>
                  </a>
                </div>

                <h1 className="font-heading text-[36px] font-medium leading-[1.2] text-white md:text-[50px] lg:text-[64px]">
                  Unlock Research Velocity with the Agentic workspace
                  for R&D teams.
                </h1>

                <p className="mt-4 w-full font-body text-[17px] leading-[1.55] tracking-[-0.015em] text-white/80 lg:max-w-[38rem]">
                  Enjamb accelerates every stage of research — literature
                  review, methodology, data analysis, grants, and drafting —
                  with scientific rigor and repeatable execution at scale.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <a
                    href="#"
                    className="inline-block bg-black px-6 py-3 font-body text-sm font-medium text-white"
                  >
                    Log in
                  </a>
                  <a
                    href="https://cal.com/enjamb/15min"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-neutral-500 px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-neutral-700"
                  >
                    Request a Demo &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right column - painting shows through */}
            <div className="relative hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Trusted by leading institutions - scrolling logos */}
      <div className="mx-auto max-w-[1620px] px-[5%]">
        <div className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:gap-0">
          <div className="shrink-0 text-center md:border-r md:border-[#b08968] md:pr-6 md:text-left">
            <p className="text-sm text-[#55677E]">
              Trusted by leading institutions
            </p>
          </div>
          <div
            className="flex-1 overflow-hidden md:pl-6"
            style={{
              maskImage:
                "linear-gradient(to right, black 0%, black calc(100% - 48px), transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black calc(100% - 48px), transparent 100%)",
            }}
          >
            <div
              className="flex items-center hover:[animation-play-state:paused]"
              style={{
                gap: "56px",
                animation: "scroll-logos 40s linear infinite",
                width: "max-content",
              }}
            >
              {[...institutionLogos, ...institutionLogos].map((logo, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-9 w-auto object-contain"
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-6" />
      </div>
    </section>
  );
}
