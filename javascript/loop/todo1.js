//point  출력

let members = [];
members[0] = {member_id:"user01", member_name :"홍길동", point:95};
members[1] = {member_id:"user02", member_name :"신현욱", point:90};
members[2] = {member_id:"user03", member_name : "김민식", point:80};

let temp = 0;
while (temp < 3) {
    let searchName = prompt("친구 이름 입력");
   if (members[temp].member_name == searchName) {
        console.log(`${searchName}의 포인트는 ${members[temp].point}`);
       break;
    } temp ++
}
