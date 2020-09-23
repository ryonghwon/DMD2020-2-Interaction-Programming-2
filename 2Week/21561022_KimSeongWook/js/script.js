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

var selectors = {
    number: 2, 
    string: " ", 
    dom : ["header"] 
}
selectors.dom.push("main","footer"); 
delete selectors.string;
console.log(selectors); 



/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 의 원소값들을 출력합니다.
*/
// Answer 2.

/*
var cars = ["Hyundai", "Kia", "Samsung", "GM"]; 
cars.reverse();
for(i = 0; i < 1; i++){
    console.log(koCars);
}
*/

var cars = ["Hyundai", "Kia", "Samsung", "GM"];
var newCars = [];
for(var i = cars.length - 1; i >= 0; i--) {
    console.log(cars[i]);
    newCars.push(cars[i]);
}
console.log(newCars);




/*
Quest 3.
1. 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
// Answer 3.

//var _name = "document";
//console.log(typeof _name);
/*
for(var name in document){
    console.log(document[name]);
}
*/

// document - html 문서 자체를 의미. 브라우저에 파일이 실행되면 포함되어 있는 절대 변수.
console.log(document);
//document.getElementById('')
for(var property in document) {
    console.log(property);
    console.log(document[property]);
}





/*
Quest 4.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 4.
var orders = { 
        name : ["김 성 욱"], 
        coffee : ["아메리카노", "에스프레소", "카페라떼"] 
};
for(var coffeename of orders.coffee){
    console.log(orders.name + "님, 주문하신 " + coffeename + " 1잔 나왔습니다.")
};

/*
Quest 5.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 5.
var wook = new Object();

var wook = {
        name : "김성욱",
        age : 25,
}

for(var i = 0; i < wook.age.length; i++){
    
};
console.log("제 이름은 " + wook.name + "입니다. 나이는 " + wook.age + " 세 입니다.")

function _wook() {
    var hometown = "울산";
    return hometown;
}
console.log("제 고향은 " + _wook() + "입니다.");

var _want = "부와 명예";
function _wantto() {
    _want = "이번 수업을 통해 지식을 늘리는 것";
    console.log("제가 원하는 것은 " + _want + "입니다." + " 파이팅 ^_^ ");
}
_wantto();