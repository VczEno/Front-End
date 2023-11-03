/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function area(l1,l2) {
    console.log("l'area di un rettangolo con lati " + l1 + " e " + l2 + " è pari a: " + l1*l2);
}
area(2,4);

let prod = function area2(l1,l2) {
    return ("l'area di un rettangolo con lati " + l1 + " e " + l2 + " è pari a: " + l1*l2);
}
console.log(prod(10,4)); */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
function Crazysum(int1, int2) {
    let sum;
    if(int1 == parseInt(int1) && int2 == parseInt(int2)) {
        
        if (int1 === int2) {
            sum = ((int1 + int2)*3);
        } else {
            sum = (int1 + int2);
        }
    } else{
        console.log("errore")
    }
    console.log(sum)

}

Crazysum(3,5)
Crazysum(2,2)
Crazysum(2.4,1)  */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function crazyDiff(int) {
    let diff=0;
    if (int > 19) {
        diff = Math.abs(int - 19)*3;
    } else {
        diff= Math.abs( int - 19)
    }
    console.log(diff);
}

crazyDiff(29)
crazyDiff(10)
 */
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function boundary(n) {
    if (n == parseInt(n)) {
        if (n >= 20 && n <= 100 || n == 400) {
            return true
            } else {
                console.log("il valore inserito non è pari a 400 o compreso tra 20 e 100")
                return false
             } 
        }  else {
            console.log("il valore inserito non è un numero intero")
            return false
         }         
}

let buond10 = boundary(10)
console.log(buond10)
let buond50 = boundary(50)
console.log(buond50)
let buond400 = boundary(400)
console.log(buond50)
let buondfloat = boundary(50.5)
console.log(buondfloat)
 */
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function epify(stringa) {
    if(stringa.indexOf("EPICODE") != 0) {
        console.log("EPICODE " + stringa)

    } else {
        console.log(stringa)
    }
}
epify("testo senza EPICODE")
epify("EPICODE già è contenunto in questo testo") */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function chek3and7 (n) {
    if (+n == Math.abs(n)) {
        if (n%3 == 0 || n%7 == 0) {
            return true
        } else {
            return false
        }
    } else {
        
        return "il numero non è positivo"
    }
}

let test1= chek3and7(-2)
console.log(test1)
let test2= chek3and7(9)
console.log(test2)
let test3= chek3and7(14)
console.log(test3)
let test4= chek3and7(5)
console.log(test4) */


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str){
    let splitting= [];
    splitting=str.split('');
    for(i=splitting.lenght; i>0; i--){
        var rev='s';
       
    }
    console.log(epicode);
}

reverseString('epicode')
/* function reverseString(str) {
    return (str.split("").reverse().join(""))
}

let rev = reverseString("CASA")
console.log(rev) */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
