function skaiciuotiSumaIrSandauga(masyvas) {
    var suma = 0;
    var sandauga = 1;

    for (var i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
        sandauga *= masyvas[i];
    }

    console.log("Masyvo suma: " + suma);
    console.log("Masyvo sandauga: " + sandauga);
}

var masyvas = [2, 3, 4, 5];

skaiciuotiSumaIrSandauga(masyvas);
