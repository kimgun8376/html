// object3.js
//forEach()
let numAry = [20, 13, 45, 62, 19];
let sum = 0; //합구하기
let max = 0; // max 값 구하기 
numAry.forEach(function (item, idx, ary) {
  console.log(`item => ${item}`); // 숫자 item 으로 나타내기
  if (item % 2 == 0) { // 짝수 합계 계산 idx(홀수번쨰 위치계산)
    console.log(`item => ${item}`); // 숫자 item 으로 나타내기
    sum += item;
  }
  // max 값 계산
  if (max < item) {
    max = item;

  }
}); // log 반복
console.log(`짝수 합계 ${sum}, 최고값 ${max}`);

// filter(function(item,idx,ary){}) 조건을 만족하는 배열 생성.
let filterAry = numAry.filter(function (item, idx, ary) {
  if (item % 2 == 1) {
    return true;
  } else {
    return false;
  }
});
console.log(filterAry); // 홀수값만 생성