// basic4.js
/*
두 숫자를 입력받아서 두수의 곱을 출력.
*/ 
let firstValue = prompt("첫번쨰값을 입력하세요:");
let secondValue = prompt("두번쨰값을 입력하세요:");
firstValue = parseInt(firstValue) +5;
secondValue = parseInt(secondValue) -3;
let result = firstValue - secondValue;
console.log(`${firstValue}에서 ${secondValue}의 값을 뺸 결과: ${result}.`);