// string methods

// 1. lastIndexOF
// 2. substring
// empty string is a false value

// let form = document.querySelector('form');
// const would be ok if are objects or arrays as they are mutable objects
// the advantage is that they take less space in memory
// but they would be accessible only in the block

let form = document.querySelector('form'),
 username = document.querySelector('input[type="text"]'),
 birthdayDate = document.querySelector('input[type="date"]'),
 fileUploaded = document.querySelector('input[type="file"]'),
 tArea = document.querySelector('textarea'),
 backgroundColor = document.querySelector('#primaryColor'),
 textColor = document.querySelector('#secondaryColor'),
// let checkboxsInput = document.querySelectorAll('input[type='checkbox']');
 liInputs = document.querySelectorAll('li  > input');

// using submit event we don't need to grab the button



form.addEventListener('submit', function(ev){

          // preventDefault is necessary for submit event type
          ev.preventDefault();
          let section = document.createElement('SECTION');

          // handling name box
          let name = username.value;
          let h3 = document.createElement('H3');

          h3.style.marginBottom = '2vw';

          // without let would be a global variable
          let span = document.createElement('SPAN');

          span.innerText = 'X';
          h3.innerHTML = name;

          h3.appendChild(span);

          section.appendChild(h3);
          // h3.innerText=name + h3.innerHTML;
          // handling date picker
          let date = birthdayDate.value;
          let p = document.createElement('P');

          let today = new Date();
          let yearNow = today.getFullYear();
          console.log(yearNow);

          let userBornDate = new Date(date);
          let yearUser = userBornDate.getFullYear();
          let userAge = yearNow - yearUser;
          p.innerText ='I am ' + userAge;
          section.appendChild(p);

          // // handling img uploading
          let img = fileUploaded.value;
          console.log(img);

          let index = img.lastIndexOf('\\')+1;
          let img2 = img.slice(index);
          console.log(index);
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

         let checkboxs = [];

          for(let i=0;i<liInputs.length;i++){

             if(liInputs[i].checked){
                checkboxs.push(liInputs[i].parentElement.innerText);
             }
             //console.log(checkboxs[i]);


          }
          let langueges = checkboxs.join(',');
          console.log(checkboxs);
          p2.innerText = 'This are the language I do know: '+ langueges;
          section.appendChild(p2);
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
              // sec = document.querySelector('section');

             // would work also with targetParent instead of section
            document.body.removeChild(section);

          }

          // let spans = document.querySelectorAll('span');

          // for(let spansCount = 0; spansCount< spans.length; spansCount++){
          //    spans[spansCount].addEventListener("click", removeCV);
          // }
          span.addEventListener("click", removeCV);



})
