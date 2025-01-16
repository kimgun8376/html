// function2.js
/*
  함수이름 : getMax
  매개변수 : 배열(numary)
  기능 : 배열의 요소중에서 제일 큰값을 콘솔출력
  */

/*  let ary1 = [3, 15, 22, 7];
  let ary2 = [23, 11, 45, 30];
  let ary3 = [];
 
  function getMax(ary = []) {
    let max = 0;
    for (let i = 0; i < 5; i++) {
   ary3[i] = parseInt(Math.random() * 50);
    } 
}  console.log(getMax)
  let temp = parseInt(getMax);
  console.log('최대값: ${max}'); */


let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = [];

for (let i = 0; i < 5; i++) {
  ary3[i] = parseInt(Math.random() * 50);
}

// 매개 변수로 받은 값중에서 제일 큰 요소를 출력
function getMax(numAry = []) {
  let max = 0; // 제일 큰값을 담아놓을 변수선언
  for (let i = 0; i < numAry.length; i++) {
    // 제일 큰 값을 max에 저장 
    if (max < numAry[i]) {
      max = numAry[i];
    }
  }
   return max; // 함수를 호출한 영역으로 반환.
  console.log(`제일큰값은 ${max}`);
}
 // end of getMax()
document.write(getMax(ary1)); // 바탕화면에 출력
alert(getMax(ary2)); // 메시지 출력
getMax(ary3);

getMax();