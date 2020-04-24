//コンソールへの出力 ; (セミコロン)を最後につけて終了させる
console.log("Hello World");

console.log(3);
console.log(9 + 18);
console.log("9" + "18");
console.log("9+18");
console.log("java" + "script");
console.log("java+script");

// 変数nameを定義し、「にんじゃわんこ」を代入してください
let js = "にんじゃわんこ";

// 変数nameの値を出力してください
console.log(js);
// "name"と入力すると文字列として判断されて変数として受け付けてもらえない
console.log("js");

js = "ひつじ";
console.log(js);

/* 変数とよく似たものに、定数があります。定数はletの代わりにconstを用いて定義します。
   定数は値を更新することはできません。*/
const git = "john";
console.log(git);

// 変数と文字列の間に + を忘れない。
console.log(git + "は面白い人です。");

const name = "にんじゃわんこ";
const age = 14;

/* ES6では、それ以外の方法として**「テンプレートリテラル」**という連結方法があります。テンプレートリテラルを用いると、文字列の中に定数（変数）を埋め込むことができます。
文字列の中で**「${定数}」**とすることで、文字列の中に定数や変数を含めることができます。
この時、文字列全体をバッククォーテーション（`）**shiftキー + @キー**で囲む必要があります。
複数の変数や定数を埋め込むことも可能です。 */
console.log(`ぼくの名前は${name}です`);

console.log(`今は${age}歳です`);

const level = 12;
// 条件式を「level > 10」とするif文を作ってください
if (level > 10) {
  console.log("レベルが10より大きいです");
}

const password = "ninjawanko";
// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if (password === "ninjawanko") {
  console.log("ログインに成功しました");
}

// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if (password !== "ninjawanko") {
  console.log("パスワードが間違っています");
}

const rank = 5;
switch (rank) {
  case 1:
    console.log("金メダルです！");
    break;
  case 2:
    console.log("銀メダルです！");
    break;
  case 3:
    console.log("銅メダルです！");
    break;
  default: //どの条件にも当てはまらない場合の処理
    console.log("メダルはありません");
    break;
}