// object4.js
// 1일의 요일? 막날?
let month = 2;
let date = 0;
let year = 2024;

console.clear();
let a = 'hello';
let b = 'hello';
console.log(a == b)

let today = new Date();
let now = new Date();
console.log(today.getTime() == now.getTime());

today.setFullYear(year);  //년 변경 
today.setMonth(month); //달 변경 
today.setDate(date); // 날짜 변경
today = new Date(2024, 4, 3, 15, 30, 22);

console.log(today, today.getDate());
console.log(new Date(2000));
console.log(today.valueOf() == now.valueOf());
console.log(today.valueOf());



today = new Date();
// 2022년 5월 
today.setFullYear(2025);  //년 변경 
today.setMonth(4); //달 변경 
today.setDate(25); // 날짜 변경
console.log(today);