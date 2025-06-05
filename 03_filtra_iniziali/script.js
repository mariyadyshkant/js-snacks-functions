/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * La funzione restituisce un array contenente i nomi di un array precedentemente creato, selezionati in base alla letter iniziale.
 * @param {Array} array - array contenente i nomi da selezionare
 * @param {string} letter - lettere iniziale delle parole da inserire nell'array della funzione
 * @returns {Array} - array contenente le parole con iniziano con la lettera scelta come argomento
 */
function wordsWithSpecificInitial(array, letter) {
    const wordsArray = [];
    for (let i = 0; i < array.length; i++) {
        const thisWord = array[i];
        const wordInitial = thisWord[0];
        if (wordInitial.toUpperCase() === letter.toUpperCase()) {
            wordsArray.push(thisWord);
        }
    }
    return wordsArray;
}

// Invoca la funzione qui e stampa il risultato in console
const namesWithInitialA = wordsWithSpecificInitial(names, "A");
console.log(namesWithInitialA);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//------------------------BONUS-------------------------

const filterByInitial = (array, letter) => {
    const wordsArray = [];
    for (let i = 0; i < array.length; i++) {
        const thisWord = array[i];
        const wordInitial = thisWord[0];
        if (wordInitial.toUpperCase() === letter.toUpperCase()) {
            wordsArray.push(thisWord);
        }
    }
    return wordsArray;
}
console.log(filterByInitial(names, "A"));