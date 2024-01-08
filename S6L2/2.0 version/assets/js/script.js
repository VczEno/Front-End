let wsCards= document.querySelectorAll ("#welcomeSummer .card")
console.log(wsCards)

wsCards.forEach(c => {
    c.classList.add("position-relative")
    let hotBadge= document.createElement('div')
    hotBadge.className="bagde px-2 m-2 rounded-pill text-bg-danger position-absolute top-0 end-0"
    hotBadge.innerHTML="HOT"
    c.appendChild(hotBadge)
})

let trips = document.querySelectorAll("img")
setTimeout(() => {
    alert("sono disponibili: " + trips.length + " Sviaggi")
}, 2000);

function delCard() {
    let cards= document.querySelectorAll(".card")
    cards.forEach(c =>  c.classList.add("d-none"))
}

setTimeout(delCard, 5000)