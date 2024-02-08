function isdestytiAbeceliskai(eilute) {
    return eilute.split('').sort().join('');
  }
  
  var pradineEilute = "javascript";
  var isdestytaEilute = isdestytiAbeceliskai(pradineEilute);
  
  console.log("Pradinė eilutė:", pradineEilute);
  console.log("Isdėstyta abėcėlės tvarka:", isdestytaEilute);
  