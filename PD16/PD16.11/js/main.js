function ilgiausiasZodis(eilute) {
    var zodziai = eilute.split(' ');
    var ilgiausias = '';
  
    for (var i = 0; i < zodziai.length; i++) {
      if (zodziai[i].length > ilgiausias.length) {
        ilgiausias = zodziai[i];
      }
    }
  
    return ilgiausias;
  }
  
  var pradineEilute = "JavaScript yra puiki kalba programavimui";
  var ilgiausias = ilgiausiasZodis(pradineEilute);
  
  console.log("Pradinė eilutė:", pradineEilute);
  console.log("Ilgiausias žodis:", ilgiausias);
  