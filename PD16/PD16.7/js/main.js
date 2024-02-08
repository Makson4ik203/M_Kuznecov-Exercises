function arPalindromas(eilute) {
    var beTarpaiIrMazosios = eilute.replace(/\s/g, '').toLowerCase();
    
    var apverstaEilute = beTarpaiIrMazosios.split('').reverse().join('');
    
    return beTarpaiIrMazosios === apverstaEilute;
  }
  
  var eilute1 = "Kodas";
  var eilute2 = "level";
  
  console.log(eilute1 + " yra palindromas: " + arPalindromas(eilute1));
  console.log(eilute2 + " yra palindromas: " + arPalindromas(eilute2));
  