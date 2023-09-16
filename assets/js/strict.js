'use strict';

// Суворий режим / Strict Mode / Строгий режим

// 1 Неможливість використосувати неоголошені змінні
// a = 10;
// console.log('a :>> ', a);
// alert('hello');

// 2 В суворому режимі генеруються помилки, багато з яких в несуворому ігноруються
// const prim = 10;
// prim.name = 'Test';

// 3 Контекстом функції в суворому режимі є undefined
// => не можна ф-конструктор використовувати без new
function User(name) {
  // в несуворому режимі this в функції є window
  // в суворому - undefined
  this.name = name;
}

const user = new User('Test');
