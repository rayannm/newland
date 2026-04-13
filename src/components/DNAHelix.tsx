"use client";

import { useEffect, useRef, useState } from "react";

const HEIGHT = 32;
const WIDTH = 14;
const CENTER = WIDTH / 2;
const RADIUS = (WIDTH - 2) / 2;
const SPEED = 1.8; // rotations per second factor
const PITCH = 0.36; // phase advance per vertical row

// Base-pair rung characters — alternates for a subtle organic feel
const RUNG_CHARS = ["·", "–", "·", "–"];

function generateHelix(t: number): string {
  const lines: string[] = [];

  for (let y = 0; y < HEIGHT; y++) {
    const phase = y * PITCH + t;
    const cos1 = Math.cos(phase);
    const cos2 = Math.cos(phase + Math.PI);
    const sin1 = Math.sin(phase);
    const sin2 = Math.sin(phase + Math.PI);

    const x1 = Math.round(CENTER + RADIUS * cos1);
    const x2 = Math.round(CENTER + RADIUS * cos2);

    const line = new Array(WIDTH).fill(" ");

    // Draw rungs (base pairs) every other row when strands are apart
    if (y % 2 === 0 && Math.abs(x1 - x2) > 1) {
      const start = Math.min(x1, x2);
      const end = Math.max(x1, x2);
      const rungChar = RUNG_CHARS[(y >> 1) % RUNG_CHARS.length];
      for (let x = start + 1; x < end; x++) {
        line[x] = rungChar;
      }
    }

    // Strand characters — heavier glyph when the strand faces forward
    line[x1] = sin1 > 0.2 ? "O" : sin1 < -0.2 ? "o" : ".";
    line[x2] = sin2 > 0.2 ? "O" : sin2 < -0.2 ? "o" : ".";

    lines.push(line.join(""));
  }

  return lines.join("\n");
}

export function DNAHelix() {
  const [frame, setFrame] = useState(() => generateHelix(0));
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      setFrame(generateHelix(elapsed * SPEED));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <pre
      aria-hidden="true"
      className="pointer-events-none select-none font-mono text-[13px] leading-[1.05] text-[#b08968]"
      style={{
        transform: "rotate(-14deg)",
        transformOrigin: "center",
        letterSpacing: "0.05em",
        textShadow: "0 0 1px rgba(176,137,104,0.3)",
      }}
    >
      {frame}
    </pre>
  );
}
