function treciasMaziausias(masyvas) {
    if (masyvas.length < 3) {
        console.log("Masyve nėra pakankamai elementų.");
        return;
    }

    var unikalusMasyvas = Array.from(new Set(masyvas)); 
    var surikiuotasMasyvas = unikalusMasyvas.sort(function(a, b) {
        return a - b;
    });

    console.log("Trečias mažiausias skaičius: " + surikiuotasMasyvas[2]);
}

var pavyzdinisMasyvas = [5, 3, 1, 7, 2, 3, 8];

treciasMaziausias(pavyzdinisMasyvas);
