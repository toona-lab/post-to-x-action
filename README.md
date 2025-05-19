# ⚠️ 注意事項

このリポジトリの仕組みを利用して X（旧Twitter）に自動投稿を行う場合、<br>
GitHub Secrets に保存したトークンを使用して投稿が実行されます。<br>

そのため、対策をせずにリポジトリをPublicにした状態でこの仕組みを動かすと、<br>
第三者に勝手に投稿されるリスクがあります。<br>
✅ Private リポジトリでの運用を強く推奨します！<br>

この仕組みを使用して生じた、アカウント凍結、トークン漏洩、誤投稿、<br>
その他の損害について、作者は一切の責任を負いません。<br>
利用にあたっては自己責任でお願いいたします。<br>

# 🚀 Usage

## 1. 開発ログを作成

posts/ フォルダ内に Markdown ファイル（500文字以内）を追加してください：<br>

```
make create
```
または
```
touch posts/2025-05-20-00-00-00.md
```

## 2. GitHub Actions による自動投稿（mainブランチ限定）

Markdownファイルを追加して main ブランチに push すると、<br>
GitHub Actions によって最新のファイル内容が X に自動投稿されます。

```
git add posts/2025-05-20-00-00-00.md
git commit -m "新しい開発ログ"
git push origin main
```

## 3. ローカルで手動投稿したい場合

.env ファイルに必要なトークンを設定する。

POST_FILE=posts/2025-05-18-hajimete.md<br>
X_API_KEY=your_api_key<br>
X_API_KEY_SECRET=your_api_secret_key<br>
X_ACCESS_TOKEN=your_access_token<br>
X_ACCESS_TOKEN_SECRET=your_access_token_secret<br>

その後に、jsファイルを実行してください。<br>
```
node post-to-x.js
```

## 4. GitHub Secrets に登録すべき環境変数
以下の環境変数を登録する必要があります。<br>
・ X_API_KEY<br>
・ X_API_KEY_SECRET<br>
・ X_ACCESS_TOKEN<br>
・ X_ACCESS_TOKEN_SECRET<br>

キーに紐づく値は、developerのダッシュボードから<br>
確認できます。<br>
https://developer.x.com/en/portal/dashboard<br>

## ✅ その他のオプション<br>

投稿内容は Markdown の先頭から500文字としてますが、<br>
より長いツイートを投稿できるようにしたい場合は、適宜調整してください。<br>
あと、冒頭でも記載しましたが、自分以外のユーザーによる投稿に注意してください。<br>

安全な発信活動を楽しみましょう！🍙

