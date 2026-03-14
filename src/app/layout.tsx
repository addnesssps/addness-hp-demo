import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "アドネス株式会社 | PLAY YOUR LIFE - 価値提供をゲームしよう",
  description:
    "AI × スキル習得で、誰もが価値提供を通じて最高の人生を描ける世界を。アドネス株式会社は生成AIイノベーションのグローバルリーダーとして、SkillPlus・AI研修・行動支援OSなどを提供しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
