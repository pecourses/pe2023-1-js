// Множина Set (зберігає тільки унікальні значення)

//
const s1 = new Set();
console.log('s1 :>> ', s1);

const s2 = new Set([1, 2, 3, 4, 5, 1, 0, 2, 3, 6, 5, 1, 2, 0]);

// size
// add() => Set
// has() => boolean
// delete()
// clear()

// values() = keys()
// entries()
// forEach()

// Розмір
console.log('s2.size :>> ', s2.size);

// Додати
s1.add(1).add(2).add(1);

// Перевірити наявність
console.log('s1.has(1) :>> ', s1.has(1));
console.log('s1.has(5) :>> ', s1.has(5));

// Видалити
s1.delete(1);

// Очистити
s1.clear();

s2.forEach((s, sAgain, set) => console.log('s :>> ', s, sAgain));

for (const item of s2) {
  console.log('item :>> ', item);
}

// Ex.: Отримати масив унікальних значень
const arr = [1, 2, 3, 5, 7, 8, 9, 6, 5, 4, 0, 2, 4]; //=>[1,2,3,5,7,8,9,6,4,0]

// const s3 = new Set(arr);

// const arr2 = [...s3];

const arr2 = [...new Set(arr)];

// Task: Отримати масив унікальних імен => ['Test',  'Grut', 'John Doe', 'Jane Doe']
const users1 = [
  'Test',
  'Grut',
  'John Doe',
  'Grut',
  'John Doe',
  'Grut',
  'John Doe',
];
const users2 = [
  'Test',
  'Jane Doe',
  'Test',
  'Jane Doe',
  'Test',
  'Jane Doe',
  'Grut',
];
// =>['Test', 'Grut','John Doe','Jane Doe']

const names = [...new Set([...users1, ...users2])];
console.log(names);

// Task: Отримати масив марок телефонів => ['IPhone', 'Samsung', 'Xiaomi']
const users = [
  { name: 'Test0', brand: 'IPhone' },
  { name: 'Test1', brand: 'Samsung' },
  { name: 'Test2', brand: 'IPhone' },
  { name: 'Test3', brand: 'Xiaomi' },
  { name: 'Test4', brand: 'Samsung' },
  { name: 'Test5', brand: 'Xiaomi' },
  { name: 'Test6', brand: 'IPhone' },
];

// brands = ['IPhone', 'Samsung', 'Xiaomi']

// const brands = users.map(u => u.brand);
// const brandSet = new Set(brands);
// const uniqueBrands = [...brandSet];

const brands = [...new Set(users.map(user => user.brand))];
// console.log(brands); // ["IPhone", "Samsung", "Xiaomi"]

// Ex.: Отримати об'єкти виду
// {
//   IPhone:['Test0', 'Test2', 'Test6'],
//   Samsung:[...],
//   Xiaomi:[...]
// }

// const phonesWithUsers = {
//   [brands[0]]: [],
//   [brands[1]]: [],
//   [brands[2]]: [],
// };

const phonesWithUsers = {};

brands.forEach(
  b => (phonesWithUsers[b] = users.filter(u => u.brand === b).map(u => u.name))
);

// отримати всі об'єкти, де brand: 'IPhone'
// const usersWithIphone = users.filter(u => u.brand === 'IPhone');
// const userNamesWithIphone = usersWithIphone.map(u => u.name);
