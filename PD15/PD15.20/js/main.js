function rastiNaNIndeksus(masyvas) {
    var nanIndeksai = [];

    for (var i = 0; i < masyvas.length; i++) {
        if (isNaN(masyvas[i])) {
            nanIndeksai.push(i);
        }
    }

    if (nanIndeksai.length > 0) {
        console.log("Indeksai, kuriuose yra NaN: " + nanIndeksai);
    } else {
        console.log("Masyve nėra NaN elementų.");
    }
}

var pavyzdinisMasyvas = [1, 2, NaN, 4, NaN, 6];

rastiNaNIndeksus(pavyzdinisMasyvas);
