
let textArea = document.querySelector('#social'),
    facebookReg = /\bf(ace)?b(ook)?\b/ig,
    twitterReg = /\btw(eeter)?\b/ig,
    span = document.querySelector('.fb'),
    span2 = document.querySelector('.tw');

textArea.addEventListener('keyup', function(ev){

let userInput= textArea.value;

      if( facebookReg.test(userInput) ){
                span.innerHTML =`You have entered Facebook ${userInput.match(facebookReg).length} times`;
      } //else{
      //     span.style.display='none';
      // }

      if( twitterReg.test(userInput) ){
                span2.innerHTML =`You have entered Twitter ${userInput.match(twitterReg).length} times`;
      } //else{
      //     span2.style.display='none';
      // }

      // if(userInput==0){
      //
      // }
})

//
// textArea.addEventListener()
//
//   document.body.removeChild(targetParent);
