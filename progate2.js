let number = 1;
//繰り返し処理 1回処理を書くだけで、同じ処理を条件下の下繰り返す。
//例 1から100までの間の数値を出し続ける。
//whileは終わりの条件を設定しないと永遠に終わらない。
while (number <= 100) { 
  console.log(number);
  number++
}
//上のwhileをfor文で書き直す
for (let num = 1; num <= 100; num++) {
  console.log(num);
}

//for文の中でif文の条件分岐
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log("3の倍数です！");
  } else {
    console.log(num);
  }
}

//配列で値を複数持たせる。値のことを要素と呼ぶ
const fluits = ["banana", "apple", "melon"];
console.log(fluits);

//要素の中の"banana"を出力する場合
console.log(fluits[0]);

//配列の値の更新
fluits[0] = "grape";
console.log(fluits[0]);


//配列をfor文を表示
for (let i = 0; i < 3; i++) {
  console.log(fluits[i]);
}

// 配列.lengthで要素の数を取得出来る
for (let i = 0; i < fluits.length; i++) {
  console.log(fluits[i]);
}

//オブジェクト {プロパティ1:値1,プロパティ2:値2,プロパティ3:値3}
const item = { name: "rice", price: 100 };
console.log(item);

//オブジェクトの値を取り出す
console.log(item.name);

//オブジェクトの値を更新する
item.price = 300;
console.log(item);

//オブジェクトを要素に持つ配列 配列の値がオブジェクトなので、
//配列[インデックス番号]で対応するオブジェクトを取得することができます。
const items = [
  { name: "rice", price: 100 },
  { name: "curry", price: 300 }
];

console.log(items[0]);
console.log(items[1].name);

const characters = [
  { name: "にんじゃわんこ", age: 14 },
  { name: "ひつじ仙人", age: 100 },
  { name: "ベイビーわんこ", age: 5 },
];

// for文を完成させてください
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");

  // 定数characterを定義してください
  const character = characters[i]

  // 「名前は〇〇です」を出力してください
  console.log(`名前は${character.name}です`);

  // 「〇〇歳です」を出力してください
  console.log(`${character.age}歳です`);

}

const chara = [
  { name: "にんじゃわんこ", age: 17 },
  { name: "ひつじ仙人", age: 200 },
  { name: "ベイビーわんこ", age: 3 },
];

// for文を完成させてください
for (let i = 0; i < chara.length; i++) {
  console.log("--------------------");

  // 「名前は〇〇です」を出力してください
  console.log("名前は" + chara[i].name+"です");

  // 「〇〇歳です」を出力してください
  console.log(chara[i].age+"歳です");

}

const cha = [
  { name: "にんじゃわんこ", age: 20 },
  { name: "ひつじ仙人", age: 130 },
  { name: "ベイビーわんこ", age: 1 },
  { name: "とりずきん" }
];

// undefinedを用いたifの条件分岐
for (let i = 0; i < cha.length; i++) {
  console.log("--------------------");

  const character = cha[i];

  console.log(`名前は${character.name}です`);

  // if文を追加してください
  if (character.age === undefined) {
    console.log("年齢は秘密です");
  } else {
    console.log(`${character.age}歳です`);
  }
}

const student = {
  name: "george",
  age: 20,
  favorite: {
    food: "humberger",
    sports: "baseball",
    color: "blue"
  },
};
console.log(student);
console.log(student.favorite);
console.log(student.favorite.sports);

// オブジェクトの値には、オブジェクトや配列を用いることが出来る。
const cafe = {
  name: "Progateカフェ",
  businessHours: {
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  // menusプロパティに配列を代入してください
  menus: ["コーヒー", "紅茶", "チョコレートケーキ"]

};

console.log(`店名: ${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

// for文を用いて配列menusの中身を表示させてください
for (let i = 0; i < cafe.menus.length; i++) {
  console.log(cafe.menus[i]);
}