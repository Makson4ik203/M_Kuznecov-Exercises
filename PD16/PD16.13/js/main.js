function gautiTipoInformacija(argumentas) {
    return typeof argumentas;
  }
  
  var sk = 42;
  var tekstas = "Labas, pasauli!";
  var masyvas = [1, 2, 3];
  var objektas = {vardas: "John", amzius: 30};
  
  console.log("Tipas:", gautiTipoInformacija(sk)); 
  console.log("Tipas:", gautiTipoInformacija(tekstas)); 
  console.log("Tipas:", gautiTipoInformacija(masyvas)); 
  console.log("Tipas:", gautiTipoInformacija(objektas));
  