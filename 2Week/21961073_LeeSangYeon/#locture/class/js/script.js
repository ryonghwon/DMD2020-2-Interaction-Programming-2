console.log("script load");
/*
//Variable 변수.
// 변할 수 있는...
// var 변수명; // 선언만 된 상태.
// var 변수명 = 변수값; // 선언과 값이 할당된 상태.

var foo; // 변수 선언. - "변수는 한번만 선언한다."
// var foo; // ES5 - ECMAScript 5
// let foo; // 상수 선언. ES6 - ECMAScript
console.log(foo); // undefined
console.log(typeof foo); // data type - undefined (값이 정의되지 않음)
foo = 1; // 변수에 값을 할당.
console.log(foo); // 1
console.log(typeof foo); // data type - number (숫자)
foo = "apple";
console.log(typeof foo); // data type - string (문자열)
foo = true;
console.log(typeof foo); // data type - boolean (참/거짓)
foo = {}; // object
console.log(typeof foo); // data type - object (객체)
console.log(foo.constructor.name.toLowerCase()); // Object 
// toLowerCase() - 모든 문자열을 소문자로 바꿔주는 기능
foo = []; // array
console.log(typeof foo); // data type - object (객체)
console.log(foo.constructor.name.toLowerCase()); // Array
if(typeof foo === 'string') { // false.
    console.log("문자열입니다.");
}else{
    console.log("문자열이 아닙니다.");
}

//Object 객체.
// 숫자, 문자열, 객체, 배열, 메서드 등의 대부분의 타입을 담을 수 있는 컨테이너.
// 속성(색인)과 속성값으로 구분되어지는...
var _obj = new Object(); // 비어있는 객체를 값으로 할당.
_obj = {}; // 비어있는 객체를 값으로 할당.
_obj.name = "김용원";
_obj["number"] = 10;
console.log(_obj);
//_obj.profile-image = "./img/profile.png";
_obj["profile-image"] = "./img/profile.png";
// 띄어쓰기를 - 로 구성하는 경우.

_obj = {
    name: "김용원",
    "number": 10,
    "profile-image": "./img/profile.png"
};
console.log(_obj);
console.log(_obj.hasOwnProperty("name")); // 해당 객체에 문자열의 속성을 포함하고있는지 없는지 확인.
delete _obj.number; // 속성 삭제.
delete _obj["profile-image"]; // 속성 삭제.
console.log(_obj);

// method 메서드.
var car = {
    brand: "brand",
    model: "model",
    engine: "engine",
    drive: function() {
        console.log("운전합니다.");
    },
    fast: function() {
        console.log("빠르게 ");
        this.drive();
    }
};
car.stop = function() {
    console.log("정지합니다.");
};
console.log(car);
car.drive();
car.fast();
car.stop();

// Array.
var cars = [];
cars = new Array();
console.log(cars);

// 배열에 값을 추가.
// Array.unshift(__value__); - 해당 배열 앞쪽에 값을 추가.
// Array.push(__value__); - 해당 배열의 뒤쪽에 값을 추가.
cars.push("Tesla");
console.log(cars);
cars.unshift("Volvo");
console.log(cars);
// 배열에서 값을 제거.
// Array.shift(); - 해당 배열의 첫번째 값을 제거.
// Array.pop(); - 해당 배열의 마지막 값을 제거.
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);
cars = ["Samsung", "Hyundai", "Kia"];
console.log(cars);
// 배열에서 값을 추가, 제거, 수정.
// *Array.splice(시작하는 순서, 제거할 개수, 추가할 값);
cars.splice(1, 0, "Audi"); // 추가
console.log(cars);
cars.splice(1, 2, "BMW"); // 수정
console.log(cars);
//cars.splice(1, 1); // 삭제
console.log(cars);
// 배열끼리의 병합.
// array3 = Array1.concat(Array2);
var cars2 = ["Audi", "Bmw"];
var cars3 = cars.concat(cars2); // 변환된 결과를 할당할 변수가 있어야 한다.
console.log(cars3);
// 배열의 정렬.
cars.sort(); // 표기 순서에 따른 정렬.
console.log(cars);
cars.reverse(); // 순서를 반대로 정렬.
console.log(cars);
// 배열의 원소값 찾기.
console.log(cars[0]);
console.log(cars[2]);
// 배열의 길이(개수)
console.log(cars.length);
// 배열을 문자열로 병합.
// Array.join();
//var msg = cars.join(); - Hyunday,Kia,Samsung
var msg = cars.join(" "); // - "Hyunday Kia Samsung"
console.log(msg);
*/


/*
// Loop 반복문
// for 문
//for(초기화; 반복조건; 반복시 증감/감소){
    // 반복되는 코드
//}
var i;
for(var i = 0; i < 10; i++) { // 증가하는 반복문.
    // console.log(i);
}
for(i = 9; i >= 0; i--){ // 감소하는 반복문.
    // console.log(i);
}
for(i = 0; i < 10; i++){
    document.write("for 반복문: " + i + "<br/>");
}
// for 반복문 중첩
for(i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        document.write("for 반복문 중첩: i - " + i + ", j - " + j + "<br/>");
    }
    document.write('<br/>');
}
// for ... in
// 객체의 반복.
var cars = { tesla: "테슬라", audi: "아우디" };
var carsKo = [];
for(var key in cars) {
    console.log(key); // 속성명
    console.log(cars[key]); // 속성값
    carsKo.push(cars[key]);
};
console.log(carsKo);
// forEach, for ... of
// 배열의 반복.
cars = ["Tesla", "Audi", "Volvo", "Benz"];
for(var index in cars){
    console.log(index);
    console.log(Number(index));
    console.log(cars[Number(index)]);
    if(Number(index) === 2){
        break;
    }
}
for(var value of cars) {
    console.log(value);
    if(value === "Tesla") {
        break;
    }
};
// Array.forEach(); ECMAScript 6
cars.forEach(function(value, index){
    console.log(index, value);
});
// for...in 은 객체에서 많이 사용
// for...of 은 배열에서 많이 사용

*/

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
// console.log(myCar());
// 함수 호출시 무조건 값을 반환한다.
// 반환하는 값이 특정되지 않았을 때 undefined
function myCar() {
    var car = "Hyundai";
    return car;
    car += "1234"; // 반환 이후의 코드는 동작하지 않는다.
}
console.log(myCar()); // Hyundai


// Parameters 매개변수.
function order(name, menu = "수박쥬스", cups = 1){
    console.log(name);
    console.log(menu);
    console.log(cups);

    return name + "고객님, 주문하신 " + menu + " " + cups + "잔 나왔습니다.";
}
//order();
//order("이상연");
//order("이상연","수박쥬스");
//order("이상연","수박쥬스", 2);

var msg = order("이상연","수박쥬스", 2);
console.log(msg);
msg = order("이상연");
console.log(msg);

// Scope 유효범위.
// 함수  사용 시 변수가 특정되는 범위가 달라질 수 있다.
var _name = "Samsung"; // 전역 변수
function changeName(){
    var _name = "Kia"; // 지역변수 - 
    _name = "Kia"; // 전역변수
    console.log("함수 내부 : " + _name);
}
changeName();
console.log(_name);
