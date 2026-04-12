export function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-[5%]">
        {/* Vertical + horizontal borders wrapper */}
        <div className="border-x border-t border-[#D4DFE4]">
          <div className="px-[60px] pt-[80px] pb-[64px]">
            <p className="font-body text-[16px] font-medium uppercase tracking-[3.2px] text-[#55677E]">
              Professional services
            </p>

            <h2 className="mt-6 font-heading text-[32px] font-medium leading-tight text-[#101F33] md:text-[48px]">
              Explore science. Automate work.
              <br />
              We&apos;ll support you all the way.
            </h2>

            <p className="mt-6 font-body text-[16px] font-light leading-[27px] text-[#55677E] md:text-[18px]">
              Leverage the expertise of Enjamb&apos;s PhD scientists to optimize
              the way your R&amp;D teams work, codify your specialized workflows,
              and accelerate the scientific decisions that really matter.
              <br />
              Our Science and Change Management teams bring cross-functional
              experience in AI strategy and enterprise-level biomedical research
              and development, providing end-to-end support - from strategic
              alignment, deployment planning and adoption, to workflow execution
              and ongoing research enablement.
            </p>
          </div>

          {/* Empty space with bottom border */}
          <div className="h-20 border-t border-[#D4DFE4]" />
        </div>
        {/* Bottom horizontal line */}
        <div className="border-b border-[#D4DFE4]" />
      </div>
    </section>
  );
}
