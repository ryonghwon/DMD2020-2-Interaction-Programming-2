console.log("script load");

//Variable 변수.
//변할 수 있는...
// var 변수명; // 선언만 된 상태.
// var 변수명 = 변수값; //선언과 값이 할당된 상태.

var foo; // 변수 선언. - "변수는 한번만 선언한다."
// var foo; // ES5 - ECMAScript 5
// let foo; // 상수 선언. ES6 - ECMAScript 6
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
console.log(foo.constructor.name.toLowerCase()); // object
foo = []; // array
console.log(typeof foo); // data type - object (객체)
console.log(foo.constructor.name.toLowerCase()); // array
if(typeof foo === 'string') { // false.
    console.log("문자열입니다.");
}else{
    console.log("문자열이 아닙니다.");
}

//Object 객체.
// 숫자, 문자열, 객체, 배열, 메서드 등의 대부분의 타입을 담을 수 있는 컨테이너.
// 속성(색인)과 속성값으로 구분되어지는...(, 로 구분)
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
console.log(_obj.hasOwnProperty("name")); // 해당 객체에 문자열의 속성을 포함하고 있는지 없는지.
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
// Array.unshift(__value__); - 해당 배열의 앞쪽에 값을 추가.
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
cars.splice(1, 1, "BMW"); // 수정
console.log(cars);
cars.splice(1, 1); // 제거
console.log(cars);
// 배열끼리의 병합.
// array3 = Array1.concat(Array2);
var cars2 = ["Audi", "BMW"];
var cars3 = cars.concat(cars2); // 반환된 결과를 할당할 변수가 있어야 한다.
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
//var msg = cars.join(); - "Hyundai,Kia,Samsung"
var msg = cars.join(" "); // - "Hyundai Kia Samsung"
console.log(msg);