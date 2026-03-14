"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "ユーザー数", description: "Addness AIの利用者" },
  { value: 2, suffix: "件", label: "特許取得", description: "動的カリキュラム技術" },
  { value: 1, suffix: "位", label: "Amazon ビジネス書", description: "「賢く生きる習慣」" },
  { value: 871, suffix: "名", label: "調査対象", description: "スキル習得満足度調査" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 py-24 sm:py-32"
    >
      <div className="absolute top-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-cyan-300 uppercase">
            Achievements
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            数字で見るアドネス
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <div className="gradient-text mb-2 text-4xl font-extrabold sm:text-5xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mb-1 text-lg font-semibold text-white">
                {stat.label}
              </p>
              <p className="text-sm text-white/50">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
