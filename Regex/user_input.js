
let form = document.querySelector('form'),
    textArea = document.querySelector('#social'),
    facebookReg = /\bf(ace)?b(ook)?\b/ig,
    twitterReg = /\btw(eeter)?\b/ig;

textArea.addEventListener('keyup', function(ev){

let userInput= textArea.value;

let p = document.createElement('PARAGRAPH');
let p2 = document.createElement('PARAGRAPH');
document.body.appendChild(p);
document.body.appendChild(p2);

      if( facebookReg.test(userInput)){
                p.innerText=`You have entered Facebook ${userInput.match(facebookReg).length} times`;
      }
      if(twitterReg.test(userInput)){
                p2.innerText =`You have entered Twitter ${userInput.match(twitterReg).length} times`;
      }else{
        console.log('You don\'t like social networks');
      }
})
