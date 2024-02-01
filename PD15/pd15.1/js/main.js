function arTaiMasyvas(kintamasis) {
    return Array.isArray(kintamasis);
}

// Pavyzdys naudojant funkciją:
var pirmasKintamasis = [1, 2, 3];
var antrasKintamasis = "Ne masyvas";

console.log(arTaiMasyvas(pirmasKintamasis)); // true
console.log(arTaiMasyvas(antrasKintamasis)); // false
