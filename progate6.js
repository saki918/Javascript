const num = [1, 2, 3];

console.log(num);
// 引数の中に入れた値を配列の最後に追加する
num.push(4);
console.log(num);

/* 引数にアロー関数を持つforEachメソッド 引数に設定される関数をコールバック関数という。
   forEachの後の引数を１つずつ処理していく。*/
num.forEach((ber) => {
  console.log(ber);
});

// find メソッドは 条件に合う最初の一つの値だけ表示する。return 条件
const foundNum = num.find((ber) => {
  return ber > 3
});

console.log(foundNum);

const numbers = [1,2, 3, 5,6, 7, 9];

// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入してください
const foundNumber = numbers.find((number) => {
  return number % 3 === 0
});

// 条件に合う全ての要素を取り出す場合 filter メソッドを使う。
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0
});

// map は配列に対して条件を加えて新しく変数を作成する。
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

// foundNumberを出力してください
console.log(foundNumber);
console.log(evenNumbers);
console.log(doubledNumbers);


const characters = [
  { id: 1, name: "にんじゃわんこ", age: 6 },
  { id: 2, name: "ベイビーわんこ", age: 2 },
  { id: 3, name: "ひつじ仙人", age: 100 },
  { id: 4, name: "とりずきん", age: 21 }
];

// 定数charactersからidが3のオブジェクトを見つけ、定数foundCharacterに代入してください
const foundCharacter = characters.find((character) => {
  return character.id === 3
});

const underTwenty = characters.filter((character) => {
  return character.age < 20
});

// foundCharacterを出力してください
console.log(foundCharacter);
console.log(underTwenty);

const names = [
  { firstName: "Kate", lastName: "Jones" },
  { firstName: "John", lastName: "Smith" },
  { firstName: "Denis", lastName: "Williams" },
  { firstName: "David", lastName: "Black" }
];

// 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入してください
const fullNames = names.map((name) => {
  return name.firstName + name.lastName;
});

// 定数fullNamesを出力してください
console.log(fullNames);