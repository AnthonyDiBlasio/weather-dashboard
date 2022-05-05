function WeatherController() {

  this.apikey = "31f3c7fba0e24b5ad83d1dc92397b585"
  this.myunits = "imperial"
  this.currentData = null
  this.forecastData = null
  
  this.displayForecast = () => {
    console.log(this.forecastData)
    if (this.forecastData != null) {
      console.log('have data');
    }
  }
  this.displayCurrent = () => {
    console.log(this.currentData)
    if (this.currentData != null) {
      console.log('have data');
    }
  }
    this.city = $( "searchUser").val();
    this.getCurrentData = async (city) => {
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
let submit = document.getElementById("submit");
controller = new WeatherController();



submit.addEventListener('click', () => {
  controller.getCurrentData();
})
// var myKey = "31f3c7fba0e24b5ad83d1dc92397b585";

//  var content2= document.getElementById("content2");

// function test2(){   
  
//   var currentVal = search.value;
//       fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentVal}&appid=${myKey}&units=imperial`)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             for(i=0;i<5;i++){
// console.log(data)
//               this.content2.innerHTML=` 
//               <section class ="weatherCards">
//               <div class="card col-2">
//                 <div class=" col card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"></img>${data.list[i].dt_txt}</div>
//                   <div>Temp: ${data.list[i].main.temp} &#176</div>
//                   <div>Wind: ${data.list[i].wind.speed} MPH</div>
//                   <div>Humidity: ${data.list[i].main.humidity} %</div>
                  
//                 </div>
//               </div>
//               <div class="card col-2">
//                 <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i+1].weather[0].icon}@2x.png"></img>${data.list[i+1].dt_txt}</div>
//                   <div>Temp: ${data.list[i+1].main.temp} &#176</div>
//                   <div>Wind: ${data.list[i+1].wind.speed} MPH</div>
//                   <div>Humidity:${data.list[i+1].main.humidity} %</div>
                  
//                 </div>
//               </div>
//               <div class="card col-2">
//                 <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i+2].weather[0].icon}@2x.png"></img>${data.list[i+2].dt_txt}</div>
//                   <div>Temp: ${data.list[i+2].main.temp} &#176</div>
//                   <div>Wind: ${data.list[i+2].wind.speed} MPH</div>
//                   <div>Humidity: ${data.list[i+2].main.humidity} %</div>
                  
//                 </div>
//               </div>
//               <div class="card col-2">
//                 <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i+3].weather[0].icon}@2x.png"></img>${data.list[i+3].dt_txt}</div>
//                   <div>Temp: ${data.list[i+3].main.temp} &#176</div>
//                   <div>Wind: ${data.list[i+3].wind.speed} MPH</div>
//                   <div>Humidity: ${data.list[i+3].main.humidity}%</div>
                  
//                 </div>
//               </div>
//               <div class="card col-2">
//                 <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i+4].weather[0].icon}@2x.png"></img>${data.list[i+4].dt_txt}</div>
//                   <div>Temp: ${data.list[i+4].main.temp} &#176</div>
//                   <div>Wind: ${data.list[i+4].wind.speed} MPH</div>
//                   <div>Humidity: ${data.list[i+4].main.humidity} %</div>
                  
//                 </div>
//                 <div class="card col-2">
//                 <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i+5].weather[0].icon}@2x.png"></img>${data.list[i+5].dt_txt}</div>
//                   <div>Temp: ${data.list[i+5].main.temp}&#176</div>
//                   <div>Wind: ${data.list[i+5].wind.speed} MPH</div>
//                   <div>Humidity: ${data.list[i+5].main.humidity} %</div>
                  
//                 </div>
//               </div>
//               </section>
//               `
//             }
//         })
// };
