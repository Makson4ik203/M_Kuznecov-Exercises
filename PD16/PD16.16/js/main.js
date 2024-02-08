function arTobulas(sk) {
    if (sk < 1) {
      return false; // Neigiami skaičiai ir nulis nėra tobulieji
    }
  
    var sumaDalikliu = 0;
  
    for (var daliklis = 1; daliklis <= sk / 2; daliklis++) {
      if (sk % daliklis === 0) {
        sumaDalikliu += daliklis;
      }
    }
  
    return sumaDalikliu === sk;
  }
  
  var skaicius = 28;
  
  if (arTobulas(skaicius)) {
    console.log(skaicius + " yra tobulasis skaičius.");
  } else {
    console.log(skaicius + " nėra tobulasis skaičius.");
  }
  