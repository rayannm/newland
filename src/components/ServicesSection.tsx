export function ServicesSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1620px] px-[5%]">
        <div className="border border-[#b08968]">
          <div className="px-4 py-12 sm:px-6 md:px-10 md:py-14 lg:px-[60px] lg:py-[60px]">
            <h2 className="font-serif text-[34px] font-normal leading-tight text-[#2a2622] md:text-[44px]">
              Purpose-built for modern research
            </h2>

            <p className="mt-5 max-w-[780px] text-[18px] font-light leading-[1.7] text-[#6a655d]">
              Enjamb brings together the tools, systems, and workflows research
              teams rely on to move from first question to final output with
              more speed, structure, and rigor.
            </p>

            <div className="mt-10 overflow-hidden rounded-[2px] border border-[#ece5d7] bg-white">
              <div className="relative grid grid-cols-1 divide-y divide-[#ece5d7] md:grid-cols-3 md:divide-x md:divide-y-0">
                {[
                  { value: "136+", label: "Databases" },
                  { value: "216+", label: "Software Packages" },
                  { value: "164+", label: "Tools" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-h-[190px] flex-col items-center justify-center px-6 py-10 text-center md:min-h-[200px]"
                  >
                    <div className="font-serif text-[68px] font-normal leading-none text-[#111111] md:text-[74px]">
                      {stat.value}
                    </div>
                    <div className="mt-3 w-full text-center font-serif text-[20px] font-normal italic leading-none text-[#2f2a26] md:text-[22px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
