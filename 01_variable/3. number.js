let integer = 123; // 정수
let negative = -123; // 음수
let double = 12.3; // 실수

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수

console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123); // 0
console.log(123 / 0); // infinity
console.log(123 / -0); // -infinity
console.log(123 / "text"); // NaN (Not a Number)

let bigInt = 1234546843249843416862464324626462984869426n; // 큰 수는 big int라고 해서 끝에 n을 붙여주어야 함
