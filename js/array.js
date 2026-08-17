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

