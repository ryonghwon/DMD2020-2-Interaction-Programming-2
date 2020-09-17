/*
문제 풀이.
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
var selectors = new Object();
// selectors.number = 2;
// selectors['string'] = ' ';
selectors = {
    number : 2,
    string : ' '
};
// selectors.dom = ['header'];
selectors['dom'] = ['header'];
// Array.push();
// selectors['dom'].push('main', 'footer');
selectors['dom'].push('main');
selectors['dom'].push('footer');
delete selectors['string'];
console.log(selectors);


/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 의 원소값들을 출력합니다.
*/
// Answer 2.
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
var i;
// 1.
for(i = 0; i < cars.length; i++) {
    console.log(cars[cars.length - i - 1]);
}
// 2.
var newCars = [];
for(i = 0; i < cars.length; i++) {
    newCars.unshift(cars[i]);
}
console.log(newCars);
newCars = [];
// 3.
for(i = cars.length - 1; i >= 0; i--) {
    console.log(cars[i]);
    newCars.push(cars[i]);
}
console.log(newCars); // 각 값들을 통해서 새로운 배열을 만들고자 할 때.
// 4.
cars.reverse(); // 반대로 정렬!
for(i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// 5.
for(var index in cars) {
    // index - string.
    index = Number(index);
    console.log(cars[index]);
}
// 6.
for(var car of cars) {
    console.log(car);
}
// 7.
cars.forEach(function(car, index) { // 첫번째 매개변수 - 값, 두번째 매개변수 - 순서(index)
    console.log(car);
});


/*
Quest 3.
1. 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
// Answer 3.
// document - html 문서 자체를 의미. 브라우저에 파일이 실행되면 포함되어 있는 내장변수.
console.log(document);
// document.getElementById('');
for(var property in document) {
    // console.log(property);
    console.log(document[property]);
}


/*
Quest 4.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 4.
var orders = { name : ['김용원'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };
var name = orders['name'];
for(i = 0; i < orders['coffee'].length; i++){
    var coffee = orders['coffee'][i];
    // console.log(coffee);
    var msg = name + ' 님, 주문하신 ' + coffee + ' 1잔 나왔습니다.';
    console.log(msg);
}


/*
Quest 5.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 5.


