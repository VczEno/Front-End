/*  fetch("https://api.pexels.com/v1/search?query=cats&per_page=9"
, {method: 'GET', headers: { Authorization: 'gf1Tr0CqkadMXbMrLxRODosOX0kw24Mdn3Z5emuwqlRH8Rm8E0c2ARYH'
}}).then(resp => resp.json()).then(json => console.log(json)).catch(err => console.log(err)) */

addEventListener('DOMContentLoaded', () => {
    let loadBtn = document.querySelector('#loadImg')
    loadBtn.addEventListener('click', () => loadPrimImg())
    let load2Btn=document.querySelector('#loadImg2')
    load2Btn.addEventListener('click', () => loadSecImg())
})

async function loadPrimImg() {
    let albumCol = document.createElement('div')
        albumCol.className = `col col-md-4 `
        albumCol.innerHTML =""
        let response = await fetch("https://api.pexels.com/v1/search?query=cats&per_page=9", {
        method: 'GET',
        headers: {
            Authorization: 'gf1Tr0CqkadMXbMrLxRODosOX0kw24Mdn3Z5emuwqlRH8Rm8E0c2ARYH'
        }})
    let album = document.querySelector('.album .row')
    console.log(album)
    let json = await response.json()
    console.log(json)
    json.photos.forEach(p => {

       
        albumCol.innerHTML =`<div class="card mb-4 shadow-sm h-10">
        <img src="${p.src.original}" class="img-fluid" alt="${p.alt}">

                                <div class="card-body">
                                <h5 class="card-title">Lorem Ipsum</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">
                                        View
                                    </button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary hide">
                                        Hide
                                    </button>
                                    </div>
                                    <small class="text-muted">${p.id}</small>
                                </div>
                                </div>
                            </div>`
        album.appendChild(albumCol)
    })
    hideCard()
}

async function loadSecImg() {
    let response = await fetch("https://api.pexels.com/v1/search?query=dogs&per_page=3", {
    method: 'GET',
    headers: {
        Authorization: 'gf1Tr0CqkadMXbMrLxRODosOX0kw24Mdn3Z5emuwqlRH8Rm8E0c2ARYH'
    }})
let album = document.querySelector('.album .row')
console.log(album)
let json = await response.json()
console.log(json)
json.photos.forEach(p => {

    let albumCol = document.createElement('div')
    albumCol.className = `col col-md-4 `
    albumCol.innerHTML =`<div class="card mb-4 shadow-sm h-10">
    <img src="${p.src.original}" class="img-fluid" alt="${p.alt}">

                            <div class="card-body">
                            <h5 class="card-title">Lorem Ipsum</h5>
                            <p class="card-text">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">
                                    View
                                </button>
                                <button type="button" class="btn btn-sm btn-outline-secondary hide">
                                    Hide
                                </button>
                                </div>
                                <small class="text-muted">${p.id}</small>
                            </div>
                            </div>
                        </div>`
    album.appendChild(albumCol)
})
hideCard()
}

function hideCard() {
    let hideBtn= document.querySelectorAll('.hide')
    console.log(hideBtn)
    hideBtn.forEach(b => b.addEventListener('click',(e) => {
        let card=  e.target.closest('.col')
        console.log(card)
        card.remove()
    }))

}