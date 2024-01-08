async function loadImg(search) {
    try {
        const promise = await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=9`, {
            method: 'GET', headers: { Authorization: 'gf1Tr0CqkadMXbMrLxRODosOX0kw24Mdn3Z5emuwqlRH8Rm8E0c2ARYH' }
        })
        let response = await promise.json()
        console.log(response)
        console.log(response.photos[0].photographer_id)
        let loadBtn = document.querySelector('#loadImg')
        console.log(loadBtn)
        let card = document.querySelectorAll('.card')
        console.log(card)
        loadBtn.addEventListener('click', () => {
            console.log('test')

            for (let i = 0; i<response.photos.length; i++) {
                console.log('test')

                    card[i].innerHTML = `<img class='card-img-top' src="${response.photos[i].src.original}" alt="${response.photos[i].alt}">
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
                                            <button id=hideBtn type="button" class="btn btn-sm btn-outline-secondary">
                                            Hide
                                            </button>
                                        </div>
                                        <small class="text-muted">${response.photos[i].photographer_id}</small>
                                        </div>
                                    </div>`

    }});

    } catch (error) {
        console.log(error)
    }

}

let secImgObj=async function loadSecImg(search) {
    try {
        const promise = await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=9`, {
            method: 'GET', headers: { Authorization: 'gf1Tr0CqkadMXbMrLxRODosOX0kw24Mdn3Z5emuwqlRH8Rm8E0c2ARYH' }
        })
        return await promise.json()
    } catch (error) {
        console.log(error)
    }

}

function loadSecImg() {
        let loadSecBtn = document.querySelector('#loadSecImg')
        console.log(loadSecBtn)
        let card = document.querySelectorAll('.card')
        console.log(card)
        loadSecBtn.addEventListener('click', () => {
            console.log('test')

            for (let i = 0; i<response.photos.length; i++) {
                console.log('test')

                    card[i].innerHTML = `<img class='card-img-top' src="${response.photos[i].src.original}" alt="${response.photos[i].alt}">
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
                                            <button id=hideBtn type="button" class="btn btn-sm btn-outline-secondary">
                                            Hide
                                            </button>
                                        </div>
                                        <small class="text-muted">${response.photos[i].photographer_id}</small>
                                        </div>
                                    </div>`
} }) }

console.log(secImgObj('dogs'))








addEventListener('DOMContentLoaded', () => { 
    loadImg('cats')
    /* loadSecImg('dogs') */
    
 })
