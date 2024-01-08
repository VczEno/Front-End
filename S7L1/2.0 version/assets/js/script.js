//ES1

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName= firstName,
        this.lastName= lastName,
        this.age= age,
        this.location= location
    }
    ageComparison(x, y) {
        if(x.age > y.age) {
            return x.firstName +" is older than " + y.firstName
        }else if (x.age == y.age) {
            return `${x.firstName} and ${y.firstName} got the same age`
        } else {
            return x.firstName +" is younger than " + y.firstName
        }
    }
}

const mario = new User("Mario", "Rossi", "22", "Roma")
const luigi = new User("Luigi", "Verdi","30", "Milano")
const peppino = new User("Peppino", "Bianchi", "30", "Napoli")

/* 
console.log(mario)
console.log(mario.ageComparison(mario, luigi)) */


//Es 2 

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName= petName,
        this.ownerName=ownerName,
        this.species=species,
        this.breed=breed
    }
    sameOwner(anotherPet) {
        if (this.ownerName === anotherPet.ownerName) {
            return true
        } else {
            return false
        }

    }

}

let pets= []
let submit= document.querySelector('form button')


submit.addEventListener('click', (e) => {
    e.preventDefault
    newPet()
    
    
})

function newPet() {
    let petName= document.querySelector('#petName').value
    let ownerName= document.querySelector('#ownerName').value
    let species= document.querySelector('#species').value
    let breed= document.querySelector('#breed').value
    let newPet= new Pet(petName, ownerName, species, breed)
    console.log( newPet)
    pets.push(newPet)
    console.log(pets)

    let list= document.querySelector('.list')
    let newEle = document.createElement('div')
    newEle.innerHTML= `<div class="row row-cols-5 align-items-center my-3">
                            <div class="column">
                                ${petName}
                            </div>
                            <div class="column">
                            ${ownerName}
                            </div>
                            <div class="column">
                            ${species}
                            </div>
                            <div class="column">
                            ${breed}
                            </div>
                            <div class="column">
                            <button class="btn btn-secondary text-white"> owner Check </button>
                            </div>
                        </div>`
    list.appendChild(newEle)

}



