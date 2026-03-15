"use client";

import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("sent"), 1500);
  };

  return (
    <section id="contact" className="bg-card-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          {/* Left info */}
          <div className="lg:col-span-2" data-reveal="left">
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
              Contact
            </p>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              お問い合わせ
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted">
              サービスに関するご質問やご相談、お気軽にお問い合わせください。
              担当者より折り返しご連絡いたします。
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">所在地</p>
                  <p className="text-sm text-muted">東京都新宿区四谷</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Webサイト</p>
                  <a
                    href="https://addness.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    addness.co.jp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3" data-reveal="right">
            {formState === "sent" ? (
              <div className="animate-scale-in flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-green-800">送信完了しました</h3>
                <p className="text-green-600">
                  お問い合わせありがとうございます。担当者より折り返しご連絡いたします。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10"
              >
                <div className="mb-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">
                      お名前 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="山田 太郎"
                      className="w-full rounded-xl border border-gray-200 bg-card-bg px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">
                      メールアドレス <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="taro@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-card-bg px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    会社名
                  </label>
                  <input
                    type="text"
                    placeholder="株式会社○○"
                    className="w-full rounded-xl border border-gray-200 bg-card-bg px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    お問い合わせ種別
                  </label>
                  <select className="w-full rounded-xl border border-gray-200 bg-card-bg px-4 py-3 text-sm text-muted outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20">
                    <option value="">選択してください</option>
                    <option value="individual">個人のお客様</option>
                    <option value="business">法人のお客様</option>
                    <option value="media">メディア・取材</option>
                    <option value="recruit">採用について</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    お問い合わせ内容 <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="お問い合わせ内容をご入力ください"
                    className="w-full resize-none rounded-xl border border-gray-200 bg-card-bg px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-xl hover:shadow-cyan-500/30 disabled:opacity-70"
                >
                  {formState === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      送信中...
                    </span>
                  ) : (
                    "送信する"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
