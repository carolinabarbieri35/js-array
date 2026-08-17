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

// Dato l'array di voti [6, 8, 4, 9, 5, 7, 10], calcolare la media dei voti.

const voti = [6, 8, 4, 5, 7, 10];

let somma = 0;

for (let i = 0; i < voti.length; i++) {

    somma += voti[i];



}

const media = somma / voti.length;

console.log(media);


// Dato l'array ['Marco', 'Anna', 'Luca', 'Giulia', 'Tommaso'], crea un nuovo array con solo i nomi che hanno più di 4 lettere

const nomi = ['Marco', 'Anna', 'Luca', 'Giulia', 'Tommaso'];

const nomiLunghi = [];

for (let i = 0; i < nomi.length; i++) {
    const nomeCorrente = nomi[i];

    if (nomeCorrente.length > 4) {

        nomiLunghi.push(nomeCorrente);

    }

}
console.log(nomiLunghi);
console.table(nomiLunghi);





