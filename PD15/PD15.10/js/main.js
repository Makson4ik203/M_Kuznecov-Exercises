function pasalintiPasikartojancius(masyvas) {
    var unikaliosReiksmes = [];

    for (var i = 0; i < masyvas.length; i++) {
        if (unikaliosReiksmes.indexOf(masyvas[i]) === -1) {
            unikaliosReiksmes.push(masyvas[i]);
        }
    }

    return unikaliosReiksmes;
}

var pavyzdinisMasyvas = [1, 2, 2, 3, 4, 4, 5];

var rezultatas = pasalintiPasikartojancius(pavyzdinisMasyvas);

console.log("Masyvas be pasikartojančių elementų: " + rezultatas);
