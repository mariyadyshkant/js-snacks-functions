/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function nameInitials(array) {
    const initials = [];
    for (let i = 0; i < array.length; i++) {
        const name = array[i];
        const initial = name[0];
        initials.push(initial.toUpperCase());
    }
    return initials;
}

// Invoca la funzione qui e stampa il risultato in console
const initials = nameInitials(names);
console.log(initials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]