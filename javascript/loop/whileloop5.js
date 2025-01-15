// whileloop5.js

let members = [];
members[0] = {member_id:"user01", member_name :"홍길동", point:95};
members[1] = {member_id:"user02", member_name :"신현욱", point:90};
members[2] = {member_id:"user03", member_name : "김민식", point:80};

// 입력후 실패시 없습니다. 문구 출력

//let 내친구 = '김민식' //변수등록 
while (true) {
  let searchName = prompt("찾을 친구 이름 입력:");
  if (searchName == 'stop') {
    break; //while 반복문 종료
  }
  let exists = false; //존재여부 담아놓기.
  for (let i = 0; i < members.length; i++) {
    // 배열의 이름속성중에서 searchName 과 같으면 포인트를 콘솔출력
    if (members[i].member_name == searchName) {
      console.log(`${searchName}의 포인트는 ${members[i].point}`);
      exists = false;
    }
    if (!exists) {
      alert("찾는 친구이름이 없습니다.");
    }
  } // end of while.
  console.log('end of program.');
}


let temp = 0; //변수 
while(temp < 3) {
  let searchName = prompt("찾을 친구 이름 입력:");
    //배열의 이름속성중에서 searchName과 같으면 포인트를 콘솔출력.
    if (members[temp].member_name == searchName ) {
      console.log(`${searchName}의 포인트는 ${members[temp].point}`);
      break;
    } else {
      alert('없습니다.');
      break;
    } temp ++
  } 
  