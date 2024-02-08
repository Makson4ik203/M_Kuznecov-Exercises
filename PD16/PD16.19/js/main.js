function bubbleSort(masyvas) {
    var ilgis = masyvas.length;
    
    for (var i = 0; i < ilgis - 1; i++) {
      for (var j = 0; j < ilgis - i - 1; j++) {
        if (masyvas[j] > masyvas[j + 1]) {
          var temp = masyvas[j];
          masyvas[j] = masyvas[j + 1];
          masyvas[j + 1] = temp;
        }
      }
    }
  
    return masyvas;
  }
  
  var pradinisMasyvas = [64, 34, 25, 12, 22, 11, 90];
  var surusiuotasMasyvas = bubbleSort(pradinisMasyvas);
  
  console.log("Pradinis masyvas:", pradinisMasyvas);
  console.log("Surūšiuotas masyvas:", surusiuotasMasyvas);
  