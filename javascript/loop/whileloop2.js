// whileloo2.js
// stop을 입력하면 반복문 종료.
// 입력한 값중에서 제일 큰 값을 출력.


//let inputValue = prompt("점수를 입력하세요");
//console.log(inputValue);
//while(run) {
 // let temp = parseInt(Math.random());   
  //console.log(temp);
   // if (i == stop){
    // break;
    //}s
//}

let run = true;
let max = 0;
while(run) {
  let inputValue = prompt("점수를 입력하세요:");
  console.log(inputValue);
  if (inputValue == 'stop') {
   run= false;
  }
  if (max < inputValue){
    max=inputValue
  }
}

