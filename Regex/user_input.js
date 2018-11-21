
let textArea = document.querySelector('#social'),
    facebookReg = /\bf(ace)?b(ook)?\b/ig,
    twitterReg = /\btw(itter)?\b/ig,
    span = document.querySelector('#fb'),
    span2 = document.querySelector('tw');


let checkInput = function(elem, regEx, textArea){

  let userInput= textArea.value;
  if( regEx.test(userInput) ){
        elem.innerHTML =`You have entered Facebook ${userInput.match(facebookReg).length} times`;
        elem.style.display = 'inline-block';
  }else{
        elem.style.display = 'none';
  }

}

textArea.addEventListener('keyup', checkInput(span,facebookReg,textArea));

// let checkInput = function(ev){
//
//   let userInput= ev.currentTarget.value;
//   if( facebookReg.test(userInput) ){
//         span.innerHTML =`You have entered Facebook ${userInput.match(facebookReg).length} times`;
//         span.style.display = 'inline-block';
//   }else{
//         span.style.display = 'none';
//   }
//
//   if( twitterReg.test(userInput) ){
//         span2.innerHTML = `You have entered Twitter ${userInput.match(twitterReg).length} times`;
//         span2.style.display = 'inline-block';
//   } else{
//         span2.style.display = 'none';
//   }
//
// }
// textArea.addEventListener('keyup', checkInput);
//
// textArea.addEventListener()
//
//   document.body.removeChild(targetParent);
