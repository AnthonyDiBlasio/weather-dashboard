function WeatherController(){
  this.apikey="31f3c7fba0e24b5ad83d1dc92397b585"
  this.myunits = "imperial"
  this.currentData= null
  this.forecastData= null
  this.displayForecast = ()=>{
    console.log(this.forecastData)
    if (this.forecastData!=null){
      console.log('have data');
    }
  }
  this.displayCurrent = ()=>{
    console.log(this.currentData)
    if (this.currentData!=null){
      console.log('have data');
    }
  }
  this.getCurrentData = async (city) =>{
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}&units=${this.myunits}`
    );
    const data = await response.json();
      console.log(data);
      this.currentData = data
      this.displayCurrent();
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      console.log(lat);
      console.log(lon);
      this.getForecastData(lat, lon);      
      
  }

  this.getForecastData = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apikey}&units=${this.myunits}`
    );
    const data = await response.json();
      console.log(data);
      this.forecastData = data
      this.displayForecast();

  }
}

//   async getCurrent(input) {
//     const myKey = "31f3c7fba0e24b5ad83d1dc92397b585";
//     const myUnits = "imperial"

//     //make request to url

//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=${myUnits}`
//     );

//     const data = await response.json();
    
    

//     console.log(data);
    
//     lat = data.coord["lat"]
//     lon =data.coord["lon"]
//   return data;


// }  
// }  

// function getCurrent2(lat, lon){
//   const response2= fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=31f3c7fba0e24b5ad83d1dc92397b585&units=imperial`);
//   const data2 = response2.json();
//   return data2; 
//   } 
// class UI {
//   constructor() {
//     this.uiContainer = document.getElementById("content");
//     this.city;
//     this.defaultCity = "San Diego";
//   }

//   displayUI(data, data2) {

//     //add divs to inner HTML with weather data from fetch

//     this.uiContainer.innerHTML = `
//                 <div class=" first container ">${data.name}<span class = "imgSpan"><img src= "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img></span>
//                   <div>Temp: ${data.main.temp} &#176</div>
//                   <div>Wind: ${data.wind.speed} MPH</div>
//                   <div>Humidity ${data.main.humidity} %</div>
//                   <div>UVI:${data}</div>
//                 </div>
//         `;
//   }

 

//   saveLS(data) {
//     localStorage.setItem("city", JSON.stringify(data));
//   }

//   getLS() {
//     if (localStorage.getItem("city" == null)) {
//       return this.defaultCity;
//     } else {
//       this.city = JSON.parse(localStorage.getItem("city"));
//     }

//     return this.city;
//   }

 
// }
// const ft = new Fetch();
// const ui = new UI();



// //add event listeners//

// const search = document.getElementById("searchUser");
// const button = document.getElementById("submit");
// button.addEventListener("click", () => {
  
//   const currentVal = search.value;

//   ft.getCurrent(currentVal).then((data) => {
//     //calls UI method//
//     ui.displayUI(data, data2);
    
//     //call saveLS
//     ui.saveLS(data);
//   });
  
//   test2();
//   // test3();
 
// });

// //event listener for local storage

// window.addEventListener("DOMContentLoaded", () => {
//   const dataSaved = ui.getLS();
//   ui.displayUI(dataSaved);
// });
// function test3(){ 
//   var lat = "${data.city[i].coord[0]}"
//   var lon = "${data.city[i].coord[1]}"
//   fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=45&lon=25&appid=31f3c7fba0e24b5ad83d1dc92397b585&units=imperial`)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
//         })
//       }