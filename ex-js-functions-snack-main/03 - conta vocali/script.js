/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

function numberVocal(stringa) {
	//creo un array con le vocali
	const vocals = ["a", "e", "i", "o", "u"];
	//creo una variabile count dove aggiugere le vocali contate
	let count = 0;
	//creo un nuovo array a partire dalla variabile word ( cioè javascript) e per ogni carattere
	Array.from(word).forEach((char) => {
		//se l'array vocals include il carattere che sto passando del nuovo array aggiungo alla variabile count un elemento
		if (vocals.includes(char)) count++;
	});
	return count;
}

// Invoca la funzione qui e stampa il risultato in console
//creo un nuovo array con il numero di vocali contenuti nella variabile word
const filteredArray = numberVocal(word);
console.log(filteredArray);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
