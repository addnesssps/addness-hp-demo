export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top CTA */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:flex-row sm:p-12">
          <div>
            <h3 className="mb-1 text-xl font-bold text-white sm:text-2xl">
              まずはお気軽にご相談ください
            </h3>
            <p className="text-sm text-white/50">
              個人・法人問わず、あなたに最適なプランをご提案します
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5"
            >
              個人のお客様
            </a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-xl"
            >
              法人のお客様
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                <span className="text-lg font-black text-white">A</span>
              </div>
              <div>
                <span className="block text-base font-bold text-white">Addness</span>
                <span className="block text-[10px] text-white/40">アドネス株式会社</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/40">
              生成AIイノベーションのグローバルリーダー。AI × スキル習得で、誰もが最高の人生を描ける世界を。
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">サービス</h4>
            <ul className="space-y-3">
              {[
                { label: "SkillPlus", href: "https://skillplus.addness.co.jp/" },
                { label: "法人向けAI研修", href: "https://addness.co.jp/" },
                { label: "Addness AI", href: "https://hp.addness.com/" },
                { label: "Success Learning", href: "https://addness.co.jp/" },
                { label: "カリキュラム自動設計", href: "https://addness-osaka.com/" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/40 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">会社情報</h4>
            <ul className="space-y-3">
              {[
                { label: "会社概要", href: "#about" },
                { label: "ニュース", href: "#news" },
                { label: "メンバー紹介", href: "https://addness.co.jp/join-us/people/" },
                { label: "数字でみるアドネス", href: "https://addness.co.jp/join-us/infographic/" },
                { label: "代表メッセージ", href: "https://addness.co.jp/join-us/message/" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">お問い合わせ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/40">東京都新宿区四谷</span>
              </li>
              <li>
                <a
                  href="https://addness.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/40 transition-colors hover:text-cyan-300"
                >
                  <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  addness.co.jp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/25">
              &copy; {new Date().getFullYear()} アドネス株式会社 All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-white/25 transition-colors hover:text-white/50">
                プライバシーポリシー
              </a>
              <a href="#" className="text-xs text-white/25 transition-colors hover:text-white/50">
                利用規約
              </a>
              <a href="#" className="text-xs text-white/25 transition-colors hover:text-white/50">
                特定商取引法
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
