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
var selectors = new Object; 
selectors = {
    number: 2, 
    string: '', 
    dom: ['header']
};
selectors.dom.push('main');
selectors.dom.push('footer');
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
for (var i = cars.length - 1; i >= 0; i--) {
    console.log(cars[i]);
}


/*
Quest 3.
1. 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
// Answer 3.
for (var key in document) {
    console.log(document[key]);
}


/*
Quest 4.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 4.
var orders = { name: ['원희윤'], coffee: ['아메리카노', '에스프레소', '카페라떼'] };
for (var i = 0; i < orders.coffee.length; i++) {
    console.log(`${orders.name}님, 주문하신 ${orders.coffee[i]} 1잔 나왔습니다.`);
}


/*
Quest 5.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 5.
var profile = new Object;
profile = {
    greet: '안녕하세요',
    name: '원희윤 ',
    age: 22,
    school: '계원예술대학교 ',
    major: '디지털미디어디자인과',
}
console.log(profile.greet + ' 저는 ' + profile.name + profile.age+ '살이고 ' + profile.school + profile.major + '에 다니고 있습니다.');

function hobby(hobby1, hobby2){
    return '저의 취미는 ' + hobby1 +'와 ' + hobby2 + '입니다.'
}
var hb = hobby('음악듣기', '강아지와의 산책');
console.log(hb);

