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
/* var selectors
selectors = 2;
selectors = [ ]; */
var selectors = {
    number : 2,
    string : '',
    dom : ["header"]
}
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

var cars = ["Hyundai", "Kia", "Samsung", "GM"];
//cars.reverse();
/* for(var i = 3; i >= 0; i--){
    console.log(cars); / Array4
} */
/* for(var i = 3; i >= 0; i--){
    console.log(i); / 순서
} */
for(var i = 3; i >= 0; i--){
    console.log(cars[i]);
}
//console.log(cars); /["GM", "Samsung", "Kia", "Hyundai"]

/*
Quest 3.
1. 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
// Answer 3.

//var document;
/* for(var value of document){
    console.log(value);
} */
/* for(var key of document){
    console.log(key);
} */ 
var document;
var Do = [];
for(var key in document) {
    //console.log(key);
    //console.log(document[key]);
    Do.push(document[key]);
}
console.log(Do);
/*
Quest 4.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 4.
var orders = { name : ["한정민"], coffee : ["아메리카노", "에스프레소", "카페라떼"] };
/* for(var i = 4; i <= 0; i++){
    console.log(name);
    console.log(coffee);
    
    return name + "님, 주문하신" + coffee + "1잔 나왔습니다."
} */
//var Ord = [];
//for(var key in orders ){
    //console.log(key[orders]);
    //Ord.push(orders[key]);
//}
//console.log(Ord);
/* for(var name of orders ){
    //console.log(key[orders]);
    //return name + "님, 주문하신" + coffee + "1잔 나왔습니다."
    console.log(name + "님, 주문하신" + coffee + "1잔 나왔습니다.")
} */
/* for(var name of coffee ){
    //console.log(key[orders]);
    //return name + "님, 주문하신" + coffee + "1잔 나왔습니다."
    console.log(name + "님, 주문하신" + coffee + "1잔 나왔습니다.")
} */
//console.log(Ord);
for(var value of orders.coffee ){
    //console.log(value[orders]);
    //return name + "님, 주문하신" + value + "1잔 나왔습니다."
    console.log(orders.name + "님, 주문하신" + value + "1잔 나왔습니다.")
}

/*
Quest 5.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 5.

var index = {
    name : "한정민",
    age : 21,
    like : ["레몬에이드","마카롱","놀이공원"],
    mean : "잘부탁드립니다"
}

var id = "";
for(var i = 0; i < index.like.length; i++){
    id = index.like.join();
}
console.log("제 이름은" + " " + index.name + "입니다" + " " + "나이는 " + index.age + ", "+ "좋아하는것은" + " " +id
+" "+ "마지막으로" +" " + index.mean)