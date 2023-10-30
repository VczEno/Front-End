/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* In JavaScript è possibile definire delle variabili ed associarli dei valori, un pò come prendere delle scatole, etichettarle e mettere al loro interno qualcosa.
Le scatole possono essere variabili (posso in qualsiasi momento modificare il contenuto della scatola) o costanti (non posso modificarne il contenuto)
I dati da inserire i queste scatole possono essere di diverso tipo:
-Numeri. sono appunto numeri (interi , relativi, razionali, reali) e sono espressi come cifra (5 e non cinque);
-Stringhe. porzioni di testo, limitate da " " o ' ' ;
-Booleani. esistono solo due valori, "true" e "false".
-Null. Ovvero prendo una scatola la etichetto e la lascio vuota, perhè per il momento non devo metterci nulla.
Undefined. Ovvero prendo una scatola, la etichetto e la lascio vuota perchè non so ancora cosa ci metterò dentro.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nome='Vincenzo';
const NOME='Vincenzo';
console.log(nome);
console.log(NOME);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1=12;
let num2=20;
let sum= num1 + num2;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x=12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
nome= 'Arpaia';
/* NOME='Arpaia'        */        //In console appare errore "Uncaught TypeError. Assignment to constant variable."
console.log(nome);
console.log(NOME);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let num3=4;
let sott=num3 - x;
console.log(sott);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1='john';
let name2='John';
console.log(name1);
console.log(name2);
console.log(name1 == name2);
let name1_lowercase=name1.toLowerCase();
let name2_lowercase=name2.toLowerCase();
console.log(name1_lowercase);
console.log(name2_lowercase);
console.log(name1_lowercase == name2_lowercase);

