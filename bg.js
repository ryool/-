const body = document.querySelector('body');

const IMG_NUMBER = 5;

function paintimage(imgNumber){

    const image = new Image();
   image.src=`${imgNumber + 1}.jpg`;
   image.classList.add('bgimage');
   body.appendChild(image);

}


function Genrandom(){
const number = Math.floor(Math.random()*IMG_NUMBER) // 랜덤으로 0 ~ 2 숫자를뽑아준다 0,1,2 
// floor 내림 3.1 일때 3이됨 ceil 올림 3.1일때 4가됨
return number;
}


function init(){
const randomNumber = Genrandom();
paintimage(randomNumber);
}

init();