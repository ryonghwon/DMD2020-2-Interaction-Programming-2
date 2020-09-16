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
var selectors = new Object; // 1. 객체 생성.
selectors = {
    number: 2, // 2. number 속성 추가 값 2할당.
    string: "", // 3. string 속성 추가 및 값 "" 빈 문자열 할당.
    dom: ['header'] // 4. dom 속성 추가 및 값 문자열 원소값 header 을 가진 배열 할당.
};
selectors.dom.push("main"); // 5.추가로 dom 속성 배열 header 뒤에 원소값 추가
selectors.dom.push("footer"); // 5.추가로 dom 속성 배열 header 뒤에 원소값 추가
delete selectors.string; // 6. selectors 객체의 string 속성을 제거.
console.log(selectors); // 7. selectors 객체 출력


/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.
var cars = ['Hyndai', 'Kia', 'Samsung', 'GM']; // 배열을 선언
cars.reverse(); // 순서를 반대로 뒤집습니다.

// for(var i = 0;i < cars.length;i++){
// 배열을 반복시켜 해당 순서를 출력하려 하였음.
//     var carsReverse = cars[i];
// };
// console.log(carsReverse);

for(var index in cars){
    // for in 문을 사용하여 cars의 배열 길이 만큼
    //index를 1씩 더하며 for문을 반복시켰습니다. 
    console.log(cars[index]); // console.log 매서드를 이용해서 cars를 index 순서에 맞게 출력하였습니다.
};



/*
Quest 3.
1. 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
// Answer 3.

/*
이 식은 작동하지 않았습니다.
for(var i = 0; i < document.length; i++){
    console.log(document[i]);
    console.log("test");
}
*/

for(var index in document){
    console.log(document[index]);
}




/*
Quest 4.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 4.
var orders = { name : ['지기역'], coffee : ['아메리카노', '에스프레소', '카페라떼']};
for(var index in orders.coffee){
    var result = orders.name + " 님, 주문하신 " + orders.coffee[index] + " 1잔 나왔습니다.";
    console.log(result);
}


/*
Quest 5.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 5.

/*
안녕하세요. 계원예술대학교 디지털미디어디자인과 2학년 D반 프로그래밍전공 25살 지기역입니다.
저는 프로그래밍전공을 배우고 있으며 html, css, javascript, unity c# 을 배우고 있습니다.
프로그래밍전공 이외에도 디자인에도 관심이 많아 phtoshop, illustrator도 사용하여 작업물을
만들고 있으며 XD라는 프로그램도 최근에 사용하기 시작하였습니다.
저는 웹 프론트엔드 개발자가 목표이며 도달하면 백엔드도 차근차근 배워 풀스택 개발자를 최종 목표로
하고있습니다.
*/
var profile = new Object;
profile = {
    _name : "지기역",
    _age : "25",
    _school : "계원예술대학교",
    _department : "디지털미디어디자인",
    _grade : 2,
    _class : "D",
    _details : "프로그래밍"
};
var programming = ["html", "css", "javascript", "unity c#"];
var design = ["photoshop", "illustrator", "XD"];
var goal = {
    first_goal : "프론트엔드",
    second_goal : "백엔드",
    final_goal : "풀스택"
};
introduceMySelf();
function introduceMySelf(){
    var textRow01 = introduceProfile();
    var textRow02 = introduceProgramming();
    var textRow03 = introduceDesign();
    var textRow04 = introduceGoal();
    console.log(textRow01 + textRow02 + textRow03 + textRow04);
}
function introduceProfile(){
    return "안녕하세요. " + profile._school + " " + profile._department + "과" + profile._grade + "학년" + profile._class + "반 " + " 프로그래밍전공 " + profile._age + "살 " + profile._name + "입니다. ";
};
function introduceProgramming(){
    var array_programming = programming.join();
    return "저는 프로그래밍 전공을 배우고 있으며 " + array_programming + "을 배우고 있습니다. ";
};
function introduceDesign(){
    var design01 = "";
    for(var i=0;i < design.length - 1;i++){
        if(i < design.length -2){
            design01 += design[i] + ",";
        }
        else{
            design01 += design[i];
        }
    }
    return "프로그래밍전공 이외에도 디자인에도 관심이 많아 " + design01 + "도 사용하여 작업물을 만들고 있으며 " + design[2] + "라는 프로그램도 최근에 사용하기 시작했습니다. ";
};
//저는 웹 프론트엔드 개발자가 목표이며 도달하면 백엔드도 차근차근 배워 풀스택 개발자를 최종 목표로 하고있습니다.
function introduceGoal(){
    return "저는 웹 " + goal.first_goal + " 개발자가 목표이며 도달하면 " + goal.second_goal + "도 차근차근 배워 " + goal.final_goal + " 개발자를 최종 목표로 하고있습니다.";
};