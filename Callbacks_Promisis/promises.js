let givenName = 'Cersel';

let asynChangeName = newName => {
  let promise = new Promise((resolve, recject) => {
    setTimeout(() => {
      resolve(newName);
    }, 5000);
  })
  return promise;
}
//let names = ['Euron Greyjoy', 'Jamie Lanniester','Night Kings'];
asynChangeName('Danny')
  .then( name => {
    givenName = name;
    console.log(givenName);
    return asynChangeName('Jon Snow');
  })
  .then( name =>{
    givenName = name;
    console.log(givenName);
    return asynChangeName('Euron Greyjoy');
  })
  .then( name =>{
    givenName = name;
    console.log(givenName);
    return asynChangeName('Jamie Lanniester');

  })
  .then( name =>{
    givenName = name;
    console.log(givenName);
    return asynChangeName('Night Kings');

  })
  // .then( name =>{
  //   givenName = name;
  //   console.log(givenName);
  // })
