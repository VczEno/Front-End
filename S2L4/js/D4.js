/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function area(l1,l2) {
    console.log("l'area di un rettangolo con lati " + l1 + " e " + l2 + " è pari a: " + l1*l2);
}
area(3,4); 


let prod = function area2(l1,l2) {
    return ("l'area di un rettangolo con lati " + l1 + " e " + l2 + " è pari a: " + l1*l2);
}
console.log(prod(10,4));

let arearet = (l1,l2) => {return l1*l2}
console.log(arearet(2,5))

let arearet2 = (l1,l2) => {console.log(l1*l2)}
arearet2(3,6) */


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

/* function reverseString(str){
    let splitting=str.split('');
    console.log(splitting)
    let reverse=''
    for(i=(splitting.length); i>0; i--) {
        reverse += splitting[i-1];
    }
    console.log(reverse)
}

reverseString('epicode')
reverseString('ITopiNonAvevanoNipoti') */


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function UpperFirst(stg) {
    split = stg.split(' ');
    firstlet = [];
    UpFirLet = ('');
    for (i=0; i<split.length; i++) {
        firstlet[i] = split[i].charAt(0).toUpperCase()
        split[i] = split[i].slice(1)
        UpFirLet += firstlet[i] + split[i] + ' '
        }    
console.log(UpFirLet)
}

UpperFirst('questo frase non ha senso')
UpperFirst("c' ho tanto sonno, vorrei dormire tutto il giorno") */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function CutString(stg) {
    cutted =stg.split('');
    cutted.pop()
    cutted.shift()
    let cutstg=('')
    for (i=0; i<cutted.length; i++){
        cutstg += cutted[i]
    }
    console.log(cutstg)
}

CutString('parola')
CutString('Telefono rosso') */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function giveMeRandom(n) {
    arr= [];
    arr.length = n
    for(i=0; i<arr.length; i++) {
        arr[i] = Math.round(Math.random()*10)
    }
    console.log(arr)
} */

/* giveMeRandom(10)
giveMeRandom(5)  */

// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function checkArray(n){
    giveMeRandom(n)
    let sum = 0
    for(i=0;i<arr.length; i++) {
        
        if(arr[i]>5) {
            console.log(arr[i])
            sum += arr[i]
        }
    }
    console.log('la somma dei valori in array maggiori di 5 è: ' + sum)
}

checkArray(5) */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* let shoppingCart= [
    {
        price: 100,
        name: 'VolcaSample',
        id: 'VS',
        quantity: 1
    },
    {
        price: 150,
        name: 'VolcaDrum',
        id: 'VD',
        quantity: 1
    },
    {
        price: 80,
        name: 'VolcaBass',
        id: 'VB',
        quantity: 2
    },
    {
        price: 20,
        name: 'AC Adapter',
        id: 'AC',
        quantity: 4
    },

]

console.log(shoppingCart)

function shoppingCartTotal() {
    let sum=0
    for(i=0; i<shoppingCart.length; i++) {
        sum += shoppingCart[i].price * shoppingCart[i].quantity
    }
    console.log(sum)
}
shoppingCartTotal()
 */
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function addToShoppingCart(newobj) {
    let totobj=0
    for(i=0; i<shoppingCart.length; i++) {
        if(newobj == shoppingCart[i].id) {
            shoppingCart[i].quantity++;
        }
        totobj+= shoppingCart[i].quantity
    }
    console.log(totobj)
}
 addToShoppingCart('VB') */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function maxShoppingCart() {
    let maxind=0
    let maxprice=0
    for(i=0;i<shoppingCart.length; i++) {
        if (shoppingCart[i].price > maxprice) {
            maxprice = shoppingCart[i].price
            maxind= i
        }
    }
console.log(shoppingCart[maxind])
}

maxShoppingCart()
 */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function latestShoppingCart() {
 console.log(shoppingCart[shoppingCart.length-1])
} 

 latestShoppingCart() 
 */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function average() {
    let sum=0
    let notnum=0
    for(i=0; i<arguments.length;i++) {
        if(isNaN(arguments[i])) {
            notnum++;

        } else {
            sum += arguments[i];
        }
        
    }
    aver = sum/(arguments.length - notnum)
    console.log(aver)
}

average(10, 20,'ciao', 'test', 30) */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function longest() {
    let lngstg= 0
    let stgindex= 0
    for (i=0; i<arguments.length; i++) {
        if(arguments[i].length > lngstg){
            lngstg = arguments[i].length;
            stgindex = i;
        } 
    }
    console.log(arguments[stgindex])
}
 longest('corta', 'mediaaa', 'luuuuungaa') */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function antiSpam (emailContent) {
    if (emailContent.includes('SPAM')) {
        return false
    } else if (emailContent.includes('SCAM')) {
        return false
    } else {
        return true
    }
}
result1 = antiSpam('mail di prova')
console.log(result1)
result2 = antiSpam('mail di prova SPAM')
console.log(result2)
result3 = antiSpam( 'mail di pSCAMrova ')
console.log(result3) */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function daysSince(year, month, day) {
    let now= new Date();
    let prdata= new Date(year, month-1, day)
    nhours= now.get
    
    console.log(now)
    console.log(prdata)
}

daysSince(1995, 11, 7) */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function matrixGenerator(x,y) {
 let mat=[];
 for(i=0; i<x; i++) {

 }
} */