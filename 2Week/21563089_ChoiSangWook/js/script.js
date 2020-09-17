// Answer 1.

var selectors = {
     "number" : 10,
     "string" : "",
     dom : ["header"]
}
selectors.dom.push("main","footer");
//console.log(selectors);
delete selectors.string;
console.log(selectors); // string 속성 삭제
// 확인 완료









// Answer 2.
 
var cars = ["Hyundai", "Kia", "Samsung", "GM"];
//console.log(cars.length);
for(var i = cars.length -1; i >= 0; i--){
     console.log(cars[i]);
};
cars.reverse();
for(i = 0; i < cars.length; i++){
     console.log(cars[i]);
};
// 확인 완료











// Answer 3.

var Q3 = [];
for(var key in document){
     //console.log(key);
     Q3.push(document[key]); //  받아온 속성값들을 배열로 넣기
}
console.log(Q3); // document 속성 배열값 출력








// Answer 4.

var orders = { name : ["최상욱"], coffee : ["아메리카노", "에스프레소", " 카페라떼"]};
//console.log(orders);
//console.log(orders.name);
//console.log(orders.coffee);
for(i = 0; i < orders.coffee.length; i++)
{
     console.log(orders.name + "님, 주문하신 " + orders.coffee[i] + " 1잔 나왔습니다.");
};










// Answer 5.

var info =
{
     name : "최상욱",
     age : [1,2,5,6],
     studentid : 21563089,
     uni : function(){
          var university = "계원예술대학교"
          return university
     },
     hi :[" 이번 학기도"," 잘 부탁 드리겠습니다."," 감사합니다."]
};
info.age.pop();
info.age.shift();
var Age = info.age.join("");
//console.log(Age);

for(var hello of info.hi)
{
     info.hi.join("");
     hello = info.hi[0] + info.hi[1] + info.hi[2];
}
//console.log(hello);


console.log("안녕하세요 저는 " + info.uni() + "에 재학중인 " + Age + "살 " +info.studentid +" "+ info.name + "입니다." + hello);







