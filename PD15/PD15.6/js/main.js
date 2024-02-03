function skaiciuotiPasikartojimus(masyvas, ieskomasElementas) {
    var pasikartojimuSkaicius = 0;

    for (var i = 0; i < masyvas.length; i++) {
        if (masyvas[i] === ieskomasElementas) {
            pasikartojimuSkaicius++;
        }
    }

    return pasikartojimuSkaicius;
}

var manoMasyvas = [1, 2, 3, 4, 2, 5, 2, 6, 2];

var ieskomasElementas = 2;

var pasikartojimuSkaicius = skaiciuotiPasikartojimus(manoMasyvas, ieskomasElementas);

console.log("Elementas " + ieskomasElementas + " pasikartoja " + pasikartojimuSkaicius + " kartus.");
