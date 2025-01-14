//basic1.js
/*
변수 선언 :이름,연락처,주소 선언.
cosole 출력.
*/
let myName = "홍길동";
let myPhone = "010-1111-2222";
let myAddress = "대구동구100번지";

let largeNumber = 100;
console.log(largeNumber);
const bloodType = "0";
//bloodType = "A";
const PI = 3.14; // 프로그램 변하지 않는 값으로 선언.


console.log("내 이름은" + myName + "입니다.");
console.log("연락처는" + myPhone + "입니다.");
console.log(`주소는 ${myAddress} 입니다.`);
console.log(`반지름 5인 원의 넓이는 ${5 * 5* PI}입니다.`);
let myInfo = {
  name: "홍길동",
  age: 20
};
let scores = [10, 20, 30]; // 배열.
let specialType=null;
console.log(typeof specialType); //변수의 자료형을 출력.