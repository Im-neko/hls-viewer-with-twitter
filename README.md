# README
特定のハッシュタグをAPI叩いて取ってきながらHLS形式の動画再生するだけのやつ

## useage
1. twitterのAPIキーを取得する。
2. このリポジトリをクローンする
3. `.env.example`をコピーして`.env`を自分の環境に合わせて作る。
4. `api/src/config/env.js.example`をコピーして`api/src/config/env.js`を自分の環境に合わせて作る。
5. `docker-compose up -d` で起動する
6. `ハッシュタグを好きに書き換える

hls以外のもreact-playerで表示できそうなので用途に応じてuser agent見て書き換えるようにしたりすると良いのかもしれない
