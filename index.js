let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let today = document.querySelector("#currentTime");
today.innerHTML = `${day} ${hour} : ${minutes}`;

let search = function (event) {
  event.preventDefault();
  let city = document.querySelector("#city-name").value;
  let key = "012989fa51ba761977563de59d09f69c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
};
let form = document.querySelector("form");
form.addEventListener("submit", search);

let displayTemperature = function (response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature-today").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
};
