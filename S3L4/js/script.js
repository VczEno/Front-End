let tab=document.querySelector('#tabellone')
let tabCell=document.createElement('div')
let tabN = document.createElement('p')

TabGenerator()
randomN() 
console.dir(tab)
   
function TabGenerator() {
    for(i=0;i<76; i++) {
        let tabCell=document.createElement('div')
        let tabN = document.createElement('p')
        tabN.innerText = i+1;
        tabCell.classList.add('tabcell')
        tabCell.appendChild(tabN)
        tab.appendChild(tabCell);
    }
}


function randomN() {
    let arrN=[];
    let btnN= document.querySelector('#selezione button')
    btnN.addEventListener ('click', () => {  
        let ranN= Math.ceil(Math.random()*76)
        console.log(ranN)
        console.log(arrN)
        if(arrN.length<76){
            if(!arrN.includes(ranN)){
                arrN.push(ranN)
                selectN (ranN)
                } else {
                    return randomN()


            }
        } else {
                alert('gioco finito')
        }
    });
}

function selectN (ranN) {
    for(i=0;i<tab.length; i++) {
        if(tab[i].innertext === ranN) {
            tab[i].style.class.add='.selected'

        }
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






