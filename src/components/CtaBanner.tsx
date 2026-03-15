export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 sm:py-36">
      {/* Gradient orbs */}
      <div className="animate-morph absolute -top-20 -right-20 h-[400px] w-[400px] bg-gradient-to-br from-cyan-500/20 to-blue-500/10 blur-3xl" />
      <div className="animate-morph absolute -bottom-20 -left-20 h-[400px] w-[400px] bg-gradient-to-tr from-blue-500/15 to-indigo-500/10 blur-3xl [animation-delay:3s]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div data-reveal>
          <p className="mb-6 text-sm font-semibold tracking-widest text-cyan-300 uppercase">
            Get Started
          </p>
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            AIの力で、
            <br className="sm:hidden" />
            あなたのビジネスを
            <br />
            加速させませんか？
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base text-white/50 sm:text-lg">
            個人の方も法人の方も、まずはお気軽にご相談ください。
            あなたに最適なソリューションをご提案します。
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              無料相談を申し込む
            </a>
            <a
              href="https://skillplus.addness.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-10 py-4 text-base font-semibold text-white/70 transition-all hover:border-white/30 hover:text-white"
            >
              SkillPlusを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
