export default function Footer() {
  return (
    <footer className="bg-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="text-lg font-bold text-white">Addness</span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              生成AIイノベーションのグローバルリーダー。AI × スキル習得で、誰もが最高の人生を描ける世界を。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              サービス
            </h4>
            <ul className="space-y-2">
              {[
                { label: "SkillPlus", href: "https://skillplus.addness.co.jp/" },
                { label: "AI研修", href: "https://addness.co.jp/" },
                { label: "Addness AI", href: "https://hp.addness.com/" },
                { label: "Success Learning", href: "https://addness.co.jp/" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">会社情報</h4>
            <ul className="space-y-2">
              {[
                { label: "会社概要", href: "#about" },
                { label: "ニュース", href: "https://addness.co.jp/" },
                { label: "採用情報", href: "https://addness.co.jp/join-us/people/" },
                { label: "お問い合わせ", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              お問い合わせ
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/50">
                  東京都新宿区四谷
                </span>
              </li>
              <li>
                <a
                  href="https://addness.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-white/50 transition-colors hover:text-primary-light"
                >
                  <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  addness.co.jp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} アドネス株式会社 All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
