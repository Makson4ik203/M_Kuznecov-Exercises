function apverstiSkaiciu(skaicius) {
    var apverstas = parseFloat(skaicius.toString().split('').reverse().join(''));
    return apverstas;
  }

  var pradinisSkaicius = 12345;
  var apverstasSkaicius = apverstiSkaiciu(pradinisSkaicius);
  console.log("Pradinis skaičius:", pradinisSkaicius);
  console.log("Apverstas skaičius:", apverstasSkaicius);
  