function sukurtiMasyvaTarpSkaiciu(pradziosSkaicius, pabaigosSkaicius) {
    var masyvas = [];

    for (var i = pradziosSkaicius; i <= pabaigosSkaicius; i++) {
        masyvas.push(i);
    }

    console.log("Sukurtas masyvas: " + masyvas);
}

var pradziosSkaicius = 1;
var pabaigosSkaicius = 5;

sukurtiMasyvaTarpSkaiciu(pradziosSkaicius, pabaigosSkaicius);

