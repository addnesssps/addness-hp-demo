import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center" data-reveal>
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            About Us
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            会社概要
          </h2>
        </div>

        {/* Mission banner */}
        <div className="mb-16 overflow-hidden rounded-3xl" data-reveal="scale">
          <div className="relative h-72 sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
              alt="アドネス株式会社"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-16">
              <div className="max-w-lg">
                <p className="mb-3 text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                  Our Mission
                </p>
                <h3 className="mb-4 text-2xl font-bold leading-snug text-white sm:text-4xl">
                  誰もが価値提供を通じて
                  <br />
                  最高な人生を描ける世界を
                </h3>
                <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                  原動力となるのは、まぎれもなく「人」の力です。
                  無限の可能性を秘めた「人」を育成し、
                  その能力を最大限に引き出すことが、アドネスの使命です。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-5">
          {/* CEO message */}
          <div className="rounded-2xl border border-gray-100 bg-card-bg p-8 sm:p-10 lg:col-span-2" data-reveal="left">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl font-black text-white shadow-lg shadow-cyan-500/20">
                K
              </div>
              <div>
                <p className="text-xs font-medium text-muted">代表取締役社長</p>
                <p className="text-xl font-bold text-foreground">三上 功太</p>
                <p className="text-xs text-primary">Kota Mikami</p>
              </div>
            </div>
            <h3 className="mb-4 text-lg font-bold text-foreground">代表メッセージ</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              原動力となるのは、まぎれもなく「人」の力です。無限の可能性を秘めた「人」を育成し、その能力を最大限に引き出すことが、アドネスの使命であり、目指している未来です。
            </p>
            <p className="text-sm leading-relaxed text-muted">
              私たちは、共に成長し、未来を創造していく仲間を求めています。AIの力を活用し、誰もが自分の可能性を最大限に発揮できる社会を目指します。
            </p>
          </div>

          {/* Company info */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 lg:col-span-3" data-reveal="right">
            <h3 className="mb-6 text-lg font-bold text-foreground">会社情報</h3>
            <dl className="divide-y divide-gray-100">
              {[
                ["会社名", "アドネス株式会社（Addness Inc.）"],
                ["代表者", "三上 功太"],
                ["所在地", "東京都新宿区四谷"],
                ["設立", "2022年"],
                ["事業内容", "AI行動支援OS開発・運営 / 実践型スキル習得プログラム運営 / 法人向けAI研修 / 次世代型学習支援システム開発"],
                ["特許", "動的カリキュラム技術（特許第7779606号・第7779607号）"],
                ["著書", "「賢く生きる習慣」（すばる舎）Amazonビジネス書 #1"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                  <dt className="min-w-[120px] shrink-0 text-sm font-semibold text-foreground">
                    {label}
                  </dt>
                  <dd className="text-sm text-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
