let form = document.querySelector('form');
let input = document.querySelector('input');
let p = document.querySelector('p');
let div = document.querySelector('div');
let button = document.querySelector('button');

const colorTemperatures = [
  {limitTemp: 40, color: 'red'},
  {limitTemp: 35, color: 'orange'},
  {limitTemp: 30, color: 'yellow'},
  {limitTemp: 20, color: 'deepskyblue'},
  {limitTemp: 10, color: 'purple'},
  {limitTemp: 0, color: 'grey'},
  {limitTemp: -100, color: 'white'},
];

let getWeatherAsync = async url =>{

  ev.preventDefault();

  try{
  let city = input.value;
  let weatherKey = `da731b95e933961ab74fde457dfbe18d`; // change with own
  let apiRequestLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherKey}`;

  let res = await fetch(url);
  let actualDataToJson = await res.json();

  let section = document.createElement('SECTION');
  let span = document.createElement('SPAN');
  let h3 = document.createElement('H3');
  let tempParagraph = document.createElement('p');
  let descriptionFooter = document.createElement('FOOTER');
  let img = document.createElement('img');
  let tempCelsius = Math.round(actualDataToJson.main.temp - 273.15);
  let colores = colorTemperatures.find(arg1 => tempCelsius > arg1.limitTemp).color;
  h3.innerText = datosDelApi.name;
  tempParagraph.innerText = `${Math.round(datosDelApi.main.temp - 273.15)}°C`;
  descriptionFooter.innerText = actualDataToJson.weather[0].description;
  img.src = `http://openweathermap.org/img/w/${datosDelApi.weather[0].icon}.png`
  console.log(img.src);
  console.log(actualDataToJson.weather[0].icon);
  section.appendChild(h3);
  section.appendChild(tempParagraph);
  section.appendChild(span);
  span.appendChild(descriptionFooter);
  span.appendChild(img);
  div.appendChild(section);
  input.value = '';
  section.style.background = (colores);
  }
  catch(err){
    err.message;
  }

}

form.addEventListener('submit',getWeatherAsync);



// let getWeatherForCuty = async url => {
//   let imageObject = await fetch(url);
//   console.log(imageObject);
// }
//
// getWeatherForCuty(url);
