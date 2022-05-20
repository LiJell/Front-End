//using API that browser offers
//getCurrentPosition need two argument
// 1. function when there is no error 2. function when error happened
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
const API_KEY = "c501c7007a99b5dc4833ef7cfdd74615";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  //console.network 가면 preview 볼 수 있음
  //온도가 화씨이기 때문에 섭씨로 바꿔주자
  //fetch는 promise임. 당장 뭔가 일어나지않고 시간이 좀 걸린 뒤에 일어남
}

function onGeoError() {
  alert("Can't find you. Check your location setting.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
