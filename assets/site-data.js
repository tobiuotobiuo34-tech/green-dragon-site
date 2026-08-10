/* サイト名・外部リンク・作品・お知らせの共通設定 */
window.SITE_DATA = {
  siteName: "GreeN DoRaGoN",
  creatorName: "GreeN DoRaGoN",
  contactEmail: "greendoragon0412@gmail.com",
  externalLinks: {
    x: "https://x.com/mittye_3",
    youtube: "https://www.youtube.com/",
    fanza: "https://www.dmm.co.jp/",
    dlsite: "https://www.dlsite.com/",
    pixiv: "https://www.pixiv.net/"
  },
  news: [
    { date: "2026.08.10", category: "CIRCLE", title: "GreeN DoRaGoN 公式サイトを公開しました", href: "about/index.html" },
    { date: "2026.08.10", category: "EDITOR", title: "自作ゲーム制作エディタを開発中です", href: "game-editor/index.html" }
  ],
  games: [
    { type: "free", visual: "a", title: "Sample Game", description: "世界観と物語を楽しむ、短編アドベンチャー。作品情報をここに掲載します。", genre: "Adventure", date: "2026.08.10", href: "sample-game.html" },
    { type: "free", visual: "b", title: "Next Free Game", description: "次回作のための仮カードです。データを複製して作品を追加できます。", genre: "Coming Soon", date: "未定", href: "#", disabled: true },
    { type: "paid", visual: "c", title: "Paid Game Project", description: "販売作品のための仮カードです。FANZA・DLsiteなどへの導線も追加できます。", genre: "Coming Soon", date: "未定", href: "#", disabled: true }
  ]
};
