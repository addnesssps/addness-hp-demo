"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "田中 太郎",
    role: "フリーランス / Webデザイナー",
    content:
      "SkillPlusでAIスキルを身につけてから、作業効率が3倍になりました。クライアントへの提案の幅も広がり、単価アップにもつながっています。",
    avatar: "T",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "佐藤 花子",
    role: "株式会社○○ / マーケティング部長",
    content:
      "法人AI研修を導入してから、チーム全体のAIリテラシーが向上しました。業務改善の提案が自然と増え、部門の生産性が目に見えて上がっています。",
    avatar: "S",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "鈴木 一郎",
    role: "起業家 / スタートアップCEO",
    content:
      "Addness AIで事業計画の設計から実行管理まで一元化できています。迷いなくアクションに集中できるようになり、MRR100万円を達成しました。",
    avatar: "I",
    color: "from-teal-500 to-cyan-500",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
    cards?.forEach((card) => {
      card.classList.add("section-hidden");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-card-bg py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            Testimonials
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            お客様の声
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            アドネスのサービスをご利用いただいたお客様の声をご紹介します
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card card-hover rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="h-5 w-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
