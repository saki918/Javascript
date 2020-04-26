// 関数の定義
const hello = function () {
  console.log("こんにちは！");
  console.log("私の名前はジョニーです");
};
//アロー関数に書き換え
const greet = () => {
  console.log("こんにちは！");
};
// 関数の呼び出し
hello();
greet();

const introduction = function (name, age) {
  console.log(`${name}は${age}歳です`);
};

introduction("ninja", 18);

const intro = function (name, age) {
  console.log(`${name}は${age}歳です`);
};

intro("neko", 33);

const duction = (name, age) => {
  console.log(`${name}は${age}歳です`);
};

duction("wanko", 40);

// 定数nameを定義してください
const name = "にんじゃわんこ";

//スコープ範囲の把握 ()=>{} {}内に変数や定数を定義するとその中でしか使えない。関数外で呼ぶとエラーになる。
const introduce = (name) => {
  // 「わたしは〇〇です」を出力してください
  console.log(`わたしは${name}です`);
};

// 関数introduceを呼び出してください
introduce('ひつじ仙人');

// 定数nameの値を出力してください
console.log(name);

/* 3つの整数から最大値を取得できるgetMax関数を作成しましょう。
   図のように、getMax関数は3つの整数を引数に取り、最大値を戻り値とします。

const getMax = /* 関数の定義
const max = getMax(3, 7, 5);
console.log(`${max}`); */

const number1 = 103;
const number2 = 72;
const number3 = 189;

// getMax関数を定義してください
const getMax = (a, b, c) => {
  let max = a;
  if (max < b) {
    max = b;
  } else if (max < c) {
    max = c;
  }
  return max
};

// 「最大値は○○です」と出力してください
const max = getMax(number1, number2, number3)
console.log(`最大値は${max}です`);
