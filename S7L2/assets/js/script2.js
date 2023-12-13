

function timer() {
    let sessionTime= sessionStorage.getItem("tempo di sessione")
    console.log("valore al refresh: " + sessionTime)
    setInterval( () => { 
        console.log("pre incremento: " + sessionTime)
        sessionTime++;
        console.log("post incremento: " + sessionTime)
        sessionStorage.setItem("tempo di sessione", sessionTime)
        },3000)
}
timer()
