let lis = document.querySelectorAll('li');


lis[1].addEventListener('click',(ev)=>{
  let data = 'data.json';
  let grap = async dataJson =>{

    let res = await fetch(dataJson);
    let finalData = await res.json();
    console.log(finalData);
    let arrayDivs =[];
    for(let i=0; i<finalData.length;i++){
        let div = document.createElement('div');
        let image = document.createElement('img');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        image.src = finalData[i].address;
        h3.innerText = finalData[i].title;
        p.innerText = finalData[i].description;
        div.appendChild(image);
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);



    }



  }
  grap(data);
})
