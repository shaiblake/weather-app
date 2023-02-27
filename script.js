let dateElement = document.querySelector("#date");
let currentTime= new Date ();
let hours= currentTime.getHours ();
let minutues= currentTime.getMinutes();
let dayIndex= currentTime.getDay ();
let days = [
    "Sunday",
     "Monday", 
     "Tuesday", 
     "Wednesday",
     "Thursday", 
     "Friday", 
     "Saturday"];
     let day = days [dayIndex]
     function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
dateElement.innerHTML = `${days[dayIndex]} ${hours}: ${minutes}`;
let cityElement = document.querySelector ("#city");
cityElement.innerHTML= 
let searchForm= document.querySelector ("#search-form");
searchForm.addEventListener ("submit",search);
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
