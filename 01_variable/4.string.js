// 문자열 타입
let string = "안녕하세요";
console.log(string);

string = `안녕!`;
console.log(string);

// 특수문자 출력하는법
// 따옴표를 출력하고 싶다면 바깥 따옴표와 다르게 적으면 됨
string = "'안녕!'";
console.log(string);

string = "안녕!\n엘리야!\t\t내 이름은\\\u09AC";
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = "엘리";
let greetings = "'안녕!, " + id + "\n즐거운 하루 보내요!'";
console.log(greetings);

// 이렇게 더하기로 연결해주기 번거로울 때 사용하는 것이 템플릿 리터럴 `` 사용
greetings = `'안녕, ${id}
즐거운 하루 보내요!`;
console.log(greetings);
