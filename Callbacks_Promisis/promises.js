let givenName = 'Cersel';

let asynChangeName = ( newName , time ) => {
  let newPromise = new Promise((resolve, reject) => {
    if(newName === 'Jon Snow'){
      reject('This name is not allowed');
    }
    setTimeout(() => {
      resolve(newName, time);
    }, time);
  })
  return newPromise;
}
let names = ['Euron Greyjoy','Jon Snow','Jamie Lanniester','Night Kings'];
let times =[5000, 4000, 3000, 2000, 1000];
let counter = 0;

let makeNewNames = counter => {
  if (counter === names.length){
    return;
  }
  asynChangeName(names[counter], times[counter])
      .then( name => {
        givenName = name;
        console.log(givenName);
        counter++;
        makeNewNames(counter);
      })
      .catch(errorMessage => {
        console.warn(errorMessage);
      })
}

makeNewNames(counter);
// asynChangeName('Danny', 5000)
//   .then( name => {
//     givenName = name;
//     console.log(givenName);
//     return asynChangeName('Jon Snow', 4000);
//   })
//   .then( name =>{
//     givenName = name;
//     console.log(givenName);
//     return asynChangeName('Euron Greyjoy', 3000);
//   })
//   .then( name =>{
//     givenName = name;
//     console.log(givenName);
//     return asynChangeName('Jamie Lanniester', 2000);
//
//   })
//   .then( name =>{
//     givenName = name;
//     console.log(givenName);
//     return asynChangeName('Night Kings', 1000);
//
//   })
//   .then( name =>{
//     givenName = name;
//     console.log(givenName);
//   })

  console.log(givenName);
