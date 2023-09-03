// Деструктуруюче присвоювання

// function f(user) {
//   // const firstName = user.firstName;
//   // const lastName = user.lastName;

//   // Деструктуроване просвоювання
//   const { firstName, lastName, age } = user;

//   console.log('name :>> ', firstName);
//   console.log('surname :>> ', lastName);
// }

// значення за замовчуванням при деструктуризації
function f({ firstName, age = 0, lastName }) {
  console.log('name :>> ', firstName);
  console.log('surname :>> ', lastName);
  console.log('age :>> ', age);
}

const user = {
  firstName: 'Test',
  lastName: 'Testovych',
};

f(user);

// Оголосити змінні, використовуючи деструктуризацію
// const book = { author: 'Astred Lindgren', title: 'Karlson' };
// function bookInfo({ author, title }) {
//   console.log('author >> ', author);
//   console.log('title >> ', title);
// }
// bookInfo(book);

// const { author, title } = book;
// console.log("author :>> ", author);
// console.log("title :>> ", title);

// Особливості синтаксису:
// імена змінних мають відповідати іменам властивостей об'єкта
// після двокрапки можна вказувати нове ім'я або
// деструктуризувати вкладений об'єкт

const book = {
  author: {
    firstName: 'Test',
    lastName: 'Testovich',
  },
  price: 12,
};

const {
  author: { firstName, lastName },
  price: bookPrice,
} = book;

console.log(bookPrice);
console.log(firstName);
console.log(lastName);

// Масиви
const arr = [1, 2, 3, 4];
// const arr0 = arr[0];
// const arr1 = arr[1];

// Оголошені змінні співставляються за порядком елементів
const [arr0, arr1, , arr3] = arr;
console.log('arr0 :>> ', arr0);
console.log('arr1 :>> ', arr1);
console.log('arr3 :>> ', arr3);
// витягти arr3 (4)

const user1 = {
  name: 'Test',
  age: 23,
  emails: ['test1@test.com', 'test2@test.com'],
  isMale: true,
};

// Task: name, age, email1, email2, isMale
// перейменувати name -> userName, age -> userAge
// const {
//   name: userName,
//   age: userAge,
//   emails: [email1, email2],
//   isMale,
// } = user1;

// console.log(userName, userAge, email1, email2, isMale);

const attr = { id: 'btn', style: 'color:blue', title: 'click me' };

// style, {id, title}
// Деструктуризується тільки style, інше запакується в об'єкт restAttr
const { style, ...restAttr } = attr;
console.log('style :>> ', style);
console.log('restAttr :>> ', restAttr);

// витягти з user1 тільки ім'я, все інше запакувати в об'єкт
const { name, ...restInfo } = user1;
console.log(name);
console.log(restInfo);
