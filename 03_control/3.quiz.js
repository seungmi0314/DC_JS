// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력

// if 사용
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

// 삼항 연산자 사용
num % 2 === 0 ? console.log('👍') : console.log('👎');
// 이걸 한층 더 간결하게

let emogi = num % 2 === 0 ? '👍' : '👎';
console.log(emogi);
