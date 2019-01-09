const TodoForm = document.querySelector('.js-TodoForm'),
//HTML에서 클래스값 js-todoForm을가져오고 변수를 ToDoForm으로 선언함
    Todoinput = TodoForm.querySelector('input'),
    //HTML에서 todoForm에속해있는 클래스값 input을 가져오고 Todoinput변수를 선언함
    Todolist = document.querySelector('.js-Todolist');
//HTML에서 클래스값 js-Todolist를 가져오고 변수를 Todolist 선언함
// 변수를 선언할때 다른 js랑 이름이 똑같으면 충돌이날수있음 *주의* 다르게 변수를 선언해야함

const TODOS_LS = 'todos';

function filterfn(Todo){
return Todo.id === 1;

}

let Todos =[];


function rmtodo(event){
const btn = event.target; // 변수로 이벤트타겟을 선언함
const li = btn.parentNode; // 버튼안에들어있는 부모노드즉 li
Todolist.removeChild(li); // Todolist안에있는 li자식 태그를 지운다
const CleenTodos = Todos.filter(function(Todo) //cleenTodos와 fliter가하는것은 filterfn이 체크가된 아이템을 어레이(배열)를주는것
{ 
    return Todo.id !== parseInt(li.id); // Todo.id 랑 li id값이 같지안을때 parseInt 문자열로바꿔주는것
});
    Todos = CleenTodos
    saveTodos();
}

function saveTodos(){

localStorage.setItem(TODOS_LS, JSON.stringify(Todos)); //JSON.STRINGIFY 오브젝트를 문자열로 바꾼다
}

function paintTodo(text){

const li = document.createElement('li'); //자바스크립트에서 직접적으로 HTML LI태그를 생성
const delbtn = document.createElement('button'); //자바스크립트에서 직접적으로 HTML 버튼태그를 생성

delbtn.innerText = 'x';

delbtn.addEventListener('click', rmtodo); //버튼을 클릭했을때 li리스트가 지워진다

const span = document.createElement('span'); //자바스크립트에서 직접적으로 HTML SPAN태그를 생성

const Newid = Todos.length + 1;

span.innerText = text;
li.appendChild(span); //li에 태그안에 span자식태그를 넣는다

li.appendChild(delbtn); //li에 태그안에 delbtn자식태그를 넣는다
li.id = Newid;
Todolist.appendChild(li); // Todolist(ul) 태그안에 li태그를 넣는다.

const Todoobj = {
    text: text,
    id: Newid
   };

   Todos.push(Todoobj); //Todos 안에 Todoobj를 추가함
   
   saveTodos();
}

function handlesubmit(event){
    event.preventDefault();
    const currentValue = Todoinput.value;
    paintTodo(currentValue);
    Todoinput.value='';
}


function loadTodos(){
const loadTodos = localStorage.getItem(TODOS_LS)
if(loadTodos !== null){
    const parsedTodos = JSON.parse(loadTodos);   //JSON.parse 문자열을 오브젝트로 바꾼다
    parsedTodos.forEach(function(Todo){      //함수를 각각 한번씩 실행해주는것 foreach -> 배열을위한 함수
paintTodo(Todo.text);
            })
        
   

}else{

}

}


    function init(){
loadTodos();
TodoForm.addEventListener('submit', handlesubmit)
    }

    init();