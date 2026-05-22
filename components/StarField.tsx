// Subtle ambient layer for dark sections: faint gold motes that twinkle
// plus a few slow, low-key shooting stars. Pure CSS animations, no JS.
// Positions are fixed (no randomness) to avoid hydration mismatches.

const DOTS = [
  { top: "14%", left: "8%", s: 3, d: 0, t: 6 },
  { top: "22%", left: "82%", s: 2, d: 1.5, t: 7 },
  { top: "38%", left: "20%", s: 3, d: 0.8, t: 8 },
  { top: "12%", left: "55%", s: 2, d: 2.2, t: 6.5 },
  { top: "60%", left: "12%", s: 3, d: 1.1, t: 9 },
  { top: "72%", left: "70%", s: 2, d: 3, t: 7.5 },
  { top: "48%", left: "90%", s: 3, d: 0.4, t: 8.5 },
  { top: "82%", left: "40%", s: 2, d: 2.6, t: 6 },
  { top: "30%", left: "38%", s: 2, d: 1.8, t: 7 },
  { top: "66%", left: "52%", s: 3, d: 0.6, t: 9.5 },
  { top: "18%", left: "30%", s: 2, d: 3.4, t: 6.8 },
  { top: "54%", left: "66%", s: 2, d: 1.3, t: 8 },
  { top: "88%", left: "18%", s: 3, d: 2, t: 7.2 },
  { top: "40%", left: "5%", s: 2, d: 0.9, t: 8.8 },
  { top: "76%", left: "88%", s: 2, d: 2.8, t: 6.4 },
  { top: "26%", left: "68%", s: 3, d: 1.6, t: 9 },
];

const STARS = [
  { top: "10%", left: "6%", d: 1.5, t: 9 },
  { top: "30%", left: "46%", d: 5.5, t: 11 },
  { top: "58%", left: "24%", d: 3.5, t: 10 },
];

export function StarField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {DOTS.map((p, i) => (
        <span
          key={i}
          className="ud-dot absolute rounded-full bg-[#e8d6a8]"
          style={{
            top: p.top,
            left: p.left,
            width: p.s,
            height: p.s,
            opacity: 0.4,
            animation: `ud-twinkle ${p.t}s ease-in-out ${p.d}s infinite`,
          }}
        />
      ))}
      {STARS.map((s, i) => (
        <span
          key={`s${i}`}
          className="ud-shoot-el absolute h-px w-20 rounded-full"
          style={{
            top: s.top,
            left: s.left,
            background:
              "linear-gradient(90deg, rgba(232,214,168,0) 0%, rgba(232,214,168,0.85) 100%)",
            animation: `ud-shoot ${s.t}s ease-in ${s.d}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
