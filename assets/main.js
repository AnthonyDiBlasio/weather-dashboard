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
    this.defaultCity = "London";
  }

  displayUI(data) {
    //de-structure vars

    //add them to inner HTML

    this.uiContainer.innerHTML = `
        
    <div class="container-fluid">${data.name}</div>
    <div class="container-fluid">The Temp: ${data.main.temp} &#176</div>
    <div class="container-fluid">Humidity: ${data.main.humidity} %</div>
    <div class="container-fluid">Wind Speed: ${data.wind.speed} MPH</div>
    <div class="container-fluid"> <img src= "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img></div>  
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
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
    //call a UI method//
    ui.displayUI(data);
    //call saveToLS
    ui.saveToLS(data);
  });
  test2();
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.displayUI(dataSaved);
});
