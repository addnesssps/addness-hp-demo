import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            About Us
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            会社概要
          </h2>
        </div>

        {/* Mission visual */}
        <div className="mb-16 overflow-hidden rounded-3xl">
          <div className="relative">
            <div className="relative h-64 sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                alt="アドネス株式会社オフィス"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
            </div>
            <div className="absolute inset-0 flex items-center px-8 sm:px-16">
              <div className="max-w-xl">
                <p className="mb-2 text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                  Our Mission
                </p>
                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                  誰もが価値提供を通じて
                  <br />
                  最高な人生を描ける世界を
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  原動力となるのは、まぎれもなく「人」の力です。無限の可能性を秘めた「人」を育成し、その能力を最大限に引き出すことが、アドネスの使命です。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* CEO message */}
          <div className="rounded-2xl border border-gray-100 bg-card-bg p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                  alt="代表取締役社長 三上 功太"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  代表取締役社長
                </p>
                <p className="text-lg font-bold text-primary">三上 功太</p>
              </div>
            </div>
            <h3 className="mb-4 text-xl font-bold text-foreground">
              代表メッセージ
            </h3>
            <p className="mb-4 leading-relaxed text-muted">
              原動力となるのは、まぎれもなく「人」の力です。無限の可能性を秘めた「人」を育成し、その能力を最大限に引き出すことが、アドネスの使命であり、目指している未来です。
            </p>
            <p className="leading-relaxed text-muted">
              私たちは、共に成長し、未来を創造していく仲間を求めています。AIの力を活用し、誰もが自分の可能性を最大限に発揮できる社会を目指します。
            </p>
          </div>

          {/* Company info table */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
            <h3 className="mb-6 text-xl font-bold text-foreground">
              会社情報
            </h3>
            <dl className="divide-y divide-gray-100">
              {[
                ["会社名", "アドネス株式会社"],
                ["代表者", "三上 功太"],
                ["所在地", "東京都新宿区四谷"],
                ["設立", "2022年"],
                [
                  "事業内容",
                  "AI行動支援OS開発・運営、実践型スキル習得プログラム運営、法人向けAI研修、次世代型学習支援システム開発",
                ],
                [
                  "特許",
                  "動的カリキュラム技術（特許第7779606号・7779607号）",
                ],
                [
                  "著書",
                  "「賢く生きる習慣」（すばる舎）Amazonビジネス書 #1",
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-4"
                >
                  <dt className="min-w-[120px] text-sm font-semibold text-foreground">
                    {label}
                  </dt>
                  <dd className="text-sm text-muted">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <a
                href="https://addness.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                コーポレートサイト →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
