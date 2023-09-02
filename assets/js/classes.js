function User1(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}
// в прототипі - для екземплярів
User1.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};
// статичний метод - для функції конструктора
User1.isUser = function (obj) {
  return obj instanceof User1;
};

const user1 = new User1(
  'jack',
  'wilsher',
  23,
  true,
  'test@SpeechGrammarList.com',
  true
);

// класовий підхід
// Класи - синтаксичний цукор над вбудованими в жс
//         функціями-конструкторами і прототипами
class User {
  constructor(name, surname, age, isMale, email, isSubscribed) {
    this._firstName = name;
    this._lastName = surname;
    this.age = age;
    this._isMale = isMale;
    this._email = email;
    this._isSubscribed = isSubscribed;
  }
  // user2.age = 20
  set age(value) {
    if (typeof value !== 'number') {
      throw new TypeError('age must be number value');
    }
    if (value < 0 || value > 150) {
      throw new RangeError('age must be between 0 and 150');
    }
    this._age = value;
  }
  // const age = user2.age
  get age() {
    return this._age;
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  // статичний метод - працює для класа, а не для його екземпляра
  static isUser(obj) {
    return obj instanceof User;
  }
}

try {
  const user2 = new User(
    'jack',
    'wilsher',
    -23,
    true,
    'test@SpeechGrammarList.com',
    true
  );

  console.log(user2.getFullName());
  console.log('user2.age :>> ', user2.age);
  user2.age = '10';
} catch (err) {
  console.log('err :>> ', err);
}

// Task: реалізувати клас для телефонів (марка, модель, колір, ціна, рік випуску)
// реалізувати метод для розрахунку віку телефону
// створити екземпляр класу, викликати для нього метод
class Phone {
  constructor(brand, model, color, price, year) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.year = year;
  }
  calcPhoneAge() {
    return new Date().getFullYear() - this.year;
  }
}

const iphone = new Phone('Apple', 'iphone', 'white', '100$', 2022);
console.log(iphone.calcPhoneAge());
