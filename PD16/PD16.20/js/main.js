function ilgiausiasSalis(saliuSarasas) {
    if (saliuSarasas.length === 0) {
      console.log("Sąrašas yra tuščias.");
      return null;
    }
  
    var ilgiausia = saliuSarasas[0];
  
    for (var i = 1; i < saliuSarasas.length; i++) {
      if (saliuSarasas[i].length > ilgiausia.length) {
        ilgiausia = saliuSarasas[i];
      }
    }
  
    return ilgiausia;
  }
  
  var saliuSarasas = ["Lietuva", "Latvija", "Estija", "Jungtinė Karalystė", "Vokietija"];
  var ilgiausiaSaliPavadinimas = ilgiausiasSalis(saliuSarasas);
  
  if (ilgiausiaSaliPavadinimas !== null) {
    console.log("Ilgiausias šalies pavadinimas:", ilgiausiaSaliPavadinimas);
  }
  