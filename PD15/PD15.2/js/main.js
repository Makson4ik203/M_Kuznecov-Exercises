function kopijuotiMasyva(masyvas) {
    var kopija = masyvas.slice();
    return kopija;
}

var pradinisMasyvas = [1, 2, 3, 4, 5];
var kopijaMasyvo = kopijuotiMasyva(pradinisMasyvas);

console.log("Pradinis masyvas:", pradinisMasyvas);
console.log("Kopija masyvo:", kopijaMasyvo);
