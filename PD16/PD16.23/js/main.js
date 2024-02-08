function sudeti(skaicius1, skaicius2) {
  return skaicius1 + skaicius2;
}

function atimti(skaicius1, skaicius2) {
  return skaicius1 - skaicius2;
}

function dauginti(skaicius1, skaicius2) {
  return skaicius1 * skaicius2;
}

function dalyba(skaicius1, skaicius2) {
  if (skaicius2 !== 0) {
    return skaicius1 / skaicius2;
  } else {
    return 'Dalyba iš nulio negalima';
  }
}


var pirmasSkaicius = 10;
var antrasSkaicius = 5;

var suma = sudeti(pirmasSkaicius, antrasSkaicius);
var skirtumas = atimti(pirmasSkaicius, antrasSkaicius);
var sandauga = dauginti(pirmasSkaicius, antrasSkaicius);
var dalmuo = dalyba(pirmasSkaicius, antrasSkaicius);

console.log('Sudėtis:', suma);
console.log('Atimtis:', skirtumas);
console.log('Daugyba:', sandauga);
console.log('Dalyba:', dalmuo);
