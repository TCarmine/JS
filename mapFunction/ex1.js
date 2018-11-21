let array = [0,2,4,6,8];

// let makeDouble = (array1) => {
//   for (let i = 0; i < array1.length; i++) {
//     array1[i]*=2;
//   }
//   return array;
//   // let newArr = array.forEach(array => array[i]*2);
//   // return newArr;
// }

let makeDouble2 = collection => {
  collection.forEach((el, i, arr) =>{
    //console.log(el,i);
    arr[i]*=2;
  })
}

// don't call the fucntion inside the console.log
makeDouble2(array);
console.log(array);


let makeDouble3 = collection => {
  let doubled = collection.map((el) =>el*=2);
  return doubled;
}


let doubleOfdouble = makeDouble3(array);
