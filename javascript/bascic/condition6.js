// conditio5.js
// 두수 :1~100 까지의 임의의 값을 생성.
// 큰수에서 작은 수 빼서 결과값을 출력.
let num1 = parseInt(Math.random() * 100);
let num2 = parseInt(Math.random() * 100);
console.log(num1,num2)
if (num1 > num2) {
   console.log(num1-num2);  
}  else{
   console.log(num2-num1);
}

