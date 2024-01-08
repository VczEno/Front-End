let task= document.querySelector('input')
let addBtn = document.querySelector('#addBtn')
let taskN= document.querySelector('span')
let delBtn= document.querySelector('#delBtn')
let list= document.querySelector('ul')
let tasksList= []
loadTaskList()

//evento che aggiunge una task allo storage
addBtn.addEventListener('click', () => {
   if(task.value) {
       tasksList=JSON.parse(localStorage.getItem('tasks')) || []
       tasksList.push(task.value) 
        localStorage.setItem('tasks', JSON.stringify(tasksList))
        loadTaskList()
        
        
        task.value=''
        
    } else {
        alert('non hai inserito una task')
    }
    
})

//funzione che ricarica la lista all'apertura o all'aggiunta di una task
function loadTaskList() {
    taskN.innerText=0
    list.innerHTML=''
    let tasksList = JSON.parse(localStorage.getItem('tasks'))
    console.log(tasksList)
    if(tasksList) {
    tasksList.forEach(t => {
        let li= document.createElement('li')
        let delTask= document.createElement('button')
        delTask.innerHTML='type=button'
        delTask.innerText='X'
        li.innerText=t
        list.appendChild(li)
        li.appendChild(delTask)
        delTask.addEventListener('click', (e) => {
            console.log(e.target.parentNode)
            let targetTask=e.target.parentNode
            console
            list.removeChild(targetTask)
            tasksList.pop(tasksList.indexOf(`${targetTask.innerText}X`))
            console.log(tasksList)
            localStorage.setItem('tasks', JSON.stringify(tasksList))
            taskN.innerText=tasksList.length;
        })
    })

    taskN.innerText=tasksList.length;
    
    }
}

//evento che cancella le task dal dom e dallo storage
delBtn.addEventListener('click', () => {
    localStorage.removeItem('tasks')
    loadTaskList()
})

//evento che cancella la singola task
