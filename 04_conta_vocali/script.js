/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
// word.length = 10 --> farò 10 iterazioni con il ciclo for


// Dichiara la funzione qui.
function numberOfVocals(word) {
    const vocalsOfString = [];
    const vocals = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < word.length; i++) {
        const thisLetter = word[i];
        for (let j = 0; j < vocals.length; j++) {

            console.log('if (' + vocals[j] + ' == ' + thisLetter + ')');

            if (vocals[j] === thisLetter) {
                vocalsOfString.push(thisLetter);
            }
        }
        console.log(`------ FINE CICLO (${i + 1})`);

    }
    return vocalsOfString.length, (vocalsOfString);
}

// Invoca la funzione qui e stampa il risultato in console
const vocalsOfJavascript = numberOfVocals(word);
console.log(vocalsOfJavascript);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//------------------------BONUS-------------------------
const howManyVowels = word => {
    const vowelsOfString = [];
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < word.length; i++) {
        const thisLetter = word[i];
        if (vowels.includes(thisLetter.toLowerCase())) {
            vowelsOfString.push(thisLetter);
        }
    }
    return vowelsOfString.length, (vowelsOfString);
}

console.log(howManyVowels(word));