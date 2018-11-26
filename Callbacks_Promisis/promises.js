let givenName = 'Cersel';

let asynChangeName = ( newName , time ) => {
  let promise = new Promise((resolve, recject) => {
    setTimeout(() => {
      resolve(newName);
    }, time);
  })
  return promise;
}
//let names = ['Euron Greyjoy', 'Jamie Lanniester','Night Kings'];
asynChangeName('Danny', 5000)
  .then( name => {
    givenName = name;
    console.log(givenName);
    return asynChangeName('Jon Snow', 4000);
  })
  .then( name =>{
    givenName = name;
    console.log(givenName);
    return asynChangeName('Euron Greyjoy', 3000);
  })
  .then( name =>{
    givenName = name;
    console.log(givenName);
    return asynChangeName('Jamie Lanniester', 2000);

  })
  .then( name =>{
    givenName = name;
    console.log(givenName);
    return asynChangeName('Night Kings', 1000);

  })
  .then( name =>{
    givenName = name;
    console.log(givenName);
  })

  console.log(givenName);
