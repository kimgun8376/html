// event1.js

let item = document.querySelector('button[name="add"]');
item.addEventListener('click', function(){
  let n1 = document.querySelector('input[name="num1"]').valueAsNumber; // value 변동 가능
  let n2 = document.querySelector('input[name="num2"]').valueAsNumber; // value 변동 가능
  document.querySelector('input[name="result"]').value = parseInt(n1) + parseInt(n2); // = .value 위 value로 변동시 숫자앞에 parseInt추가
}); 
  //뺴기 
  let item2 = document.querySelector('button[name="minus"]');
  item2.addEventListener('click', function(){
   let n1 = document.querySelector('input[name="num1"]').value
   let n2 = document.querySelector('input[name="num2"]').value
   document.querySelector('input[name="result"]').value = parseInt(n1) -parseInt(n2);
  });
 //value 속성 초기화하기 
  let itemClear = document.querySelector('button[name="clear"]');
  itemClear.addEventListener('click',function(){
    document.querySelector('input[name="num1"]').value = '';
    document.querySelector('input[name="num2"]').value = '';
    document.querySelector('input[name="result"]').value = '';
  });
//속성이 없을 경우 'input[name="first"]'