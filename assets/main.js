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