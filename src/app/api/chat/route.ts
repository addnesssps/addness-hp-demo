import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `あなたはアドネス株式会社のAIアシスタントです。
以下の会社情報に基づいて、丁寧かつ簡潔に回答してください。

【会社情報】
- 会社名：アドネス株式会社
- 代表者：三上功太
- 所在地：東京都新宿区四谷
- ミッション：「PLAY YOUR LIFE - 価値提供をゲームしよう」
- 事業領域：生成AIイノベーション

【サービス】
1. SkillPlus（スキルプラス）
   - 実践型スキル習得プログラム
   - AI・プログラミング・マーケティングなど多様なコース
   - URL: https://skillplus.addness.co.jp/

2. 法人向けAI研修
   - 企業の課題に合わせたカスタムAI研修
   - 実務で使えるAIスキルを短期間で習得

3. Addness AI
   - AI行動支援OS
   - 目標設定・計画設計・実行管理を対話形式で支援
   - ユーザー数5,000人以上

4. Success Learning
   - 次世代型学習支援システム
   - 動的カリキュラム技術（特許取得済み：特許第7779606号・7779607号）

【実績】
- Addness AIユーザー数5,000人突破
- 動的カリキュラム技術で特許2件取得
- 代表著書「賢く生きる習慣」Amazonビジネス書ランキング1位

【料金について】
- 個人向け：SkillPlusのサイトをご確認ください
- 法人向け：お問い合わせフォームまたはcontact@addness.co.jpにてご相談ください

【回答ルール】
- 会社やサービスに関する質問には正確に回答する
- 知らない情報は「お問い合わせフォームからお尋ねください」と案内する
- 競合他社の批判はしない
- 3〜5文程度で簡潔に回答する
- フレンドリーだが丁寧な口調で回答する`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "API key not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
      stream: true,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return new Response(
      JSON.stringify({ error: "Claude API error", detail: errorText }),
      { status: response.status, headers: { "Content-Type": "application/json" } }
    );
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        controller.close();
        return;
      }

      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data);
            if (
              parsed.type === "content_block_delta" &&
              parsed.delta?.text
            ) {
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ content: parsed.delta.text })}\n\n`
                )
              );
            }
          } catch {
            // skip
          }
        }
      }

      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
