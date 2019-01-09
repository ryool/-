const form = document.querySelector('.js-form'),
//html에서 form에 할당된 클래스를 변수로 선언해준다
input = form.querySelector('input'),
//폼안에있는 인풋을 가져온다.
gretting = document.querySelector('.js-gretting');
// html에서 h4에 할당된 클래스를 js로가져온다

const USER_LS = 'User',
//변수 USER_LS User 할당
showingc ='showing';
//변수 showingc showing 할당

function SaveName(text){
    //함수 이름저장
localStorage.setItem(USER_LS, text);
//setITEM 말그대로 설정한다 로컬스토리지를
// 로컬스토리지에서 USER_LS값 User값을 나타내고
// SaveName 함수를 가져온다 즉 그함수를 저장함
}

function handlesubmit(event){
event.preventDefault();
// 이벤트 디폴트를 막는값 엔터를쳤을떄 새로고침이되지만 
// 이걸써주면 엔터를쳐도 아무런반응이없다
const value = input.value;
//value변수는 인풋안에 벨류값을 넣게해줌
paintName(value);
//paintName 함수가 실행되면서 hello XXX야를 출력
SaveName(value);
//savename 함수가 실행되면서 이름이저장됨 새로고침해도 계쏙남아있다
}


function askForName(){
form.classList.add(showingc);
//폼 클래스 리스트에서 showingc(디스플레이값 블럭)가 추가됨
form.addEventListener('submit', handlesubmit)
//폼에서 엔터를치면(서브밋) 핸들서브밋함수가 실행됨
}

function paintName(text){
    form.classList.remove(showingc);
    //폼 클래스 리스트에서 showingc(디스플레이값 블럭)를 지운다
    gretting.classList.add(showingc);
    // 그레이팅 클래스 리스트에서 showingc(디스플레이값 블럭)를 추가한다
    gretting.innerText = `Hello ${text}`
   // 그레이팅 텍스트박스에서 hello xxx출력
}

function loadName(){
    //localstorage에서 값을 가져오는 함수

    const User = localStorage.getItem(USER_LS);
    //변수 User에 로컬스토리지에서 가져온다 USER_LS를
if(User === null){
    // 유저가 없는경우
    askForName();
//askforname 실행됨

}else{
// 유저가 있는 경우
paintName(User);
//paintName실행됨
}

}




function init(){
loadName();

}

init();