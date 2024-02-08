function pirmosRaidesDidziosios(eilute) {
    var zodziai = eilute.split(' ');
    
    for (var i = 0; i < zodziai.length; i++) {
      zodziai[i] = zodziai[i].charAt(0).toUpperCase() + zodziai[i].slice(1);
    }
  
    return zodziai.join(' ');
  }
  
  var pradineEilute = "javascript yra galinga kalba";
  var konvertuotaEilute = pirmosRaidesDidziosios(pradineEilute);
  
  console.log("Pradinė eilutė:", pradineEilute);
  console.log("Konvertuota eilutė:", konvertuotaEilute);
  