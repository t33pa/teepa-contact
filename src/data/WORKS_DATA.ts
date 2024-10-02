import { type WorkProps } from "../components/Work";
import { type Language } from "../types/Language";

export const WORKS_DATA: Record<Language, readonly WorkProps[]> = {
  en: [
    {
      title: "Yuzucord Cursor Showcase",
      imagePath: "/yuzu-cursor.webp",
      description:
        "Fan project done by Yuzusoft Unofficial Discord. It showcases the mouse cursor sets featuring Yuzusoft heroines we made.",
      url: "https://yuzu-cursor-project.vercel.app/",
    },

    {
      title: "Yuzucord Merch Catalog",
      imagePath: "/catalog.webp",
      description:
        "Fan project done by Yuzusoft Unofficial Discord. It organizes every Yuzusoft merchandise. I mainly worked on the Japanese translation.",
      url: "https://docs.google.com/spreadsheets/d/1gr1s87uS89StUT9E0e0jBM-PM8zLdGN4CPjhBi1xnsU/edit?gid=0#gid=0",
    },
    {
      title: "VN Blog",
      imagePath: "/vn-blog.webp",
      description:
        "My personal blog about visual novels. Currently I don't have much time to update contents...",
      url: "https://teepa-vn-blog.vercel.app/",
    },
    {
      title: 'DLsite Translation Circle "Charonslations"',
      imagePath: "/noimage.webp",
      description:
        "I translate Japanese doujin voice dramas into English with friends time to time.",
      url: "https://www.dlsite.com/home/circle/profile/=/maker_id/RG01016830.html/",
    },
  ],
  ja: [
    {
      title: "ゆずソフトマウスカーソルセット",
      imagePath: "/yuzu-cursor.webp",
      description:
        "ゆずソフトファンサーバーで制作したゆずソフトをモチーフにしたマウスカーソルセット。主に配布ページ制作を担当。",
      url: "https://yuzu-cursor-project.vercel.app/",
    },
    {
      title: "ゆずソフトグッズカタログ",
      imagePath: "/catalog.webp",
      description:
        "ゆずソフトファンサーバーで制作した、ゆずソフトの公式グッズをまとめたカタログ。主に日本語の翻訳を担当。",
      url: "https://docs.google.com/spreadsheets/d/1gr1s87uS89StUT9E0e0jBM-PM8zLdGN4CPjhBi1xnsU/edit?gid=0#gid=0",
    },
    {
      title: "ノベルゲームブログ",
      imagePath: "/vn-blog.webp",
      description:
        "ノベルゲームに関する個人ブログ。プレイしたゲームの感想などを書きたいけど最近忙しくて更新できていない...",
      url: "https://teepa-vn-blog.vercel.app/",
    },
    {
      title: 'DLsite 翻訳サークル "Charonslations"',
      imagePath: "/noimage.webp",
      description:
        "たまに海外の友人と、趣味で DLSite の作品の翻訳をしていたり。",
      url: "https://www.dlsite.com/home/circle/profile/=/maker_id/RG01016830.html/",
    },
  ],
} as const;
