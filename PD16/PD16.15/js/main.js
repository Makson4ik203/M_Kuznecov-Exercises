function antrasMaziausiasDidziausias(masyvas) {
    if (masyvas.length < 2) {
      console.log("Masyve turi būti bent du skaičiai.");
      return;
    }
  
    masyvas.sort(function(a, b) {
      return a - b;
    });
  
    var antrasMaziausias = masyvas[1];
    var antrasDidziausias = masyvas[masyvas.length - 2];
  
    return { antrasMaziausias, antrasDidziausias };
  }
  
  var skaiciai = [5, 2, 8, 1, 9, 3];
  var rezultatai = antrasMaziausiasDidziausias(skaiciai);
  
  console.log("Skaiciai:", skaiciai);
  console.log("Antras maziausias:", rezultatai.antrasMaziausias);
  console.log("Antras didziausias:", rezultatai.antrasDidziausias);
  