# 爺爺還沒死｜遊戲開發計畫

《爺爺還沒死》是一款 4 人線上、黑色幽默的 Steam 派對遊戲。這個 repo 是團隊共編的計畫文件，用 [VitePress](https://vitepress.dev/) 產生網站，部署在 GitHub Pages。

文件依開發階段排列，每個階段結束時有一個檢核關卡，通過才進下一階段：

- **階段 1｜前製（進行中）**：設計與原型，驗證好不好玩
- **階段 2｜製作**：照時程把遊戲做出來（目前只有框架）
- **階段 3｜行銷與上市**：讓人知道、加入願望清單、買單（目前只有框架）

## 怎麼參與編輯

- **小修改**：在網站任一頁按「在 GitHub 上編輯此頁」，直接修改後送出。
- **大改動**：開分支修改，再發 Pull Request 讓其他人審核。
- **討論**：開 GitHub Issue。有結論後，更新到相關頁面。

## 在本機預覽

需要 Node.js 18 以上。

```bash
npm install
npm run docs:dev
```

## 第一次上傳到 GitHub

1. 在 GitHub 建立 repo，名稱建議用 `grandpa-not-dead`。
2. 打開 `docs/.vitepress/config.mts`，把 `OWNER` 換成你的 GitHub 帳號；repo 名稱不同的話，`REPO` 也要改。
3. 推送到 `main` 分支。
4. 到 repo 的 Settings → Pages，把 Source 設為「GitHub Actions」。之後每次推送都會自動更新網站。

## 目錄結構

```
docs/
├─ index.md            # 總覽：目前階段與進度
├─ 1-preproduction/    # 階段 1：前製
│  ├─ frameworks/      # 六個設計框架與評分
│  ├─ world/           # 世界觀與角色
│  ├─ mechanics/       # 遊戲機制規格
│  ├─ content/         # 道具、台詞、事件
│  ├─ art/             # 美術方向
│  ├─ tech/            # 技術選型
│  ├─ prototype/       # 簡易模型試玩
│  ├─ reviews/         # 檢核報告
│  └─ gate.md          # 階段 1 檢核關卡
├─ 2-production/       # 階段 2：製作（框架）
└─ 3-marketing/        # 階段 3：行銷與上市（框架）
skills/
├─ game-design-review/ # 遊戲機制檢核評分 skill
└─ marketing-review/   # 行銷檢核 skill（待建立）
```

## AI 檢核工具

`skills/game-design-review/SKILL.md` 是遊戲機制檢核評分的 skill。把機制文件交給支援 skill 的 AI 助理，並要求它依這份 skill 檢核，就會產出六個框架的分數與建議。每次檢核的報告存到 `docs/1-preproduction/reviews/`，檔名用日期。
