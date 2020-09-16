// Answer 1.
var selectors = {
    number : 2,
    string : "",
    dom : ["header"]
};
selectors.dom.push("main, footer");
delete selectors.string;
console.log(selectors);




// Answer 2.
var cars = ["Hyundai", "Kia", "Samsung", "GM"];
for(var i = 0; i < cars.length - 1; i++){
    cars.reverse();
}
console.log(cars);



// Answer 3.
for (var key in document) {
    console.log(document[key]);
}



// Answer 4.
var orders = { name : ["송재혁"], coffee : ["아메리카노", "에스프레소", "카페라떼"] };
for(var value of orders.coffee){
    console.log(orders.name + "님, 주문하신 " + value + " 1잔 나왔습니다.");
}



// Answer 5.
var sjh = {
    name : "송재혁", 
    age : 23, 
    class : "프로그래밍반",
    code : "jquery",
    interest : ["threeJs" ,"maya"]
};
var end = {
    giveUp : "끝까지 포기하지않고",
    learn : "배워나가겠습니다."
}

function about(){
    console.log("안녕하세요. " + sjh.class + " " + sjh.age + "살 " + sjh.name + "입니다.")
    console.log("이번학기에 그동안 배우고 싶었던 " + sjh.code + "를 처음 배우는데 부족하지만 한학기 수업을 통하여 코드에 익숙해지겠습니다.")
    console.log("예전부터 3D에 관심이 많아 " + sjh.interest[0] + " 와 " + sjh.interest[1] + "를 개인적으로 공부하고있습니다.")
    console.log("학생으로써 마지막 한학기라고 생각하니 많은 생각이 들지만");
    for(var key in end) {
        console.log(end[key]);
    }
}

about();
