function sum(a, b) {
    console.log('function');
    return a + b;
}

const result = sum(1, 2);
console.log(result);

// 사용예제 2
/*let lastName = '김';
let firstName = '지수';
let fullName = `${lastName}` `${firstName}`;
console.log(fullName);
*/
function fullName(firstName, lastName) {
    return `${lastName}` `${firstName}`;
}

console.log(fullName(firstName, lastName));