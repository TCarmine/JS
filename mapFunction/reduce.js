let numbers = [2,4,6,8];

let numbers2 = ['2','4','6','8'];

let name = 'NameLonger';
// raw way
let mySum = array =>{
  let sum=0;
  for (let i=0;i<array.length;i++){
      sum += array[i];
  }
  return sum;
}

// reduce way

let retrunSum0 = arr =>{
  return arr.reduce( function(a,b){
    return a+b;
  }, 0)
}

let retrunSum1 = arr =>{
  let sum= arr.reduce( function(a,b){
    return a+b;
  }, 0)
  return sum;
}



// reduce for concat string

let stringToArray = arr => {
  return arr.reduce((a, b)=>{
    return a + '' +b;
  }, '')
}

let result = stringToArray(numbers2);
let result = stringToArray(nome);

let numbersSum = mySum(numbers);

 console.log(result);
