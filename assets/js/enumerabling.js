// Перелічувані властивості / перечисляемые свойства / enumerable properties
const user = {
  firstName: 'Test',
  lastName: 'Testovych',
};

for (const key in user) {
  console.log(`user[${key}] = ${user[key]}`);
}
console.log(user);

const arr = [1, 2, 3, 4, 5];

for (const index in arr) {
  console.log(`arr[${index}] = ${arr[index]}`);
}

console.log(arr);

// for..in перелічує тільки перелічувані (enumerable: true)
// властивості (власні та успадковані)

function User1(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User1.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const user1 = new User1('test', 'test2', 20, true, 't@g.com', true);

// Перелічує і свої, і успадковані перелічувані властивості
for (const key in user1) {
  console.log('key :>> ', key);
}

// Як отримати тільки свої перелічувані властивості?
// 1
for (const key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log('key own :>> ', key);
  }
}

// 2
// Object.keys() => масив власних перелічуваних властивостей
console.log('Object.keys() :>> ', Object.keys(user1));

const user1Keys = Object.keys(user1);
user1Keys.forEach(uKey => console.log(`user[${uKey}] = ${user1[uKey]}`));

// повертає масив з власних перелічуваних значень властивостей
console.log(Object.values(user1));

// повертає масив з власних перелічуваних пар [властивість,ключ]
console.log(Object.entries(user1));

// Task: Задати об'єкт телефона і вивести масив його властивостей
// і масив значень цих властивостей
const phone = {
  model: 'iPhone',
  color: 'black',
  price: 700,
};
console.log(Object.keys(phone));
console.log(Object.values(phone));
