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

/////////////////////////////////////////////IN CLASSE:

// function filtraEtà(età) {
//     let arrayEtà = [];
//     for (const studente of studenti) {
//         if (studente.età === età) {
//             arrayEtà.push(studente)
//         }
//     }
//     return arrayEtà;
// }



////OPPURE: (con in modo più generico a cui passo l'array da filtrare)



// function filtraEtà(arrayToFilter, età) {
//     let arrayEtà = [];
//     for (const element of arrayToFilter) {
//         if (studente.età === età) {
//             arrayEtà.push(studente)
//         }
//     }
//     return arrayEtà;
// }

// console.log(filtraEtà(studenti, 25));


///////////////////////////////////////////////////////////////////////////



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



/////////////////////////////////////////////////////IN CLASSE:
//FUNZIONE GENERICA:

// function filtra(arrayToFilter, propertyName, value) {
//     let tempArray = [];
//     for (const element of arrayToFilter) {
//         if (element[propertyName] === value){
//             tempArray.push(element)

//         }
//     }
//     return arrayEtà;
// }

// console.log(filter(studenti, "nome", "Francesca"));



console.log(filtraEtà(20));
console.log(filtraSesso("M"));
console.log(filtra("sesso", "M"));


//////////////////////////////////////////////////////////////////


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



///////////////////////////////////////////////////IN CLASSE:


// let array = [1, 5, 7];

// function aggiungiAdArray(array, elemento) {
//         if (typeof elemento === array[0]) {                         //controlla solo il primo elemento dell'array confidando che gli altri elementi siano tutti dello stesso tipo
//             array.push(elemento);
//             return array;
//         }
//         return "ERRORE TIPO"
//     }

// console.log(aggiungiAdArray(array, 4));

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



///////////////////////////////////////////////////////////////IN CLASSE:

// function cleanArray(arrayToClean, type) {
//     let newArray = [];

//     for (const elemento of arrayToClean) {
//         if (typeof elemento === type) {
//             newArray.push(elemento);
//         }
//        return newArray;
//    }

// console.log(cleanArray(array1, "boolean"));



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


function greaterThan30(number) {
    if (number >= 30) {
        return false;
    } else {
        return true;
    }
}


function filter(func) {
    let newArray9 = []; //more than 30
    let newArray8 = []; //less than 30
    for (let i = 0; i < arraynumbers.length; i++) {
        greaterThan30(arraynumbers[i]) ? newArray8.push(arraynumbers[i]) : newArray9.push(arraynumbers[i]);
        // greaterThan30(arraynumbers[i]) ? "not what i want" : newArray9.push(arraynumbers[i]);
    }
    return newArray9;
}

console.log(filter(greaterThan30(arraynumbers)));

////////  NON SO PERCHE' VENGA GIUSTA!!!!!  ///////////////////



/////////////////////////////////////IN CLASSE:

// let myArray = [100, 101, 9, 1000, 12, -3];

// function filterToRemoveGreaterThan100(arrayToFilter) {
//     let tempArray = [];
//     for (const element of arrayToFilter) {
//         if (element <= 100) {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }

// console.log(filterToRemoveGreaterThan100(myArray));


// function greaterThan30(element) {                        //funzione di filtraggio che verifica la condizione posta.
//     if (element > 30) {
//         return true;
//     } else {
//         return false;
//     }
// }

//RISCRIVO GREATER THAN 30 IN MANIERA PIù CORRETTA:

// function greaterThan30(element) {                     //prende element e lo confronta con la condizione e ritorna true se è vera e false se è falsa, senza bisogno dell'IF!!
//     return (element > 30);
// }


// function filter(arrayToFilter, filterFunction) {
//     let tempArray = [];
//     for (const element of arrayToFilter) {
//         if (filterFunction(element)) {
//             tempArray.push(element)
//         }
//     }
//     return tempArray;
// }

// console.log(filter(myArray, greaterThan30));

// //NB: LA CONDIZIONE DELL'IF è L'UNICA COSA CHE CAMBIA IN TUTTI I CICLI E METODI DI TUTTI GLI ESERCIZI IN QUESTA PAGINA!!!



// function isEven(element) {
//     if (element % 2 === 0) {
//         return true;
//     }else {
//         return false;
//     }
// }

// //oppure in versione più corta (e sensata):

// function isEven(element) {
//    return (element % 2 === 0)
// }




// //se la passo alla funzione di filtraggio generica (filter):

console.log("mia filter function", filter(myArray, isEven));

console.log("Javascript filter function", myArray.filter(isEven));


function isPositive(element) {
    return (element > 0);
}

console.log("isPositive filter", myArray.filter(isPositive));