var getForecast = function() {
    var url = "http://api.openweathermap.org/geo/1.0/direct?q= " + city +" , "+ state + "," + country +"&limit={limit}&appid=5085e3793dc90e14af4184d6259de03c"
    getWeatherText(url)
    var city = document.querySelector("#city").value
    var state = document.querySelector("state").value
    var country = "+1"
}
localStorage.setItem("city", city)
localStorage.setItem("state", state)

async function getWeatherText(url){
    var weatherObject = await fetch(url);
    var weatherText = await weatherObject.text();
    parseWeather(weatherText);
}
var parseWeather = function(weatherText) {
    var weatherJSON = JSON.parse(weatherText);
    var dailyForecast = weatherJSON.daily;   
}
document.querySelector("button").addEventListener("click", )
