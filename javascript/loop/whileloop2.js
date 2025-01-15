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
//}d

let run = true;
let max = 0; // 최대값
while (run) {
  let inputValue = prompt("점수를 입력하세요:");
  // 입력값이 숫자인지 아닌지 구분
  // 숫자가 아니면 => stop인지 아닌지 구분
  // 숫자이면 => 최고점수를 구하고 
  console.log(inputValue);
  let temp = parseInt(inputValue); //최고점수만 출력 //isNaN(temp)
  if (isNaN(temp)) { //입력한 값이 문자열 이라면
    if (inputValue == 'stop') {
      run = false; // stop을 인식 명령 
    } else { // 문자가 아니라면..
      alert('정상적인 값을 입력하세요')
      //if (max < inputValue) {
      //max = inputValue
    }
  } else {
    if (max < parseInt(inputValue)) {
      max = parseInt(inputValue);
    }
  }
}
//end of while.
console.log(`최고점수: ${max}`);
// 숫자이면 temp로 단어이면 inputValus == **
// if (temp <50){break;} 