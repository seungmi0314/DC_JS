// null, undefined
let variable;
console.log(variable); // undefined -> 메모리상에 어떤 데이터도 없고 데이터가 있는지 없는지 정해지 있지 않다.

variable = null;
console.log(variable); // null  -> 비어있다고 정해져있음

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!

console.log(typeof 123); // number
console.log(typeof '123'); // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined
