import Image from "next/image";

const articles = [
  {
    date: "2026.3.4",
    tag: "Press Release",
    title: "資格・スキル習得後の満足度調査を公開しました",
    excerpt:
      "仕事のやりがい・人間関係の満足度・幸福感、すべてでスキルが上回る結果に。全国871名を対象に調査。",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    href: "https://addness.co.jp/news/20260304/",
  },
  {
    date: "2026.3.2",
    tag: "Press Release",
    title: "AI行動支援OS「Addness」のユーザー数が5,000人を突破",
    excerpt:
      "「計画立案の億劫さ」を解消し、フリーランスから経営者、学生まで幅広いユーザーの実行支援を実現。",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    href: "https://addness.co.jp/news/20260302/",
  },
  {
    date: "2026.1.20",
    tag: "Press Release",
    title: "動的カリキュラム技術で特許2件を取得",
    excerpt:
      "学習状況に応じてカリキュラムのレベルが変わる技術。教育の属人性を解消し、学習成果の再現性を実現。",
    image:
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=800&auto=format&fit=crop",
    href: "https://addness.co.jp/news/20260120/",
  },
];

export default function News() {
  return (
    <section className="bg-card-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
              News
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              お知らせ
            </h2>
          </div>
          <a
            href="https://addness.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary/20 px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/5"
          >
            すべてのニュース →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xs font-medium text-muted">
                    {article.date}
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                    {article.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-bold leading-snug text-foreground group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted line-clamp-2">
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
