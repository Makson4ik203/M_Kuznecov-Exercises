function keistiDidesnesIrMazasias(eilute) {
    var pakeistaEilute = "";

    for (var i = 0; i < eilute.length; i++) {
        var simbolis = eilute[i];
        
        if (simbolis === simbolis.toUpperCase()) {
            pakeistaEilute += simbolis.toLowerCase();
        } else {
            pakeistaEilute += simbolis.toUpperCase();
        }
    }

    return pakeistaEilute;
}

var ivestis = "Hello, World!";

var pakeistaIvestis = keistiDidesnesIrMazasias(ivestis);

console.log(pakeistaIvestis);
