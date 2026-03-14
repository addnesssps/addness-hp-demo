"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🎓",
    title: "SkillPlus",
    subtitle: "実践型スキル習得プログラム",
    description:
      "多様なコースで学び、自分らしい働き方を実現する。AI・プログラミング・マーケティングなど実践スキルを体系的に習得。",
    color: "from-cyan-500 to-blue-500",
    link: "https://skillplus.addness.co.jp/",
  },
  {
    icon: "🏢",
    title: "AI研修",
    subtitle: "法人向けAIトレーニング",
    description:
      "企業の課題に合わせたカスタムAI研修。実務で使えるAIスキルを短期間で習得するカリキュラム。",
    color: "from-blue-500 to-indigo-500",
    link: "https://addness.co.jp/",
  },
  {
    icon: "🤖",
    title: "Addness AI",
    subtitle: "AI行動支援OS",
    description:
      "AIとの対話を通じて目標設定・計画設計・実行管理まで一体的に支援。5,000人以上のユーザーが利用中。",
    color: "from-teal-500 to-cyan-500",
    link: "https://hp.addness.com/",
  },
  {
    icon: "📚",
    title: "Success Learning",
    subtitle: "次世代型学習支援システム",
    description:
      "独自開発AIとアクションマップによる次世代型学習支援。動的カリキュラムで学習成果の再現性を実現。",
    color: "from-violet-500 to-purple-500",
    link: "https://addness.co.jp/",
  },
];

export default function Services() {
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

    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => {
      card.classList.add("section-hidden");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            Services
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            事業内容
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            AI × スキル習得で、個人と企業の可能性を最大化する
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <a
              key={service.title}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card card-hover group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-2xl shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="mb-1 text-xl font-bold text-foreground group-hover:text-primary">
                {service.title}
              </h3>
              <p className="mb-3 text-xs font-medium text-primary/70">
                {service.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                詳しく見る
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
