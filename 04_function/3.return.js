// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a, b) {
    return a + b;   
}
const result = add(1, 2);
console.log(result);




// 특정한 값을 반환하지 않는다면 return을 사용하지 않아도 됨
// 또한 return을 함수 중간에 하게되면 함수가 종료됨
// 사용 예 : 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print(text) {
    if (num < 0) {
        return; // -> return undefined과 똑같음
    }
    console.log(text);
}
const outcome = print('text');