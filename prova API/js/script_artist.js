
/* let artistID= sessionStorage.getItem('idartist')
sessionStorage.clear()
console.log(artistID) */


let urlArtist= /* `https://striveschool-api.herokuapp.com/api/deezer/album/${artistID}` */  'https://striveschool-api.herokuapp.com/api/deezer/artist/412'



 /* closeFaBtn.addEventListener('click', () => sidebar.classList.add('d-none')) */
async function getArtist() {
let arr=[]
 await fetch(urlArtist).then(response => response.json()).then(json => arr.push(json)) //chiamata GET, response trasformata in JSON e inserita nell'array
    console.log(arr)
    console.log(arr[0])
    let divCover= document.querySelector('.metadata')
    console.log(divCover)
    divCover.style.backgroundImage=`url(${arr[0].picture})`
    
    loadMetaData(arr[0])
    let artistTopTrack= arr[0].tracklist.replace('limit=50','limit=10')
    console.log(artistTopTrack)
    let topTrack= await fetch(artistTopTrack).then(response => response.json())
    console.log(topTrack.data)
    createList(topTrack.data) 

}

getArtist()

function createList(topTracks) {
    let div = document.querySelector(".popular");
    topTracks.forEach((u) => {
      let p = document.createElement("p");
      p.innerText = (topTracks.indexOf(u)+1) + "-" + u.title + " (" + Math.floor(u.duration/60) + ":" + u.duration%60 +")";
      div.appendChild(p);
    });

    div.appendChild(document.createElement("hr"));
}

function loadMetaData (artist) {
    

    let artistName = document.querySelector('h1')
    artistName.innerText=artist.name
    

    let div= document.querySelector('.metadata')
    let listener = document.createElement('h4')
    listener.innerText=artist.nb_fan
    div.appendChild(listener)
}