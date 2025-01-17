// objcet2.js
// concat(배열요소 합)

let numAry1 = [10, 20];
let numAry2 = [30, 40];
let resultAry = numAry1.concat(numAry2); // 괄호안에 합칠 변수 넣기

console.log(resultAry.join('-').split('-')); 
// console.log 출력방식, join =>배열->문자열 
// split => 문자열 -> 배열

let result = resultAry.join('-').split('-');
result.push('60');
console.log(result.pop());


console.log(result,result.indexOf('20')); // 요소의 인덱스 반환.

console.clear(); // 정리하기
result=["홍길동", "김민수", "허성식", "박창식"]

if (result.indexOf('김민수')  !=-1) {
  console.log("찾는 이름이 존재합니다.")
} else {
  console.log("찾는 이름이 없습니다.")
}

console.log(result.at(1)); // 인덱스에 해당하는 값을 반환 1번쨰의 값 반영

result.sort().reverse().join(); // 이름 정렬하기 // 역순정렬 
console.log(result);
