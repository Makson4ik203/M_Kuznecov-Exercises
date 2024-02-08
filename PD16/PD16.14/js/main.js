function sukurtiMatrica(n) {
    var matrica = [];
  
    for (var i = 0; i < n; i++) {
      var eilute = [];
      for (var j = 0; j < n; j++) {
        eilute.push(0);
      }
      matrica.push(eilute);
    }
  
    return matrica;
  }
  
  var n = 3;
  var manoMatrica = sukurtiMatrica(n);
  
  console.log("Sukurta matrica:", manoMatrica);
  