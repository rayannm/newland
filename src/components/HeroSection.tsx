import Image from "next/image";

const logos = [
  { src: "/images/logos/loreal.avif", alt: "L'Oreal", width: 142, height: 26 },
  { src: "/images/logos/ipsen.avif", alt: "Ipsen", width: 123, height: 35 },
  { src: "/images/logos/lupin.png", alt: "Lupin", width: 57, height: 68 },
  { src: "/images/logos/teva.avif", alt: "Teva", width: 130, height: 47 },
  { src: "/images/logos/ucb.avif", alt: "UCB", width: 60, height: 60 },
  { src: "/images/logos/eisai.avif", alt: "Eisai", width: 100, height: 60 },
  { src: "/images/logos/proqr.avif", alt: "ProQR", width: 80, height: 75 },
  { src: "/images/logos/scripps.avif", alt: "Scripps", width: 140, height: 50 },
];

export function HeroSection() {
  return (
    <section className="relative w-full border-b border-[#D4DFE4]">
      <div className="mx-auto max-w-[1440px] px-[5%]">
        {/* Hero content */}
        <div className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-24">
          <div className="flex max-w-[771px] flex-col gap-6">
            {/* Heading */}
            <h1 className="font-heading text-[36px] font-medium leading-[1.2] text-[#101F33] md:text-[50px] lg:text-[64px]">
              Unlock{" "}
              <span className="text-[#FF5038]">R&D decision velocity</span>{" "}
              with the{" "}
              <span className="text-[#3C1FFA]">Agentic AI platform</span>{" "}
              for life sciences
            </h1>

            {/* Subtitle */}
            <p className="max-w-[662px] font-body text-[16px] font-light leading-[1.5] text-[#55677E] md:text-[18px]">
              Causaly accelerates enterprises through discovery and development
              with scientific rigor - turning evidence into decision-ready
              intelligence, and best practice into repeatable execution at scale.
            </p>

            {/* CTA Button */}
            <a
              href="#request-demo"
              className="mt-[8px] inline-block self-start rounded-[4px] bg-[#101F33] px-8 py-4 text-[16px] font-medium uppercase text-white transition-colors hover:bg-[#1a2f47] md:text-[20px]"
            >
              Request a Demo
            </a>
          </div>
        </div>

        {/* Trusted by - separated with consistent spacing */}
        <div className="pb-10 pt-12">
          <p className="mb-4 text-[16px] text-[#55677E]">
            Trusted by the world&apos;s best companies
          </p>
          <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap lg:gap-10">
            {logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-h-[40px] w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
