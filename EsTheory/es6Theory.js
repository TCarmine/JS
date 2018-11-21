//ES6 new rules --Ecma Script 6
// 1. let, const
// 2. includes

// return:
// 1 gives values back
// 2 Exit the function

// Default values

// Create a function that accept a number and return it's factorial

let fact= function(n=10){
   let result = 1;
   for (let i=1; i<= n; i++){
     result *= i;
   }
   return result;
}();



let fact1= fact();

// function declarations has hoisting by Default
function whatever(whatever){
  return whatever;
}

// arrow functions
// a => {}
let myFunction = (a) =>{
  console.log(a);
}

let myFunction2 = a =>{
  console.log(a);
}


let myFunction3 = (a,b) => a+b;

let result2 = myFunction3(10,5);

console.log(result2);
