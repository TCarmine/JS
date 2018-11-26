let name = 'Cersel';

let changeName = newName => {
  console.log(newName);
  setTimeout(() => {
    name = newName;
    console.log(name);
    setTimeout(() => {
      name = 'Jon Snow';
      console.log(name);
      setTimeout(() => {
        name = 'Euron Greyjoy';
        console.log(name);
        setTimeout(() => {
          name = 'Jamie Lanniester';
          console.log(name);
          setTimeout(() => {
            name = 'Night Kings';
            console.log(name);
          },500)
        }, 1000)
      }, 2000)
    }, 3000)
  }, 5000)
}

console.log(name);
changeName('Danny');
console.log(name);

let executed = () =>{
  console.log('executed');
}

setTimeout(executed, 7000);
