console.log('hello js');


// stampa i numeri da 1 a 10 usando un ciclo for

for (let i = 1; i <= 10; i++) {

    console.log(i);

}

// stampa i numeri da 1 a 10 usando un ciclo while

let i = 1

while (i <= 10) {
    console.log(i);

    i++;

}

// chiedi un numero N all'utente. stampa i numeri da 0 a N usando un ciclo for

const numero = Number(prompt('Inserisci un numero'));

for (let i = 0; i <= numero; i++) {
    console.log(i);

}

// Stampa la tabellina del 5

for (let i = 1; i <= 10; i++) {
    console.log(i * 5);

}

// chiedi all'utente una parola e un numero N. stampa quella parola N volte.

const parola = prompt('Scrivi una parola')
console.log(parola);

const unNumero = Number(prompt('Scrivi un numero'));
console.log(unNumero);

for (let i = 0; i < unNumero; i++) {

    console.log(parola);
}


// Chiedi un numero N all'utente. Calcola la somma di tutti i numeri da 1 a N e stampa il risultato.

const nuovoNumero = Number(prompt('Scrivi un numero'));
console.log(nuovoNumero);

let somma = 0;

for (let i = 1; i <= nuovoNumero; i++) {
    somma = somma + i;

}

console.log('la somma totale è ', somma);

// Chiedi all'utente di inserire il prezzo di un prodotto. Continua a chiedere prezzi e sommarli al totale finchÃ© l'utente non inserisce "0" per terminare. Stampa il totale della spesa.


let totale = 0


let prezzo = Number(prompt('Inserisci il prezzo del prodotto'));


while (prezzo !== 0) {

    totale = totale + prezzo;

    prezzo = Number(prompt('Inserisci il prezzo del prodotto'));


}

console.log('il totale della spesa è', totale);










