function celsijusIFarenheitais(celsijus) {
    var farenheitai = (celsijus * 9/5) + 32;
    return farenheitai;
  }
  
  var celsijus = 25;
  var farenheitai = celsijusIFarenheitais(celsijus);
  console.log(celsijus + " Celsijaus laipsniai yra " + farenheitai + " Farenheito laipsniai.");
  