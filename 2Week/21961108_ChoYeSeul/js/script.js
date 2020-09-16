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
selectors = {
    number : 2,
    string : " ",
    dom : ['header']
};
// selectors["number"] =2;
// selectors.string = ' ';
// selectors = new Array();
// selectors.push("header");
selectors.dom.push("main");
selectors.dom.push("footer");
delete selectors.string;
console.log(selectors);



/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.

var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
cars.reverse();
console.log(cars); // 배열로 묶어서 출력
for(i = 3; i >= 0; i--){ // 하나씩 출력
    console.log(cars[i]);
}



/*
Quest 3.
1. 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
// Answer 3.

for(var i in document){
    console.log(document[i]);
}

/*
Quest 4.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 4.

var orders = { name : ['조예슬'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };
for(i = 0; i < orders.coffee.length; i++){
    console.log( orders.name + '님, 주문하신 ' + orders.coffee[i] + ' 1잔 나왔습니다.');
}

/*
Quest 5.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 5.

var info ={
    name : '조예슬',
    dog : '개민트',
    hobby : ['먹기', '잠자기']
}
var _info = '안녕하세요 저는 ' + info.name + '입니다. 제가 키우는 강아지의 이름은 ' + info.dog + '입니다.';
console.log(_info);
for(i = 0; i < info.hobby.length; i++){
    console.log('제 취미이자 자신있는 종목은 ' + info.hobby[i] + '입니다.' );
}
function food(food1, food2){
    return '요즘 가장 좋아하는 음식은 ' + food1 +'와 ' + food2 + '입니다.';
}
var _info3 = food('연어', '고치돈');
console.log(_info3);