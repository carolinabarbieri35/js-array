console.log('hello js!');


// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

const numeri = [];

for (let i = 0; i <= 6; i++) {

    const addnumbers = Number(prompt('Inserisci un numero'));




    if (addnumbers % 2 !== 0) {

        numeri.push(addnumbers);

    }
} console.log(numeri);

// Dato l'array di numeri [10, 21, 6, 73, 9, 14, 44], crea un array con soli numeri pari

const numbers = [10, 21, 6, 73, 9, 14, 44];

const numeriPari = [];

for (let i = 0; i < numbers.length; i++) {


    if (numbers[i] % 2 === 0) {

        numeriPari.push(numbers[i]);


    }

}
console.log(numeriPari);

// Dato un array di temperature settimanali [19, 21, 18, 23, 25, 22, 20], trova il valore massimo e trova il valore minino

const temperature = [19, 21, 18, 23, 25, 22, 20];

let max = temperature[0];
let min = temperature[0];

for (let i = 1; i < temperature.length; i++) {

    if (temperature[i] > max) {
        max = temperature[i];

    }

    if (temperature[i] < min) {

        min = temperature[i];

    }



}

console.log(max);
console.log(min);

