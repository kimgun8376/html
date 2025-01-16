// function4.js

// 이벤트 - 이벤트핸들러.
let item = document.querySelector('button');  // 화면상에 버튼 요소를 찾는 명령어
console.log(item);

item.addEventListener('click',function(){
   alert('마우스가 클릭됨');
});

item.addEventListener('mouseover', function(){
   item.style.backgroundColor = 'green';
});

item.addEventListener('mouseout', function(){
  item.style.backgroundColor = '';
});