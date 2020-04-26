const animal = {
  name: "レオ", age: 3, greet: () => {
    console.log("こんにちは");
  }
};

// animalのnameプロパティの値を出力してください
console.log(animal.name);

// animalのgreetプロパティの関数を実行してください
animal.greet();

class Animal { }

//クラスからオブジェクトを生成 animalインスタンス
const anim = new Animal();
console.log(animal);

class Anima {
  // クラスにはコンストラクタと呼ばれる機能が用意されています。コンストラクタはインスタンスを生成するときに実行したい処理や設定を追加するための機能です。ここに書いた処理はインスタンスが生成された直後に実行されます。
  //大切なのは、インスタンスごとに毎回実行される。
  constructor() {
    console.log("インスタンスを生成しました");
    //生成されたインスタンスにプロパティと値を追加
    this.name = "値";
  }

}

const anima = new Anima();
console.log(anima.name);

class Ani {
  constructor(nam) {
    this.name = nam;
  }
}

const ani = new Ani("キリン");
console.log(ani.name);

//メソッドはクラスの中で定義します。「メソッド名() { }」とすることでメソッドは定義できます。
//メソッドは関数と似たようなもので、中括弧「{ } 」の中にそのメソッドで行いたい処理を記述します。

/*class クラス名 {
  constructor() {

  }
  メソッド名1() {
    繰り返し処理
  }
  メソッド名2() {
    //メソッド内で他のメソッドを呼び出すことも可能です。
    メソッド内で「this.メソッド名()」とすることで、同じクラスの他のメソッドを使うことができます。
    this.メソッド名1();
  }
}
const class = new Class();
class.method();
*/

/*「継承」とは、すでにあるクラスをもとに、新しくクラスを作成する方法のことです。
   継承を用いてクラスを作成するには「extends」を用います。
   「Animalクラス」を継承して「Dogクラス」を作成するには、図のように「class Dog extends Animal」と書きます。
   また、継承では元となるクラスを親クラス（今回はAnimalクラス）、新しく作成するクラスを子クラス（今回はDogクラス）と呼びます。*/

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("こんにちは");
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

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
    console.log(`名前は${this.name}です`);
    // 「犬種は〇〇です」と出力してください
    console.log(`犬種は${this.breed}です`);

    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

// 3つ目の引数に「"チワワ"」を渡してください
const dog = new Dog("レオ", 4, "チワワ");
dog.info();

