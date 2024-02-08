function pirmasNepasikartojantisSimbolis(eilute) {
    var simboliuSkaicius = {};
  
    for (var i = 0; i < eilute.length; i++) {
      var simbolis = eilute[i];
      simboliuSkaicius[simbolis] = (simboliuSkaicius[simbolis] || 0) + 1;
    }
  
    for (var j = 0; j < eilute.length; j++) {
      var tikrinamasSimbolis = eilute[j];
      if (simboliuSkaicius[tikrinamasSimbolis] === 1) {
        return tikrinamasSimbolis;
      }
    }
  
    return null; 
  
  var eilute = "programavimas";
  var nepasikartojantisSimbolis = pirmasNepasikartojantisSimbolis(eilute);
  
  if (nepasikartojantisSimbolis !== null) {
    console.log("Pirmas nepasikartojantis simbolis:", nepasikartojantisSimbolis);
  } else {
    console.log("Eilutėje nėra nepasikartojančių simbolių.");
  }
  