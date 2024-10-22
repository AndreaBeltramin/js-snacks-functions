/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente 
solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
//dichiaro una variabile della lettera cercata
const searchedLetter = "A";

// Dichiara la funzione qui.
//dichiaro una funzione che filtra le lettere iniziali dei nomi dell'array (metto come parametri un array e la lettere che dovrò cercare)
function firstLetterFilter(array, letteracercata) {
	//setto come return un array filtrato contenente la lista di nomi che avranno come lettera iniziale la lettera cercata
	/*return array.filter(function(word){
        return word.startsWith(letteracercata);
    })*/
	return array.filter((word) => word.startsWith(letteracercata));
}

// Invoca la funzione qui e stampa il risultato in console
//applico alla costante filteredArray la funzione inserendo come parametri l'array names e la lettera a
const filteredArray = firstLetterFilter(names, searchedLetter);
console.log(filteredArray);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
