// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

const eta = parseInt(prompt('Indica la tua età'));
const chilometri = parseInt(prompt('Indica quanti km vuoi percorrere'));

// controllo che i prompt non siano vuoti o abbiano dati errati (non siano numeri)

if (!(isNaN(eta)) && !(isNaN(chilometri)) && eta != '' && chilometri != '' && eta != 0 && chilometri != 0) {
    
    console.log('Età passeggero: ' + eta);
    document.writeln('Età passeggero: ' + eta + '<br>');
    console.log('Km da percorrere: ' + chilometri);
    document.writeln('Km da percorrere: ' + chilometri + '<br>');

    // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    // il prezzo del biglietto è definito in base ai km(0.21 € al km)

    let prezzo = 0.21 * chilometri;
    console.log('prezzo biglietto: ' + prezzo.toFixed(2));
    document.writeln('prezzo biglietto: ' + prezzo.toFixed(2) + ' \u20ac' + '<br>');

    // va applicato uno sconto del 20 % per i minorenni
    // va applicato uno sconto del 40 % per gli over 65.
    let sconto;

    if (eta < 18) {
        console.log('sconto applicato 20%')
        document.writeln('Sconto applicato 20%' + '<br>');
        sconto = ((prezzo * 20) / 100);
        prezzo = prezzo - sconto;
    } else if (eta > 65) {
        console.log('sconto applicato 40%')
        document.writeln('Sconto applicato 40%' + '<br>');
        sconto = ((prezzo * 40) / 100);
        prezzo = prezzo - sconto;
    } else {
        console.log('Nessuno sconto applicato')
        document.writeln('Nessuno sconto applicato' + '</br>');
    }


    // L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.

    console.log('Totale da pagare: ' + prezzo.toFixed(2));
    document.writeln('Totale da pagare: ' + prezzo.toFixed(2) + ' \u20ac' + '<br>');

} else if (isNaN(eta) || eta == ''|| eta == 0) {
    document.writeln('Attenzione! il campo età è vuoto o non è un numero accettato');
    console.log('Attenzione! il campo età è vuoto o non è un numero accettato');

} else if (isNaN(chilometri) || chilometri == '' || chilometri == 0) {
    document.writeln('Attenzione! il campo chilometri è vuoto o non è un numero accettato');
    console.log('Attenzione! il campo chilometri è vuoto o non è un numero accettato');
}
