/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

// Dichiara la funzione qui.
//creo una funzione saluto
function saluto(nome) {
	//stampo la parola ciao seguita dal parametro nome che inserirò
	console.log("Ciao " + nome);
}

// Invoca la funzione qui e stampa il risultato in console
saluto("Mario");

//Risultato atteso se si passa 'Mario': // ciao Mario
