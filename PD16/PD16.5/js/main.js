function skaiciuotiRaides(eilute) {
    var beTarpai = eilute.replace(/\s/g, ''); 
    var raidziuSkaicius = beTarpai.length;
    return raidziuSkaicius;
  }
  
  var eilute = "JavaScript yra galinga kalba!";
  var skaicius = skaiciuotiRaides(eilute);
  console.log("Raidžių skaičius:", skaicius);
  