// Use the fetch api to brng data
let exampleUrl = 'https://reqres.in/api/users';
let btn = document.querySelector('button');

let getUsers = ev => {
  fetch(exampleUrl)
    .then(response => response.json())
    .then(obj => {
      console.log(obj.data);
      for (let user of obj.data) {
        let section = document.createElement('SECTION');
        let firstHeading = document.createElement('H3');
        let secondHeading = document.createElement('H3');
        let image = document.createElement('IMG');
        firstHeading.innerText = user.first_name;
        secondHeading.innerText = user.last_name;
        image.src = user.avatar;
        section.appendChild(firstHeading);
        section.appendChild(secondHeading);
        section.appendChild(image);
        document.body.appendChild(section);
      }
    })
}

let commentUrl = 'http://35.156.88.18:3050/comments';

let bringComments = ev => {
  fetch(commentUrl)
    .then(res => res.json())
    .then(commentsInfo => {
      for (let commentInfo of commentsInfo) {
        let section = document.createElement('SECTION');
        let headingName = document.createElement('H3');
        let comment = document.createElement('P');
        headingName.innerText = commentInfo.name;
        comment.innerText = commentInfo.body;
        section.appendChild(headingName);
        section.appendChild(comment);
        document.body.appendChild(section);
      }
    })
    .catch(err => {
      console.log(err);
    })
}
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
