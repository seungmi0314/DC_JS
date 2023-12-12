// const apple = {
//     name: 'apple',
//     display: function() {
//         console.log(`${this.name}: 🍎`);    // 객체 안에서 자기 자신의 속성을 접근 할 땐 this 사용
//     }
// }

// const orange = {
//     name: 'orange',
//     display: function() {
//         console.log(`${this.name}: 🍊`);    // 객체 안에서 자기 자신의 속성을 접근 할 땐 this 사용
//     }
// }

// 생성자 함수
function Fruit(name, emogi) {
    this.name = name;
    this.emogi = emogi;
    this.display = () => {
        console.log(`${this.name} : ${this.emogi}`);
    };

    // return this  -> 생략 가능
}

//const apple = new Fruit('apple','🍎');
const apple = new Fruit('orange','🍊');

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(apple.emogi);
apple.display();