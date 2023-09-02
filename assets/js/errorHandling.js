try {
  // код, який потенційно може викликати помилки
} catch (err) {
  // блок, куди буде передане куревання, якщо виникла вбудована помилка
  // або згенерувалася вручну в throw
}

// throw генерує помилку (виняткову ситуацію/исключительную ситуацию/exception)
// вона передається в catch:
// throw new Error
//          ||
//          \/
// catch  (error)

const a = 10;
console.log('a :>> ', a);

try {
  const c = a + b; // код з потенційною помилкою
  console.log('Hello after error');
} catch (err) {
  console.log('err :>> ', err);
}

console.log('Hello');

// throw new Error('message');
// console.log('Hello1');

// написати функцію для обчислення факторіала.
// Передбачити, щоб можна будо обчислювати ! тільки для number, причому цілі додатні значення

function factorial(n) {
  if (typeof n !== 'number') {
    throw new TypeError('n must be number');
  }
  if (n < 0 || !Number.isSafeInteger(n)) {
    throw new RangeError('n must be not negative and integer value');
  }

  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

try {
  console.log(factorial(-10));
} catch (error) {
  console.log(error);
}

console.log('after error');

// Task: написати функцію для валідації імені користувача (4-32, string)
// якщо значення валідне, то повернути його
// якщо ні, то згенерувати помилку

// validateName(name) => validatedName || throw error
// isValid(name) => true || false

function validateName(name) {
  if (typeof name !== 'string') {
    throw new TypeError('name must be string value');
  }

  if (name.length < 4 || name.length > 32) {
    throw new RangeError('name must be min 4 max 32 characters length');
  }

  return name;
}

try {
  const validatedName = validateName('Ivo');
  console.log(validatedName);
} catch (error) {
  if (error instanceof RangeError) {
    console.log('RangeError handling');
  } else if (error instanceof TypeError) {
    console.log('TypeError handling');
  } else {
    console.log('Error handling');
  }
}

// Task: Реалізувати функцію, яка приймає вік,
// повертає вік, якщо параметр відповідає вимогам (???),
// інакше генерує помилку
function validateAge(age) {
  if (typeof age !== 'number') {
    throw new TypeError('It`s not number');
  }
  if (age < 18) {
    throw new RangeError('You so young');
  }

  return age;
}

try {
  console.log(validateAge(true));
} catch (e) {
  console.log(e);
}

console.log('first');
