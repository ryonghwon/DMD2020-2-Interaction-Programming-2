// Answer 1.
var selectors = {
    number : 2,
    string : "",
    dom : ["header"]
};
selectors.dom.push("main", "footer");
// console.log(selectors.dom);
delete selectors.string;
console.log(selectors);


// Answer 2.
var cars = ["Hyundai", "kia", "Samsung", "GM"];
for(var i = 3; i >= 0; i--) {
    console.log(cars[i]);
}

// Answer 3.
var document;
for(var key in document) {
    console.log(key);
    console.log(document[key]);
}

// Answer 4.
var orders = { name : ["최성혜"], coffee : ["아메리카노", "에스프레소", "카페라떼"] };
for(var value of orders.coffee) {
    // console.log(value);
    console.log(orders.name + "님, " + "주문하신 " + value + " 1잔 나왔습니다.");
}

// Answer 5.
var basic = {
    hi: function() {
        console.log("안녕하세요.");
    },
    name: "최성혜",
    age: 24,
    grade: 2,
    class: function(E) {
        return E;
    },
    school: "계원예술대학교",
    major: "디지털미디어디자인과",
    greet: ["잘부탁드립니다.", "마지막 학기도 열심히 해보겠습니다."]
},
    space = " ",
    text = ["학교 앞에서 자취 중이며 현재 코로나때문에 비대면 수업이라 학교를 가지 못해 집에만 있습니다.", "대면 수업을 하던 때가 그리워요..."];

basic.hi();
console.log(basic.school + space + basic.major + space + basic.age + "살" + space + "18학번" + space + basic.grade + "학년" + space + basic.class("D") + "반" + space + basic.name + "입니다.");
for(var value of text) {
    console.log(value);
}
emotion("시원섭섭");
console.log("한 학기동안 더욱 발전하여" + space + basic.school + "와" + space + basic.major + "를 빛내도록 노력하겠습니다.")
for(var i = 1; i >= 0; i--) {
    console.log(basic.greet[i]);
}
function emotion(e) {
    console.log("이제 마지막 학기인데 벌써 졸업이 코 앞이라는게 " + e + "합니다.");
}