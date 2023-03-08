var getForecast = async function () {
    var city = document.querySelector("#city").value
    console.log(city)
    var state = document.querySelector("#state").value
    console.log(state)
    var country = "+1"
    var url = "http://api.openweathermap.org/geo/1.0/direct?q= " + city + " , " + state + "," + country + "&limit=1&appid=5085e3793dc90e14af4184d6259de03c"
    getWeatherText(url)
    fetch(url)

}
localStorage.setItem("city", city)
localStorage.setItem("state", state)

async function getWeatherText(url) {
    var weatherObject = await fetch(url);
    var weatherText = await weatherObject.json();
    console.log(weatherText)
    var lat = weatherText[0].lat
    var lon = weatherText[0].lon
    var APIkey = "5085e3793dc90e14af4184d6259de03c"
    var urlTwo = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}` 
    parseWeather(urlTwo)
}

var parseWeather = async (urlTwo) => {
    var responce = await fetch(urlTwo)
    var data = responce.json()
    var temp = document.createElement('p')
    temp.textContent = data.list[0].main.temp
    document.querySelector('#forecast').appendChild(temp)
    // var dailyForecast = weatherJSON.daily;   
    // for( i = 0; i < dailyForecast.length; i++){
    //     var day = dailyForecast[i]
    // }
}
parseWeather()

document.querySelector("#submit").addEventListener("click", getForecast)
