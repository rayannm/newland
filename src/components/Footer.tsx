import { EnjambLogo, LinkedInIcon } from "@/components/icons";

const footerLinkGroups = [
  {
    title: "Get started",
    links: [{ label: "Login", href: "#" }],
  },
  {
    title: "Enjamb",
    links: [
      { label: "About", href: "#" },
      { label: "Request a demo", href: "#" },
      { label: "Contact us", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of service", href: "/terms-of-service" },
      { label: "Cookies settings", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#D4DFE4]">
      <div className="mx-auto max-w-[1620px] px-[5%] py-16">
        {/* Footer top */}
        <div className="grid grid-cols-1 gap-[5%] lg:grid-cols-[360px_288px_288px_288px]">
          {/* Col 1: Logo + description + social */}
          <div>
            <EnjambLogo className="text-[#101F33]" />
            <p className="font-body mt-4 max-w-[350px] text-sm leading-relaxed text-[#55677E]">
              Accelerate research and R&amp;D with autonomous agents that
              synthesize, analyze, and execute across the scientific lifecycle
              at breakthrough levels of precision and speed.
            </p>
            <div className="mt-6">
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon className="text-[#101F33]" />
              </a>
            </div>
          </div>

          {/* Link group columns */}
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-4 font-body text-[16px] font-medium uppercase tracking-[3.2px] text-[#55677E]">
                {group.title}
              </div>
              <ul className="space-y-0">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-sm leading-[2] text-[#55677E] hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="mt-12 flex items-center justify-between border-t border-[#687E9B]/60 pt-5">
          <p className="font-body text-sm text-[#55677E]">
            &copy; 2026 Enjamb Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
