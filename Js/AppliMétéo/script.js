//requestWeather("Paris");
let gps_position;

if ("geolocation" in navigator) {
  console.log('ok')
  navigator.geolocation.getCurrentPosition((position) => {
    gps_position = position.coords.latitude;
    console.log(gps_position);
  });
}else{
  console.log('La localisation n\'est pas dispo');
}



//Change city name
let button = document.querySelector("#changer");
button.addEventListener("click", () => {
  let city_name = prompt("Entrer une ville : ");
  city_name.replace(" ", "+");
  requestWeather(city_name);
});

// Request to weather Api
function requestWeather(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=945a9a893fd4cd306992b37a55652fe2&units=metric`;
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let response = request.response;
        document.querySelector("#ville").textContent = response.name;
        document.querySelector("#temperature_label").textContent =
          response.main.temp;
      } else {
        alert("Nous rencontrons une erreur veuillez reessayer ultérieurement");
      }
    }
  };
}
