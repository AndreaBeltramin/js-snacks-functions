/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

function saluto(nome) {
	const now = new Date();
	const currentHours = now.getHours();

	let greet;
	//SE è mattina quindi prima delle 13
	if (currentHours <= 13) {
		greet = "Buongiorno";
		//ALTRIMENTI SE è pomeriggio quindi prima delle 17
	} else if (currentHours <= 17) {
		greet = "Buon pomeriggio";
		//ALTRIMENTI è sera
	} else {
		greet = "Buonasera";
	}
	return `${greet} ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto("Mario"));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
