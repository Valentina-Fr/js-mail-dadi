/* 
1 - Creare lista indirizzi email
2 - Chiedere all’utente la sua email
3 - Controllare che l'email dell'utente sia nella lista
4 - Stampare messaggio 
*/

//Dichiarazione e assegnazioni variabili
var addresses = ["mario@gmail.com", "laura@gmail.com", "stefano@gmail.com", "maria@gmail.com"];
var userAddress = prompt("Inserisci il tuo indirizzo e-mail");
var welcomePlaceholder = document.getElementById("welcome");

console.table(addresses);
console.log(userAddress);

//Contrallare se l'email dell'utente è presente in lista
var isListed = false

for(i = 0; i < addresses.length; i++) {
    if (userAddress === addresses[i]) {
        var isListed = true
    }
}

//Stampare messaggio
if (isListed) {
    welcomePlaceholder.innerHTML = "Benvenuto/a nella tua casella e-mail"
} else {
    welcomePlaceholder.innerHTML = "Indirizzo non valido"
}
