
addEventListener('DOMContentLoaded', () => {
    let searchBtn=document.querySelector('.btn')
    searchBtn.addEventListener('click', () => {
        getResults()
    })
})

async function getResults() {
    let researchInput= document.querySelector('.ricerca')
    let searchParam=researchInput.value
    let urlResearch=`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchParam}`
    let results=  await fetch(urlResearch).then(response => response.json())
    console.log(results)
    showResults(results.data)
}

function showResults(res) {

    let list=document.querySelector('ol')
    res.forEach((r) => {
        let li=document.createElement('li')
        li.innerText=`${r.title} di ${r.artist.name} contenuta nell'album ${r.album.title}`
        list.appendChild(li)
    })
  
}


