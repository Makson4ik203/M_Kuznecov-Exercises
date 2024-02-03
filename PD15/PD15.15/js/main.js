function pasalintiElementa(masyvas, elementas) {
    var indeksas = masyvas.indexOf(elementas);

    if (indeksas !== -1) {
        masyvas.splice(indeksas, 1);
        console.log("Elementas " + elementas + " pašalintas iš masyvo.");
    } else {
        console.log("Elementas " + elementas + " nerastas masyve.");
    }
}

var pavyzdinisMasyvas = [1, 2, 3, 4, 5];

var trinamasElementas = 3;

pasalintiElementa(pavyzdinisMasyvas, trinamasElementas);

console.log("Masyvas po pašalinimo: " + pavyzdinisMasyvas);

