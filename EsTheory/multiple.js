

let findMultiples =(first,second)=>{
  let answer;
  first%second ===0 ? answer= true : answer = false;
  return answer;
}

let isMultiple = (n,y) => {
   if(n%y==0){
     return true;
   }else{
     return false;
   }
 }

let M1 = isMultiple(9,3);

let M2 = isMultiple(25,5);

let M3 = isMultiple(9,2);

let arryBool=[M1,M2,M3];
