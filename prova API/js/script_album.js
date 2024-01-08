
let albumID= sessionStorage.getItem('idalbum')
sessionStorage.clear()
console.log(albumID)
let urlAlbum= `https://striveschool-api.herokuapp.com/api/deezer/album/${albumID}`

 /* closeFaBtn.addEventListener('click', () => sidebar.classList.add('d-none')) */
async function getAlbum() {
let arr=[]
 await fetch(urlAlbum).then(response => response.json()).then(json => arr.push(json)) //chiamata GET, response trasformata in JSON e inserita nell'array
    console.log(arr)
    console.log(arr[0].artist)
    let divCover= document.querySelector('.cover')
    console.log(divCover)
    divCover.style.backgroundImage=`url(${arr[0].cover})`
    createList(arr[0].tracks.data)
    loadMetaData(arr[0])

}

getAlbum()

function createList(tracks) {
    let div = document.querySelector(".tracklist");
    tracks.forEach((u) => {
      let p = document.createElement("p");
      p.innerText = (tracks.indexOf(u)+1) + "-" + u.title + " (" + Math.floor(u.duration/60) + ":" + u.duration%60 +")";
      div.appendChild(p);
    });
   
  }

function loadMetaData (album) {
    let div= document.querySelector('.metadata')
    let albumName = document.createElement('h1')
    albumName.innerText=album.title 
    div.appendChild(albumName)

    let albumArtist = document.createElement('h3')
    albumArtist.innerText=album.artist.name 
    div.appendChild(albumArtist)

    let albumYear = document.createElement('h3')
    albumYear.innerText=album.release_date 
    div.appendChild(albumYear)

}
 

/*   function createList(users) {
    let div = document.querySelector(".users");
    users.for( const key in users) {
      let p = document.createElement("p");
      p.innerText = u.title + " (" + Math.floor(u.duration/60) + ":" + u.duration%60 +")";
      div.appendChild(p);
    };
    
  } */






  /* 
addEventListener('DOMContentLoaded', () => {
    let divCover= document.querySelector('.cover')
    console.log(divCover)

})
 */


// al caricamento della pagina, seleziona gli album correlati e permette il link
addEventListener('DOMContentLoaded', () => {
  let albums= document.querySelectorAll(".albumName")
console.log(albums)

albums.forEach(alb => {
  alb.addEventListener('click', (evt) => {
      //dal click sul nome dell'album risalgo all'ID che viene salvato nel SessionStorage e viene usato nel fetch per scaricare le info
      sessionStorage.clear()
      console.log(evt.target)
      console.log(evt.target.attributes[0].nodeValue)
      sessionStorage.setItem('idalbum', evt.target.attributes[0].nodeValue)
      })
})
})



    
/* 
albums.forEach(alb => {
    alb.addEventListener('click', (evt) => {
        
        sessionStorage.clear()
        console.log(evt.target)
        console.log(evt.target.attributes[0].nodeValue)
        sessionStorage.setItem('idalbum', evt.target.attributes[0].nodeValue)
        })
}) */