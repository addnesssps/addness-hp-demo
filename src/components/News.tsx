import Image from "next/image";

const articles = [
  {
    date: "2026.3.4",
    tag: "Press Release",
    title: "資格・スキル習得後の満足度調査を公開しました",
    excerpt:
      "仕事のやりがい・人間関係の満足度・幸福感、すべてでスキルが上回る結果に。全国871名を対象に調査を実施。",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    href: "https://addness.co.jp/news/20260304/",
    featured: true,
  },
  {
    date: "2026.3.2",
    tag: "Press Release",
    title: "AI行動支援OS「Addness」ユーザー数5,000人突破",
    excerpt:
      "フリーランスから経営者、学生まで幅広いユーザーの実行支援を実現。",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    href: "https://addness.co.jp/news/20260302/",
  },
  {
    date: "2026.1.20",
    tag: "Press Release",
    title: "動的カリキュラム技術で特許2件を取得",
    excerpt:
      "教育の属人性を解消し、学習成果の再現性を高める仕組みを構築。",
    image:
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=800&auto=format&fit=crop",
    href: "https://addness.co.jp/news/20260120/",
  },
  {
    date: "2025.12.26",
    tag: "Press Release",
    title: "代表・三上功太が新著「賢く生きる習慣」を発売",
    excerpt:
      "Amazonビジネス書ランキング1位を獲得。",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
    href: "https://addness.co.jp/news/20251226/",
  },
];

export default function News() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <section id="news" className="bg-card-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end" data-reveal>
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
              News
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              お知らせ
            </h2>
          </div>
          <a
            href="https://addness.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-sm font-semibold text-primary"
          >
            すべてのニュース
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured article */}
          {featured && (
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:row-span-3"
              data-reveal="left"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {featured.tag}
                  </span>
                  <span className="text-xs text-muted">{featured.date}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {featured.excerpt}
                </p>
              </div>
            </a>
          )}

          {/* Other articles */}
          {rest.map((article, i) => (
            <a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group flex overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              data-reveal="right"
              data-reveal-delay={i * 100}
            >
              <div className="relative hidden w-40 shrink-0 overflow-hidden sm:block">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                    {article.tag}
                  </span>
                  <span className="text-xs text-muted">{article.date}</span>
                </div>
                <h3 className="mb-1 text-base font-bold text-foreground transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="text-xs text-muted line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
