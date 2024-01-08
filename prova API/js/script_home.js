

/* sessionStorage.clear() */


let albums= document.querySelectorAll(".albumName")
console.log(albums)


    

albums.forEach(alb => {
    alb.addEventListener('click', (evt) => {
        
        sessionStorage.clear()
        console.log(evt.target)
        console.log(evt.target.attributes[0].nodeValue)
        sessionStorage.setItem('idalbum', evt.target.attributes[0].nodeValue)
        })
})
/* 
albums[1].addEventListener('click', (evt) => {
console.log(evt.target)
console.log(evt.target.attributes[0].nodeValue)
sessionStorage.setItem('idalbum', evt.target.attributes[0].nodeValue)
})
 */