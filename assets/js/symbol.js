const s = Symbol('key');
console.log('s :>> ', s);

const s2 = Symbol('key');
console.log('s2 :>> ', s2);

console.log('s === s2 :>> ', s === s2); // false, різні значення
// symbol як ключ в об'єкті
const key = Symbol('key');

const option = {
  url: 'http://some.address.com',
  [key]: 'gjdsaf51sd53gfdfmajsdkfasdf4sf',
};

for (const key in option) {
  console.log(key);
}

// symbol для генерації унікальних значень
const THEMES = {
  LIGHT: Symbol('light'),
  DARK: Symbol('dark'),
};

const theme = THEMES.LIGHT;

switch (theme) {
  case THEMES.DARK:
    console.log('THEMES.DARK :>> ', THEMES.DARK);
    break;
  case THEMES.LIGHT:
    console.log('THEMES.LIGHT :>> ', THEMES.LIGHT);
    break;
  default:
    console.log(' unexpected value ');
}

// Symbol.iterator - протокол ітерованості (перебору) колекцій
// Якщо колекція має в ланцюжку прототипів метод Symbol(Symbol.iterator),
// то працюватимуть наступні можливості

// 1 for..of

// 2 деструктуризація колекції

const [first, second] = [1, 2];
// + для об'єктів (вийняток, бо не має Symbol.iterator)

// 3 spread оператор ...
// створення копії колекції
// конкатенація колекцій

// для масивів:
const arr = [1, 2, 3];

// копіювання масивів
const arrCopy = [...arr];

// конкатенація масивів
const arr3 = [9, 8, 7];
const arr13 = [...arr, ...arr3];

// перетворення одного типу ітерованої колекції в інший
function sum() {
  const arrFromArguments = [...arguments]; // Перетворити arguments на array
  return arrFromArguments.reduce((accum, item) => accum + item);
}

console.log(sum(1, 2, 3, 4, 5));

// передача елементів масиву в функцію (розширення масиву в аргументи функції)
const arr1 = [1, 2, 3, 4, 5, 6, 7];

// console.log(sum(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4], arr1[5], arr1[6]));
// або
console.log(sum(...arr1));

// + для об'єктів (вийняток, бо не має Symbol.iterator):

// копіювання
const userCopy = { ...user1 };

// злиття об'єктів в один
const user1 = { firstName: 'Ivo', lastName: 'Ivovych' };
const user2 = { isMale: true, age: 20 };

let user3 = { ...user1, ...user2 };
console.log(user3);

const newName = 'Ivonga';
user3 = { ...user3, firstName: newName };
// {
//   age: 20,
//   firstName: "Ivo",
//   isMale: true,
//   lastName: "Ivovych",
//   firstName: newName
// }
console.log(user3);

// Ex. внести зміни в один з об'єктів масиву
const users = [
  { id: 1, name: 'Test1', age: 20, tel: '+380123456789' },
  { id: 2, name: 'Test2', age: 30, tel: '+380123456788' },
  { id: 3, name: 'Test3', age: 40, tel: '+380123456787' },
  { id: 4, name: 'Test4', age: 50, tel: '+380123456786' },
];

user = { id: 2, tel: '+380223456788' };
const foundIndex = users.findIndex(u => u.id === user.id);

// users[foundIndex]=user
users[foundIndex] = { ...users[foundIndex], ...user };

// Ex. отримання набору опцій з користувацьких та дефолтних

function sendData(data, option) {
  const defaultOption = { host: 'localhost', port: 5000 };
  const resultOption = { ...defaultOption, ...option };
  // {
  //   port: 5000 ,
  //   host: 'localhost',
  //   port: 5005
  // }

  // запит з даними data на host port
}

sendData({ id: 2, tel: '+380223456788' }, { port: 5005 });

// 4 Array.from() - створює масив з псевдомасива або ітерованої колекції
