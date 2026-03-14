export default function Hero() {
  return (
    <section className="hero-bg relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/5 blur-2xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
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
            className="rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            会社概要
          </a>
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
