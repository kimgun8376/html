// forloop5.js
let score1 = 90;
let sum = 0;


let numAry =[10,20,30,40]; //배열생성.
numAry[4] = 50;
numAry[5] = 60;
numAry[6] = 70;
numAry[7] = 80;

console.log(numAry.length);

// 6번쨰 위치값을 7번쨰 이동.
// 7번쨰 위치값을 6번쨰 이동.
let temp = numAry[6]; //변수값
numAry[6] = numAry[5];
numAry[5] = temp;

let pos =1;
let right = numAry[pos +1]; //변수값
numAry[pos +1] = numAry[pos];
numAry[pos] = temp; 




for(let i=0; i< numAry.length; i++){
  console.log(`${i}번쨰의 값=> ${numAry[i]}`);
  sum += numAry[i]; 
}
console.log(numAry[0]); 