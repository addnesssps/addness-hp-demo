# アドネス株式会社 お手本HP

Claude Code コースの講義で使用するお手本チャットボット付きHPです。

## セットアップ

```bash
npm install
```

## 環境変数

`.env.local` を作成し、Anthropic API キーを設定してください。

```
ANTHROPIC_API_KEY=sk-ant-...
```

## 開発

```bash
npm run dev
```

http://localhost:3000 で確認できます。

## デプロイ

Vercel にデプロイする場合は、環境変数 `ANTHROPIC_API_KEY` を Vercel の設定画面で追加してください。

## 構成

- **ヒーロー** — PLAY YOUR LIFE
- **サービス** — SkillPlus / AI研修 / Addness AI / Success Learning
- **実績** — 数字で見るアドネス
- **お客様の声** — テスティモニアル
- **会社概要** — 会社情報 + 代表メッセージ
- **お問い合わせ** — フォーム
- **AIチャットボット** — Claude API によるフローティングウィジェット
