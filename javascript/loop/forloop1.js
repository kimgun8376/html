// forloo1.js
let sum = 0;

// 1~10까지 출력.
// let i =1; 으로 위에따로 만들어도 됨
for (let i = 1; i <= 10; i++) {
  console.log(`현재 i의 값 : ${i}`);
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
console.log(`1~10까지의 홀수합: ${sum}`);
console.log('end of for');