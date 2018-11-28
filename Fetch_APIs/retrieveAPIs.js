let form = document.querySelector('form');
let input = document.querySelector('input');

let cityWeather = ev => {

  ev.preventDefault();

  let weatherKey = '9564b446119fd742441c80d501b80973';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${weatherKey}`;

  fetch(url)
  .then((data) => data.json(){
    // Here you get the data to modify as you please
    console.log(data);
    })
  .catch((error)=> {
    // If there is any error you will catch them here
  });
}

form.addEventListener('submit', cityWeather);
