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
    console.log(ulAll2) */
    let ulAll2=document.getElementsByTagName('ul') //  l'HTMLcollection non mi funziona nel .foreach, perchè boh 
    ulAll.forEach (n => n.style.backgroundColor= NewCol)
    
}

paintItGreen('green')

/* ESERCIZIO 9
Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

 const makeItClickable = function () {
    let h1arr= document.getElementById('titolo') //assegno variabile h1arr al nodo h1 con id titolo
    let slc = h1arr.innerText //associo il contenuto del nodo h1 a variabile slc
    slc = slc.slice(0,-1) //con il metodo slice rimuovo l'ultima lettera( il secondo parametro -1 fa si che si parta da destra, essendo il primo parametro 0 si parte dalla fine)
    h1arr.innerText = slc // sostituisco il testo del nodo h1 con il risultato dello slice
     // questa operazione si ripete ogni volta che clicco sul nodo h1
} 

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
    let i=0;
    while(i<arguments.length) {
        let tableHeading = document.createElement('th')
        t1row.appendChild(tableHeading)
        tableHeading.innerText = arguments[i]
        i++;
    }
    
}
generateTable('immagine','nome', 'prodotto' ,'prezzo', 'quantità')

/* ESERCIZIO 12
Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () {
    let tabella=document.querySelector('table')
    let t2row=document.createElement('tr')
    tabella.appendChild(t2row)
    let i=0;
     while(i<arguments.length) {
        /* if(i=0) {
            let td1=document.querySelector('table:lastChild')
            let image=document.createElement('img')
            td1.appendChild(image)
            
        } */ 
        let tableData = document.createElement('td')
        t2row.appendChild(tableData)
        tableData.innerText = arguments[i]
        i++;
        }
       
     } 
    
addRow('1','2','3','4','5')
/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {}

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {
    let h2Col = document.querySelector('#changeMyColor')
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    let rancol = 'rgb('+r+' ,'+g+' ,'+b+')'
    console.log(rancol)
    h2Col.style.color='rancol'
} //manca la parte del cambio colore al click



/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {}