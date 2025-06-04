/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function greet(name) {
    const greet = `Ciao ${name}`;
    return greet;
}

// Invoca la funzione qui e stampa il risultato in console
greet();
console.log(greet()); // Ciao undefined

//Risultato atteso se si passa 'Mario': // ciao Mario
const greetUser = greet(userName);
console.log(greet(userName)); // Ciao Mario
