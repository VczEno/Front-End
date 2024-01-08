/* let xhr= new XMLHttpRequest()
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books')
xhr.send()
xhr.onreadystatechange= function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
        let json = JSON.parse(xhr.responseText)
        console.log(json)
    } 
}
 */
document.addEventListener('DOMContentLoaded', () => {
    let xhr= new XMLHttpRequest()
    xhr.open('GET', 'https://striveschool-api.herokuapp.com/books')
    xhr.send()
    xhr.onreadystatechange= function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
        let json = JSON.parse(xhr.responseText)
        console.log(json)
        loadCat(json)
    } 
}
    /* loadCat() */
})


function loadCat(json) {
    let bookList= document.querySelector('.row')
    json.forEach(book => {
        let bookCard= document.createElement('div')
        bookCard.className='.col'
        bookCard.innerHTML= `<div class="card h-100">
                                <img src="${book.img}" class="card-img-top" alt="copertina libro">
                                <div class="card-body text-center d-flex flex-column justify-content-end">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text border p-1 mx-5 my-3">${book.price} $</p>
                                </div>
                                <div class="card-footer d-flex justify-content-evenly p-3">
                                    <a href="#" class="btn btn-outline-danger" id="delBtn">Remove</a>
                                    <a href="#" class="btn btn-outline-success" id="shopBtn">Add to cart</a>
                                </div>
                            </div> `
        bookList.appendChild(bookCard)
    });
    delFunc()
    shopCart()
}

function delFunc() {
    let delBtn= document.querySelectorAll('#delBtn')
    delBtn.forEach((dB) => {
        dB.addEventListener('click', (e) => {
        let targetBook= e.target.parentNode.parentNode.parentNode
        targetBook.remove()
        })
    })
}

function shopCart() {
    let shopBtn= document.querySelectorAll('#shopBtn')
    shopBtn.forEach((sB) => {
        sB.addEventListener('click', (e) => {
        let shoppedBook= e.target.parentNode.parentNode.parentNode
        console.log(shoppedBook)
        })
    })


}