function WeatherController() {
  this.apikey = "31f3c7fba0e24b5ad83d1dc92397b585"
  this.myunits = "imperial"
  this.currentData = null
  this.oneCallData = null
  this.displayOnecall = () => {
    console.log(this.oneCallData)
    if (this.oneCallData != null) {
      console.log('have data');
    }
  }
  this.displayCurrent = () => {
    console.log(this.currentData)
    if (this.currentData != null) {
      console.log('have data');
    }
  }
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
    let name = data.name;
    let time = data.dt;
    console.log(name);
    console.log(time);
    console.log(lat);
    console.log(lon);
    this.getOnecallData(lat, lon);

  }
  this.getOnecallData = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.apikey}&units=${this.myunits}`
    );
    const data = await response.json();
    console.log(data);
    this.oneCallData = data;
    this.displayOnecall();
    let cityList = document.getElementById('cityList')
    let content = document.getElementById('content');


    content.innerHTML =
      `<section class ="weatherCards">
        <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png"></img>
          <div>${city} date: ${data.daily[0].dt}</div>
          <div>Temp: ${data.daily[0].temp.day} &#176</div>
          <div>Wind: ${data.daily[0].wind_speed} MPH</div>
          <div>Humidity: ${data.daily[0].humidity} %</div>
          <div>UV Index: ${data.daily[0].uvi}</div>
        </div>
      </div>
      </section>
      `;
   let content2 = document.getElementById("content2");
    for (let i = 0;i<data.daily.length;i++) {

      content2.innerHTML=` 
      
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-8 col-lg-6 col-xl-4">
      
              <div class="card" style="color: #4B515D; border-radius: 35px;">
                <div class="card-body p-4">
      
                  <div class="d-flex">
                    <h6 class="flex-grow-1">${city}</h6>
                    <h6>${data.daily[i].dt}</h6>
                  </div>
      
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${data.daily[i].temp.day}°F </h6>
                  </div>
      
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem;">
                      <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">Wind: ${data.daily[i].wind_speed} mph
                        </span></div>
                      <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1">Humidity: ${data.daily[i].humidity}% </span>
                      </div>
                      </div>
                    </div>
                    <div>
                      <img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png""
                        width="100px">
                    </div>
                  </div>
      
                </div>
              </div>
      
            </div>
          </div>
      `;
    }


  };


}
let submit = document.getElementById("submit");
let controller = new WeatherController();

submit.addEventListener('click', () => {
  this.city = $("#searchUser").val();
  controller.getCurrentData(city);
});
