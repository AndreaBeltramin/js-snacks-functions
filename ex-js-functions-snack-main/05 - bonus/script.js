/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";
let now = new Date();

// Dichiara la funzione qui.

function saluto(nome, ora) {
	//stampo la parola ciao seguita dal parametro nome che inserirò
	if ((now.getHours = 13)) console.log("Buongiorno " + nome);
	if ((now.getHours = 17)) console.log("Buon pomeriggio " + nome);
	if ((now.getHours = 23)) console.log("Buonasera " + nome);
}

// Invoca la funzione qui e stampa il risultato in console
saluto("Mario", 13);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
