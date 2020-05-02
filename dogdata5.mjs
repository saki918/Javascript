// import readlineSync from "readline-sync";
import Dog from "./dog5.mjs";

const dog1 = new Dog("レオ", 4, "チワワ");
// readlineSync.question で文字列の入力
// const name = readlineSync.question("名前を入力してください: ");
// readlineSync.questionInt で整数の入力
// const age = readlineSync.questionInt("年齢を入力してください: ");

// const breed = readlineSync.question("犬種を入力してください: ");

// const dog2 = new Dog(name, age, breed);

//デフォルトエクスポートは1ファイルに1回のみ使える。
//export default dog;
// 名前エクスポートは複数指定可
export { dog1 };
