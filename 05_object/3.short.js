const x = 0;
const y = 0;
const coordinate =  {x, y}   // {x: x, y: y}; -> 이름이 똑같다면 생략 가능
console.log(coordinate);

function makeObj(name, age) {
    return {
        name: name,
        age: age,
    };
}