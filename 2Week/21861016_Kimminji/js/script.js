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

// selectors 라는 이름을 가진 객체 생성.
// 비어있는 객체를 값으로 할당.
var selectors = new Object();
selectors = {
    // number 속성을 갖고 있으며 그 값은 2(number type).
    number : 2,
    // string 속성을 추가하고 빈 문자열 ‘ ’ 을 할당.
    string : ' ',
    // dom 속성을 추가하고, ‘header’ 문자열 원소값을 가진 배열을 할당.
    dom : ['header']
};
// selectors 객체의 dom 속성 배열에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가.
// Array.push(__value__); - 해당 배열의 뒤쪽에 값을 추가.
selectors.dom.push('main', 'footer');
// selectors 객체의 string 속성을 삭제.
delete selectors.string;
// console.log 메서드를 이용해서 selectors 객체를 출력.
console.log(selectors);



/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.

// var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당.
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
// cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성.
// var i = cars.length로 설정하면 undefined가 출력이 되므로 var i = cars.length -1을 하도록 한다.
// i가 0보다 크거나 같을 때까지 감소하는 반복문.
for (var i = cars.length - 1; i >= 0; i--){
    console.log(cars[i]);
}
// console.log 메서드를 이용해서 cars 를 출력.
// 위에서의 반복문에서만 역순으로 원소를 출력하므로 cars를 출력하면 역순이 아닌 본래의 배열 순서로 출력.
console.log(cars);

// 배열의 순서를 반대로 정렬.
cars.reverse();
// cars 배열 문자열 원소 순서가 반대로 정렬되었기 때문에 본래의 배열 순서로 출력하는 반복문을 작성.
for (var i = 0; i < cars.length; i++){
    console.log(cars[i]);
}
// 반대로 정렬된 배열이 나타난다.
console.log(cars);



/*
Quest 3.
1. 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
// Answer 3.

// 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성.

// for (var i in document){
//     // console.log(i); // 속성명
//     // console.log(document[i]); // 속성값
//     // console.log(document[i]);를 출력하게 되면 하나하나 출력되어 나온다.  
//     console.log(document[i]);
// }

// 배열의 형태로 전역변수 document 의 속성 및 메서드 출력
var doc = [];
for (var i in document){
    // console.log(i); // 속성명
    // console.log(document[i]); // 속성값
    // for문이 반복되면서 doc에 값을 하나씩 넣어준다.
    doc.push(document[i]);
}
// doc을 출력하면 전역변수 document 의 속성 및 메서드를 담은 배열이 출력된다.
console.log(doc);



/*
Quest 4.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 4.

// var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당.
var orders = {
    name: ['김민지'], 
    coffee: ['아메리카노', '에스프레소', '카페라떼'] 
};
// orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3)의 문자열로 console.log 메서드를 이용해서 출력.
// for...of 배열의 반복.
for (var i of orders.coffee){
    // “name 님, 주문하신 coffee 1잔 나왔습니다.”
    console.log(orders.name + " 님, 주문하신 " + i + " 1잔 나왔습니다.");
}



/*
Quest 5.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 5.

// 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력.
var aboutme = new Object();
aboutme = {
    name : "김민지",
    birthday : "4월 19일",
    age : 22,
    love : ["고양이", "노래", "영화", "잠자기"],
    hate : ["콩", "귀신", "바퀴벌레"]
};

console.log("안녕하세요. 제 이름은 " + aboutme.name + "입니다. 생일은 " + aboutme.birthday + "이고, 나이는 " + aboutme.age + "살 입니다.");

// 배열을 문자열로 병합.
var love = "";
var hate = "";
// 고양이, 노래, 영화, 잠자기
for(var m = 0; m < aboutme.love.length; m++){
    love = aboutme.love.join(", ");
}
// 콩, 귀신, 바퀴벌레
for(var j = 0; j < aboutme.hate.length; j++){
    hate = aboutme.hate.join(", ");
}
console.log("제가 너무나 사랑하는 것들은 " + love + "가 있고, 제가 정말 싫어하는 것들은 " + hate + "가 있습니다.")

// 함수
function university(univ, major, grade) {
    // 반환 이후의 코드는 동작하지 않는 것에 유의.
    return "저는 " + univ + "의 " + major + "를 다니고 있는 " + grade + "학년입니다.";
}
var uni = university("계원예술대학교", "디지털미디어디자인과", 2);
console.log(uni);