/* let tab=document.querySelector('#tabellone')
let tabCell=document.createElement('div')
let tabN = document.createElement('p') */
/* let areaCart=document.querySelector('#cartelle')
 *//* let cartella=document.createElement('div')
let cartCell=document.createElement('div')
let cartN = document.createElement('p')
 */
TabGenerator()
randomN() 
CartGenerator()

/* randomNcart() */

   
function TabGenerator() {
    let tab=document.querySelector('#tabellone')
    for(i=0;i<76; i++) {
        let tabCell=document.createElement('div')
        let tabN = document.createElement('p')
        tabN.innerText = i+1;
        tabCell.classList.add('tabcell')
        tabCell.appendChild(tabN)
        tab.appendChild(tabCell);
    }
}


/* function randomNv1() {
    let arrN=[];

    let numeroestratto = document.createElement('span')
    let extN = document.createElement('span')
    numeroestratto.innerHTML= 'Numero estratto: '
    let btnN= document.querySelector('#selezione button')
    
    let selezione =btnN.parentNode
    selezione.appendChild(numeroestratto)
    selezione.appendChild(extN)
   
    btnN.addEventListener ('click', () => {  
        let ranN= Math.ceil(Math.random()*76)
        console.log(ranN)
        console.log(arrN)
        if(arrN.length<76){
            if(!arrN.includes(ranN)){
                arrN.push(ranN)
                extN.innerText = ranN
                } else {
                    return randomN()


            }
        } else {
                alert('gioco finito')
        }
        
        

    });
} */

function randomN() {
    let arrN=[];
    for(j=0;j<76;j++) {
        arrN[j]=j+1
    } 
    let i=0;
    let numeroestratto = document.createElement('span')
    let extN = document.createElement('span')
    numeroestratto.innerHTML= 'Numero estratto: '
    let btnN= document.querySelector('#selezione button')
    
    let selezione =btnN.parentNode
    selezione.appendChild(numeroestratto)
    selezione.appendChild(extN)
   
    btnN.addEventListener ('click', () => { 
        let tabCells=document.querySelectorAll('#tabellone div') 
        let cartCells=document.querySelectorAll('.cartcell')
        let randInd= Math.ceil(Math.random()*75-i);
        let randN= arrN.splice(randInd, 1)
        i++;
        extN.innerText=randN[0]
        console.log(randN[0])
        console.log(randN)
        console.log(i)
        console.log(tabCells.length)
        for(let y=0; y<tabCells.length; y++) {
            
            if(tabCells[y].innerText == randN[0] ) {
                console.log('dentro')
                console.log(tabCells[y])
                tabCells[y].classList.add('selected')
            } 

        }
            if (i==75) {
            alert('sono usciti tutti i numeri')
            }
        cartCells.forEach(ele => {
            if(ele.innerText == randN[0] ) {
                console.log('dentro')
                console.log(ele)
                ele.classList.add('selected')
            } 
        })
    })
}

            /* console.log(arrCart.length) */
       /* if(arrN.length<76){
            if(!arrN.includes(ranN)){
                arrN.push(ranN)
                extN.innerText = ranN
                
                } else {
                    return randomN()


            }
        } else {
                alert('gioco finito')
        }
        */
        


function CartGenerator() {
    let numCart= Number(prompt('seleziona il numero di cartelle con cui vuoi giocare'))
    let areaCart=document.querySelector('#areacartelle')
    
    for(let i=0; i<numCart; i++) {

        let arrCart = []
        for(j=0;j<76;j++) {
            arrCart[j]=j+1
        } 
        
        let cartella=document.createElement('div')
        for(let k=0;k<24; k++) {
            
            let cartCell=document.createElement('div')
            let cartN = document.createElement('p')
            cartCell.classList.add('cartcell')
            cartCell.appendChild(cartN)
            cartella.appendChild(cartCell);
            let randInd= Math.ceil(Math.random()*75-k);
            cartN.innerText = arrCart.splice(randInd, 1)
            /* console.log(arrCart.length) */
        }
        areaCart.appendChild(cartella)
        cartella.classList.add('cartella')
        
    
    }
}

    
        
 /* arrN.forEach(n => {
    if(arrN.length<4){
        if(ranN !== n ) {
            arrN.push(ranN)
            console.log(arrN)
            
        }
    }else {
        alert('Sono usciti tutti i numeri!')
        return 'ndGAme'
    }
    console.log(arrN) 
})     */

//if array lungo 75 gioco finito, alert



/* switch RanN {
    case 1: arrN.push('1')
         break;
         case 2: arrN.push('1')
         break;
         case 3: arrN.push('1')
         break;
} */






