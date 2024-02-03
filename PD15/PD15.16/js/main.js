function atsitiktiniaiElementai(masyvas, kiekis) {
    var atsitiktiniai = [];

    for (var i = 0; i < kiekis; i++) {
        var atsitiktinisIndeksas = Math.floor(Math.random() * masyvas.length);
        atsitiktiniai.push(masyvas[atsitiktinisIndeksas]);
    }

    console.log("Atsitiktiniai elementai: " + atsitiktiniai);
}

var pavyzdinisMasyvas = [1, 2, 3, 4, 5];

var norimasKiekis = 3;

atsitiktiniaiElementai(pavyzdinisMasyvas, norimasKiekis);

