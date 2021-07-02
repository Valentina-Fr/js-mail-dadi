/*  
1- Generare un numero random da 1 a 6 per il giocatore 
2- Generare un numero random da 1 a 6 per il computer
3- Confrontare numeri
5- Stampare il risultato
*/

//Dichiarazioni ed assegnazioni 
var playerNumber = Math.floor(Math.random() * 6) + 1;
var cpuNumber = Math.floor(Math.random() * 6) + 1;
var result = document.getElementById("winner")

document.getElementById("player").innerHTML = "Punti del giocatore: " + playerNumber
document.getElementById("computer").innerHTML = "Punti del computer: " + cpuNumber


