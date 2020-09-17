console.log("script load");

// Function 함수
// 기능 단위의 모듈.
// 정보에 대한 보호 은닉이 용이하다.

// 함수의 정의
name();
function name() {
    console.log("name 함수");
}
// 함수를 호출
name(); // 함수 기능을 사용하려면 호출해야만 한다.
// 함수 리터럴, 함수식
// drive(); // 함수식의 경우, 선언의 위쪽에서 호출하면 오류가 발생된다.
var drive = function() {
    console.log("car driving");
};
drive();
// 화살표 함수 표현식 ECMAScript 6
let cars = () => {
    console.log("Cars");
};
cars();
// 함수의 반환.
// function myCar() {
//     var car = "Hyundai";
// }
// console.log(myCar()); // undefined
// 함수 호출시 무조건 값을 반환한다.
// 반환하는 값이 특정되지 않았을 때 undefined
function myCar() {
    var car = "Hyundai";
    return car;
    car += "1234"; // 반환 이후의 코드는 동작하지 않는다.
}
console.log(myCar()); // Hyundai
// Parameters 매개변수. 기본값을 설정할 수 있다.
function order(name, menu = "아메리카노", cups = 1) {
    console.log(name);
    console.log(menu);
    console.log(cups);
    return name + " 고객님, 주문하신 " + menu + " " + cups + "잔 나왔습니다.";
}
// order();
// order("김용원");
// order("김용원", "아이스");
// order("김용원", "아이스", 2);
var msg = order("김용원", "아이스", 2);
console.log(msg);
msg = order("김용원");
console.log(msg);
// Scope 유효범위.
// 함수 사용 시 변수가 특정되는 범위가 달라질 수 있다.
var _name = "Samsung"; // 전역변수.
function changeName() {
    // var _name = "Kia"; // 지역변수.
    _name = "Kia"; // 전역변수.
    console.log("함수 내부 : " + _name);
}
changeName();
console.log(_name);