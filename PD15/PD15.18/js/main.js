function rastiUnikaliusElementus(masyvas) {
    var unikaliosReiksmes = [];

    for (var i = 0; i < masyvas.length; i++) {
        if (unikaliosReiksmes.indexOf(masyvas[i]) === -1) {
            unikaliosReiksmes.push(masyvas[i]);
        }
    }

    console.log("Unikalios reikšmės masyve: " + unikaliosReiksmes);
}

var pavyzdinisMasyvas = [1, 2, 3, 2, 4, 5, 1, 6];

rastiUnikaliusElementus(pavyzdinisMasyvas);
