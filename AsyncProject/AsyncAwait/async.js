// Use the fetch api to brng data
let exampleUrl = 'https://reqres.in/api/users';
let btn = document.querySelector('button');


const authToken = '16d4785f9c10724266053adb3c29dcfd';

let inputField = document.querySelector('input');
let divContainer = document.querySelector('#container');

let getWeatherForCity = ev => {
  let city = inputField.value;
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken}`;
  fetch(weatherUrl)
    .then(res => res.json())
    .then(weatherData => {
      console.log(weatherData);
      let section = document.createElement('SECTION');
      let heading = document.createElement('H3');
      let tempParagraph = document.createElement('P');
      let descriptionFooter = document.createElement('FOOTER');
      heading.innerText = weatherData.name;
      tempParagraph.innerText = `${Math.round(weatherData.main.temp - 273)} Celsius Degrees`;
      descriptionFooter.innerText = weatherData.weather[0].description;
      section.appendChild(heading);
      section.appendChild(tempParagraph);
      section.appendChild(descriptionFooter);
      divContainer.appendChild(section);
    })
    .catch(errorMsg => {
      console.error('The city you have typed does not exist');
    })
}

btn.addEventListener('click', getWeatherForCity);
