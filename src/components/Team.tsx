import Image from "next/image";

const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    name: "三上 功太",
    role: "代表取締役社長 / CEO",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    name: "山田 美咲",
    role: "プロダクトマネージャー",
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    name: "佐々木 大輔",
    role: "リードエンジニア",
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    name: "鈴木 あかり",
    role: "カスタマーサクセス",
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

        {/* Team photos */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="card-hover group overflow-hidden rounded-2xl bg-white shadow-sm"
              data-reveal
              data-reveal-delay={i * 100}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-lg font-bold text-white">{member.name}</p>
                  <p className="text-sm text-white/70">{member.role}</p>
                </div>
              </div>
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
