// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는것은 좋지 않음
// 만약 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함
// 원시값 - 값에 의한 복사
// 객체값 = 참조에 의한 복사 (메모리 주소)
function display(num) {
    let num = 5;    // 안됨
    console.log(num);
}

const value = 4;
display(value);
console.log(value);

