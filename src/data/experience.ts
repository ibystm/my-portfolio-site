export interface Job {
  company: string;
  companyUrl: string;
  title: string;
  period: string;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    company: 'Company A',
    companyUrl: 'https://example.com',
    title: 'Senior Software Engineer',
    period: '2023 — Present',
    bullets: [
      '月間 100 万ユーザー超の高トラフィック Web アプリのコア機能を開発・保守',
      'プロダクト・デザイン・QA などクロスファンクショナルチームと協力し、スケジュール通りにリリース',
      'ジュニアエンジニアのメンタリングとコードレビュー文化の整備でコード品質を向上',
      'モノリスからマイクロサービスへの移行を主導し、デプロイ時間を 40% 削減',
    ],
  },
  {
    company: 'Company B',
    companyUrl: 'https://example.com',
    title: 'Software Engineer',
    period: '2021 — 2023',
    bullets: [
      'プロダクト全体で使われるレスポンシブかつアクセシブルな React コンポーネントを開発',
      'Node.js / Express による REST・GraphQL API を実装し、PostgreSQL と連携',
      'コード分割・遅延ロード・キャッシュ戦略によりサイトパフォーマンスを 30% 改善',
      'UX デザイナーと密に連携し、ワイヤーフレームをプロダクション品質の UI に落とし込み',
    ],
  },
  {
    company: 'Company C',
    companyUrl: 'https://example.com',
    title: 'Junior Developer',
    period: '2019 — 2021',
    bullets: [
      'クライアント向け Web アプリの開発・保守をサポート',
      'Jest・React Testing Library を使ったユニットテスト・統合テストを作成',
      'アジャイル環境でのデイリースタンドアップ・スプリントプランニングに参加',
    ],
  },
];
