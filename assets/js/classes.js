// function User1(name, surname, age, isMale, email, isSubscribed) {
//   this.firstName = name;
//   this.lastName = surname;
//   this.age = age;
//   this.isMale = isMale;
//   this.email = email;
//   this.isSubscribed = isSubscribed;
// }
// // в прототипі - для екземплярів
// User1.prototype.getFullName = function () {
//   return this.firstName + ' ' + this.lastName;
// };
// // статичний метод - для функції конструктора
// User1.isUser = function (obj) {
//   return obj instanceof User1;
// };

// const user1 = new User1(
//   'jack',
//   'wilsher',
//   23,
//   true,
//   'test@SpeechGrammarList.com',
//   true
// );

// // класовий підхід
// // Класи - синтаксичний цукор над вбудованими в жс
// //         функціями-конструкторами і прототипами
// class User {
//   constructor(name, surname, age, isMale, email, isSubscribed) {
//     this._firstName = name;
//     this._lastName = surname;
//     this.age = age;
//     this._isMale = isMale;
//     this._email = email;
//     this._isSubscribed = isSubscribed;
//   }
//   // user2.age = 20
//   set age(value) {
//     if (typeof value !== 'number') {
//       throw new TypeError('age must be number value');
//     }
//     if (value < 0 || value > 150) {
//       throw new RangeError('age must be between 0 and 150');
//     }
//     this._age = value;
//   }
//   // const age = user2.age
//   get age() {
//     return this._age;
//   }
//   getFullName() {
//     return `${this._firstName} ${this._lastName}`;
//   }
//   // статичний метод - працює для класа, а не для його екземпляра
//   static isUser(obj) {
//     return obj instanceof User;
//   }
// }

// try {
//   const user2 = new User(
//     'jack',
//     'wilsher',
//     -23,
//     true,
//     'test@SpeechGrammarList.com',
//     true
//   );

//   console.log(user2.getFullName());
//   console.log('user2.age :>> ', user2.age);
//   user2.age = '10';
// } catch (err) {
//   console.log('err :>> ', err);
// }

// // Task: реалізувати клас для телефонів (марка, модель, колір, ціна, рік випуску)
// // реалізувати метод для розрахунку віку телефону
// // створити екземпляр класу, викликати для нього метод
// class Phone {
//   constructor(brand, model, color, price, year) {
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//     this.price = price;
//     this.year = year;
//   }
//   calcPhoneAge() {
//     return new Date().getFullYear() - this.year;
//   }
// }

// const iphone = new Phone('Apple', 'iphone', 'white', '100$', 2022);
// console.log(iphone.calcPhoneAge());

// Три кити (принципи) ООП:
// інкапсуляція - приховання логіки (особливостей реалізації)
// спадкування  - перевикористання структури та логіки (альт. назва - спеціалізація, is a)
// поліморфізм  - можливість через однаковий інтерфейс працювати з різними типами (в js поліморфізм підтипів)

// інкапсуляція
// class User {
//   constructor(fullName) {
//     [this._firstName, this._lastName] = fullName.split(' ');
//   }
//   set fullName(v) {
//     [this._firstName, this._lastName] = v.split(' ');
//   }
//   get fullName() {
//     return this._firstName + ' ' + this._lastName;
//   }
// }

// const user = new User('Test Testovych');
// user.fullName = 'Ivo Bobul';
// console.log('user.fullName :>> ', user.fullName);

// спадкування / розширення (extends)
// батьківський/базовий клас
class User {
  constructor(name, surname, age, isMale, email) {
    this._firstName = name;
    this._lastName = surname;
    this._age = age;
    this._isMale = isMale;
    this._email = email;
    this._isBanned = false;
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const user = new User('Test', 'Testovych', 20, true, 'test@mail.com');

// Модератор є Користувачем (спадкування)
// permissions = {bann: true, readPrivate: false}
// дочірній клас
class Moderator extends User {
  constructor(name, surname, age, isMale, email, permissions) {
    super(name, surname, age, isMale, email); // виклик конструктора базового класу: new User()
    this._permissions = permissions;
  }
  sendMessage(user, message) {
    console.log(
      `Moderator ${this._firstName} send message "${message}" to user ${user._firstName}`
    );
  }
}

const moderator = new Moderator('Mod', 'Modovych', 30, false, 'mod@mail.com', {
  bann: false,
  readPrivate: false,
  sendMessage: true,
});

console.log(moderator.getFullName());
moderator.sendMessage(user, 'Hello');
