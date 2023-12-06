

function timer() {
    let sessTime= sessionStorage.getItem("tempo di sessione")
    console.log(sessTime)
    setInterval( () => { 
        console.log("prima" + sessTime)
        sessTime++;
        console.log("dopo" + sessTime)
        sessionStorage.setItem("tempo di sessione", sessTime)
        },5000)
}

timer()
