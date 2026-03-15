"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "サービス" },
  { href: "#news", label: "ニュース" },
  { href: "#testimonials", label: "お客様の声" },
  { href: "#about", label: "会社概要" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      {announcementVisible && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs font-medium text-white/80 sm:text-sm">
              📢 代表著書「賢く生きる習慣」Amazon ビジネス書 #1 獲得
            </span>
            <a
              href="https://addness.co.jp/news/20251226/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold text-white transition-colors hover:bg-white/30 sm:inline-block"
            >
              詳細 →
            </a>
            <button
              onClick={() => setAnnouncementVisible(false)}
              className="absolute right-3 text-white/60 hover:text-white"
              aria-label="閉じる"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          announcementVisible ? "top-9" : "top-0"
        } ${scrolled ? "glass border-b border-gray-200/50 shadow-sm" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
              <span className="text-lg font-black text-white">A</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-base font-bold leading-tight transition-colors ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Addness
              </span>
              <span
                className={`text-[10px] font-medium leading-tight transition-colors ${
                  scrolled ? "text-muted" : "text-white/50"
                }`}
              >
                アドネス株式会社
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground/70" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                scrolled
                  ? "border-gray-200 text-foreground hover:bg-gray-50"
                  : "border-white/20 text-white hover:bg-white/5"
              }`}
            >
              個人のお客様
            </a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-xl hover:shadow-cyan-500/30"
            >
              法人のお客様
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-foreground" : "bg-white"
                } ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-foreground" : "bg-white"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-foreground" : "bg-white"
                } ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>

        {mobileOpen && (
          <div className="glass animate-fade-in border-t border-gray-200/50 lg:hidden">
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-primary/5 hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex gap-2">
                <a
                  href="#contact"
                  className="flex-1 rounded-full border border-gray-200 py-2.5 text-center text-sm font-semibold text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  個人のお客様
                </a>
                <a
                  href="#contact"
                  className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 py-2.5 text-center text-sm font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  法人のお客様
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
