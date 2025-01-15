// forloop2.js
// 1~ 10까지 짝수값
let sum = 0;
for (let i = 1; i <= 10; i++) {
  console.log(`현재 i의값 :${i}`);
  if (i % 2 == 0) {
    sum = sum + i
  }
}
console.log(`1~10까지의 짝수합: ${sum}`);
console.log('end of for');