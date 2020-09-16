console.log("script load");

/*
//Variable 변수.
//변할 수 있는...
// var 변수명; // 선언만 된 상태.
// var 변수명 = 변수값; // 선언과 값이 할당된 상태.

var foo; //변수 선언, - "변수는 한번만 선언한다."
// var foo; // ES6 - ECMAScript 5
//let foo; // 상수 선언. ES6 - ECMAScript 6
console.log(foo); // undefined
console.log(typeof foo); // data type - undefined
foo = 1; // 변수에 값을 할당
console.log(foo); // 1
console.log(typeof foo); // data type - number (숫자)
foo = "apple";
console.log(typeof foo); // data type - string (문자열)
foo = true;
console.log(typeof foo); // data type - boolean (참/거짓)
foo = {}; // object
console.log(typeof foo); // data type - object (객체)
console.log(foo.constructor.name.toLowerCase()); // object
foo = []; // array
console.log(typeof foo); // data type - object (객체)
console.log(foo.constructor.name.toLowerCase()); // array
if(typeof foo === 'string'){ // false.
    console.log("문자열입니다.");
}else{
    console.log("문자열이 아닙니다.");
}

// Object 객체.
// 숫자, 문자열, 객체, 배열, 메서드 등의 대부분의 타입을 담을 수 있는 컨테이너.
// 속성과 속성값으로 구분되어지는...
var _obj = new Object(); // 비어있는 객체를 값으로 할당.
_obj = {}; // 비어있는 객체를 값으로 할당.
_obj.name = "이상원";
_obj["number"] = 27;
console.log(_obj);
// _obj.profile-image = "./img/profile.png";
_obj["profile-image"] = "./img/profile.png";
// 띄어쓰기를 - 로 구성하는 경우.
_obj = {
    name: "이상원",
    "number": 27,
    "profile-image": "./img/profile.png"
}
console.log(_obj);
console.log(_obj.hasOwnProperty("name")); // 해당 객체에 문자열의 속성을 포함하고 있는지 없는지.
delete _obj.number; // 속성 삭제.
delete _obj["profile-image"]; // 속성 삭제.
console.log(_obj);

// method 메서드.
var car = {
    brand: "brand",
    model: "model",
    engine: "engine",
    drive: function(){
        console.log("운전합니다.")
    },
    fast: function(){
        console.log("누구보다 빠르게");
        this.drive(); // 메서드 안에 메서드를 쓰는 경우 this 사용.
    }
};
car.stop = function(){
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
// Array.unshift(__value__); // 해당 배열의 앞쪽에 값을 추가.
// Array.push(__value__); // 해당 배열의 뒤쪽에 값을 추가.
cars.push("Tesla");
console.log(cars);
cars.unshift("volvo");
console.log(cars);
// 배열에서 값을 제거.
// Array.shift(); // 해당 배열의 첫번째 값을 제거.
// Array.pop(); // 해당 배열의 마지막 값을 제거.
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);
cars = ["Kia", "Hyundai", "Samsung"];
// 배열에서 값을 추가하거나 제거.
// Array.splice(시작하는 순서, 제거할 개수, 추가할 값);
cars.splice(1,0,"Audi"); // 추가
console.log(cars);
cars.splice(1,1,"BMW"); // 수정.
console.log(cars);
cars.splice(1,1); // 제거.
console.log(cars);
// 배열끼리의 병합.
// array3 =  Array1.concat(Array2);
var cars2 = ["Audi", "BMW"];
var cars3 = cars.concat(cars2); // 결과에 할당한 변수가 있어야 한다.
console.log(cars3);
// 배열의 정렬.
cars.sort(); // 표기 순서에 따른 정렬.
console.log(cars);
cars.reverse(); // 반대로 정렬.
console.log(cars);
// 배열의 원소값 찾기.
console.log(cars[0]);
console.log(cars[2]);
// 배열의 길이(개수)
console.log(cars.length);
// 배열을 문자열로 병합.
// Array.join();
//var msg = cars.join(); - Hyundai,Kia,Samsung"
var msg = cars.join(" "); // - "Hyundai Kia Samsung"
console.log(msg);
*/

/*
// Loop 반복문
// for 문
//for(초기화; 반복조건; 반복시 증감/감소){
    // 반복되는 코드
//}
var i;
for(i = 0; i < 10; i++){ // 증가하는 반복문
    // console.log(i);
}
for(i = 9; i >= 0; i--){ // 감소하는 반복문.
    //console.log(i);
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

// for...in
// 객체의 반복.
var cars = { tesla: "테슬라", audi: "아우디"};
var carsKo = [];
for(var key in cars){
   // console.log(key); //속성명
   // console.log(cars[key]); //속성값
    carsKo.push(cars[key]);
}
console.log(carsKo);

// forEach, for...of
// 배열의 반복.
cars = ["Tesla", "Audi", "Volvo", "Benz"];
for(var index in cars){
    console.log(index); // string
    console.log(Number(index)); // number 로 type 변경
    console.log(cars[Number(index)]); //
    if(Number(index) === 2){
        break;
    }
}
for(var value of cars){
    console.log(value);
    if(value === 'Tesla'){
        break;
    }
};
// Array.forEach(); ECMAScript 6
cars.forEach(function(value, index){
    console.log(index, value);
    
});
*/

// Function 함수
// 기능 단위의 모듈.
// 정보에 대한 보호 은닉이 용이하다.

// 함수의 정의

/*
name();
function name() {
    console.log("name 함수");
}
// 함수를 호출
name(); // 함수의 기능을 사용하려면 호출해야만 한다.

// 함수 리터럴, 함수식
// drive(); 함수식의 경우, 선언의 위쪽에서 호출하면 오류가 발생된다.
var drive = function(){
    console.log("car driving");
};
drive();

// 화살표 함수 표현식 ECMAScript 6
let Cars = () => {
    console.log("Cars");
}
Cars();

// 함수의 반환.
// function myCar(){
//     var car = "Hyundai";
// }
// console.log(myCar());
// 함수 호출시 무조건 값을 반환한다.
// 반환하는 값이 특정되지 않았을때 undefined
function myCar(){
    var car = "Hyundai";
    return car;
    car += "1234"; // 반환 이후의 코드는 동작하지 않는다.
}
console.log(myCar());

// Parameters 매개변수. 기본값을 설정할 수 있다.
function order(name, menu = "아메리카노", cups = 1){
    console.log(name);
    console.log(menu);
    console.log(cups);

    return name + " 고객님, 주문하신 " + menu + " " + cups + "잔 나왔습니다";
}
// order();
// order("이상원");
// order("이상원", "아이스");
var msg = order("이상원", "아이스티", 3);
console.log(msg);
msg = order("이상원");
console.log(msg);

// Scope 유효범위
// 변수 사용시 변수가 특정되는 범위가 달라질 수 있다.
var _name = "Samsung"; // 전역변수
function changeName(){
    // var _name = "Kia"; // 지역변수
    _name = "Kia" // 전역변수
    console.log("함수 내부 : " + _name);
}
changeName();
console.log(_name);
*/


/*
Quest 1.
1. selectors 라는 이름을 가진 객체를 생성합니다.
2. number 속성을 갖고 있으며 그 값은 2 (number type) 입니다.
3. string 속성을 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
4. selectors 객체에 dom 속성을 추가하고, ‘header’ 문자열 원소값을 가진 배열을 할당합니다.
5. selectors 객체의 dom 속성 배열에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
6. selectors 객체의 string 속성을 삭제합니다.
7. console.log 메서드를 이용해서 selectors 객체를 출력합니다.
*/
// Answer 1.

var selectors = new Object;
selectors = {
    "number": 2,
    string: '',
    dom:["header"]
};
selectors.dom.push("main","footer");
delete selectors.string;
console.log(selectors);

/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.


var cars = ['Hyundai','Kia','Samsung','GM'];

for(var i of cars.reverse()){
    console.log(i);
}
console.log(cars);



/*
Quest 3.
1. 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
// Answer 3.

//console.log(typeof document);

var j = document;
//console.log(j);

var arr = new Array();
for(var key in document){
    var result = document[key];
    arr.push(result);
}
console.log(arr);
/*
Quest 4.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 4.

var orders = { name : ['이상원'], coffee : ['아메리카노', '에스프레스', '카페라떼','프라푸치노','에이드']};
//console.log(orders);
for(var value of orders.coffee){
    //console.log(orders.name + "님, 주문하신 " + value + " 1 잔 나왔습니다");
    if(value === '카페라떼'){
        break;
    }
};


/*
Quest 5.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
const person = {
    name : '이상원',
    age : 27,
    };
console.log("안녕하세요 저는 " + person.age + "살 "+ person.name + "입니다");
const hobby = ['야구','넷플릭스','술','노래방'];

for(var a in hobby){
    //console.log(a);
}
for(var b of hobby){
    //console.log(b);
}
hobby.forEach(function(b, a){
    console.log("제가 " + [a+1] + "번째로 좋아하는 취미는 " + b + "입니다");
});


const dream = ['2학기에도 ','자바스크립트 ','공부를 ','많이 하고싶습니다.']
console.log(dream.join(""));


function order(a, b = "대면수업"){
    return a + "가 빨리 끝나서, 얼른 " + b + "을 하고 싶습니다";
}
var re = order("코로나");
console.log(re);

var _name = "잘부탁하지않습니다.";
function changeName(){
    _name = "잘 부탁드립니다";
    console.log("2학기에도 " + _name);
}
changeName();
