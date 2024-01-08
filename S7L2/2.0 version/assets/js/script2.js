let sessionTime= document.querySelector('span')

function contatore() {
    if (sessionStorage.getItem('secondi')) {
        console.log('contatore già esistente')
        
    } else {
        console.log('contatore generato')
        sessionStorage.setItem('secondi', 0)
    }
}

contatore()


    setInterval(() => {
        let sec= sessionStorage.getItem('secondi')
        sessionTime.innerText=sec
        sec++
        sessionStorage.setItem('secondi', sec)
    }, 1000);


