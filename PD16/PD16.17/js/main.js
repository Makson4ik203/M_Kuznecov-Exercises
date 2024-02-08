function didesniUzNurodyta(skaicius, masyvas) {
    return masyvas.filter(function(elementas) {
      return elementas > skaicius;
    });
  }
  
  var skaiciusNurodytas = 5;
  var manoMasyvas = [2, 8, 3, 10, 5, 7];
  
  var rezultatas = didesniUzNurodyta(skaiciusNurodytas, manoMasyvas);
  
  console.log("Pradinis masyvas:", manoMasyvas);
  console.log("Elementai didesni už", skaiciusNurodytas + ":", rezultatas);
  