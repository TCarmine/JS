

let str1 = 'bear';
let str2 = 'I love watching bears fishing salmons in Kamtschaka';
let str3 = 'My morning routine is to shave my beard';
let str4 = 'The heat is unbearable!';

bearregex = /\bbears?\b/i;

console.log(bearregex.test(str1));
console.log(bearregex.test(str2));
console.log(bearregex.test(str3));
console.log(bearregex.test(str4));
