import Link from "next/link";

export function AnnouncementBanner() {
  return (
    <Link
      href="/blog/announcing-backing-from-y-combinator"
      className="block bg-black"
    >
      <div className="flex items-center justify-center gap-2 p-2 text-center text-xs text-white sm:text-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logos/ycombinator.svg" width={16} height={16} alt="Y Combinator Logo" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logos/founders-inc.jpg" width={16} height={16} alt="Founders Inc Logo" className="rounded-sm" />
        <span>Announcing Enjamb&apos;s $650K pre-seed.</span>
      </div>
    </Link>
  );
}
