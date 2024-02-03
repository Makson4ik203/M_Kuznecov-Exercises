function rastiSkirtuma(masyvas1, masyvas2) {
    var skirtumas = [];

    for (var i = 0; i < masyvas1.length; i++) {
        if (masyvas2.indexOf(masyvas1[i]) === -1) {
            skirtumas.push(masyvas1[i]);
        }
    }

    for (var j = 0; j < masyvas2.length; j++) {
        if (masyvas1.indexOf(masyvas2[j]) === -1) {
            skirtumas.push(masyvas2[j]);
        }
    }

    console.log("Skirtumas tarp masyvų: " + skirtumas);
}

var masyvasA = [1, 2, 3, 4, 5];
var masyvasB = [3, 4, 5, 6, 7];

rastiSkirtuma(masyvasA, masyvasB);

