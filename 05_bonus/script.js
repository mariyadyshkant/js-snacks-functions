/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 

Il saluto deve essere :
- buongiorno se è mattina (fino alle 13); 
- buon pomeriggio se è pomeriggio (fino alle 17); 
- buonasera se è sera (oltre le 17).
*/

const personName = "Mario";

// Dichiara la funzione qui.
/**
 * La funzione 'greet' genera un saluto seguito dal nome fornito in base all'orario corrente.
 * @param {string} name - Nome della persona a cui è rivolto il saluto.
 * @returns {string} - Saluto basato sull'orario con il nome fornito.
 */

function greet(name) {
    let hours = new Date().getHours();
    let greet = "";
    if (hours < 13) {
        greet = `Buongiorno ${name}`;
    } else if (hours <= 17 && hours >= 13) {
        greet = `Buon pomeriggio ${name}`;
    } else {
        greet = `Buonasera ${name}`;
    }
    return greet;
}

// Invoca la funzione qui e stampa il risultato in console
const greetName = greet(personName);
console.log(greetName);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.