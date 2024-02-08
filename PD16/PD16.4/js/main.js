function faktorialas(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * faktorialas(n - 1);
    }
  }
  
  var skaicius = 5;
  var fakt = faktorialas(skaicius);
  console.log(skaicius + "! = " + fakt);
  