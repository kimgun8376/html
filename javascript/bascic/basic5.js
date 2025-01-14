//278 시간 => 11일 몇시간 입니다.

// 1234 분 => ?일 ?시간 ?분 입니다.
let hour =  278;

firstNumber = parseInt(hour) / 24;
console.log(parseInt(firstNumber));
let secondNumber = parseInt(hour) % 24;
console.log(parseInt(secondNumber));




let inputMinutes = prompt("분을 입력하세요:");
let days = parseInt(inputMinutes / (24 *60));
let hours = parseInt((inputMinutes % (24*60)) / 60);
let minutes = inputMinutes % 60;
console.log(`${inputMinutes}분은 ${days}일 ${hours}시간 ${minutes}분 입니다.`)

