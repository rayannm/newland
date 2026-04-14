export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1560px] px-[5%] pb-20">
      {/* Box 1 — Our mission headline (touches top) */}
      <div className="border border-[#b08968] border-t-0 px-10 py-20 lg:px-20 lg:py-28">
        <h1 className="max-w-[1100px] font-heading text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-[#101F33] md:text-[56px] lg:text-[64px]">
          <span className="text-[#82b4ea]">Our mission</span> is to accelerate
          scientific discovery through agentic AI built for how research
          actually works.
        </h1>
      </div>

      {/* Box 2 — Image left, description right (connected, tall) */}
      <div className="grid min-h-[495px] grid-cols-1 border border-t-0 border-[#b08968] lg:grid-cols-2">
        <div className="flex min-h-[280px] items-center justify-center border-b border-[#b08968] bg-[#efe2cd] p-10 lg:border-b-0 lg:border-r">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-visual.png"
            alt=""
            className="max-h-[360px] w-auto max-w-full object-contain"
          />
        </div>
        <div className="flex items-center p-10 lg:p-16">
          <p className="max-w-[500px] font-body text-[15px] leading-[1.7] text-[#55677E] md:text-[16px]">
            Enjamb&apos;s agentic AI platform for enterprise-scale scientific
            research redefines what research teams can accomplish. We give
            scientists and R&D teams a powerful new way to discover, execute,
            and publish across the full research lifecycle, automating the
            manual work behind every experiment, every paper, every grant, and
            accelerating progress on some of the most important questions
            humanity faces.
          </p>
        </div>
      </div>
    </div>
  );
}
