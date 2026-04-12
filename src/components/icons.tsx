import { type SVGProps } from "react";

export function EnjambLogo({ className, ...props }: { className?: string } & Record<string, unknown>) {
  return (
    <span className={`inline-flex items-center gap-2 ${className || ""}`} {...props}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/enjamb-logo.png" alt="" width={28} height={28} className="h-7 w-7 object-contain" />
      <span className="text-2xl font-bold tracking-[-0.02em] text-black">Enjamb</span>
    </span>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 1L1 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 15L1 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.5 6.9231L8.5 11.9231L3.5 6.9231" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 7H15M15 7L9 1M15 7L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HamburgerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3.724 5.71533H0.511971C0.369416 5.71533 0.253906 5.83089 0.253906 5.9734V16.2923C0.253906 16.4348 0.369416 16.5503 0.511971 16.5503H3.724C3.86655 16.5503 3.98206 16.4348 3.98206 16.2923V5.9734C3.98206 5.83089 3.86655 5.71533 3.724 5.71533Z" fill="currentColor" />
      <path d="M2.11954 0.585449C0.950813 0.585449 0 1.53523 0 2.70266C0 3.87061 0.950813 4.82091 2.11954 4.82091C3.28723 4.82091 4.23753 3.87061 4.23753 2.70266C4.23753 1.53523 3.28723 0.585449 2.11954 0.585449Z" fill="currentColor" />
      <path d="M11.8793 5.46484C10.5047 5.46484 9.52344 6.02539 8.94141 6.66406V5.97363C8.94141 5.83105 8.82588 5.71558 8.68335 5.71558H5.60547C5.46289 5.71558 5.34741 5.83105 5.34741 5.97363V16.2925C5.34741 16.4351 5.46289 16.5506 5.60547 16.5506H8.81055C8.95312 16.5506 9.06861 16.4351 9.06861 16.2925V11.2012C9.06861 9.58105 9.55273 8.9541 10.7539 8.9541C12.0635 8.9541 12.1719 10.0176 12.1719 11.291V16.2925C12.1719 16.4351 12.2874 16.5506 12.4299 16.5506H15.6367C15.7793 16.5506 15.8948 16.4351 15.8948 16.2925V10.6377C15.8948 8.08887 15.3965 5.46484 11.8793 5.46484Z" fill="currentColor" />
    </svg>
  );
}
