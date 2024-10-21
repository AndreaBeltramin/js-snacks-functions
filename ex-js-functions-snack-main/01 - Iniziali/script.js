/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

//creo una funzione estraiIniziali che avrà come parametro l'array che dovrò creare
function estraiIniziali(array) {
	//dichiaro una variabile per creare un array nuovo
	const iniziali = [];
	//per ogni elemento dell'array names
	for (let i = 0; i < names.length; i++) {
		//aggiungo all'array iniziali (che mi sono creato) il primo carattere di ogni elemento dell'array dato come parametro
		iniziali.push(array[i].charAt(0));
	}
	//ritorno l'array con le iniziali
	return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console

const iniziali = estraiIniziali(names);
console.log(iniziali);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
