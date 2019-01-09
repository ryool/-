
const clock1 = document.querySelector('.js-clock'),
      clcok2 = clock1.querySelector('.시계');

      function gettime(){

const date = new Date();
// 현재날짜를 알려준다
const 분 = date.getMinutes();
//minutes 현재 몇분인지 나타낸다
const 시간 = date.getHours();
//현재 시간을 나타낸다
const 초 = date.getSeconds();

clcok2.innerText =
//innerText(객체안에 텍스트를 넣기위해서씀)
`${시간 < 10 ? `0${시간}`:시간}:${분 < 10 ? `0${분}`: 분}:${초 < 10 ? `0${초}` : 초}`;

//초가 10보다 작으면(? = if) 앞에01,02초로 나타내라 10보다크면(else = :)초로표시하라
      }


function init(){
gettime();

setInterval(gettime, 1000);
// 1000 = 1초 10000 = 10초
//아규먼트+시간을이용해서 매초마다 ''를나타나게 할수있게해주는함수


}

init();