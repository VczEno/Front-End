xhr = new XMLHttpRequest()

xhr.open('GET','https://striveschool-api.herokuapp.com/books')
xhr.send()
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log("caricamento completato");
        let json = JSON.parse(xhr.responseText);
        console.log(json)
        createCard(json)
    }
}

addEventListener("DOMContentLoaded", () => {
    cartLoad()
  
})

function createCard(libri) {
let row =document.querySelector('.row')
//ciclo per creare ogni elemento della tabella
    for(let i=0; i<libri.length; i++) {
        // creazione div colonna, innerText pesca le info per ogni ele ento
        let col=document.createElement('div')
        row.appendChild(col)
        col.classList.add('column')
        col.innerHTML= `
        <div class="card">
            <img src="${libri[i].img}" class="card-img-top" alt="...">

            <div class="card-body">
            <h5 class="card-title">${libri[i].title}</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"> ${libri[i].price} €</li>
            </ul>
        </div>`
        // creazione bottone compra
        let addBtn= document.createElement('button')
        col.appendChild(addBtn)
        addBtn.innerText= 'compra'
        addBtn.classList.add('btn', 'btn-primary', 'card-link' ,'m-auto', 'my-3', 'mx-3')
        // funzione per aggiungere l'elemento nel carrello


        /* addBtn.addEventListener('click', () => {
            let cart= document.querySelector('.dropdown-menu')
            let cartItem= document.createElement('li')
            cart.appendChild(cartItem)
            cartItem.classList.add('dropdown-item')
            localStorage.setItem(libri[i].asin, libri[i].title)
            cartItem.innerText=libri[i].title
            let delBtn= document. createElement('button')
            cartItem.appendChild(delBtn)
            delBtn.classList.add('btn', 'btn-danger', 'ms-3', 'py-1')
            delBtn.innerText='X' */
            addBtn.addEventListener('click', () => {
                localStorage.setItem(libri[i].asin, libri[i].title)
            })
            

       
        // creazione bottone scarta
        let hideBtn= document.createElement('button')
        col.appendChild(hideBtn)
        hideBtn.innerText= 'Scarta'
        hideBtn.classList.add('btn', 'btn-danger', 'card-link' ,'m-auto', 'my-3', 'mx-3')
        // funzione che nasconde l'elemento dalla tabella
        hideBtn.addEventListener('click', (evt) => {
            let colToHide=evt.target.parentNode
            colToHide.classList.add("d-none")
         })
    
        
        
    }
}
    


function cartLoad () {
    let cart= document.querySelector('.dropdown-menu')
    for  (i=1; i<localStorage.length+1; i++ ) {
   
        let cartItem= document.createElement('li')
        cart.appendChild(cartItem)
        cartItem.classList.add('dropdown-item')
        cartItem.innerText=localStorage.getItem(i)
        let delBtn= document. createElement('button')
        cartItem.appendChild(delBtn)
        delBtn.classList.add('btn', 'btn-danger', 'ms-3', 'py-1')
        delBtn.innerText='X'

        for (key in json )
}
}
let ind=1
function addCartShop() {
    
    localStorage.setItem(ind, libri[i].title)
    ind++;



}

localStorage.setItem(1, 'libro1')
localStorage.setItem(2, 'libro2')
localStorage.setItem(3, 'libro3')

