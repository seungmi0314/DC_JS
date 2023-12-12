// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments객체에 저장됨
function add(a = 1, d = 1) {    // 외부에서 주어진 값이 없다면 매개변수 기본값 설정 가능 Default Parameters
    console.log(a);
    console.log(b);
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+ b;
}

add();
// add(1, 2, 3);

// Rest 매개변수 Rest Parameters
// 인자에 숫자가 정해져있지 않다면 배열로 받을 수 있다
function sum(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8);