function masyvasIString(masyvas) {
    var tekstas = masyvas.join('');
    return tekstas;
}

var simboliai = ['H', 'e', 'l', 'l', 'o'];
var eilute = masyvasIString(simboliai);

console.log("Masyvas:", simboliai);
console.log("Simbolių eilutė:", eilute);
