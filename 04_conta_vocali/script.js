/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';



// Dichiara la funzione qui.
function numberOfVocals(word) {
    const vocalsOfString = [];
    const vocals = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < word.length; i++) {
        const thisLetter = word[i];
        if (vocals.includes(thisLetter.toLowerCase())) {
            vocalsOfString.push(thisLetter);
        }
    }
    return vocalsOfString.length, (vocalsOfString);
}

// Invoca la funzione qui e stampa il risultato in console
const vocalsOfJavascript = numberOfVocals(word);
console.log(vocalsOfJavascript);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)



// if (thisLetter === thisVocal) {
//  const thisVocal = vocals[i];