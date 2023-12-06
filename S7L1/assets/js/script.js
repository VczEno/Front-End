//ES 1

class User {
    constructor(firstName, lastName, age, location) {
        this.nome = firstName,
        this.cognome = lastName,
        this.eta = age,
        this.citta = location
    }

    static older(x, y) {
        if (x.eta > y.eta) {
            return x + "è più vecchio di" + y
        } else if (x.eta < y.eta) {
            return x + "è più giovane di" + y
        } else {
            return x + "e" + y + "hanno la stessa età"
        }
    }
}

let pino = new User("Pino", "Cammino", "35", "Isernia")
let mimmo = new User("Mimmo", "Peluria", "35", "Foggia")

console.log(pino)
console.log(mimmo)

console.log(User.older(pino, mimmo))


//ES 2

class Pet {
    constructor(nome, padrone, specie, razza) {
        this.name = nome,
        this.ownerName = padrone,
        this.species = specie,
        this.breed = razza
    }

static stessoP (x, y) {
    if (x.ownerName == y.ownerName) {
        return true
    } else {
        return false
    }
}

}

let nome = document.getElementById('petname')
let padrone = document.getElementById('owner')
console.log(nome + padrone)


let diego = new Pet("diego", "fra"," gatto"," meticcio")
let thiago = new Pet("thiago", "vin", "gatto", "meticcio")

console.log(Pet.stessoP(diego, thiago))