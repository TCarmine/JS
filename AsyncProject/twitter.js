let lis = document.querySelectorAll('li');
let container = document.querySelector('#container');
let arraySections =[];


let grap = async dataJson =>{
  let res = await fetch(dataJson);
  let finalData = await res.json();
  console.log(finalData);


  for(let i=0; i<finalData.length;i++){
      let section = document.createElement('section');
      arraySections.push(section[i]);
      let image = document.createElement('img');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let imgStringPath = finalData[i].address;
      image.src = imgStringPath;
      h3.innerText = finalData[i].title;
      p.innerText = finalData[i].description;

      section.appendChild(image);
      section.appendChild(h3);
      section.appendChild(p);
      container.appendChild(section);
  }

}

lis[1].addEventListener('click',(ev)=>{
  let data = 'data.json';
  grap(data);
})



arraySections.addEventListener('click', ev =>{


})
