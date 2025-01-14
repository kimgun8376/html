let anyNumber = parseInt(prompt("숫자를 입력하세요:"));
console.log(anyNumber =='Nan');

if(anyNumber == 0|| isNan(anyNumber)){
  console.log('정상적인 값을 입력하세요.');
} else {
  if(anyNumber % 2 == 0){
  if(anyNumber % 3 == 0){
    console.log('2와3의 배수입니다.');
  }else if (anyNumber % 2 == 0)
  console.log('2의 배수입니다.');
  } else if(anyNumber % 3 == 0){
    console.log('3의 배수입니다.');
  }
}




