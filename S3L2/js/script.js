/* ESERCIZIO 1
Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro */
   
const changeTitle = function (altTitle) {
    let title= document.getElementById('titolo')
    title.innerText= altTitle
} 

changeTitle('TESTO ALTERNATIVO')
    
/* ESERCIZIO 2
Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function (newclass) {
    let title= document.getElementById('titolo')
    title.className = newclass
}

addClassToTitle('myHeading')

/* ESERCIZIO 3
Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function (altPText) {
    let Pchild = document.querySelectorAll('div p')
    Pchild.forEach (pn => pn.innerText=altPText)
}

changePcontent('testo dei P, figli di div, alternativo')

/* ESERCIZIO 4
Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function (altLink) {
    let link = document.querySelectorAll('a:not(footer a)')
    link.forEach (ln => ln.href=altLink)
}

changeUrls('https://www.google.com')


/* ESERCIZIO 5
Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function (newEleL2) {
    let unList = document.getElementsByTagName('ul');
    let newEle= document.createElement('li')
    newEle.innerText= newEleL2
    unList[1].appendChild(newEle)
}

addToTheSecond('nuovo elemento lista n°2')


/* ESERCIZIO 6
Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function (newPText) {
    let div1 = document.querySelector('div')
    let pOfDiv1 =document.createElement('p')
    div1.appendChild(pOfDiv1)
    pOfDiv1.innerText= newPText
}
addParagraph('questo è il nuovo paragrafo del primo div')

/* ESERCIZIO 7
Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    let ul1=document.querySelector('ul')
    ul1.style.display= 'none'
}

/* hideFirstUl() */

/* ESERCIZIO 8 
Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function (NewCol) {
    let ulAll=document.querySelectorAll('ul')
    /* console.log(ulAll)
    let ulAll2=document.getElementsByTagName('ul') // con questo non funziona anche se genera lo stesso array
    console.log(ulAll2) */
    ulAll.forEach (n => n.style.backgroundColor= NewCol)
    
}

paintItGreen('green')

/* ESERCIZIO 9
Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

/* const makeItClickable = function () {
    let h1arr= document.getElementById('titolo')
    console.log(h1arr)
    h1arr.innerText.slice(-1)
    
} */

/* ESERCIZIO 10
Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () {
   let fooLink=document.querySelector('footer a')
   alert(fooLink.href)
} // funziona ma non devo richiamare la funzione, avviene quando clicco


/* ESERCIZIO 11
Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {
    let divTable = document.getElementById('tableArea')
    let newTable = document.createElement('table')
    divTable.appendChild(newTable)
    let t1row=document.createElement('tr')
    newTable.appendChild(t1row)
    let tableHeading = document.createElement('th')
    for(let i=0; i<5; i++) {
         t1row.appendChild(tableHeading)
    }
    
    
}
generateTable()

/* ESERCIZIO 12
Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () {}

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {}

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function (newcolor) {
    let h2Col = document.querySelector('#changeMyColor')
    h2Col.style.color= newcolor
} //manca la parte del cambio colore al click

changeColorWithRandom('yellow')

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {}