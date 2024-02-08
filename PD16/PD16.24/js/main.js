function skaiciuotiBMI(svoris, ugis) {
  if (ugis <= 0 || svoris <= 0) {
    return 'Neteisingi duomenys. Įveskite teigiamus skaičius.';
  }

  var ugisMetrus = ugis / 100;
  var bmi = svoris / (ugisMetrus * ugisMetrus);
  return bmi.toFixed(2); 
}

var svoris = parseFloat(prompt('Įveskite savo svorį (kg):'));
var ugis = parseFloat(prompt('Įveskite savo ūgį (cm):'));

var rezultatas = skaiciuotiBMI(svoris, ugis);
console.log('Jūsų kūno masės indeksas (BMI):', rezultatas);
