function arPirminis(skaicius) {
    if (skaicius < 2) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(skaicius); i++) {
      if (skaicius % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  var skaicius = 13;
  if (arPirminis(skaicius)) {
    console.log(skaicius + " yra pirminis skaičius.");
  } else {
    console.log(skaicius + " nėra pirminis skaičius.");
  }
  