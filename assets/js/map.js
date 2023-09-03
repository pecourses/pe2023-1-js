// Map

// Колекція по ключу, яка може як ключ містити будь-який тип

// Властивості/методи:
// size
// set(key, value) => map
// get(key) => value
// has(key) => boolean
// delete(key) => boolean
// clear()

// keys() => MapKeyIterator
// values() => MapValueIterator
// enrties() => MapEntryIterator
// forEach()

// Створення
const map1 = new Map();

// ~arr.length
console.log('map1.size :>> ', map1.size);

const user = { id: 1, name: 'Ivo' };
// obj.key = value
map1.set('firstName', 'Test').set('lastName', 'Testovych');
map1.set(user, ['hello)', 'I am fine']);

// obj.key
console.log(map1.get('firstName'));
console.log(map1.get(user));

// obj in key
console.log(map1.has('lastName'));
console.log(map1.has('age'));

// Task: чи є номер абонента Test, Ivo
const m1 = new Map();
m1.set('Test', '+380123456789')
  .set('Test2', '+380123456788')
  .set('Test3', '+380123456787');
console.log(m1.has('Test'));
console.log(m1.has('Ivo'));

// delete obj.key
m1.delete('Test');
console.log(m1);

// m1.clear();
// console.log(m1);

// Перебір мапи
m1.forEach((value, key) => console.log(key, value));
for (const item of m1) {
  console.log('item :>> ', item);
}

// Отримання масивів ключів, значень
console.log(m1.keys());
const mapKeys = [...m1.keys()];
console.log(mapKeys);
console.log([...m1.values()]);

// створити мапу з об'єкта
const obj = {
  Test: '+380123456789',
  Test1: '+380123456788',
};

console.log(Object.entries(obj));
const m2 = new Map(Object.entries(obj));

// Example: перекладач. Словник міститься в мапі

const vocabulary = new Map();
vocabulary.set('dog', 'собака').set('cat', 'кіт').set('run', 'бігати');

// function translateEngToUa(engPhrase) {
// отримати масив англ слів ['dog', 'run', 'white', 'cat']
//   const engWords = engPhrase.split(' ');
// по словнику, якщо є відповідний ключ, то отримати по ним значення ['собака', 'бігає', 'white', 'кіт']
// інакше залишити як є
//   const uaWords = engWords.map(w =>
//     vocabulary.has(w) ? vocabulary.get(w) : w
//   );
// з масива отримати рядок
//   const uaPhrase = uaWords.join(' ');
//   return uaPhrase;
// }

function translateEngToUa(engPhrase) {
  return engPhrase
    .split(' ')
    .map(w => (vocabulary.has(w) ? vocabulary.get(w) : w))
    .join(' ');
}

// const translateEngToUa = engPhrase =>
//   engPhrase
//     .split(' ')
//     .map(w => (vocabulary.has(w) ? vocabulary.get(w) : w))
//     .join(' ');

const engPhrase = 'dog run white cat';
const ukrPhrase = translateEngToUa(engPhrase); // 'собака бігає white кіт'
console.log(ukrPhrase);
