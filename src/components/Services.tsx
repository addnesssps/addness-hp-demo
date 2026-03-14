"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "SkillPlus",
    subtitle: "実践型スキル習得プログラム",
    description:
      "AI・プログラミング・マーケティングなど多様なコースで学び、自分らしい働き方を実現する。実践を通じてスキルを身につける。",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    color: "from-cyan-500 to-blue-500",
    link: "https://skillplus.addness.co.jp/",
  },
  {
    title: "法人向けAI研修",
    subtitle: "カスタムAIトレーニング",
    description:
      "企業の課題に合わせたオーダーメイドAI研修。チーム全体のAIリテラシーを短期間で引き上げる。",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-500 to-indigo-500",
    link: "https://addness.co.jp/",
  },
  {
    title: "Addness AI",
    subtitle: "AI行動支援OS",
    description:
      "AIとの対話で目標設定から実行管理まで一体的に支援。5,000人以上のユーザーが利用中。",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    color: "from-teal-500 to-cyan-500",
    link: "https://hp.addness.com/",
  },
  {
    title: "Success Learning",
    subtitle: "次世代型学習支援システム",
    description:
      "動的カリキュラム技術（特許取得済み）により、一人ひとりに最適化された学習体験を提供。",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
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

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <a
              key={service.title}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card card-hover group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span
                    className={`inline-block rounded-full bg-gradient-to-r ${service.color} px-3 py-1 text-xs font-semibold text-white`}
                  >
                    {service.subtitle}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-primary">
                  詳しく見る
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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
