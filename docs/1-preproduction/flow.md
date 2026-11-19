# 遊戲流程圖

<div class="chg-legend">本頁為 2026-11-20 新增，依目前的 <a href="./mechanics/">遊戲機制規格</a> 繪製。規格改動時請一起更新本頁。</div>

流程圖用 [Mermaid](https://mermaid.js.org/) 語法寫在本頁的原始檔裡，直接改文字就能改圖。每行文字盡量保持在 10 個字以內，太長會被切掉。

## 一局遊戲

```mermaid
flowchart TD
  A["開局<br/>選角色<br/>隨機抽爺爺性格"] --> B["開場介紹<br/>約 45 秒，可跳過"]
  B --> C["每一天<br/>探索 50 秒<br/>結算 10 秒"]
  C --> D{"第 7 天結束？<br/>或爺爺 HP 歸零？"}
  D -- 否，下一天 --> C
  D -- 是 --> E["最終審判<br/>大陷害開獎<br/>公開誰送了什麼"]
  E --> F(["再玩一局？"])
  class C day
  class E trap
  classDef day fill:#E1F5EE,stroke:#0F6E56,color:#085041
  classDef trap fill:#FAECE7,stroke:#993C1D,color:#712B13
```

## 一天的流程

探索期間可以重複「搜索 → 送禮」，背包空了就再去找。

```mermaid
flowchart TD
  subgraph EX ["探索 50 秒・排行榜即時顯示"]
    S["搜索<br/>2 秒，每天 3 次"] --> P["放進背包<br/>只能放 1 件"]
    P --> W["進病房送禮<br/>每天最多 2 次<br/>監視器：統一造型"]
    W --> K{"哪種道具？"}
    K -- 一般禮物 --> G["排行榜馬上變動<br/>爺爺反應上對話框"]
    K -- 陷害道具 --> T["從名單選對象<br/>暗中登記<br/>排行榜不變"]
  end
  EX --> R["結算 10 秒<br/>① 小陷害開獎<br/>② 排行榜更新<br/>③ 律師登記<br/>④ 明天預告"]
  R --> N(["進入下一天"])
  class S,P,W,G act
  class T,R trap
  classDef act fill:#E1F5EE,stroke:#0F6E56,color:#085041
  classDef trap fill:#FAECE7,stroke:#993C1D,color:#712B13
```

綠色：馬上生效。橘紅色：暗中登記、之後才開獎。

- 結算的「小陷害開獎」也包含角色秘密道具
- 大陷害留到最終審判才開獎
- 角色能力在探索期間隨時可以用；第 2 到 6 天可能抽到隨機事件。為了讓圖清楚，沒有畫進去

## 最終審判的順序

```mermaid
flowchart TD
  A["① 大陷害開獎<br/>親子鑑定書<br/>第十八版遺囑"] --> B["② 延後的獎勵<br/>秘密道具送出者 +15<br/>家豪忍到最後"]
  B --> C["③ 秘密任務開獎"]
  C --> D["④ 律師公開<br/>誰送了陷害道具<br/>最荒謬三筆紀錄"]
  D --> E(["宣布繼承人"])
  class A trap
  classDef trap fill:#FAECE7,stroke:#993C1D,color:#712B13
```

相關規則：[送禮](./mechanics/#送禮)、[即時排行榜](./mechanics/#即時排行榜)、[陷害道具](./content/items/traps)、[最終審判](./mechanics/#最終審判)。
