/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function greetUser(name) {
    const userName = "";
    const greet = (`Ciao %{userName}`);
    return greet;
}

// Invoca la funzione qui e stampa il risultato in console
greetUser();
console.log(greetUser());



//Risultato atteso se si passa 'Mario': // ciao Mario
