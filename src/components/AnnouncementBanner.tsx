"use client";

import { useState } from "react";
import { CloseIcon } from "@/components/icons";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-[#3C1FFA] py-1.5">
      <div className="mx-auto flex items-center justify-center gap-2 px-10 text-sm text-white font-body">
        <span className="inline-block rounded-[4px] bg-white px-2 py-0.5 text-sm font-medium text-[#101F33]">
          Watch Now
        </span>
        <span>
          Learn from Pulitzer Prize winning author Dr. Siddhartha Mukherjee in a
          conversation with Enjamb on the New Pace of Drug Discovery.
        </span>
        <a href="#" className="whitespace-nowrap underline">
          Access the recording here.
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
        aria-label="Close announcement"
      >
        <CloseIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
