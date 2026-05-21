export interface FeaturedProject {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image: string;
  imageAlt: string;
}

export interface OtherProject {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Project One',
    description:
      'パフォーマンスとアクセシビリティを重視して開発した Web アプリケーション。毎日何千人ものユーザーが使う現実的な課題を解決しています。',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project-one',
    external: 'https://project-one.example.com',
    image: '/projects/project-one.png',
    imageAlt: 'Project One screenshot',
  },
  {
    title: 'Project Two',
    description:
      '開発者の繰り返し作業を自動化するオープンソースツール。主要 CI/CD パイプラインと連携し、チームの手動作業を週単位で大幅に削減します。',
    tech: ['Python', 'FastAPI', 'Docker', 'Redis'],
    github: 'https://github.com/yourusername/project-two',
    external: undefined,
    image: '/projects/project-two.png',
    imageAlt: 'Project Two screenshot',
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: 'CLI Tool',
    description: '日常的な開発ワークフローを簡略化するコマンドラインツール。',
    tech: ['Go', 'Cobra'],
    github: 'https://github.com/yourusername/cli-tool',
  },
  {
    title: 'API Wrapper',
    description: '人気サードパーティ API の型付き SDK。npm で公開済み。',
    tech: ['TypeScript', 'Axios'],
    github: 'https://github.com/yourusername/api-wrapper',
    external: 'https://www.npmjs.com/package/api-wrapper',
  },
  {
    title: 'Data Visualizer',
    description: 'ブラウザ上で大規模データセットをインタラクティブに探索できるダッシュボード。',
    tech: ['D3.js', 'React', 'Python'],
    external: 'https://viz.example.com',
  },
  {
    title: 'Browser Extension',
    description: 'Chrome ウェブストアで 500 件以上のインストール実績がある生産性向上拡張機能。',
    tech: ['JavaScript', 'Chrome API'],
    external: 'https://chromewebstore.google.com',
  },
];
