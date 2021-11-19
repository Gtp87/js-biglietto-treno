// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

const eta = parseInt(prompt('Indica la tua età'));
const chilometri = parseInt(prompt('Indica quanti km vuoi percorrere'));
console.log('Età passeggero: ' + eta);
document.writeln('Età posseggero: ' + eta);
console.log('Km da percorrere: ' + chilometri);
document.writeln('Km da percorrere: ' + chilometri);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)

let prezzo = 0.21 * chilometri;
console.log('prezzo biglietto: ' + prezzo.toFixed(2));
document.writeln('prezzo biglietto: ' + prezzo.toFixed(2) + ' \u20ac');

// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
let sconto;

if (eta < 18) {
    console.log('sconto applicato 20%')
    document.writeln('Sconto applicato 20%');
    sconto = ((prezzo * 20) / 100);
    prezzo = prezzo - sconto;
} else if (eta > 65) {
    console.log('sconto applicato 40%')
    document.writeln('Sconto applicato 40%');
    sconto = ((prezzo * 40) / 100);
    prezzo = prezzo - sconto;
} else {
    console.log('Nessuno sconto applicato')
    document.writeln('Nessuno sconto applicato');
}


// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.

console.log('Totale da pagare: ' + prezzo.toFixed(2));
document.writeln('Totale da pagare: ' + prezzo.toFixed(2) + ' \u20ac');
