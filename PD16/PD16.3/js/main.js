function trikampioPlotas(a, b, c) {
    
    var s = (a + b + c) / 2;
  
    var plotas = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    return plotas;
  }
  
  var a = 3;
  var b = 4;
  var c = 5;
  var plotas = trikampioPlotas(a, b, c);
  console.log("Trikampio plotas:", plotas);
  