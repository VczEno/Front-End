let input=document.querySelector('#nameInp')
let saveBtn=document.querySelector("#save")
let deleteBtn=document.querySelector("#delete")
let form=document.querySelector("#form-section")
let errormsg= document.createElement("p")
let savedName=document.createElement("p")

errormsg.classList.add("text-info")
form.appendChild(errormsg)

saveBtn.addEventListener("click", function(){
    event.preventDefault();
})
deleteBtn.addEventListener("click", function(){
    event.preventDefault()
    ;
})

function saveName () {
    saveBtn.addEventListener("click", () => {
    if (input.value != "" ) {
        localStorage.setItem("nome", input.value)
        savedName.classList.add("text-primary")
        form.appendChild(savedName)
    
        savedName.innerText= input.value
        console.log(savedName.innerText)
        errormsg.innerText=""    
      input.value=""    
    } else {
        console.log(input.value)
        errormsg.innerText="non hai inserito nessun nome"
    }
    })
}

function deleteName () {
    deleteBtn.addEventListener ("click", () => {
        savedName.innerText=""
        timer()
    })
}
saveName()
deleteName()




function timer() {
    let sessTime= sessionStorage.getItem("tempo di sessione")
    setInterval( () => { 
        sessTime++;
        sessionStorage.setItem("tempo di sessione", sessTime)
        },1000)
}



    






