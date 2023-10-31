/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let n1=prompt("inserisci il primo numero"); // Js li prende come stringhe
let n2=prompt("inserisci il secondo numero");
console.log(n1);
console.log(n2);

if(+n1 > +n2) {                   // devo aggiungere il "+" davanti le variabili n1 e n2 per forzare la conversione da string a number
  console.log("il numero maggiore è il primo inserito, ovvero:" + n1)
}
else if(+n1 == +n2) {
  console.log("i numeri inseriti sono uguali")
}
else {
  console.log("il numero maggiore è il secondo inserito, ovvero:" + n2)
} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
let n=prompt("inserisci un numero")
if (n != 5) { //funziona anche senza forzare la conversione da string a number, l'operatore != effettua il confronto anche se gli elementi sono di tipi diversi
  console.log("not equal")
}
 */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
 let n=prompt("inserisci un numero");
if((modulo=n % 5) == 0) {
  console.log ("divisibile per 5")
}*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
let n1=prompt("inserisci il primo numero"); 
let n2=prompt("inserisci il secondo numero");

if(+n1 == 8 || +n2 == 8) {
  console.log("uno dei due numeri inseriti è pari a 8")
}
else if(((+n1 + +n2) == 8) || ((+n1 - +n2) == 8) || ((+n2 - +n1) == 8)) {
  console.log("la somma o la differenza dei due numeri inseriti è pari a 8")
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let saldo=prompt("inserisci il saldo totale")
if(+saldo > 50) {
  console.log(" hai diritto alla spedizione gratuita! l'importo da pagare è: " +saldo)
}
else {
  
  console.log("la spesa di spedizione per ordini inferiori a 50€ è pari a 10€. L'importo totale da pagare è: " + (+saldo + 10))
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let saldo=prompt("inserisci il saldo totale")
let discountprice= +saldo - (+saldo /100 *20)
console.log("oggi è il black friday! 20% di sconto da apprlicare prima del checkout sul totale del carrello. Il prezzo scontato è: " + discountprice)
if(discountprice > 50) {
  console.log(" hai diritto alla spedizione gratuita! l'importo da pagare è: " + discountprice)
}
else {
  console.log("la spesa di spedizione per ordini inferiori a 50€ è pari a 10€. L'importo totale da pagare è: " + (discountprice + 10))
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let n1=prompt("inserisci il primo numero");
let n2=prompt("inserisci il secondo numero");
let n3=prompt("inserisci il terzo numero");

if(+n1 > +n2) {
  if(+n1 > +n3) {
    if(+n2 > +n3) {
      console.log(n1 + " " + n2 + " " + n3)
    }else {
      console.log(n1 + " " + n3 + " " + n2)
    }
  } else {
    console.log(n3 + " " + n1 + " " + n2)
  }
} else {
  if(+n2 > +n3) {
    if(+n1 > +n3) {
      console.log(n2 + " " + n1 + " " + n3)
    } else {
      console.log(n2 + " " + n3 + " " + n1)
    }
  } else {
    console.log(n3 + " " + n2 + " " + n1)
  }
} 
 */


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let input1= "ciao";
console.log("valore inserito: " + input1)

let datatype1 = typeof input1 ;
console.log(datatype1);

if(datatype1 == "number") {
  console.log("il valore inserito è un numero")
}
else{
  console.log("il valore fornito non è un numero")
}

let input2= 5;
console.log("valore inserito: " + input2)
let datatype2 = typeof input2 ;
console.log(datatype2);

if(datatype2 == "number") {
  console.log("il valore inserito è un numero")
}
else{
  console.log("il valore fornito non è un numero")
} */

/* let input=Number(prompt("inserisci un valore"))
console.log("valore inserito: " + input)



if(isNaN(input)) {
  console.log("il valore inserito non è un numero")
}
else{
  console.log("il valore inserito è un numero")
} */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let n=prompt("inserisci un numero")
if((modulo=n %2) == 1) {
  console.log("il numero inserito è dispari")
}
else if(n == 0) {
  console.log("il valore è inserito è 0")
}

else {
  console.log("il numero inserito è pari")
} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let val =prompt ("inserisci un numero")
if (val < 10 && val >= 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
 */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* me.city="Toronto";
console.log(me) */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* delete me.lastName;
console.log(me);
 */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* me.skills.pop();
console.log(me.skills); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const arr=[];
console.log(arr)
arr.splice(1,0, 1,2,3,4,5,6,7,8,9,10)
console.log(arr) */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* arr.splice(9,1, 100)
console.log(arr) */

/* SCRIVI QUI LA TUA RISPOSTA */
