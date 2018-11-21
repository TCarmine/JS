let telephoneData = [
  {countryCode: '0030', country: 'Greece'},
  {countryCode: '0039', country: 'Italy'},
  {countryCode: '00972', country: 'Israel'},
  {countryCode: '0007', country: 'Russia'},
  {countryCode: '0044', country: 'United Kingdom'},
  {countryCode: '0001', country: 'United States'},
  {countryCode: '00963', country: 'Syria'},
  {countryCode: '0029', country: 'Belgium'},
  {countryCode: '0031', country: 'Holland'},
  {countryCode: '0049', country: 'Germany'},
]

let returnCountryCode = code =>{
  let found = telephoneData.find(item => item.countryCode === code);

  return found.country;
}

let returnCountry = (code,arr) => arr.find(obj => obj.countryCode === code).country;

  // telephoneData[code]= telephoneData.country;
  // codeCountry = telephoneData.code;
  // return codeCountry;



let codeRussia = console.log(returnCountry('0007',telephoneData)); //telephoneData.find(returnCountry('0007'));

// let phoneToCountry = telephoneData.map( phoneList => {
//   let phones = {};
//   phones[phoneList.]
//
// })
