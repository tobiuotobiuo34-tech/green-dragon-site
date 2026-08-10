# GreeN DoRaGoN 公式サイト Ver.0.1

個人クリエイターの活動をまとめる公式ホームページです。GitHub Pagesで無料公開できる、HTML・CSS・JavaScriptだけの静的サイトです。サーバー、データベース、ビルド作業は必要ありません。

## 起動方法

`index.html` をブラウザで開くか、プロジェクト直下でローカルサーバーを起動します。

```powershell
python -m http.server 8000
```

その後 `http://localhost:8000/` を開きます。VS Codeの「Live Server」でも確認できます。

## サイト構成

```text
index.html                 TOP
games/index.html           ゲーム一覧
games/sample-game.html     作品詳細サンプル
game-editor/index.html     Game Editor
about/index.html           About
assets/site-data.js        共通設定・お知らせ・作品データ
assets/app.js              共通ヘッダー等の描画
assets/style.css           サイト全体のデザイン
```

すべて相対URLを使っているため、GitHub Pagesのプロジェクトサイト形式でもリポジトリ名に関係なく動作します。

## 作品追加方法

1. `games/sample-game.html` をコピーし、半角英数字とハイフンのファイル名にします（例：`my-new-game.html`）。
2. コピーしたページのタイトル、説明、ジャンル、公開日を編集します。
3. `assets/site-data.js` の `games` 配列へ作品データを追加します。
4. `type` は無料作品なら `free`、有料作品なら `paid` にします。
5. `href` に詳細ページのファイル名を指定します。

作品数が増えても、`games` 配列へ同形式の項目を追加するだけで一覧に自動表示されます。

## 外部リンク変更方法

`assets/site-data.js` の `externalLinks` を編集します。ヘッダー、フッター、TOP、Aboutへ一括反映されます。お問い合わせメールは同じファイルの `contactEmail` で変更できます。

```js
externalLinks: {
  x: "https://x.com/あなたのID",
  youtube: "https://www.youtube.com/@あなたのチャンネル",
  fanza: "販売者ページのURL",
  dlsite: "販売者ページのURL",
  pixiv: "pixivプロフィールのURL"
}
```

同じファイルの `siteName` と `creatorName` でサイト名と制作者名を変更できます。`news` 配列でTOPのお知らせを編集できます。

## 画像変更方法

Ver.0.1ではリンク切れを防ぐため、サムネイルと画面イメージをCSS製の仮ビジュアルにしています。実画像へ変更するときは以下の手順です。

1. `assets/images/` を作り、WebP・JPEG・PNG画像を保存します。
2. 対象ページの `.thumb` 要素を `<img src="../assets/images/画像名.webp" alt="作品名の画面写真">` に置き換えます。
3. TOPから使う場合は `assets/images/...`、サブページでは `../assets/images/...` とします。
4. 表示速度のため、横幅1600px程度以下のWebPを推奨します。

## 新しいページを追加する基本構造

1. 新しいフォルダを作り、その中に `index.html` を作成します。
2. `about/index.html` などを雛形としてコピーします。
3. CSSとJavaScriptは `../assets/style.css`、`../assets/site-data.js`、`../assets/app.js` を読み込みます。
4. `<body data-page="ページ識別子" data-depth="1">` を設定します。
5. 共通ナビゲーションへ追加するときは `assets/app.js` 冒頭の `nav` 配列へ追加します。

R18エリアは `r18/index.html`（年齢確認入口）と `r18/games/index.html`（R18作品一覧）として全年齢サイトから分離しています。年齢確認結果はブラウザのタブ内だけで保持され、未確認のまま作品一覧へ直接アクセスすると年齢確認へ戻ります。作品追加時もTOPは全年齢向けのまま維持してください。

## ロゴ変更方法

ヘッダーとフッターの共通ロゴは `assets/images/green-dragon-logo-transparent.png` です。同じファイル名の透過PNGへ置き換えるとサイト全体へ反映されます。

## GitHubへアップロードしてGitHub Pagesで公開する手順

### 1. GitHubでリポジトリを作る

1. GitHubへログインし、右上の「+」から「New repository」を選びます。
2. Repository nameを入力します（例：`creator-base`）。
3. 無料のGitHub Pagesで公開するため「Public」を選びます。
4. 「Create repository」を押します。

### 2. ファイルをアップロードする

1. 作成したリポジトリで「Add file」→「Upload files」を選びます。
2. このフォルダ内の `index.html`、`games`、`game-editor`、`about`、`assets`、`README.md` をドラッグ＆ドロップします。
3. 画面下部の「Commit changes」を押します。

フォルダ全体を一つ上からアップロードせず、`index.html` がリポジトリ最上位に見える状態にしてください。

### 3. GitHub Pagesを有効にする

1. リポジトリ上部の「Settings」を開きます。
2. 左側の「Pages」を選びます。
3. 「Build and deployment」のSourceで「Deploy from a branch」を選びます。
4. Branchを `main`、フォルダを `/(root)` にして「Save」を押します。
5. 数分待って同じ画面を更新すると、公開URLが表示されます。

通常のURLは `https://GitHubユーザー名.github.io/リポジトリ名/` です。初回公開や更新の反映には数分かかる場合があります。

### 4. 公開後の確認

- TOP、Games、Game Editor、Aboutを順に開く
- スマートフォンでも開く
- 外部URLを本番用へ変更済みか確認する
- `Creator Name` と `CREATOR BASE` を正式名称へ変更する

## 更新方法

GitHub上で対象ファイルを開き、鉛筆アイコンから編集して「Commit changes」を押すとGitHub Pagesへ自動反映されます。大量更新ではGitを使った運用へ切り替えられます。
