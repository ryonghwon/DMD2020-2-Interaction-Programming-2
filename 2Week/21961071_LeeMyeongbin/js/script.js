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

var selectors = {
    number: 2,
    string: ' ',
    dom : ['header']
}
console.log(selectors); // {number: 2, string: " ", dom: Array(1)}
selectors.dom.push("main", "footer");
console.log(selectors); // {number: 2, string: " ", dom: Array(3)}
delete selectors.string;
console.log(selectors); // {number: 2, dom: Array(3)}


/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.

var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
console.log(cars); // (4) ["Hyundai", "Kia", "Samsung", "GM"]

cars.reverse(); // 배열을 역순으로 바꿈
console.log(cars); // ["GM", "Samsung", "Kia", "Hyundai"]

// for...in 반복 사용
for( var index in cars){
    // console.log(index); // 0 1 2 3 순서대로 출력
    // console.log(Number(index)); // 0 1 2 3 순서대로 출력
    console.log(cars[Number(index)]); // GM Samsung Kia Hyundai 순서대로 출력
}


/*
Quest 3.
1. 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
// Answer 3.

// 이 반복문은 출력 값이 뜨지 않습니다..
/* for(var i = 0; i < document.length; i++){
    console.log(document[i]);
} */

// ----------------------------------
// 밑의 두 개의 반복문은 같은 속성 값이 출력됩니다..
// 문제 이해를 잘 못하겠습니다.....

/* for(var index in document){
    console.log(document[index]);
} */

/* for (var key in document){
    console.log(document[key]);
} */


/*
Quest 4.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 4.

var orders = {
    name: ['이명빈'],
    coffee: ['아메리카노', '에스프레소', '카페라떼']
};
// console.log(orders);

/* for(var index in orders){ // *orders 안의 배열 coffee 를 불러야함.
    console.log(orders[index]);
} */

for(var index in orders.coffee){
    console.log(orders.coffee[index]); // coffee 의 배열이 순서대로 하나씩 출력됨.
    var orders_msg = orders.name + " 님, 주문하신 " + orders.coffee[index] + " 1잔 나왔습니다.";
    console.log(orders_msg);
    // 
}

/*
Quest 5.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 5.

var intro = {
    hello : '안녕하세요. ',
    name : '이명빈',
    age : 21,
    school : '계원예술대학교',
    department : ['디지털미디어디자인과', '프로그래밍전공']
};

intro.department.push('2학년');
// console.log(intro.department);
var dpm_msg = intro.department.join(" ");
// console.log(dpm_msg);

var intro_msg = intro.hello + '저는 ' + intro.age + '살 ' + intro.name + ' 입니다.' + dpm_msg + '으로 재학중입니다. ';
// console.log(intro_msg);

function recent(director, movie, number){
    return '저는 최근에 ' + director + ' 감독의 ' + movie + '을 봤는데 재밌어서 ' + number + '번 더 보고싶습니다.'
}
var recent_msg = recent('크리스토퍼 놀란', '테넷', 3);
// console.log(recent_msg);

console.log(intro_msg + recent_msg);
// 안녕하세요. 저는 21살 이명빈 입니다.디지털미디어디자인과 프로그래밍전공 2학년으로 재학중입니다. 제가 최근에 크리스토퍼 놀란 감독의 테넷을 봤는데 재밌어서 3번 더 보고싶습니다.