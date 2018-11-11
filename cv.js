// string methods


// 1. lastIndexOF
// 2. substring

let form = document.querySelector('form');
let inputs = document.querySelectorAll('fieldset > input');
let tArea = document.querySelector('textarea');
let liInputs = document.querySelectorAll('li  > input');
let backgroundColor = document.querySelector('#primaryColor');


form.addEventListener('submit', function(ev){

  // preventDefault is necessary for submit event type
  ev.preventDefault();
  let section = document.createElement('SECTION');

  let name = inputs[0].value;
  let h3 = document.createElement('H3');

  h3.style.marginBottom = '2vw';
  h3.innerText=name;
  section.appendChild(h3);

  let date = inputs[1].value;
  let p = document.createElement('P');
  p.innerText ='Born at ' + date;
  section.appendChild(p);

  document.body.appendChild(section);

})
