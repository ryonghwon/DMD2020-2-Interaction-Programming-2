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
      number : 2,
      string : ' ',
      dom : ['header']
};
// Array.push(__value__); - 해당 배열의 뒤쪽에 값을 추가.
selectors.dom.push('main', 'footer'); //배열 뒤쪽에 값 추가.
//delete
delete selectors.string; //string 속성 삭제.
console.log(selectors); // {number: 2, dom: Array(3)}



/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
for(var i = 3; i >= 0; i--){
      console.log(cars[i]); // 'GM' / 'Samsung' / 'Kia' / 'Hyundai' 순서로 출력
};

/*
Quest 3.
1. 전역변수 document 의 속성 및 메서드 등을 console.log 메서드를 이용해서 출력하는 반복문을 작성합니다.
2. 여러가지 방법의 반복문을 이용하여 작성해도 됩니다.
*/
// Answer 3.
for (var key in document){
      console.log(document[key]);
}


/*
Quest 4.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 4.
var orders = {
      name : ['이다영'],
      coffee : ['아메리카노', '에스프레소', '카페라떼']
};

for(var i = 0; i < orders.coffee.length; i++){
      console.log(orders.name + '님, 주문하신 ' + orders.coffee[i] + ' 1잔 나왔습니다.');
      //이다영님, 주문하신 아메리카노 1잔 나왔습니다., 이다영님, 주문하신 에스프레소 1잔 나왔습니다., 이다영님, 주문하신 카페라떼 1잔 나왔습니다.
};


/*
Quest 5.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 5.
var profile = {
      name : '이다영',
      age : '21',
      school : ['계원예술대학교', '디지털미디어디자인과', 'D반'],
      hobby : ['음악듣기', '게임하기'],
      hello : '안녕하세요.',
      end : "이상 자기소개를 마치겠습니다."
};
var school_join = profile.school.join(" ");

console.log(profile.hello + " 저는 " + profile.name + "입니다.")
console.log("나이는 " + profile.age + "살이고, 현재 " + school_join + "에 재학중입니다.")

for (i = 0; i < profile.hobby.length; i++){
            console.log("취미는 " + profile.hobby[i]+ "입니다.");
}

function home(city, hometown) {
      return "살고 있는 지역은 " + city + " " + hometown + "입니다."
}
var address = home('인천', '부평구')

console.log(address);
console.log(profile.end);