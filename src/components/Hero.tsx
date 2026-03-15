"use client";

import Image from "next/image";

const marqueeItems = [
  "PLAY YOUR LIFE",
  "AI × SKILL",
  "INNOVATION",
  "5,000+ USERS",
  "特許技術",
  "SkillPlus",
  "PLAY YOUR LIFE",
  "AI × SKILL",
  "INNOVATION",
  "5,000+ USERS",
  "特許技術",
  "SkillPlus",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950">
      {/* Animated gradient orbs */}
      <div className="animate-morph absolute -top-24 -left-24 h-[500px] w-[500px] bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-3xl" />
      <div className="animate-morph absolute top-1/3 right-0 h-[600px] w-[600px] bg-gradient-to-bl from-sky-400/15 to-teal-500/10 blur-3xl [animation-delay:2s]" />
      <div className="animate-morph absolute bottom-0 left-1/3 h-[400px] w-[400px] bg-gradient-to-tr from-indigo-500/10 to-cyan-400/10 blur-3xl [animation-delay:4s]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Rotating ring decoration */}
      <div className="animate-rotate-slow absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />
      <div className="animate-rotate-slow absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] [animation-direction:reverse]" />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6">
        <div className="mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300">
              生成AIイノベーションのグローバルリーダー
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 mb-6">
            <span className="block text-6xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
              PLAY
            </span>
            <span className="gradient-text block text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
              YOUR LIFE
            </span>
          </h1>

          <p className="animate-fade-in-up delay-200 mb-3 text-xl font-medium text-white/80 sm:text-2xl md:text-3xl">
            価値提供をゲームしよう。
          </p>

          <p className="animate-fade-in-up delay-300 mx-auto mb-12 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg">
            誰もが価値提供を通じて自分にとって最高な人生を必ず描ける。
            <br className="hidden sm:block" />
            今、この瞬間を最高に生きよう。
          </p>

          <div className="animate-fade-in-up delay-400 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="group relative rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
            >
              <span className="relative z-10">サービスを見る →</span>
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              会社概要
            </a>
          </div>
        </div>
      </div>

      {/* Marquee text band */}
      <div className="relative z-10 border-t border-b border-white/[0.06] bg-white/[0.02] py-5 backdrop-blur-sm">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="mx-8 flex shrink-0 items-center gap-4 text-sm font-bold tracking-widest text-white/20 uppercase sm:text-base">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/40" />
            </span>
          ))}
        </div>
      </div>

      {/* Trusted by strip */}
      <div className="relative z-10 bg-slate-950 py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { num: "5,000+", label: "ユーザー" },
              { num: "2件", label: "特許取得" },
              { num: "#1", label: "Amazon ビジネス書" },
              { num: "871名", label: "調査実施" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-white sm:text-3xl">{stat.num}</p>
                <p className="text-xs text-white/30">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
