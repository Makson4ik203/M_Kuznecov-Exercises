function paskutinisElementas(masyvas) {
    if (masyvas.length > 0) {
        var paskutinis = masyvas[masyvas.length - 1];
        console.log("Paskutinis masyvo elementas:", paskutinis);
    } else {
        console.log("Masyvas yra tuščias.");
    }
}

var masyvas = [1, 2, 3, 4, 5];
paskutinisElementas(masyvas);
