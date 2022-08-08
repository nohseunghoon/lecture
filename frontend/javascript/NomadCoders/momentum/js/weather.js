const API_KEY = "7490c09dd3d9b2c6ca9f7c7219e31fb5";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const units = "metric";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${units}&appid=${API_KEY}`
    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}

function onGeoError() {
    alert("Cant' find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);