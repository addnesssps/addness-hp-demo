import Image from "next/image";

const teamMembers = [
  {
    name: "三上 功太",
    role: "代表取締役社長 / CEO",
    initial: "K",
    gradient: "from-cyan-500 to-blue-600",
    description: "生成AIとスキル教育の融合を推進",
  },
  {
    name: "山田 美咲",
    role: "プロダクトマネージャー",
    initial: "M",
    gradient: "from-violet-500 to-purple-600",
    description: "ユーザー体験の設計と最適化を担当",
  },
  {
    name: "佐々木 大輔",
    role: "リードエンジニア",
    initial: "D",
    gradient: "from-teal-500 to-emerald-600",
    description: "AI基盤技術と動的カリキュラムの開発",
  },
  {
    name: "鈴木 あかり",
    role: "カスタマーサクセス",
    initial: "A",
    gradient: "from-rose-500 to-pink-600",
    description: "受講者の成功体験を最大化",
  },
];

const cultureItems = [
  { label: "フルリモート率", value: "95%", icon: "🏠" },
  { label: "平均年齢", value: "28歳", icon: "🎂" },
  { label: "有給取得率", value: "90%", icon: "🌴" },
  { label: "社員満足度", value: "4.8/5", icon: "⭐" },
];

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-card-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center" data-reveal>
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            Team
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            アドネスで働くメンバー
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            「PLAY YOUR LIFE」を掲げ、一人ひとりが仕事も人生も豊かに楽しめる環境づくりを目指しています
          </p>
        </div>

        {/* Team workspace banner */}
        <div className="mb-16 overflow-hidden rounded-3xl" data-reveal="scale">
          <div className="relative h-56 sm:h-72">
            <Image
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1600&auto=format&fit=crop"
              alt="アドネスのワークスペース"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
              <p className="text-xl font-bold text-white sm:text-2xl">
                多様なバックグラウンドを持つメンバーが、
                <br className="hidden sm:block" />
                AIの力で社会をより良くするために集まっています。
              </p>
            </div>
          </div>
        </div>

        {/* Team members - stylized cards without photos */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="card-hover group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm"
              data-reveal
              data-reveal-delay={i * 100}
            >
              <div
                className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} text-3xl font-black text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                {member.initial}
              </div>
              <p className="text-lg font-bold text-foreground">{member.name}</p>
              <p className="mb-2 text-xs font-semibold text-primary">{member.role}</p>
              <p className="text-sm text-muted">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Culture numbers */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-12" data-reveal>
          <h3 className="mb-8 text-center text-xl font-bold text-foreground">
            数字でみるアドネスの働き方
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cultureItems.map((item) => (
              <div key={item.label} className="text-center">
                <span className="mb-2 block text-3xl">{item.icon}</span>
                <p className="text-3xl font-black text-foreground">{item.value}</p>
                <p className="text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center" data-reveal>
          <a
            href="https://addness.co.jp/join-us/people/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-8 py-4 text-base font-semibold text-primary shadow-sm transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
          >
            採用情報を見る
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
