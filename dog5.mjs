// パッケージの使用指定 chalkは文字の色を変えられる。
//import chalk from "chalk";
import chalk from "./npm_sample/node_modules/chalk/source/index.js";
// animal5に定義されているAnimalを使用出来るように記述。そのファイルが export default Animal を設定していた場合
import Animal from "./animal5.mjs";

class Dog extends Animal {
  // constructorを追加してください
  constructor(name, age, breed) {
    //親クラスのコンストラクタを継承する場合、super(親のコンストラクタの引数)を記述。
    super(name, age);
    //子のインストラクタで、新しくインスタンスを作成する。
    this.breed = breed;
  }
  //親クラスと子クラスと同名のメソッドがある場合、子クラスのメソッドが使用される。
  info() {
    this.greet();
    console.log(chalk.yellow(`名前は${this.name}です`));
    // 「犬種は〇〇です」と出力してください
    console.log(chalk.bgCyan(`犬種は${this.breed}です`));

    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;