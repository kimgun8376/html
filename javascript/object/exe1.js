// 연습1. exe1.js 
let myFriends = [];
myFriends.push({name:"홍길동", escore : 70, kscore:78, gender:'Female'});
myFriends.push({name:"신현욱", escore : 80, kscore:88, gender:'Female'});
myFriends.push({name:"김민식", escore : 90, kscore:70, gender:'Male'});
myFriends.push({name:"석지욱", escore : 95, kscore:55, gender:'Female'});

// forEach: 콘솔출력
myFriends.forEach(function(item, idx,ary){
   console.log(`item => ${item}`);
  });
  let sum =0;
  let num=0;
  let avg=0;
  myFriends.forEach(function(item, idx,ary){
    if (item.gender == 'Female'){
       sum += item.escore;
       num ++ ;
    } 
    avg= sum/num;
    console.log(`평균값:${sum/num}`); 
    // 평균값 avg 변수설정이후 계산
  }); 
  let underAvgAry = myFriends.filter(function(item, idx, ary){
    if(item.avg == "Female" && item.escore <avg ){
      return true;
    }
  }) 
  console.log(underAvgAry); // 평균값 계산 



