
const abc = document.querySelector(".js-weather");
const API_KEY = "e6e389f32ba67ff92baa51576ca8fbd0";
const COORDS = 'coords';

function getWeather(lat, lon){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
)
.then(function(response){
return response.json();
})
.then(function(json){
    const 온도 = json.main.temp;
    const 위치 = json.name;
    abc.innerHTML = `${온도} @ ${위치}`;
    
})
  //따옴표말고 백스트링사용` 주소를가져올수있음 then함수가 완료될때까지 기다렸다가 호출할수있음
}

function saveCoords(coordsObj){
localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){

const latitude = position.coords.latitude; //위도를 나타냄

const longitude = position.coords.longitude; //경도를 나타냄

const coordsObj = {
    latitude,
    longitude
};

saveCoords(coordsObj);
getWeather(latitude, longitude);

}

function handleGeoError(){
console.log('위치정보를 읽을수 없습니다.');

}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError) //api 날씨를 가져온다
}

function loadCoords(){
const loadCoords = localStorage.getItem(COORDS);
if(loadCoords === null){
    askForCoords();

}else{

     const parseCoords = JSON.parse(loadCoords);//날씨를가져온다
     console.log(parseCoords);
getWeather(parseCoords.latitude, parseCoords.longitude);

}
}

function init (){
loadCoords();

}

init();



