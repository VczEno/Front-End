let taskInp = document.querySelector('input')
let enterBtn = document.querySelector('button')

/* function createTask() {
    let TaskUl = document.querySelector('ul')
    let TaskLi = document.createElement('li')
    let SpanLi = document.createElement('span')
    TaskUl.appendChild(TaskLi)
    TaskLi.appendChild(SpanLi)
    
    console.log(taskInp.innerText)
    TaskLi.innerText = taskInp.value
    taskInp.value= ''
    let DelBut=document.createElement('button')
    TaskLi.appendChild(DelBut)
    DelBut.innerText='Cancella nota'
    TaskLi.addEventListener('click', () => {
        TaskLi.style.textDecoration='line-through'
        })
} */

function createTask() {
    let taskList = document.querySelector('#TaskList')
    let taskDiv = document.createElement('div')
    let taskText = document.createElement('span')
    taskList.appendChild(taskDiv)
    taskDiv.appendChild(taskText)
    if(taskInp.value.trim().length > 2) {
        taskText.innerText = taskInp.value
        taskText.className='taskText'
        taskInp.value= ''
        let delBut=document.createElement('button')
        taskDiv.appendChild(delBut)
        delBut.className='delBut'
        delBut.innerText='Cancella nota'
        taskText.addEventListener('click', () => {
            taskText.style.textDecoration='line-through'
            taskText.style.color= '#717336'
            })
        delBut.addEventListener('click', () => {
            if(confirm('vuoi eliminare la task?') == true) {
            taskDiv.remove()
            } 
         })
    } else (
        alert('inserisci più di  due caratteri')
    )
        

}




enterBtn.addEventListener('click', createTask) 
/* {
    let TaskUl = document.querySelector('ul')
    let TaskLi = document.createElement('li')
    TaskUl.appendChild(TaskLi)
    console.log(taskInp.innerText)
    TaskLi.innerHTML = `<span>${taskInp.value}</span><button>Cancella task</button>`
    taskInp.value= ''
})  */


/* TaskLi.document.querySelector('h1')
TaskLi.addEventListener('click', () => {
    TaskLi.style.textDecoration='line-through'
}) */