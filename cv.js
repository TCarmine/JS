// string methods


// 1. lastIndexOF
// 2. substring

let form = document.querySelector('form');
let inputs = document.querySelectorAll('fieldset > input');
let tArea = document.querySelector('textarea');
let liInputs = document.querySelectorAll('li  > input');
let backgroundColor = document.querySelector('#primaryColor');
let textColor = document.querySelector('#secondaryColor');

form.addEventListener('submit', function(ev){

  // preventDefault is necessary for submit event type
  ev.preventDefault();
  let section = document.createElement('SECTION');

  // handling name box
  let name = inputs[0].value;
  let h3 = document.createElement('H3');

  h3.style.marginBottom = '2vw';

  span = document.createElement('SPAN');



  section.appendChild(h3);

  span.innerText = 'X';
  h3.innerHTML = name;

  h3.appendChild(span); 
  // h3.innerText=name + h3.innerHTML;
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


  // article about person with selected color for all section
  let sectionColor = backgroundColor.value;
  let article = document.createElement('ARTICLE');
  section.style.background=sectionColor;

  let textArea = tArea.value;
  article.innerText= textArea;

  section.appendChild(article);

  //handling color for text
  let textCV = textColor.value;
  section.style.color = textCV;

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

  let removeCV = function (ev) {
      let target = ev.currentTarget,
      targetParent = target.parentElement.parentElement;
      sec = document.querySelector('section');

    sec.removeChild(targetParent);

  }

  let spans = document.querySelectorAll('span');

  for(let spansCount = 0; spansCount< spans.length; spansCount++){
     spans[spansCount].addEventListener("click", removeCV);
  }




})
