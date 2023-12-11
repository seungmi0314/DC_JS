// let 재할당 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
//  text = 'hi'; -> 이렇게 재할당하면 에러남

// 1. 상수 (항상 대문자로 만들어야 하고 단어와 단어 사이는 _로 분리)
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

console.log(apple);
// 재할당이 안된다는거지(메모리 셀에 heap의 주소 변경 불가능)
// 데이터 자체는 수정 가능
