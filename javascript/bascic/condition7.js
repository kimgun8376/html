let num1 = parseInt(Math.random() * 100);
let num2 = parseInt(Math.random() * 100);
console.log(num1,num2)
let result = num1 - num2;
if (result < 0) {
  result = num2 - num1;
}
console.log(`큰수에서 작은수를 뺀 결과값:${result}`);
