// object4.js
// 1일의 요일? 막날?
let month = 2;
let date = 0;
let year = 2024;

let today = new Date();

today.setFullYear(year);  //년 변경 
today.setMonth(month); //달 변경 
today.setDate(date); // 날짜 변경
today = new Date(2024, 4, 3, 15, 30, 22);

console.log(today, today.getDate());

today = new Date();
// 2022년 5월 
console.log(today);