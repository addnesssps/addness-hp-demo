import Image from "next/image";

const products = [
  {
    title: "Success Learning",
    description: "独自開発AIとアクションマップによる、次世代型学習支援システム。",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    gradient: "from-cyan-600 to-blue-700",
    href: "https://addness.co.jp/",
  },
  {
    title: "カリキュラム自動設計",
    description: "目標入力だけで研修内容を自動設計、法人向けのカリキュラム作成支援システム。",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=800&auto=format&fit=crop",
    gradient: "from-blue-600 to-indigo-700",
    href: "https://addness-osaka.com/",
  },
  {
    title: "Addness AI",
    description: "視覚的にチームの動きが分かる、独自開発の目標・タスク管理システム。",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    gradient: "from-teal-600 to-cyan-700",
    href: "https://hp.addness.com/",
  },
  {
    title: "法人向けラーニング",
    description: "社員のスキル強化を支援する、法人向け実践型ラーニングサービス。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    gradient: "from-violet-600 to-purple-700",
    href: "https://addness.co.jp/",
  },
  {
    title: "SkillPlus",
    description: "多様なコースで学び、自分らしい働き方を実現する実践型スキル習得プログラム。",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    gradient: "from-rose-600 to-pink-700",
    href: "https://skillplus.addness.co.jp/",
  },
  {
    title: "法人向けAI研修",
    description: "企業の課題に合わせた法人向けAI研修。実務で使えるAIスキルを習得するカリキュラム。",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    gradient: "from-amber-600 to-orange-700",
    href: "https://addness.co.jp/",
  },
];

export default function Products() {
  return (
    <section id="services" className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 text-center" data-reveal>
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            Products &amp; Services
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            プロダクト
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            AI × 教育 × 行動支援で、個人と組織の可能性を解き放つ
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <a
              key={product.title}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl"
              data-reveal
              data-reveal-delay={i * 80}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-70 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  {product.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  詳しく見る
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
