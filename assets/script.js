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
              <div class="card col">
                <div class=" col card-body">${data.city.name}
                  <div>Temp: ${data.list[i].main.temp} &#176</div>
                  <div>Wind: ${data.list[i].wind.speed} MPH</div>
                  <div>Humidity: ${data.list[i].main.humidity} %</div>
                  
                </div>
              </div>
              <div class="card-col">
                <div class="card-body">${data.city.name}
                  <div>Temp: ${data.list[i+1].main.temp} &#176</div>
                  <div>Wind: ${data.list[i+1].wind.speed} MPH</div>
                  <div>Humidity:${data.list[i+1].main.humidity} %</div>
                  
                </div>
              </div>
              <div class="card-col">
                <div class="card-body">${data.city.name}
                  <div>Temp: ${data.list[i+2].main.temp} &#176</div>
                  <div>Wind: ${data.list[i+2].wind.speed} MPH</div>
                  <div>Humidity: ${data.list[i+2].main.humidity} %</div>
                  
                </div>
              </div>
              <div class="card-col">${data.city.name}
                <div class="card-body">
                  <div>Temp: ${data.list[i+3].main.temp} &#176</div>
                  <div>Wind: ${data.list[i+3].wind.speed} MPH</div>
                  <div>Humidity: ${data.list[i+3].main.humidity}%</div>
                  
                </div>
              </div>
              <div class="card col">${data.city.name}
                <div class="card-body">
                  <div>Temp: ${data.list[i+4].main.temp} &#176</div>
                  <div>Wind: ${data.list[i+4].wind.speed} MPH</div>
                  <div>Humidity: ${data.list[i+4].main.humidity} %</div>
                  
                </div>
                <div class="card">${data.city.name}
                <div class="card-body">
                  <div>Temp: ${data.list[i+5].main.temp}&#176</div>
                  <div>Wind: ${data.list[i+5].wind.speed} MPH</div>
                  <div>Humidity: ${data.list[i+5].main.humidity} %</div>
                  
                </div>
              </div>
              `
            }
        })
};

