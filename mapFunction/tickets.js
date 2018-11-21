let airlinePrices = [
  {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
  {airlinesName: 'Aegean', avgPriceTicket: 65.8},
  {airlinesName: 'KLM', avgPriceTicket: 102.82},
  {airlinesName: 'British Airways', avgPriceTicket: 114.9},
  {airlinesName: 'Iberia', avgPriceTicket: 77.2},
  {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
  {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
  {airlinesName: 'Air France', avgPriceTicket: 105.6},
  {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
  {airlinesName: 'Emirates', avgPriceTicket: 135.4},
];


let cheapFlight = (threshold = 100, arr) => {
  let newArr = [];
  arr.filter(item => item.avgPriceTicket < threshold)
   .forEach(company =>{
     newArr.push(company.airlinesName);

  })
  // for ( let i = 0; i<newArr.length;i++){
  //   for (let name in newArr){
  //        newArr[name].push(cheapCompanies[i]);
  //   }
  // }

  // for ( let i = 0; i<newArr.length;i++){
  //   console.log(newArr[i].airlinesName);
  // }
}

cheapFlight(100,airlinePrices);
console.log(newArr.join(", "));

// let findCheap = (array) =>  companyName {
//
// }

// let mapArr = airlinePrices.map(newArray =>{
//    let mapPrices = {};
//    mapPrices[newArray.airlinesName] = newArray.avgPriceTicket;
//    return mapPrices;
// });

// console.log(mapArr);
