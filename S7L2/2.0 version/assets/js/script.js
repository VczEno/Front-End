let inputName= document.querySelector('input')
let saveBtn= document.querySelector('#saveBtn')
let delBtn= document.querySelector('#deleteBtn')
let main= document.querySelector('main')
let alert=document.createElement('p')
let userName= document.querySelector('.username')

saveBtn.addEventListener('click', () => {
    
    alert.innerText=''
if(inputName.value.length<2) {
    alert.innerText= 'non hai inserito un nome valido'
    main.appendChild(alert)
} else {
    localStorage.setItem('nome', inputName.value)
    userName.innerText='Nome utente: ' + inputName.value
}
inputName.value=""
})


delBtn.addEventListener('click', () => {
    localStorage.removeItem('nome')
    userName.innerText=''
})