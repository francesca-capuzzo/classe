let studente1 = {
    nome: "Lorenzo",
    cognome: "Miranza",
    età: 21,
    sesso: "M"
}
let studente2 = {
    nome: "Francesca",
    cognome: "Capuzzo",
    età: 25,
    sesso: "F"
}
let studente3 = {
    nome: "Alessando",
    cognome: "Capogreco",
    età: 20,
    sesso: "M"
}
let studente4 = {
    nome: "Marco",
    cognome: "Sorci",
    età: 24,
    sesso: "M"
}
let studente5 = {
    nome: "Fioralba",
    cognome: "Mirtaj",
    età: 27,
    sesso: "F"
}
let studente6 = {
    nome: "Andrea",
    cognome: "Ferruggia",
    età: 20,
    sesso: "M"
}
let studente7 = {
    nome: "Matteo",
    cognome: "Rinaldi",
    età: 23,
    sesso: "M"
}
let studente8 = {
    nome: "Nicolò",
    cognome: "Giuggiola",
    età: 27,
    sesso: "M"
}

let studenti = [
    studente1,
    studente2,
    studente3,
    studente4,
    studente5,
    studente6,
    studente7,
    studente8
];


function filtraEtà(età) {
    let arrayEtà = [];

    for (let i = 0; i < studenti.length; i++) {
        if (studenti[i].età === età) {
            arrayEtà.push(studenti[i])
        }
    }
    return arrayEtà;
}


function filtraSesso(sesso) {
    let arraySesso = [];

    for (let i = 0; i < studenti.length; i++) {
        if (studenti[i].sesso === sesso) {
            arraySesso.push(studenti[i])
        }
    }
    return arraySesso;
}


function filtra(proprietà, valore) {
    let arrayTotale = [];

    for (let i = 0; i < studenti.length; i++) {
        if (studenti[i][proprietà] === valore) {
            arrayTotale.push(studenti[i]);
        }
    }
    return arrayTotale;
}

console.log(filtraEtà(20));
console.log(filtraSesso("M"));
console.log(filtra("sesso", "M"));


// ////////////////////////////////////////////////////////////////


let array = [1, 5, 7];

function aggiungiAdArray(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (typeof elemento !== "number") {
            return "not a number"
        }
        array.push(elemento);
        return array;
    }
}


console.log(aggiungiAdArray(array, 4));


////////////////////////////////////////////////////////////////////

let array1 = [
    1,
    2,
    true,
    3,
    "pippo",
    false
];

function cleanArray(type) {
    let newArray = [];

    for (let i = 0; i < array1.length; i++) {
        if (typeof array1[i] === type) {
            newArray.push(array1[i]);
        }
    }
    return newArray;

}

console.log(cleanArray("boolean"));

///////////////////////////////////////////////////////////////////////

let arraynumbers = [100, 101, 9, 1000, 12, -3];

function filterGreater100(array) {
    let newArray2 = [];
    for (let i = 0; i < arraynumbers.length; i++) {
        if (arraynumbers[i] <= 100) {
            newArray2.push(arraynumbers[i]);
        }
        
    }
    return newArray2;
}

console.log(filterGreater100(arraynumbers));