function sujungtiIrPasalintiPasikartojancius(masyvas1, masyvas2) {
    var sujungtasMasyvas = masyvas1.concat(masyvas2);
    var unikaliosReiksmes = [];

    for (var i = 0; i < sujungtasMasyvas.length; i++) {
        if (unikaliosReiksmes.indexOf(sujungtasMasyvas[i]) === -1) {
            unikaliosReiksmes.push(sujungtasMasyvas[i]);
        }
    }

    console.log("Sujungtas masyvas be pasikartojančių elementų: " + unikaliosReiksmes);
}

var masyvasA = [1, 2, 3];
var masyvasB = [2, 3, 4, 5];

sujungtiIrPasalintiPasikartojancius(masyvasA, masyvasB);

