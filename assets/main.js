class Fetch {
  async getCurrent(input) {
    const myKey = "31f3c7fba0e24b5ad83d1dc92397b585";
    const myUnits = "imperial"

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=${myUnits}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "San Diego";
  }

  displayUI(data) {

    //add divs to inner HTML with weather data from fetch

    this.uiContainer.innerHTML = `
                <div class=" first container ">${data.name}<span class = "imgSpan"><img src= "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img></span>
                  <div>Temp: ${data.main.temp} &#176</div>
                  <div>Wind: ${data.wind.speed} MPH</div>
                  <div>Humidity ${data.main.humidity} %</div>
                </div>
        `;
  }

 

  saveLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

 
}
const ft = new Fetch();
const ui = new UI();


//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    //calls UI method//
    ui.displayUI(data);
    
    //call saveLS
    ui.saveLS(data);
  });
  
  test2();
  test3();

});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getLS();
  ui.displayUI(dataSaved);
});
