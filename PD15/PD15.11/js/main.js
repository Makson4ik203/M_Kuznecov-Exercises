function sumaisytiMasyva(masyvas) {
    for (var i = masyvas.length - 1; i > 0; i--) {
        var indeksas = Math.floor(Math.random() * (i + 1));
        
        var laikinas = masyvas[i];
        masyvas[i] = masyvas[indeksas];
        masyvas[indeksas] = laikinas;
    }

    console.log("Sumaišytas masyvas: " + masyvas);
}

var pavyzdinisMasyvas = [1, 2, 3, 4, 5];

sumaisytiMasyva(pavyzdinisMasyvas);
