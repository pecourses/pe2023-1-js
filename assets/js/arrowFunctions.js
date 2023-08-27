// Необмежена кількість аргументів

// 1 arguments - псевдомасив (пронумерованы + length)

// arguments приймає усі перераховані при виклику функції аргументи,
// навіть якщо при оголошенні функції вказано імена для перших кількох параметрів

// Ex. a - arguments[0], b - arguments[1]

// arguments - колекція для збереження аргументів ф-ї
function f(a, b) {
  console.log(arguments);
  console.log('a :>> ', a);
}

f(1, 2, 3);

// Написати функцію для підрахунку суми необмеженої кількості елементів

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const sumOfArgs = sum(1, 2, 3, 4, 5, 6);
console.log(sumOfArgs);

// Task: Написати функцію для розрахунку добутку
// необмеженої кількості переданих аргументів.
function dob() {
  let dob = 1;
  for (let i = 0; i < arguments.length; i++) {
    dob *= arguments[i];
  }
  return dob;
}
const dobOfargs = dob(1, 2, 3, 4, 5, 6);
console.log(dobOfargs);

// Task: *Написати функцію виду
// calculate(operation, operand1, operand2, …, operandN),
// де operation - це операція (+,*), яка має бути виконана над операндами.
// operation - arguments[0], тому цикл перебираємо з 1

// operation = arguments[0]
function calculate(operation) {
  let accum;
  if (operation === '+') {
    accum = 0;
    for (let i = 1; i < arguments.length; i++) {
      accum += arguments[i];
    }
  } else if (operation === '*') {
    accum = 1;
    for (let i = 1; i < arguments.length; i++) {
      accum *= arguments[i];
    }
  } else {
    return undefined;
  }

  return accum;
}

const result = calculate('*', 1, 2, 3, 4);
console.log(result);

// rest-parameters

function f(a, b, ...args) {
  console.log(args);
}

const res = f(1, 2, 3, 4, 5);

// порахувати суму елементів

function sum(...summands) {
  // for, for..of,
  function howToReduce(accum, item) {
    return accum + item;
  }
  const sum = summands.reduce(howToReduce);
  return sum;
}

const res1 = sum(1, 2, 3, 4, 5, 6);
console.log(res1);

// Переробити під rest параметри
function calculate(operation, ...operands) {
  let accum;
  if (operation === '+') {
    accum = 0;
    for (let i = 0; i < operands.length; i++) {
      accum += operands[i];
    }
  } else if (operation === '*') {
    accum = 1;
    for (let i = 0; i < operands.length; i++) {
      accum *= operands[i];
    }
  } else {
    return undefined;
  }

  return accum;
}
// arguments              0   1  2  3  4
const result = calculate('+', 1, 2, 3, 4);
// ...operands                0  1  2  3
console.log(result);

//           Порівняння arguments і rest-parameters
//           | властивість функції | треба оголошувати |    тип    | всі параметри?
// arguments |          +          |        -          | Arguments |      +
// rest      |          -          |        +          |   Array   |      -

// Arrow (стрілочна, стрелочная) function ----------------------------------

// function declaration
// function funcName (p1, p2) {}

// function expression
// const fName = function (p1, p2) {}

// arrow function
// const fName = (p1, p2) => {}

// const sum = (a, b) => {
//   return a + b;
// };

// Скорочена форма

const sum = (a, b) => a + b;

console.log(sum(4, 5));

// Task: Записати isAdult у вигляді строчної функції
// Приймає вік
// Повертає істину для повнолітнього, false для неповнолітнього

// const isAdult = age => {
//   return age >= 18;
// };

// Скорочена форма

const isAdult = age => age >= 18;

console.log(isAdult(18));

// Task: Запакувати у функції об'єкт
// firstName, lastName =>{
//   firstName: firstName,
//   lastName:lastName
// }

const packToObject = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
});

console.log(packToObject('Test', 'Testovych'));

// Спрощення при запису стрілочної функції -------------

// 1 Якщо параметр 1, то можна не брати його у дужки
const isAdult = age => {
  return age >= 18;
};

// 2 Якщо в тілі функції тільки повернення значення,
//        то дужки і return можна опустити
const isAdult = age => age >= 18;

// 3 Якщо в скороченому записі вигляду 2 повертається об'єкт,
//        то його портібно взяти в ()

const packObject = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
});

// ---------------------------------------------------------------

// Обмеження:
// 1 Нема arguments
// 2 Нема свого this. Бере з середовища, тому не використовується як метод об'єкта

// ---------------------------------------------------------
// Task: Функція greeting(lang, userName), яка має повертати
// 'Hello ' + userName, if lang==='en'
// 'Вiтаю ' + userName, if lang==='ua'

// greeting('ua', "Ivo")   =>   'Вiтаю Ivo'
// greeting('en', "Ivo")   =>   'Hello Ivo'

// const greeting = (lang, userName) =>
//   lang === 'ua' ? 'Вiтаю ' + userName : 'Hello ' + userName;

const gretingOptions = {
  en: 'Hello',
  ua: 'Вітаю',
  fr: 'Bonjure',
};

const greeting = (lang, userName) => `${gretingOptions[lang]} ${userName}`;

console.log(greeting('en', 'Ivo'));
console.log(greeting('ua', 'Вікторія'));
console.log(greeting('fr', 'Fransua'));
