import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          AIの力で、あなたのビジネスを加速させませんか？
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          個人の方も法人の方も、まずはお気軽にご相談ください。
          <br className="hidden sm:block" />
          あなたに最適なソリューションをご提案します。
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            無料相談を申し込む
          </a>
          <a
            href="https://skillplus.addness.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            SkillPlusを見る
          </a>
        </div>
      </div>
    </section>
  );
}
