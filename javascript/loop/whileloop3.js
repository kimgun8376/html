// whileloo2.js
// stop을 입력하면 반복문 종료.
// 입력한 값중에서 제일 큰 값을 출력.


//let inputValue = prompt("점수를 입력하세요");
//console.log(inputValue);
//while(run) {
// let temp = p
// arseInt(Math.random());   
//console.log(temp);
// if (i == stop){
// break;
//}s
//}

let run = true;
let max = 0; // 최대값
while (run) {
  let inputValue = prompt("점수를 입력하세요:");
  // 입력값이 숫자인지 아닌지 구분
  // 숫자가 아니면 => stop인지 아닌지 구분
  // 숫자이면 => 최고점수를 구하고 
  console.log(inputValue);
  //let temp = parseInt(inputValue); //최고점수만 출력
  if (inputValue == 'stop') {
    run = false;
  } else {
    if (max < inputValue) {
      max = inputValue
    }
  }
} //end of while.
console.log(`최고점수: ${max}`);