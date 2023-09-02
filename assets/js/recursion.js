// 3 ** 4 = 3 * 3**3 =  3 * 3 * 3**2 = 3 * 3 * 3 * 3**1 = 3 * 3 * 3 * 3 *3**0; // 3**0 = 1

// 4! = 1*2*3*4 = 24

// 4! = 4 * 3! = 4 * 3 * 2!  = 4 * 3 * 2 * 1! = 4*3*2*1*0! // 0! = 1

// Обов'язково треба передбачити умову закінчення рекурсії
let i = 0;
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const f4 = factorial(3);
console.log('f4 :>> ', f4);

// Вивести в консоль для bracketSeq(2) => (())
//                       bracketSeq(4) => (((())))

function bracketSeq(n) {
  if (n === 0) {
    return;
  }
  console.log('(');
  bracketSeq(n - 1);
  console.log(')');
}

bracketSeq(4);
