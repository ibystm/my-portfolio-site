export interface Job {
  company: string;
  companyUrl: string;
  title: string;
  period: string;
  employmentType: string;
  description: string;
  tech: string[];
  bullets: string[];
}

export const jobs: Job[] = [
  {
    company: '株式会社カオナビ',
    companyUrl: 'https://kaonavi.jp',
    title: 'Lead Frontend Engineer',
    period: '2021/12 — 現在',
    employmentType: '正社員',
    description: '人事・タレントマネジメント SaaS「カオナビ」を展開する企業。',
    tech: ['TypeScript', 'React', 'Redux Toolkit', 'jQuery', 'Storybook', 'Jest', 'PHP', 'Laravel', 'AWS'],
    bullets: [
      '【2025/08〜現在】Blade と jQuery で作られたレガシー画面を React へ移行するチームの開発リーダーとして主導し、開発体験・パフォーマンスを改善',
      '【2024/04〜2025/08】メインプロダクト「カオナビ」のスキル管理機能を 0→1 フェーズから設計・開発・リリース、以降は 1→10 フェーズとして継続的な機能拡充を担当',
      '【2023/08〜2024/04】申請管理機能のスマートフォン用機能の実装、および「カオナビ」プロダクトのサポートブラウザバージョンアップの必要性を各所に働きかけ、関係者と調整・推進',
      '【2021/12〜2022/6】状態管理ライブラリの Redux → Redux Toolkit 移行プロジェクトを自ら発案・主導し、コードベースの近代化を推進',
      'リードエンジニアとしてチームのプロジェクト推進・技術的な意思決定・メンバー支援を担当',
      'デザインシステムの機能追加およびアクセシビリティ改善を推進し、プロダクト全体の品質向上に貢献',
      'フロントエンド全体のコードレビュワーとして品質管理に従事',
      'エンジニア採用における技術面接・カジュアル面談を担当',
    ],
  },
  {
    company: '株式会社 Recri',
    companyUrl: 'https://recri.jp',
    title: 'Frontend Engineer',
    period: '2024/10 — 2026/02',
    employmentType: '業務委託',
    description: '好みや予定に合わせた舞台・展覧会のチケットが毎月届く芸術鑑賞サブスクリプションサービス「recri」を展開するスタートアップ。',
    tech: ['Remix', 'React Hook Form', 'Radix UI', 'Tailwind CSS', 'Storybook', 'ESLint', 'Prettier', 'PHP', 'Laravel'],
    bullets: [
      'Laravel で実装されたアプリケーションのフロントエンド部分を切り離し、Remix (SPA モード) を採用してリプレイス',
      'チケット単体購入機能を新規開発。支払い処理の実装に Stripe を使用',
      '各種不足していた API (Laravel) の設計・実装を担当',
      'フロントエンドのコードレビューを担当',
    ],
  },
  {
    company: '株式会社 Bitkey',
    companyUrl: 'https://bitkey.co.jp',
    title: 'Frontend Engineer',
    period: '2019/7 — 2021/10',
    employmentType: '正社員',
    description: 'スマートロックおよび不動産賃貸管理 SaaS を開発するスタートアップ。',
    tech: ['TypeScript', 'React', 'React Native', 'Redux Toolkit', 'Express.js', 'Firebase', 'Jest', 'Swagger'],
    bullets: [
      '【スマートロックアプリ / 2019/7〜2020/1】React Native を用いた iOS・Android アプリの新機能開発・改修を担当。設計・デザインから実装・リリースまで一気通貫で対応',
      'Amazon 向け新スマートロックプロダクトのローンチプロジェクトにアサインされ、1 ヶ月弱でソフトウェア実装をほぼ単独で完遂',
      '【不動産賃貸管理 SaaS / 2020/1〜2021/10】業務ヒアリングを通じた業務フロー改善・新機能追加を担当し、設計フェーズから顧客要件と付加価値を意識した開発を実践',
      'チーム内の再現性向上のため、社内ドキュメントの整備・開発環境の仕組み化を積極的に推進',
    ],
  },
];
