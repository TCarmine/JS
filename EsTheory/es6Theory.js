//ES6 new rules --Ecma Script 6
// 1. let, const
// 2. includes

// return:
// 1 gives values back
// 2 Exit the function

// Default values

// Create a function that accept a number and return it's factorial

let fact= function(n=10){
  if(n==1){
    return 1;
  }else{
    return n*(n-1);
  }
}

let fact_1=fact(6);

// console.log(fact_1);
