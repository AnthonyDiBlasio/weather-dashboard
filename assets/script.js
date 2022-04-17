var myKey = "31f3c7fba0e24b5ad83d1dc92397b585";

 var content2= document.getElementById("content2");

function test2(){     
  var currentVal = search.value;
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentVal}&appid=${myKey}&units=imperial`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(i=0;i<5;i++){
console.log(data)
              this.content2.innerHTML=` 
              <section class ="weatherCards">
              <div class="card col-2">
                <div class=" col card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"></img>${data.list[i].dt_txt}</div>
                  <div>Temp: ${data.list[i].main.temp} &#176</div>
                  <div>Wind: ${data.list[i].wind.speed} MPH</div>
                  <div>Humidity: ${data.list[i].main.humidity} %</div>
                  
                </div>
              </div>
              <div class="card col-2">
                <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i+1].weather[0].icon}@2x.png"></img>${data.list[i+1].dt_txt}</div>
                  <div>Temp: ${data.list[i+1].main.temp} &#176</div>
                  <div>Wind: ${data.list[i+1].wind.speed} MPH</div>
                  <div>Humidity:${data.list[i+1].main.humidity} %</div>
                  
                </div>
              </div>
              <div class="card col-2">
                <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i+2].weather[0].icon}@2x.png"></img>${data.list[i+2].dt_txt}</div>
                  <div>Temp: ${data.list[i+2].main.temp} &#176</div>
                  <div>Wind: ${data.list[i+2].wind.speed} MPH</div>
                  <div>Humidity: ${data.list[i+2].main.humidity} %</div>
                  
                </div>
              </div>
              <div class="card col-2">
                <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i+3].weather[0].icon}@2x.png"></img>${data.list[i+3].dt_txt}</div>
                  <div>Temp: ${data.list[i+3].main.temp} &#176</div>
                  <div>Wind: ${data.list[i+3].wind.speed} MPH</div>
                  <div>Humidity: ${data.list[i+3].main.humidity}%</div>
                  
                </div>
              </div>
              <div class="card col-2">
                <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i+4].weather[0].icon}@2x.png"></img>${data.list[i+4].dt_txt}</div>
                  <div>Temp: ${data.list[i+4].main.temp} &#176</div>
                  <div>Wind: ${data.list[i+4].wind.speed} MPH</div>
                  <div>Humidity: ${data.list[i+4].main.humidity} %</div>
                  
                </div>
                <div class="card col-2">
                <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.list[i+5].weather[0].icon}@2x.png"></img>${data.list[i+5].dt_txt}</div>
                  <div>Temp: ${data.list[i+5].main.temp}&#176</div>
                  <div>Wind: ${data.list[i+5].wind.speed} MPH</div>
                  <div>Humidity: ${data.list[i+5].main.humidity} %</div>
                  
                </div>
              </div>
              </section>
              `
            }
        })
};

//       var myKey = "31f3c7fba0e24b5ad83d1dc92397b585";
// var myUnits = "imperial"

// function test3(){ 
//   var currentVal = search.value
// {
//       fetch(`https://api.openweathermap.org/data/2.5/onecall?q=${currentVal}&appid=${myKey}&units=${myUnits}`)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
//         })
//     }
// }