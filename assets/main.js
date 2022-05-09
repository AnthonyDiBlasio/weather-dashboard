
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
    let cityList=document.getElementById('cityList')
    let content= document.getElementById('content');
    let content2=document.getElementById("content2");
   
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
      content2.innerHTML = ` 
    <section class =" card weatherCards">
    <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png"></img>
        <div>${city} date: ${data.daily[0].dt}</div>
        <div>Temp: ${data.daily[0].temp.day} &#176</div>
        <div>Wind: ${data.daily[0].wind_speed} MPH</div>
        <div>Humidity: ${data.daily[0].humidity} %</div>
      </div>
    </div>
    </section>
    <section class =" card weatherCards">
    <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png"></img>
        <div>${city} date: ${data.daily[1].dt}</div>
        <div>Temp: ${data.daily[1].temp.day} &#176</div>
        <div>Wind: ${data.daily[1].wind_speed} MPH</div>
        <div>Humidity: ${data.daily[1].humidity} %</div>
      </div>
    </div>
    </section>
    <section class =" card weatherCards">
    <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png"></img>
        <div>${city} date: ${data.daily[2].dt}</div>
        <div>Temp: ${data.daily[2].temp.day} &#176</div>
        <div>Wind: ${data.daily[2].wind_speed} MPH</div>
        <div>Humidity: ${data.daily[2].humidity} %</div>
      </div>
    </div>
    </section>
    <section class =" card weatherCards">
    <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png"></img>
        <div>${city} date: ${data.daily[3].dt}</div>
        <div>Temp: ${data.daily[3].temp.day} &#176</div>
        <div>Wind: ${data.daily[3].wind_speed} MPH</div>
        <div>Humidity: ${data.daily[3].humidity} %</div>
      </div>
    </div>
    </section>
    <section class =" card weatherCards">
    <div class="card-body"><img src= "https://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png"></img>
        <div>${city} date: ${data.daily[4].dt}</div>
        <div>Temp: ${data.daily[4].temp.day} &#176</div>
        <div>Wind: ${data.daily[4].wind_speed} MPH</div>
        <div>Humidity: ${data.daily[4].humidity} %</div>
      </div>
    </div>
    </section>
    `;
  cityList.innerHTML = `<div class = "container">${city}</div>`
    
};

}
let submit = document.getElementById("submit");
let controller = new WeatherController();

submit.addEventListener('click', () => {
  this.city = $("#searchUser").val();
  controller.getCurrentData(city);
})
