import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className="animate-fade-in-up mb-6 text-sm font-semibold tracking-widest text-cyan-300 uppercase">
          生成AIイノベーションのグローバルリーダー
        </p>

        <h1 className="animate-fade-in-up delay-100 mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          PLAY
          <br />
          YOUR LIFE
        </h1>

        <p className="animate-fade-in-up delay-200 mb-4 text-xl font-medium text-white/90 sm:text-2xl md:text-3xl">
          価値提供をゲームしよう。
        </p>

        <p className="animate-fade-in-up delay-300 mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          誰もが価値提供を通じて自分にとって最高な人生を必ず描ける。
          <br className="hidden sm:block" />
          今、この瞬間を最高に生きよう。
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
          >
            サービスを見る
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            会社概要
          </a>
        </div>

        {/* Floating badge cards */}
        <div className="animate-fade-in-up delay-500 mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {[
            { icon: "🎓", label: "SkillPlus", sub: "スキル習得" },
            { icon: "🤖", label: "Addness AI", sub: "行動支援OS" },
            { icon: "📚", label: "Success Learning", sub: "学習支援" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-md"
            >
              <span className="text-lg">{badge.icon}</span>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">{badge.label}</p>
                <p className="text-[10px] text-white/50">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-500 absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-widest text-white/40 uppercase">
            Scroll
          </span>
          <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1">
            <div className="h-2 w-full animate-bounce rounded-full bg-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
