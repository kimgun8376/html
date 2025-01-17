// object1.js

let obj ={}; // 객체(인스턴스)
obj = new Object(); 

obj.title ="이것이 자바다"; // title 값 입력
obj['price'] = 30000;
console.log(obj);

let today = new Date();
console.log(today.getFullYear()+'년도'); //년도만 나오게

let numAry = [10, 20, 30]; // = new Array();
numAry.push(40); // 마지막에 40추가
numAry.unshift(5); //처음에 5추가
numAry.splice(1,1, 8); // 특정위치에 삽입 (위치 대체정도 대체 / 0일경우 삭제)
console.log(numAry);
