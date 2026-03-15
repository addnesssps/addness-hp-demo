"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "ユーザー数", sub: "Addness AI 利用者", icon: "👥" },
  { value: 2, suffix: "件", label: "特許取得", sub: "動的カリキュラム技術", icon: "📜" },
  { value: 1, suffix: "位", label: "Amazonベストセラー", sub: "「賢く生きる習慣」", icon: "📕" },
  { value: 871, suffix: "名", label: "調査実施", sub: "スキル習得満足度調査", icon: "📊" },
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
    <section className="section-divider-wave relative overflow-hidden pb-32 pt-28 sm:pt-36">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-cyan-900/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center" data-reveal>
          <p className="mb-3 text-sm font-semibold tracking-widest text-cyan-300 uppercase">
            Achievements
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            数字で見るアドネス
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/10"
              data-reveal
              data-reveal-delay={i * 100}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="gradient-text mb-2 text-4xl font-black sm:text-5xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mb-1 text-base font-semibold text-white">{stat.label}</p>
              <p className="text-xs text-white/40">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
