# ohomebot

## なにこれ

この「**ohomebot**」は褒めて褒めて褒めちぎってくれるGoogle Chat用Botです。

技術力のない私はスプレッドシートに定型文を予め入力しておいて、それを乱数により取得するという方法を採用しているので、
パターンは少ないです。

## じゅんび

上で述べた通り、Googleスプレッドシートに定型文をあらかじめ入力して用意する必要があります...
さらに大前提として、GCP(Google Cloud Platform)にてプロジェクトを作成して、APIと紐付けて～
みたいなことをする必要があります。(結構苦戦した)
設定方法については[こちら](https://qiita.com/hima_zin331/items/31ee93fde98cee7c7728)を参考にしてください。

これらの準備ができたら、スプレッドシートURLを設定してください。
```javascript
const SHEET_URL = "" // GoogleスプレッドシートURL
```

セル番号はハードコーディングしているので、適宜変更してください。

## あそびかた

チャットルームにohomebotを追加すると、

![image](https://user-images.githubusercontent.com/63523973/87612389-60dd2d00-c745-11ea-82f4-ae1b3f0d32f7.png)

というメッセージが送信されます。
メンションによる追加でもメッセージが送信されます。

`@ohomebot`と入力すると、
![image](https://user-images.githubusercontent.com/63523973/87612466-92ee8f00-c745-11ea-8f16-920740c5f768.png)

メッセージを送信します。

`@ohomebot {NAME}`と入力すると、
![image](https://user-images.githubusercontent.com/63523973/87612746-5c654400-c746-11ea-84fc-78893def8888.png)

一部定型文にて`{NAME}`で指定した名前が使われます。

それだけです。

## ライセンス

ライセンスとかないです。好きにしてください。
