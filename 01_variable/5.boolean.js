// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용 예:
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isFree);
console.log(isActivated);
console.log(isEnrolled);

console.clear();

// Falsy 거짓인 값
console.log(!!0); // 괄호 안에 느낌표 두개를 넣으면 특수한 값을 불리언 값으로 바꿔줌
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{});
console.log(!!Infinity);
