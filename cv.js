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

  // handling name box
  let name = inputs[0].value;
  let h3 = document.createElement('H3');

  h3.style.marginBottom = '2vw';
  h3.innerText=name;
  section.appendChild(h3);

  // handling date picker
  let date = inputs[1].value;
  let p = document.createElement('P');
  p.innerText ='Born at ' + date;
  section.appendChild(p);

  // handling img uploading
  let img = inputs[2].value;
  console.log(img);
  console.log(img.lastIndexOf('\\'));
  let index = img.lastIndexOf('\\')+1;
  console.log(index);
  let img2 = img.slice(index);
  console.log(img2);

  let imgPreview = document.createElement('IMG');
  imgPreview.src = img2;
  section.appendChild(imgPreview);


  // article about person with selected color
  let articleColor = backgroundColor.value;
  let article = document.createElement('ARTICLE');
  article.style.background=articleColor;

  let textArea = tArea.value;
  article.innerText= textArea;

  section.appendChild(article);


  //handling languages checkboxs paragraph
  let p2 = document.createElement('P');


  for(let i=0;i<liInputs.length;i++){

     if(liInputs[i].checked){


        p2.innerText = p2.innerText +' '+  liInputs[i].parentElement.innerText;


     }
     section.appendChild(p2);
  }
  // let val='';
  // if (liInputs[0].checked){
  //    let val = liInputs[0].checked.value;
  // }
  // console.log(liInputs);
  //
  // console.log(val);



  // append the section to the root element-->body



  document.body.appendChild(section);

})
