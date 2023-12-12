const apple = {
    name: 'apple',
    display: function() {
        console.log(`${this.name}: 🍎`);    // 객체 안에서 자기 자신의 속성을 접근 할 땐 this 사용
    }
}

apple.display(); // apple에 있는 display를 실행