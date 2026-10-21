# ログ作成ツール Side Panel版

## 概要

既存の `ログ作成ツール ver2.1.2.html` を、Chrome拡張機能の Side Panel で開くための最小構成です。

既存HTMLにはインライン `<script>`、`onclick`、`onchange` などが含まれるため、Manifest V3 の通常の拡張機能ページとしてそのまま読み込むと CSP 制約で動かない可能性があります。
そのため、この雛形では `tool.html` を `sandbox` ページとして登録し、サイドパネル内の iframe で表示します。

## ファイル構成

- `manifest.json`：Chrome拡張機能の定義。Side Panelとsandboxページを定義しています。
- `background.js`：拡張機能アイコン押下時にサイドパネルを開く処理です。
- `sidepanel.html`：サイドパネルの外枠です。
- `sidepanel.css`：サイドパネル外枠のスタイルです。
- `sidepanel.js`：再読み込みボタン処理です。
- `tool.html`：既存ログ作成ツール本体を配置するファイルです。
- `icons/`：SVGアイコンです。

## 使い方

1. 既存の `ログ作成ツール ver2.1.2.html` をコピーします。
2. コピーしたファイル名を `tool.html` に変更します。
3. このフォルダ内の既存 `tool.html` と置き換えます。
4. Chromeで `chrome://extensions` を開きます。
5. 右上の「デベロッパーモード」をONにします。
6. 「パッケージ化されていない拡張機能を読み込む」を押します。
7. このフォルダを選択します。
8. Chrome右上の拡張機能アイコンから「ログ作成ツール Side Panel」をクリックします。

## 実装方針

- 既存HTMLのロジックを極力変更せず、まずサイドパネルで動かすことを優先しています。
- `tool.html` は sandbox iframe 内で動きます。
- Chrome拡張機能のAPIは `tool.html` 側から直接使えません。今回の用途では不要な想定です。
- 将来的に完全な拡張機能品質にする場合は、既存HTMLのインラインJSを外部JSへ分離し、`onclick` なども `addEventListener` に移行するのがおすすめです。

## 注意

- Side Panel APIを使うため、Chrome 116以降を想定しています。
- 既存HTML内の `window.open()` を使うポップアップ機能は、環境によってブロックされる可能性があります。
- `document.execCommand('copy')` は動く場合がありますが、将来的には `navigator.clipboard.writeText()` への置き換えを推奨します。
- サイドパネル幅はユーザー環境により変わるため、既存HTML側の横幅固定スタイルがある場合は追加調整が必要です。
