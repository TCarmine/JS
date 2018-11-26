let names = [
  'Mauro',
  'Eugen',
  'Mauro',
  'Meir',
  'Eugen',
  'Jens',
  'Jens',
  'Jake',
  'Mohammed',
  'Mauro',
  'Mohammed',
  'Marcelo',
  'Sue',
  'Murhaf',
  'Jens'
];

// let mapArr = airlinePrices.map(newArray =>{
//    let mapPrices = {};
//    mapPrices[newArray.airlinesName] = newArray.avgPriceTicket;
//    return mapPrices;
// });


// let uniqueValues = array => newArray{
//   array.map( newArray =>{
//     arr[newArray]=
//
//   })
// }



let uniqueElements = (collection = names) => {
 let uniqueNames = [];
     for(let name of collection){
       if(!uniqueNames.includes(name)){
          uniqueNames.push(name);
       }
     }
     return uniqueNames;
}


// let uniqueValues = array => {
//     array.filter((item,index) =>{
//       array1.indexOf(item)==index;
//     })
// }


let unique =uniqueElements();
console.log(unique);
// let unique = uniqueValues(names);





// let uniqueNames2 = new Set();
//
// for (let name of names ){
//   uniqueNames2.add(name);
// }
//
// console.log(uniqueNames2);
// // let uniqueValues = array => {
// //   if .includes(
// //   })
// //
// //   })
// // }
