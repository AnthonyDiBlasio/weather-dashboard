var myKey = "31f3c7fba0e24b5ad83d1dc92397b585";
var myUnits = "imperial"
function test2(){
     
{
  var currentVal = search.value;
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentVal}&exclude=hourly,daily&appid=${myKey}&units=imperial`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
    }
}

