const urlS='http://localhost:3000/register'
const urlL='http://localhost:3000/login'

document.addEventListener('DOMContentLoaded', () => {
    let signUpBtn= document.querySelector('#submitSignUp')
    signUpBtn.addEventListener('click', (event) => {
        event.preventDefault()
        signUp()
    })
    let logInBtn=document.querySelector('#submitLogIn')
    logInBtn.addEventListener('click', (event) => {
        event.preventDefault()
        logIn()
    })

})

function signUp(){
    let userName= document.querySelector('#inputName').value
    console.log(userName)
    let userSurname= document.querySelector('#inputSurname').value
    let userMail= document.querySelector('#inputMail').value
    let userPassword= document.querySelector('#inputPassword').value
    let obj= {
        name: userName,
        surname: userSurname,
        email: userMail,
        password: userPassword
    }
    console.log(obj)
        fetch(urlS, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(obj)})
        .then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err))
}

function logIn(){
    
    let logMail= document.querySelector('#logMail').value
    let logPassword= document.querySelector('#logPassword').value
    let obj= {
        email: logMail,
        password: logPassword
    }
    console.log(obj)
        fetch(urlL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(obj)})
        .then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err))
}





