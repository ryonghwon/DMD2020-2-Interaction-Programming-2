console.log("script load");

// Loop 반복문
// for 문
// for(초기화; 반복조건; 반복시 증감/감소) {
    // 반복되는 코드
// }
var i; 
for(i = 0; i < 10; i++) { // 증가하는 반복문.
    // console.log(i);
}
for(i = 9; i >= 0; i--) { // 감소하는 반복문.
    // console.log(i);
}
for(i = 0; i < 10; i++) {
    document.write("for 반복문: " + i + "<br/>");
}
// for 반복문 중첩
for(i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
        document.write("for 반복문 중첩: i - " + i + ", j - " + j + '<br/>');
    }
    document.write('<br/>');
}
// for...in
// 객체의 반복.
var cars = { tesla: "테슬라", audi: "아우디" };
var carsKo = [];
for(var key in cars) {
    // console.log(key); // 속성명
    // console.log(cars[key]); // 속성값
    carsKo.push(cars[key]);
}
console.log(carsKo);
// forEach, for...of
// 배열의 반복.
cars = ["Tesla", "Audi", "Volvo", "Benz"];
for(var index in cars) {
    console.log(index); // string
    console.log(Number(index)); // number 로 type 변경.
    console.log(cars[Number(index)]);
    if(Number(index) === 2){
        break;
    }
}
for(var value of cars) {
    console.log(value);
    if(value === 'Tesla') {
        break;
    }
};
// Array.forEach(); ECMAScript 6
cars.forEach(function(value, index) {
    console.log(index, value);
});