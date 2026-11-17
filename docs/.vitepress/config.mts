import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// 上傳到 GitHub 後，把 OWNER 與 REPO 換成實際的帳號與 repo 名稱
const OWNER = 'wl01256060'
const REPO = 'grandpa-not-dead'

export default withMermaid(defineConfig({
  lang: 'zh-TW',
  title: '爺爺還沒死',
  description: '《爺爺還沒死》遊戲開發計畫文件',
  base: `/${REPO}/`,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '總覽', link: '/' },
      { text: '階段 1 前製', link: '/1-preproduction/' },
      { text: '階段 2 製作', link: '/2-production/' },
      { text: '階段 3 行銷與上市', link: '/3-marketing/' }
    ],
    sidebar: {
      '/1-preproduction/': [
        {
          text: '階段 1｜前製',
          items: [{ text: '階段總覽', link: '/1-preproduction/' }]
        },
        {
          text: '設計內容',
          items: [
            { text: '世界觀', link: '/1-preproduction/world/' },
            { text: '角色設定', link: '/1-preproduction/world/characters' },
            { text: '遊戲機制規格', link: '/1-preproduction/mechanics/' },
            {
              text: '內容庫',
              link: '/1-preproduction/content/',
              collapsed: false,
              items: [
                {
                  text: '道具',
                  items: [
                    { text: '數值效果', link: '/1-preproduction/content/items/stats' },
                    { text: '送禮反應', link: '/1-preproduction/content/items/reactions' }
                  ]
                },
                {
                  text: '事件',
                  items: [
                    { text: '開場與固定事件', link: '/1-preproduction/content/events/fixed' },
                    { text: '隨機事件', link: '/1-preproduction/content/events/random' }
                  ]
                }
              ]
            },
            { text: '美術方向', link: '/1-preproduction/art/' },
            { text: '技術選型', link: '/1-preproduction/tech/' },
            { text: '簡易模型試玩', link: '/1-preproduction/prototype/' }
          ]
        },
        {
          text: '檢核與評分',
          items: [
            { text: '檢核關卡', link: '/1-preproduction/gate' },
            { text: '2026-11-17 首次檢核', link: '/1-preproduction/reviews/2026-11-17' },
            {
              text: '框架總覽',
              link: '/1-preproduction/frameworks/',
              collapsed: true,
              items: [
                { text: 'MDA', link: '/1-preproduction/frameworks/mda' },
                { text: '核心循環', link: '/1-preproduction/frameworks/core-loop' },
                { text: '形式元素', link: '/1-preproduction/frameworks/formal-elements' },
                { text: '動詞與互動矩陣', link: '/1-preproduction/frameworks/verbs-interactions' },
                { text: '情緒曲線', link: '/1-preproduction/frameworks/emotion-curve' },
                { text: '經濟與平衡', link: '/1-preproduction/frameworks/economy' }
              ]
            }
          ]
        }
      ]
    },
    editLink: {
      pattern: `https://github.com/${OWNER}/${REPO}/edit/main/docs/:path`,
      text: '在 GitHub 上編輯此頁'
    },
    socialLinks: [{ icon: 'github', link: `https://github.com/${OWNER}/${REPO}` }],
    search: { provider: 'local' },
    outline: { label: '本頁目錄', level: [2, 3] },
    docFooter: { prev: '上一頁', next: '下一頁' },
    lastUpdatedText: '最後更新'
  }
}))
