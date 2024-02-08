function generuotiRaidiniusDerinius(zodis) {
    var deriniai = [];
  
    function generuoti(liko, derinys) {
      if (liko.length === 0) {
        deriniai.push(derinys);
        return;
      }
  
      for (var i = 0; i < liko.length; i++) {
        var naujasLiko = liko.slice(0, i) + liko.slice(i + 1);
        generuoti(naujasLiko, derinys + liko[i]);
      }
    }
  
    generuoti(zodis, '');
  
    return deriniai;
  }
  
  var zodis = 'cat';
  var deriniai = generuotiRaidiniusDerinius(zodis);
  
  console.log("Įvestas žodis:", zodis);
  console.log("Raidiniai deriniai:", deriniai);
  